export type InventoryTool = {
  name: string;
  categories: string[];
  cost: string;
  protected_b_data: boolean;
  url: string;
  self_hosted_version: boolean;
  teams: string[];
  projects: string[];
  image?: string;
};
