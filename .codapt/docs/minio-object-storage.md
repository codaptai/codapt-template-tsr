You can save objects to Minio, which is running in Docker Compose, and available at `minioBaseUrl` (defined in `src/server/minio.ts`).

Make sure to set up bucket creation logic in `src/server/scripts/setup.ts` for any buckets that you plan to use.
