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
router.get("/:id", getConfigById);
router.put("/:id", updateConfig);
router.delete("/:id", deleteConfig);

export default router;
