import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
  handle = async (req: Request, res: Response) => {
    const listCategoryService = new ListCategoryService();

    const category = await listCategoryService.execute();

    console.log(category);

    return res.json(category);
  };
}

export { ListCategoryController };
