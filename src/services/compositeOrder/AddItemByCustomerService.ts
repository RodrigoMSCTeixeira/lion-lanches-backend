import prismaClient from "../../prisma";

interface ItemRequest {
  customer_id: string;
  product_id: string;
  amount: number;
}

class AddItemByCustomerService {
  execute = async ({ customer_id, product_id, amount }: ItemRequest) => {
    const order = await prismaClient.itemByCustomer.create({
      data: {
        customer_id: customer_id,
        product_id: product_id,
        amount: amount,
      },
    });

    return order;
  };
}

export { AddItemByCustomerService };
