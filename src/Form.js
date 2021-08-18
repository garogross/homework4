import React, {useState} from 'react'
import "./Form.css"


const Form = (props) => {
 const [name, setName] = useState("")
 const [surname, setSurname] = useState("")
 const [date, setDate] = useState("")
 const [email, setEmail] = useState("")
 const [country, setCountry] = useState("")

 const nameHandler = e => {
  setName(e.target.value)
 }
 const surnameHandler = e => {
  setSurname(e.target.value)
 }
 const dateHandler = e => {
  setDate(e.target.value)
 }
 const emailHandler = e => {
  setEmail(e.target.value)
 }
 const countryHandler = e => {
  setCountry(e.target.value)
 }
 const submitHandler = (e) => {
  e.preventDefault()
  const fullData = {
   name: name,
   surname: surname,
   date: new Date(date),
   email: email,
   country: country
  }
  props.onSaveData(fullData)
  setName("")
  setSurname("")
  setDate("")
  setEmail("")
  setCountry("")
  

 }
 return (
  <div>
   <form action="" onSubmit={submitHandler}>
    <input type="text" placeholder="Name" onChange={nameHandler} value={name}/>
   <input type="text" placeholder="Surname" onChange={surnameHandler} value={surname}/>
   <input type="date" placeholder="birth Date" onChange={dateHandler} value={date}/>
   <input type="email" placeholder="email"  onChange={emailHandler} value={email}/>
   <input type="text" placeholder="country" onChange={countryHandler} value={country}/>
   <button type="submit">send</button>

   </form>
  </div>
 )
}

export default Form
