//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import BusinessCard from './components/BusinessCard'


function App() {

  return (
    <>
      <div className='flex flex-wrap'>
        <BusinessCard name='Sharon Apple' jobTitle="Chief of Operations" website="www.sharon.apple" theme='light' linkedin={false}/>
        <BusinessCard linkedin={false}/>
        <BusinessCard name='Fayl Fire' jobTitle="Frontend/AI Developer" website="www.fayl.fire" theme='light'/>
        <BusinessCard />
        <BusinessCard theme="light"/>
        <BusinessCard />
        <BusinessCard linkedin={false}/>
        <BusinessCard />
      </div>
    </>
  )
}

export default App
