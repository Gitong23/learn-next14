import React from 'react'
import TodoForm from './_component/TodoForm'

type Props = {}

export default async function page({}: Props) {

  const result = await fetch("http://localhost:3000/api/todo") //http get
  const todoList: { id:string, message: string} [] = await result.json()

  return (
    <>
      <h1 className='text-2xl font-bold'> Todos</h1>
        <TodoForm/>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.message}</li>
        ))}
      </ul>
    </>
  )
}