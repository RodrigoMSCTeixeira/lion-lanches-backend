import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class RemoveCompositeOrderService {
  execute = async ({ order_id }: OrderRequest) => {
    const order = await prismaClient.compositeOrder.delete({
      where: {
        id: order_id,
      },
    });

    return order;
  };
}

export { RemoveCompositeOrderService };
