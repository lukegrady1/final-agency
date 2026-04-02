export type { Service, Industry, City } from "./types";
export { services } from "./services";
export { industries } from "./industries";
export { cities } from "./cities";

import { services } from "./services";
import { industries } from "./industries";
import { cities } from "./cities";

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function getNearbyCities(citySlug: string, limit = 5) {
  const city = getCityBySlug(citySlug);
  if (!city) return [];
  return cities
    .filter((c) => c.slug !== citySlug && c.region === city.region)
    .slice(0, limit);
}

export function getAllServiceSlugs() {
  return services.map((s) => s.slug);
}

export function getAllIndustrySlugs() {
  return industries.map((i) => i.slug);
}

export function getAllCitySlugs() {
  return cities.map((c) => c.slug);
}
