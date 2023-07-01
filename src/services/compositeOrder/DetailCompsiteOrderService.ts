import prismaClient from "../../prisma";

interface DetailRequest {
  customer_id: string;
}

class DetailCompositeOrderService {
  execute = async ({ customer_id }: DetailRequest) => {
    const orders = await prismaClient.itemByCustomer.findMany({
      where: {
        customer_id: customer_id,
      },
      include: {
        customer: true,
        product: true,
      },
    });

    return orders;
  };
}

export { DetailCompositeOrderService };
