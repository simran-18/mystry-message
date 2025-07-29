
import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { Foods } from "@/lib/foodsModel";
export async function POST(request:Request) {
  try {
    const payload = await request.json();
    console.log("Received payload:", payload);
    await dbConnect();

    const newFood = new Foods({
      ...payload
    });

    const savedFood = await newFood.save();
    console.log("Saved food item:", savedFood);

    return NextResponse.json({
      message: "Food item added successfully",
      food: savedFood,
      success: true,
    });
  } catch (error: any) {
    console.error("Error in POST:", error);

    if (error.name === "ValidationError") {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
    
}