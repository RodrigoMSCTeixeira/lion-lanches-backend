import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class RemoveOrderService {
  execute = async ({ order_id }: OrderRequest) => {
    const order = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });

    return order;
  };
}

export { RemoveOrderService };
