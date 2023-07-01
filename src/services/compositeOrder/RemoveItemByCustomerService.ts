import prismaClient from "../../prisma";

interface ItemRequest {
  item_id: string;
}

class RemoveItemByCustomerService {
  execute = async ({ item_id }: ItemRequest) => {
    const order = await prismaClient.itemByCustomer.delete({
      where: {
        id: item_id,
      },
    });

    return order;
  };
}

export { RemoveItemByCustomerService };
