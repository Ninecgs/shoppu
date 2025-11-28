export interface CreateCategoryDTO {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdateCategoryDTO {
  name?: string;
  description?: string;
}
export interface CategoryResponseDTO {
  id: number;
  name: string;
  slug: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}