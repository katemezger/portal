import { NextResponse } from "next/server";

export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
}

export function createErrorResponse(message: string, code: string, status: number, details?: any) {
  return NextResponse.json<ApiErrorResponse>(
    {
      success: false,
      error: { code, message, details },
    },
    { status }
  );
}