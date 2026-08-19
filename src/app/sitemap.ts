import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fitstack.ai";
  const routes = ["", "/why-fitstack", "/platform", "/architecture", "/software-factory", "/how-we-work", "/insights", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date("2026-08-19"), changeFrequency: route === "/insights" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...insights.map((insight) => ({ url: `${baseUrl}/insights/${insight.slug}`, lastModified: new Date(insight.published), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
