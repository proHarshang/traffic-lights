import { Request, Response } from "express";
import prisma from "../prisma/client";

export const createConfig = async (req: Request, res: Response) => {
  try {
    const { intersectionType, config } = req.body;
    const newConfig = await prisma.signalConfig.create({
      data: {
        intersectionType,
        config,
      },
    });
    res.status(201).json(newConfig);
  } catch (err) {
    res.status(500).json({ error: "Failed to create configuration" });
  }
};

export const getAllConfigs = async (_: Request, res: Response) => {
  const configs = await prisma.signalConfig.findMany();
  res.json(configs);
};

export const getConfigById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const config = await prisma.signalConfig.findUnique({ where: { id } });
  if (!config) {
    res.status(404).json({ error: "Not found" });
  }
  res.json(config);
};

export const updateConfig = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { intersectionType, config } = req.body;
  try {
    const updated = await prisma.signalConfig.update({
      where: { id },
      data: { intersectionType, config },
    });
    res.json(updated);
  } catch {
    res.status(500).json({ error: "Failed to update configuration" });
  }
};

export const deleteConfig = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.signalConfig.delete({ where: { id } });
    res.status(204).send();
  } catch {
    res.status(500).json({ error: "Failed to delete configuration" });
  }
};
