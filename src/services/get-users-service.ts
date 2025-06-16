import { UserRepository } from "@/repositories/UserRepository";
import { User } from "@prisma/client";

interface GetUsersServiceRequest {
  page?: number;
  limit?: number;
}

interface GetUsersServiceResponse {
  users: User[];
}

export class GetUsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers({
    page,
    limit,
  }: GetUsersServiceRequest): Promise<GetUsersServiceResponse> {
    const users = await this.userRepository.findAll(page, limit);
    
    return { users };
  }
}
