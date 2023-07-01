import { Request, Response } from "express";
import { ListCompositeOrdersService } from "../../services/compositeOrder/ListCompositeOrdersService";

class ListCompositeOrdersController {
  handle = async (req: Request, res: Response) => {
    const listCompositeOrdersService = new ListCompositeOrdersService();

    const orders = await listCompositeOrdersService.execute();

    res.json(orders);
  };
}

export { ListCompositeOrdersController };
