import express from "express";
import {
  createConfig,
  getAllConfigs,
  getConfigById,
  updateConfig,
  deleteConfig,
} from "../controllers/config.controller";

const router = express.Router();

router.post("/", createConfig);
router.get("/", getAllConfigs);
router.get("/:intersectionType", getConfigById);
router.put("/", updateConfig);
router.delete("/:id", deleteConfig);

export default router;
