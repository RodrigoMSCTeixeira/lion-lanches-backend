import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class SendCompositeOrderService {
  execute = async ({ order_id }: OrderRequest) => {
    const order = await prismaClient.compositeOrder.update({
      where: {
        id: order_id,
      },
      data: {
        draft: false,
      },
    });

    return order;
  };
}

export { SendCompositeOrderService };
