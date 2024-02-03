import connect from "@/lib/db";
import User from "@/lib/models/users";
import { NextRequest, NextResponse } from "next/server";


// Getting all users

export const GET = async () => {
  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching users" + error, { status: 500 });
  }
};


//Adding a new user on signup

export const POST = async (request) => {
  try {
    const body = await request.json();
    // console.log(request);
    // console.log(body);

    await connect();

    // TODO: Check if user already exists in DB

    const newUser = new User(body);
    await newUser.save();

    // console.log(newUser);
    
    return new NextResponse(
      JSON.stringify({ message: "User created successfully", user: newUser }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error in creating user",
        error,
      }),
      {
        status: 500,
      }
    );
  }
};
