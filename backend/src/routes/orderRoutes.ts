import { RequestHandler, Router } from "express";
import {
  orderOnboardingHandler,
  updateOrderStatusHandler,
  getOrderByIdHandler,
  getAllOrdersHandler,
} from "../controllers/orderController";

const router = Router();

router.post("/onboarding", orderOnboardingHandler as RequestHandler);
router.post("/update-status/:id", updateOrderStatusHandler as RequestHandler);
router.get("/", getAllOrdersHandler as RequestHandler);
router.get("/:id", getOrderByIdHandler as RequestHandler);

export default router;
