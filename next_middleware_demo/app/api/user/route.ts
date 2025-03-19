import { NextRequest, NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        message:"u arfe logged in"
    })
}