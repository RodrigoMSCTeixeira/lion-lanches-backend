import prismaClient from "../../prisma";

class ListCategoryService {
  execute = async () => {
    const category = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  };
}

export { ListCategoryService };
