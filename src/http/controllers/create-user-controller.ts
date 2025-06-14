import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository";
import { CreateUserService } from "@/services/create-user-service";
import { Request, Response } from "express";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const CreateUserController = async (
  request: Request,
  response: Response
) => {
  try {
    const { name, email, password } = bodySchema.parse(request.body);
    console.log("Creating user with data:", { name, email, password });
    const createUserService = new CreateUserService(new PrismaUserRepository());

    const { user } = await createUserService.execute({
      name,
      email,
      password,
    });
    console.log("User created successfully:", user);
    return response.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
};
