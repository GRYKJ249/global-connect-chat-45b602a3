# Roadmap

- [x] Import cosmic-canvas-ai (Opera AI) repo into the project
- [x] Enable Lovable Cloud (real backend) + phone code auth over WhatsApp
- [x] Replace browser-only supabase shim with real Supabase client
- [x] Re-import the project from GitHub into the current workspace
- [x] Apply full database schema (profiles, roles, chats, images, files, security, phone_otps)
- [x] Create storage buckets (generations, avatars) with per-user policies
- [x] Store WhatsApp sender id + token as backend secrets
- [ ] BLOCKED: WhatsApp token rejected by Meta ("Invalid OAuth access token").
      Need a valid WhatsApp Cloud API access token (starts with EAA...) for phone id 710722741840.
- [ ] Confirm the "verification_code" WhatsApp template is approved in Meta
- [ ] Landing: Start -> centered prompt box (no other UI under it); sending goes to full chat
- [ ] Sidebar: profile circle at top-left, "Log in" under it, nav buttons (Studio etc.) below profile
- [ ] Per-account storage of chats, messages, images
