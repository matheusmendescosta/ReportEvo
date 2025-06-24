import { PrismaFormRepository } from "@/repositories/prisma/prisma-form-repository";
import { GetFormService } from "@/services/get-form-service";
import { Request, Response } from "express";
import { z } from "zod";

const paramsSchema = z.object({
  id: z.string(),
});

const GetFormController = async (request: Request, response: Response) => {
  try {
    const params = paramsSchema.parse(request.params);

    const getFormService = new GetFormService(new PrismaFormRepository());

    const form = await getFormService.execute({ id: params.id });

    return response.status(200).json(form);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return response.status(400).json({ message: error.errors });
    }

    return response.status(500).json({ message: "Internal server error" });
  }
};

export { GetFormController };
