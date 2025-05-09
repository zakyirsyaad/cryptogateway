import { RequestHandler, Router } from "express";
import {
  businessOnboardingHandler,
  getAllBusinessesHandler,
  getBusinessByIdHandler,
  updateBusinessHandler,
} from "../controllers/businessController";

const router = Router();

router.post("/onboarding", businessOnboardingHandler as RequestHandler);
router.get("/", getAllBusinessesHandler as RequestHandler);
router.get("/:id", getBusinessByIdHandler as RequestHandler);
router.put("/:id", updateBusinessHandler as RequestHandler);

export default router;
