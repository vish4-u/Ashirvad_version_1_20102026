-- Run ONCE if you already ran supabase-setup.sql before (lets the media table accept documents)
alter table media drop constraint if exists media_kind_check;
alter table media add constraint media_kind_check check (kind in ('image','video','document'));
