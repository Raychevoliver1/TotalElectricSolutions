import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://www.totalelectricsolutions.co.uk";

const ROUTES = [
  "",
  "about",
  "services",
  "projects",
  "training-apprenticeships",
  "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}/${route}${route ? "/" : ""}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
