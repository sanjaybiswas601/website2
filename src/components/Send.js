import React from 'react'
import './Send.css'
import emailjs from 'emailjs-com';


const Send = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_o3wwiae',
        'template_z1jsq8l',
        e.target,
        'tEWtvvlp7CUO5XiS0'
        ).then(res=>{
            alert('mail send successfully')
            console.log('res')
        }).catch(err=> console.log('err'))
    }
  return (
    <div className='contact'>  
    
    <form className='form' onSubmit={sendEmail}>
    <label>Contact Form</label><br></br><br></br>
     
        <label>Name</label><br></br>
        <input type="text" name="name"/><br></br>

        <label>Email</label><br></br>
        <input type="email" name="user-email"/><br></br>

        <label>Massage</label><br></br>
        <textarea name="message"></textarea><br></br>

        <input type="submit" value="send" 
            className='form-control btn btn-primary'
            style={{marginTop: "30px"}}
        />
        
    </form>
    </div>
  )
}

export default Send