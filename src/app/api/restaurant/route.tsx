import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import { Restaurant } from "@/lib/restaurantModel";
import { success } from "zod";

export async function GET() {
  try {
    await dbConnect();
    console.log("✅ Database connection established successfully");
    const data=await Restaurant.find();
    console.log("Data fetched successfully:", data);
    return NextResponse.json({
      message: "✅ Welcome to the Restaurant API",
    });
  } catch (error) {
    console.error("❌ Error in GET:", error);
    return NextResponse.json({ error: "Failed to connect to database" }, { status: 500 });
  }
}
export async function POST(request: Request) {
 try {
    const payload = await request.json();
    console.log("Received payload:", payload);
    await dbConnect();
    const newRestaurant = new Restaurant(payload);
    const savedRestaurant = await newRestaurant.save();
    console.log("Saved restaurant:", savedRestaurant);
    return NextResponse.json({
      message: "✅ Restaurant created successfully",
      restaurant: savedRestaurant,
      success: true,
    });
  } catch (error: any) {
    console.error("❌ Error in POST:", error);
    if (error.code === 11000) {
      return NextResponse.json({ error: "Email already exists" }, { status: 409 });
    }
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
   return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
