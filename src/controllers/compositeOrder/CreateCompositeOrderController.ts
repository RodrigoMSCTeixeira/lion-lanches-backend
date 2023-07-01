import { Request, Response } from "express";
import { CreateCompositeOrderService } from "../../services/compositeOrder/CreateCompositeOrderService";

class CreateCompositeOrderController {
  handle = async (req: Request, res: Response) => {
    const { table } = req.body;

    const createOrderService = new CreateCompositeOrderService();

    const order = await createOrderService.execute({
      table,
    });

    res.json(order);
  };
}

export { CreateCompositeOrderController };
