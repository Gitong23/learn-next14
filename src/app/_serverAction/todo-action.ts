"use server"
import { revalidatePath } from "next/cache"

export const submitTodo = async (formData: FormData) => {
    "use server"
    const message = formData.get('message')
    console.log("message: ", message)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    await fetch("http://localhost:3000/api/todo",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ message })
    })

    revalidatePath("http://localhost:3000")
  }