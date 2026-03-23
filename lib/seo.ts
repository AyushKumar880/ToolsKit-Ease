import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "./constants";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
}: BuildMetadataArgs): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}
