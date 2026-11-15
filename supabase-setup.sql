-- Run once: Supabase dashboard -> SQL Editor -> paste -> Run
create table if not exists site_content(id int primary key, data jsonb not null);
create table if not exists media(
  id uuid primary key default gen_random_uuid(),
  kind text check (kind in ('image','video')),
  title text, descr text, url text not null, thumb text,
  created_at timestamptz default now());
alter table site_content enable row level security;
alter table media enable row level security;
create policy "public read content" on site_content for select using (true);
create policy "admin write content" on site_content for all to authenticated using (true) with check (true);
create policy "public read media" on media for select using (true);
create policy "admin write media" on media for all to authenticated using (true) with check (true);
insert into storage.buckets(id,name,public) values('media','media',true) on conflict do nothing;
create policy "public read files" on storage.objects for select using (bucket_id='media');
create policy "admin upload files" on storage.objects for insert to authenticated with check (bucket_id='media');
create policy "admin update files" on storage.objects for update to authenticated using (bucket_id='media');
create policy "admin delete files" on storage.objects for delete to authenticated using (bucket_id='media');
