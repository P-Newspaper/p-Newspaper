BEGIN;

CREATE TABLE news_articles (
    id SERIAL PRIMARY KEY,
    date DATE,
    title TEXT,
    summary TEXT,
    url TEXT
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    google_id SERIAL,
    news_interests TEXT[]
);

-- FIXME:   CREATE INDEX news_fts ON news_articles USING gin

COMMIT;

