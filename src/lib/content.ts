import fs from "fs";
import path from "path";

function readJson<T>(file: string): T {
  const filePath = path.join(process.cwd(), "content", file);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export type Office = {
  name: string;
  town: string;
  address: string[];
};

export type Stat = {
  value: string;
  label: string;
};

export type WhyChooseUsItem = {
  title: string;
  body: string;
};

export type SiteContent = {
  companyName: string;
  legalName: string;
  founded: number;
  tagline: string;
  heroHeading: string;
  heroSubheading: string;
  phone: string;
  phoneHref: string;
  email: string;
  linkedin: string;
  offices: Office[];
  stats: Stat[];
  whyChooseUs: WhyChooseUsItem[];
  recognition: string;
  footerNote: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  image: string;
};

export type TeamMember = {
  name: string;
  role: string;
};

export type TeamContent = {
  leadership: TeamMember[];
  siteManagers: TeamMember[];
  officeTeamNote: string;
};

export type AboutContent = {
  heading: string;
  intro: string;
  approach: string;
  values: string;
  recognitionHeading: string;
  recognitionBody: string;
};

export type TrainingContent = {
  heading: string;
  intro: string;
  body: string;
  cta: string;
};

export function getSite(): SiteContent {
  return readJson<SiteContent>("site.json");
}

export function getServices(): Service[] {
  return readJson<{ services: Service[] }>("services.json").services;
}

export function getProjects(): Project[] {
  return readJson<{ projects: Project[] }>("projects.json").projects;
}

export function getTeam(): TeamContent {
  return readJson<TeamContent>("team.json");
}

export function getAbout(): AboutContent {
  return readJson<AboutContent>("about.json");
}

export function getTraining(): TrainingContent {
  return readJson<TrainingContent>("training.json");
}
