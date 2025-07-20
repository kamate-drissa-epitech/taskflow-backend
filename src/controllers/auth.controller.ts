import { Request, Response } from "express";

interface RegisterRequestBody {
    name: string;
    email: string;
    password: string;
}

import { registerUser } from "../services/auth.services";

export async function register(req: Request<{}, {}, RegisterRequestBody>,res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    try {
        const response = await registerUser(name, email, password);
        return res.status(201).json({ data: response, success: true });
    } catch (e: any) {
        return res.status(500).json({ error: e.message, success: false });
    }
}
