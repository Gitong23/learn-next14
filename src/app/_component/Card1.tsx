"use client"
import React, { useEffect, useState } from 'react'
import { api1 } from '../api/wtf/route'

type Props = {}

export default function Card1({}: Props) {

    const massage = api1()

    return (
        <div style={{width: 200, height:200, backgroundColor: 'red'}}>{massage}</div>
    )
}