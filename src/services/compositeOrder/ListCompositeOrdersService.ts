import prismaClient from "../../prisma";

class ListCompositeOrdersService {
  execute = async () => {
    const orders = await prismaClient.compositeOrder.findMany({
      where: {
        draft: false,
        status: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return orders;
  };
}

export { ListCompositeOrdersService };
