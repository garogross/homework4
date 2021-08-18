import React from 'react'
import Form from "./Form"


const Container = (props) => {
 const saveDataHendler = data => {
  const savedData = {
   ...data,
   id: (Math.random()* 6).toString()
  }
  props.onAddDate(savedData)
 }
 return (
  <div>
   <Form onSaveData={saveDataHendler}/>
  </div>
 )
}

export default Container
