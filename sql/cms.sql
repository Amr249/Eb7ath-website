CREATE TABLE IF NOT EXISTS admin_sessions (
  id TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  cover_image_url TEXT,
  read_minutes INTEGER NOT NULL DEFAULT 5,
  status TEXT NOT NULL DEFAULT 'draft',
  seo_title TEXT,
  seo_description TEXT,
  og_image_url TEXT,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS article_localizations (
  article_id TEXT NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  locale TEXT NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  PRIMARY KEY (article_id, locale)
);

CREATE TABLE IF NOT EXISTS article_revisions (
  id TEXT PRIMARY KEY,
  article_id TEXT NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  locale TEXT NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS article_slug_history (
  id TEXT PRIMARY KEY,
  article_id TEXT NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
  old_slug TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS audit_logs (
  id TEXT PRIMARY KEY,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  payload JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_scheduled
  ON articles(status, published_at)
  WHERE status = 'scheduled';
CREATE INDEX IF NOT EXISTS idx_article_localizations_locale ON article_localizations(locale);

-- ============================================================
-- Experts (professors) + research publications
-- ============================================================

CREATE TABLE IF NOT EXISTS experts (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  image_url TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  sort_order INTEGER NOT NULL DEFAULT 0,
  featured_on_landing BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS expert_localizations (
  expert_id TEXT NOT NULL REFERENCES experts(id) ON DELETE CASCADE,
  locale TEXT NOT NULL,
  name TEXT NOT NULL,
  specialty TEXT NOT NULL,
  affiliation TEXT NOT NULL,
  PRIMARY KEY (expert_id, locale)
);

CREATE TABLE IF NOT EXISTS expert_slug_history (
  id TEXT PRIMARY KEY,
  expert_id TEXT NOT NULL REFERENCES experts(id) ON DELETE CASCADE,
  old_slug TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS research_publications (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  expert_id TEXT NOT NULL REFERENCES experts(id) ON DELETE RESTRICT,
  title TEXT NOT NULL,
  journal TEXT NOT NULL,
  doi TEXT,
  volume INTEGER,
  article_number INTEGER,
  year INTEGER,
  published_at DATE,
  external_url TEXT,
  telegram_url TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS research_team_members (
  id TEXT PRIMARY KEY,
  research_id TEXT NOT NULL REFERENCES research_publications(id) ON DELETE CASCADE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  role TEXT NOT NULL DEFAULT 'researcher',
  name_en TEXT NOT NULL,
  name_ar TEXT NOT NULL,
  affiliation_en TEXT NOT NULL,
  affiliation_ar TEXT NOT NULL,
  email TEXT,
  is_corresponding BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS research_slug_history (
  id TEXT PRIMARY KEY,
  research_id TEXT NOT NULL REFERENCES research_publications(id) ON DELETE CASCADE,
  old_slug TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_experts_status ON experts(status);
CREATE INDEX IF NOT EXISTS idx_experts_featured ON experts(featured_on_landing, sort_order);
CREATE INDEX IF NOT EXISTS idx_expert_localizations_locale ON expert_localizations(locale);
CREATE INDEX IF NOT EXISTS idx_research_publications_expert_id ON research_publications(expert_id);
CREATE INDEX IF NOT EXISTS idx_research_publications_status ON research_publications(status);
CREATE INDEX IF NOT EXISTS idx_research_publications_published_at ON research_publications(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_research_team_members_research_id ON research_team_members(research_id, sort_order);

-- Institution experts (Eb7ath researchers / corresponding authors)
CREATE TABLE IF NOT EXISTS institution_experts (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  researchgate_url TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS institution_expert_localizations (
  institution_expert_id TEXT NOT NULL REFERENCES institution_experts(id) ON DELETE CASCADE,
  locale TEXT NOT NULL,
  name TEXT NOT NULL,
  affiliation TEXT NOT NULL,
  PRIMARY KEY (institution_expert_id, locale)
);

CREATE INDEX IF NOT EXISTS idx_institution_experts_status ON institution_experts(status);
CREATE INDEX IF NOT EXISTS idx_institution_expert_localizations_locale ON institution_expert_localizations(locale);

ALTER TABLE research_team_members
  ADD COLUMN IF NOT EXISTS institution_expert_id TEXT REFERENCES institution_experts(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_research_team_members_institution_expert_id
  ON research_team_members(institution_expert_id);
