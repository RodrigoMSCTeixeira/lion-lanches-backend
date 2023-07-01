import { Request, Response } from "express";
import { SendCompositeOrderService } from "../../services/compositeOrder/SendCompositeOrderService";

class SendCompositeOrderController {
  handle = async (req: Request, res: Response) => {
    const { order_id } = req.body;

    const sendOrder = new SendCompositeOrderService();

    const order = await sendOrder.execute({
      order_id,
    });

    res.json(order);
  };
}

export { SendCompositeOrderController };
