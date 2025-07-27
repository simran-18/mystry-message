import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import { restaurantSchema } from "@/lib/restaurantModel";

export async function GET() {
  try {
    await dbConnect();
    console.log("✅ Database connection established successfully");
    const data=await restaurantSchema.find();
    console.log("Data fetched successfully:", data);
    return NextResponse.json({
      message: "✅ Welcome to the Restaurant API",
    });
  } catch (error) {
    console.error("❌ Error in GET:", error);
    return NextResponse.json({ error: "Failed to connect to database" }, { status: 500 });
  }
}
