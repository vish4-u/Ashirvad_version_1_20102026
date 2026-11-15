-- Run ONCE: Supabase dashboard -> SQL Editor -> paste -> Run
create table if not exists form_submissions(
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  data jsonb not null check (length(data::text) < 20000),
  status text default 'new');
alter table form_submissions enable row level security;
create policy "anyone can submit" on form_submissions for insert to anon, authenticated with check (true);
create policy "admin reads" on form_submissions for select to authenticated using (true);
create policy "admin updates" on form_submissions for update to authenticated using (true) with check (true);
create policy "admin deletes" on form_submissions for delete to authenticated using (true);

-- private bucket for files visitors attach (10 MB each); only the logged-in admin can read them
insert into storage.buckets(id,name,public,file_size_limit) values('submissions','submissions',false,10485760) on conflict (id) do nothing;
create policy "visitors upload" on storage.objects for insert to anon, authenticated with check (bucket_id='submissions');
create policy "admin reads uploads" on storage.objects for select to authenticated using (bucket_id='submissions');
create policy "admin deletes uploads" on storage.objects for delete to authenticated using (bucket_id='submissions');
