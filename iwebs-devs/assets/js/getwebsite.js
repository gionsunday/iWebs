window.addEventListener('load', () =>{ 
    const name02In = document.querySelector('#name02'); 
    const email02In  = document.querySelector('#email02'); 
    const phone02In  = document.querySelector('#phone02'); 
    const planIn  = document.querySelector('#plan'); 
    const message02In = document.querySelector('#message02'); 
    const sendBtn02  = document.querySelector('#message02_btn'); 
   const form02 = document.querySelector('#contact02') 
 
   form02.addEventListener('submit', async (e) =>{ 
       e.preventDefault() 
  
      const name02 = name02In.value; 
      const email02 = email02In.value; 
      const phone02 = phone02In.value || "None"; 
      const plan = planIn.value || "No plane"; 
      const message02 = message02In.value; 
 
      if(!name02 || !email02 || !message02){ 
        alert('Please provide your details!') 
      } 
      else{ 
        sendBtn02.textContent = "Sending message..." 
        name02In.value ="" 
        email02In.value ="" 
        phone02In.value =""
        planIn.value = ""
        message02In.value ="" 
        try { 
            await axios.post('/api/sendmessage', { 
                name:name02, email:email02, phone:phone02, plan:plan, message:message02 
            }).then(()=>{ 
               
            sendBtn02.textContent = "message Sent. Thank You!" 
            sendBtn02.classList.add('success') 
            }) 
            setTimeout(()=>{ 
              sendBtn02.classList.remove('success') 
              sendBtn02.textContent = "Send message" 
             
            },3000) 
        } catch (error) { 
            console.log(error) 
        } 
      } 
    }) 
     
 
})

