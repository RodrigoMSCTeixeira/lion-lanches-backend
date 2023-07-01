import { Request, Response } from "express";
import { RemoveCompositeOrderService } from "../../services/compositeOrder/RemoveCompositeOrderService";

class RemoveCompositeOrderController {
  handle = async (req: Request, res: Response) => {
    const order_id = req.query.order_id as string;

    const removeOrder = new RemoveCompositeOrderService();

    const order = await removeOrder.execute({
      order_id,
    });

    return res.json(order);
  };
}

export { RemoveCompositeOrderController };
