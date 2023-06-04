import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  execute = async ({ name, email, password }: UserRequest) => {
    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExist = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExist) {
      throw new Error("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        nick_name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        email: true,
        nick_name: true,
      },
    });

    return user;
  };
}

export { CreateUserService };
