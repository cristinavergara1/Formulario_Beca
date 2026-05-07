import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    mensaje: "Hola desde el endpoint /api/mensaje",
  });
}
