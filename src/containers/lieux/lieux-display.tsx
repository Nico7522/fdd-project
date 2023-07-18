import React from 'react'
import style from './style.module.css'
import Lieu from '../../components/lieu/lieu'
import { usefetchLieu } from '../../hooks/lieu'
export default function Lieux() {

  const {data, error, loading} = usefetchLieu()
  console.log(data);
  
  return (
    <>
      <h1>Liste des lieux</h1>
      <Lieu />
    </>
   
  )
}
