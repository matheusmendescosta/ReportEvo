import { PrismaFormFieldRepository } from "@/repositories/prisma/prisma-form-field-repository";
import { CreateFormFieldService } from "@/services/create-form-field-service";
import { FieldType } from "@prisma/client";
import { Request, Response } from "express";
import { z } from "zod";

const paramsSchema = z.object({
  formId: z.string(),
});

const bodySchema = z.object({
  label: z.string(),
  type: z.nativeEnum(FieldType),
  isRequired: z.boolean().default(false),
  options: z.array(z.string()).optional(),
  order: z.number().default(0),
});

export const CreateFormFieldController = async (
  request: Request,
  response: Response
) => {
  try {
    const { formId } = paramsSchema.parse(request.params);
    const { label, type, isRequired, options, order } = bodySchema.parse(
      request.body
    );

    const createFormFieldService = new CreateFormFieldService(
      new PrismaFormFieldRepository()
    );

    const { formField } = await createFormFieldService.execute({
      formId,
      label,
      type,
      isRequired,
      options,
      order,
    });

    return response.status(201).json(formField);
  } catch (error) {
    console.error("Error creating form field:", error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
};
