import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export async function GET(request: Request) {
  // TODO: Implement GET all transactions
  return NextResponse.json({ message: "Transactions API - GET" });
}

export async function POST(request: Request) {
  // TODO: Implement create transaction
  return NextResponse.json({ message: "Transactions API - POST" });
}
