import React from 'react';
import { useState } from 'react';

const FeedbackForm = ({addFeedback}) => {
  const [formData,setFormData]=useState({
    name:"",email:"",feedback:"",
  });
  //console.log(formData)
  const change=(c)=>{
    const {name,value}=c.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value,
    }))
  }
  const submit=(s)=>{
    s.preventDefault();
    if(formData.name.trim()&&formData.email.trim()&&formData.feedback.trim()){
      addFeedback(formData)
      setFormData({name:"",email:"",feedback:""})
    }
  }
  return (
    <form onSubmit={submit}>
      <h1>Feedback Form</h1>
      <input type="text" name="name"placeholder='enter your name...' value={formData.name} onChange={change}required/><br></br>
      <input type="email"name="email" placeholder='enter your email...'value={formData.email}onChange={change} required/><br />
      <textarea name="feedback" id="feedback" placeholder='enter your valuble feedback here...' value={formData.feedback} onChange={change}></textarea><br />
      <button type='submit'>submit</button>
    </form>
  );
};
export default FeedbackForm