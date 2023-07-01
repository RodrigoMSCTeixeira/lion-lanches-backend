import prismaClient from "../../prisma";

interface CustomerRequest {
  order_id: string;
  name: string;
}

class AddCustomerService {
  execute = async ({ order_id, name }: CustomerRequest) => {
    const order = await prismaClient.customer.create({
      data: {
        order_id: order_id,
        name: name,
      },
    });

    return order;
  };
}

export { AddCustomerService };
