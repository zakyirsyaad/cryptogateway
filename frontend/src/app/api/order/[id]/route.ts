import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/order/${params.id}`
  );
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
