import prismaClient from "../../prisma";

class ListOrdersService {
  execute = async () => {
    const orders = await prismaClient.order.findMany({
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

export { ListOrdersService };
