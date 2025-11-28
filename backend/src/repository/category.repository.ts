import { id } from "zod/v4/locales";
import prisma from "../config/database";
import { CreateCategoryDTO, UpdateCategoryDTO } from "../types/category.types";
import { string } from "zod";

export class CategoryRepository {
  async allCategories() {
    return prisma.category.findMany({
      orderBy: { name: "asc" },
    });
  }

  async categoryBySlug(slug: string) {
    return prisma.category.findUnique({
      where: { slug },
    });
  }
async doesCategoryExists(name: string): Promise<any>{
    const category = await prisma.category.findUnique({
        where: { name }
    });
    return category !== null;
}
  async createCategory(data: CreateCategoryDTO) {
   
  }
  async deleteCategory() {

  }
  async updateCategory() {

  }

}
