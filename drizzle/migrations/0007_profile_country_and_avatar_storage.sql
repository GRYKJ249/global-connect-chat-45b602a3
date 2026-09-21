ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS country_code TEXT;

DROP POLICY IF EXISTS "users read own avatars" ON storage.objects;
CREATE POLICY "users read own avatars" ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

DROP POLICY IF EXISTS "users upload own avatars" ON storage.objects;
CREATE POLICY "users upload own avatars" ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

DROP POLICY IF EXISTS "users update own avatars" ON storage.objects;
CREATE POLICY "users update own avatars" ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

DROP POLICY IF EXISTS "users delete own avatars" ON storage.objects;
CREATE POLICY "users delete own avatars" ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);