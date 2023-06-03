import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, res: NextResponse) {

    const response = NextResponse.next()

    response.headers.set("Access-Control-Allow-Origin", "*")
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, Delete, OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, API-KEY")
    
    return response
}

export const config = {
    matcher: '/app/api/:path*'
}