import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

type Job = {
    id?: string
    message: string
}

let todoList: Job[] = [] ;
let count = 0

//query
export async function GET(request: NextRequest): Promise<any>{
    return NextResponse.json(todoList)
}

//Insert
export async function POST(request: NextRequest): Promise<any>{
    const { message } = await request.json()

    count++
    todoList = [...todoList, { id: count.toString(), message: message }]

    return NextResponse.json({ result: "ok" , data: todoList })
}