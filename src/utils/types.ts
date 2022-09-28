export type InventoryTool = {
  name: string;
  categories: string[];
  cost: string;
  protected_b_data: boolean;
  url: string;
  self_hosted_version: boolean;
  teams: string[];
  projects: string[];
  image: string;
};

export type OtherTool = {
  name: string;
  url: string;
};

interface Link {
  label: string;
  url: string;
}

export type ProjectPage = {
  id: string;
  name: string;
  description: string;
  importantLink?: Link;
  background: string[];
  problem: string;
  goal: string;
  solution: string;
  images: string[];
  cardImage: string;
  tools: string[];
  successMetrics?: string[];
};

export type TagType = {
  name: string;
  color: string;
};

export type Product = {
  name: string;
  cardImage: string;
  categories: string[];
  slogan: string;
  description: string[];
  url: string;
  images: string[];
  color?: string;
};
