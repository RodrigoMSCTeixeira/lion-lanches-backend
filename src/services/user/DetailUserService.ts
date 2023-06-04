import prismaClient from "../../prisma";

class DetailUserService {
  execute = async (user_id: string) => {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        nick_name: true,
        email: true,
      },
    });
    return user;
  };
}

export { DetailUserService };
