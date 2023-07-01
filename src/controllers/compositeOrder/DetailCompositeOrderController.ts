import { Request, Response } from "express";
import { DetailCompositeOrderService } from "../../services/compositeOrder/DetailCompsiteOrderService";

class DetailCompositeOrderController {
  handle = async (req: Request, res: Response) => {
    const customer_id = req.query.customer_id as string;

    const detailOrderService = new DetailCompositeOrderService();

    const orders = await detailOrderService.execute({
      customer_id,
    });

    return res.json(orders);
  };
}

export { DetailCompositeOrderController };
