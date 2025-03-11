import { connectMongoDB } from "@/lib/mongoDb";
import User from "@/Models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        await connectMongoDB();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword });

        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error while registering user:", error);
        return NextResponse.json({ message: "User registration failed" }, { status: 500 });
    }
}
