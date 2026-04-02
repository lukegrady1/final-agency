export interface Service {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  painPoints: string[];
  outcomes: string[];
  includes: string[];
  variations: string[];
}

export interface Industry {
  slug: string;
  name: string;
  singular: string;
  shortName: string;
  keywords: string[];
  painPoints: string[];
  trustSignals: string[];
}

export interface City {
  slug: string;
  name: string;
  state: string;
  region: string;
  population: number;
  county: string;
  uniqueSentence: string;
}
