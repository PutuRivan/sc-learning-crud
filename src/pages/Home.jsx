import React from 'react'
import Cards from '../components/Card'

export default function Home() {
  return (
    <div className='grid grid-cols-5 m-5 gap-5 place-items-center'>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  )
}
