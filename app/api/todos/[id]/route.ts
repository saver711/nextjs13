import { NextRequest, NextResponse } from "next/server";

const DATA_SOURCE_URL = "http://localhost:3600/todos"

const API_KEY: string = process.env.DATA_API_KEY as string


export async function DELETE(request: NextRequest, { params }: { params: Partial<Todo_TP> }) {
    const { id } = params

    if (!id) return new Response(JSON.stringify({
        "message": `Todo id is required`
    }), {
        status: 404,
    });

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "API-Key": API_KEY
        },
    })

    if (!res.ok) return new Response(JSON.stringify({
        "message": `${res.status} => ${res.statusText}`
    }), {
        status: res.status,
    });

    return NextResponse.json({ "message": `Todo ${id} deleted successfully` })
}

export async function PUT(request: NextRequest, { params }: { params: Partial<Todo_TP> }) {
    /* 
    👁️ I need this
    */
    // const { title, completed } = await request.json()

    /* 
    😒 This is hard content
    */
    const { title, completed }: Partial<Todo_TP> = { title: "edited title 2", completed: true }

    const { id } = params

    if (!title || !id) return new Response(JSON.stringify({
        "message": `missing title or id`
    }), {
        status: 422,
    });

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title, completed
        }),
        headers: {
            "Content-Type": "application/json",
            // "API-Key": API_KEY,

        },
    })

    if (!res.ok) return new Response(JSON.stringify({
        "message": `${res.status} => ${res.statusText}`
    }), {
        status: res.status,
    });

    const updatedTodo: Todo_TP = await res.json()

    return NextResponse.json({ "message": `Todo ${updatedTodo.id} updated successfully => title: ${updatedTodo.title}` })
}