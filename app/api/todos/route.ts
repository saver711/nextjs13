import { NextRequest, NextResponse } from "next/server"

const DATA_SOURCE_URL = "http://localhost:3600/todos"
const API_KEY: string = process.env.DATA_API_KEY as string


// This is the get request for this api route
// => http://localhost:3000/api/todos
export async function GET() {
    const res = await fetch(DATA_SOURCE_URL, {
        next: {
            revalidate: 60
        }
    })

    const todos: Todo_TP[] = await res.json()

    return NextResponse.json(todos)
}

export async function POST(request: NextRequest) {
    const { userId, title }: Partial<Todo_TP> = await request.json()

    if (!userId || !title) return new Response(JSON.stringify({
        "message": `missing title or user id`
    }), {
        status: 422,
    });

    const res = await fetch(`${DATA_SOURCE_URL}`, {
        method: "POST", body: JSON.stringify({
            title, userId, completed: false
        }),
        headers: {
            "Content-Type": "application/json",
            "API-Key": API_KEY,

        },
    })

    if (!res.ok) return new Response(JSON.stringify({
        "message": `${res.status} => ${res.statusText}`
    }), {
        status: res.status,
    });

    const newTodo: Todo_TP = await res.json()

    return NextResponse.json({ "message": `Todo ${newTodo.id} added successfully => title: ${newTodo.title}` })
}

