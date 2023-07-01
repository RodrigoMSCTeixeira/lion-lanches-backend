import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class FinishCompositeOrderService {
  execute = async ({ order_id }: OrderRequest) => {
    const order = await prismaClient.compositeOrder.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });

    return order;
  };
}

export { FinishCompositeOrderService };
