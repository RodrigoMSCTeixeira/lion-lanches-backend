import prismaClient from "../../prisma";

interface OrderRequest {
  table: number;
}

class CreateCompositeOrderService {
  execute = async ({ table }: OrderRequest) => {
    const order = await prismaClient.compositeOrder.create({
      data: {
        table: table,
      },
    });

    return order;
  };
}

export { CreateCompositeOrderService };
