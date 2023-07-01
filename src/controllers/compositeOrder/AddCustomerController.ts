import { Request, Response } from "express";
import { AddCustomerService } from "../../services/compositeOrder/AddCustomerService";

class AddCustomerController {
  handle = async (req: Request, res: Response) => {
    const { order_id, name } = req.body;

    const addCustomer = new AddCustomerService();

    const order = await addCustomer.execute({
      order_id,
      name,
    });

    return res.json(order);
  };
}

export { AddCustomerController };
