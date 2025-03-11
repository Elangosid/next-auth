import { connectMongoDB } from "@/lib/mongoDb";
import User from "@/Models/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        await connectMongoDB();

        const existingUser = await User.findOne({ email });

        return NextResponse.json({
            exists: !!existingUser,
            message: existingUser ? "User already exists" : "Email available"
        });
    } catch (error) {
        console.error("Error checking email:", error);
        return NextResponse.json({ message: "Error checking email" }, { status: 500 });
    }
}
