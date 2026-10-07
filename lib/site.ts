const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const siteUrl = new URL(configuredUrl).origin;

export const siteName = "The Sunday Club";

export const siteDescription =
  "A creative social media and content marketing agency bringing strategy, creative direction and production together to build brands people want to be part of.";

export const isIndexable =
  process.env.SITE_INDEXABLE === "true" &&
  process.env.NODE_ENV === "production" &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");
