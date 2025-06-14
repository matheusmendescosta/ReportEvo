import { UserRepository } from "@/repositories/UserRepository";
import { User } from "@prisma/client";

interface CreateUserServiceRequest {
  name: string;
  email: string;
  password: string;
}

interface CreateUserServiceResponse {
  user: User;
}

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute({
    name,
    email,
    password,
  }: CreateUserServiceRequest): Promise<CreateUserServiceResponse> {
    const user = await this.userRepository.create({ name, email, password });

    return { user };
  }
}
