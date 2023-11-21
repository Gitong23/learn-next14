"use client"
import React, { useRef } from 'react'
import { submitTodo } from '../_serverAction/todo-action'
import { useFormStatus } from 'react-dom'
import TodoButton from './TodoButton'

type Props = {}

export default function TodoForm({}: Props) {

    const ref = useRef<HTMLFormElement>(null)
    
  return (
    <form 
    ref={ref}
    action={(formData: FormData) => {
        ref.current?.reset()
        submitTodo(formData)
    }}
    className='flex flex-col w-[200px] my-16'
  >
    <input
      type='text'
      name='message'
      className='px-4 py-2 mb-3'
      placeholder='Write your job....'
      required
    />
    <TodoButton />
  </form>
  )
}