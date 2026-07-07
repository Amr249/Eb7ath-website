# Blog CMS Setup

This CMS scope is intentionally limited to blog/article management.

## 1) Environment variables

Create env vars in your local and production environments:

- `DATABASE_URL`: Neon connection string.
- `CMS_ADMIN_USERNAME`: admin login username.
- `CMS_ADMIN_PASSWORD`: admin login password.
- `CMS_AUTH_SECRET`: random long secret for signed session cookies.
- `IMAGEKIT_PUBLIC_KEY`: ImageKit public key (for future client uploads).
- `IMAGEKIT_PRIVATE_KEY`: ImageKit private key (required for CMS image uploads).
- `IMAGEKIT_URL_ENDPOINT`: ImageKit URL endpoint, e.g. `https://ik.imagekit.io/your_id`.

## 2) Run migrations

```bash
npm run cms:migrate
```

## 3) (Optional) Seed one article

```bash
npm run cms:seed
```

## 4) Use CMS

- Open `/admin/login`.
- Enter `CMS_ADMIN_USERNAME` and `CMS_ADMIN_PASSWORD`.
- Go to `/admin` and create/update/publish/delete articles.

## 5) Public blog

- `GET /api/public/blog?locale=ar`
- `GET /api/public/blog?locale=en`

When published CMS articles exist, the `/blog` page reads from CMS.
If CMS has no published articles, it falls back to static i18n posts.
