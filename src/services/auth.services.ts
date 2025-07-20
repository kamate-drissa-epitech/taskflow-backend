import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

export async function registerUser(name: string, email: string, password: string): Promise<{id : number, username : string, userEmail:string}> {
    const userFind = await prisma.user.findUnique({ where: { email } });

    if (userFind) {
        throw new Error("Email has already been taken!");
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    const userCreated = await prisma.user.create({
        data: {
            name,
            email,
            password: passwordHashed,
            role: "USER",
        },
    });

    const { id, name: username, email: userEmail } = userCreated;
    return { id, username, userEmail };
}
