"use client"
import React, { Suspense } from 'react'
import Card1 from '../_component/Card1'
import Card2 from '../_component/Card2'
import Loading from '../_component/Loading'

type Props = {}

export default function Wtf({}: Props) {
  return (
    <div style={{width: '100vw', height: '100vh', backgroundColor: 'pink', display: 'flex', justifyContent: 'center', gap:20}}>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Card1/>
        </Suspense>
        <Card2/>
    </div>
  )
}