import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  execute = async ({ email, password }: AuthRequest) => {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("User or Password Incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("User or Password Incorrect!");
    }

    const token = sign(
      {
        nick_name: user.nick_name,
        email: user.email,
      },
      process.env.JWTSECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.nick_name,
      email: user.email,
      token: token,
    };
  };
}

export { AuthUserService };
