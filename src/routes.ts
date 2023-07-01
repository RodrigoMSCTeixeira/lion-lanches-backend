import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { CreateCompositeOrderController } from "./controllers/compositeOrder/CreateCompositeOrderController";
import { RemoveCompositeOrderController } from "./controllers/compositeOrder/RemoveCompositeOrderController";
import { AddItemByCustomerController } from "./controllers/compositeOrder/AddItemByCustomerController";
import { RemoveItemByCustomerController } from "./controllers/compositeOrder/RemoveItemByCustomerController";
import { AddCustomerController } from "./controllers/compositeOrder/AddCustomerController";
import { SendCompositeOrderController } from "./controllers/compositeOrder/SendCompositeOrderController";
import { ListCompositeOrdersController } from "./controllers/compositeOrder/ListCompositeOrdersController";
import { DetailCompositeOrderController } from "./controllers/compositeOrder/DetailCompositeOrderController";
import { FinishCompositeOrderController } from "./controllers/compositeOrder/FinishCompositeOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);

router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);
router.post("/order/add", isAuthenticated, new AddItemController().handle);
router.delete(
  "/order/remove",
  isAuthenticated,
  new RemoveItemController().handle
);
router.put("/order/update", isAuthenticated, new SendOrderController().handle);
router.get("/orders", isAuthenticated, new ListOrdersController().handle);
router.get(
  "/orders/detail",
  isAuthenticated,
  new DetailOrderController().handle
);
router.put(
  "/order/finish",
  isAuthenticated,
  new FinishOrderController().handle
);

router.post(
  "/compositeOrder",
  isAuthenticated,
  new CreateCompositeOrderController().handle
);
router.delete(
  "/compositeOrder",
  isAuthenticated,
  new RemoveCompositeOrderController().handle
);

router.post(
  "/compositeOrder/AddCustomer",
  isAuthenticated,
  new AddCustomerController().handle
);

//Falta Remover Cliente

router.post(
  "/compositeOrder/add",
  isAuthenticated,
  new AddItemByCustomerController().handle
);
router.delete(
  "/compositeOrder/remove",
  isAuthenticated,
  new RemoveItemByCustomerController().handle
);
router.put(
  "/compositeOrder/update",
  isAuthenticated,
  new SendCompositeOrderController().handle
);
router.get(
  "/compositeOrders",
  isAuthenticated,
  new ListCompositeOrdersController().handle
);
router.get(
  "/compositeOrders/detail",
  isAuthenticated,
  new DetailCompositeOrderController().handle
);
router.put(
  "/compositeOrder/finish",
  isAuthenticated,
  new FinishCompositeOrderController().handle
);

export { router };
