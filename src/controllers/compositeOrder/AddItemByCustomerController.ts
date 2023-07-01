import { Request, Response } from "express";
import { AddItemByCustomerService } from "../../services/compositeOrder/AddItemByCustomerService";

class AddItemByCustomerController {
  handle = async (req: Request, res: Response) => {
    const { customer_id, product_id, amount } = req.body;

    const addItem = new AddItemByCustomerService();

    const order = await addItem.execute({
      customer_id,
      product_id,
      amount,
    });

    res.json(order);
  };
}

export { AddItemByCustomerController };
