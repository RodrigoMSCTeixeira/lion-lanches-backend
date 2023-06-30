import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

class ListOrdersController {
  handle = async (req: Request, res: Response) => {
    const listOrdersService = new ListOrdersService();

    const orders = await listOrdersService.execute();

    res.json(orders);
  };
}

export { ListOrdersController };
