import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {
  handle = async (req: Request, res: Response) => {
    const { order_id, product_id, amount } = req.body;

    const addItem = new AddItemService();

    const order = await addItem.execute({
      order_id,
      product_id,
      amount,
    });

    res.json(order);
  };
}

export { AddItemController };
