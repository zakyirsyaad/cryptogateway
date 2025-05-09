import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${params.id}/verify`,
    {
      method: "PUT",
    }
  );
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
