'use client';
import { useState } from "react";
import Sunny from '../../../public/SunnyHover.png'
import Image from "next/image";

export default function Page() {
  const [result, setResult] = useState("");

  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb4527ee-3c63-4db8-a3d8-4f8f95db4e17");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
   <div className="min-h-[100vh] w-full flex justify-center bg-[rgb(52,53,60)] lg:rounded-tl-3xl lg:shadow-inner lg:mt-4">
      <div className="lg:h-[80%] w-[80%] flex h-[95%] pt-[20%] lg:pt-[5%]">
        <form onSubmit={onSubmit} className="flex flex-col lg:w-[50%] w-[100%] gap-4 lg:bg-[rgb(42,42,49)] lg:p-16 lg:rounded-xl">
          <div className="flex flex-col items-start">
            <h1 className="text-white mb-4 font-bold text-3xl">Get in touch!</h1>
            <hr className="bg-indigo-700 border-none h-2 w-[70%] rounded-xl mb-4"/>
          </div>
          <div className="flex w-[100%] flex-col lg:flex-row lg:justify-between gap-4">    
            <div className="input-box">         
              <input type="text" name="Name" required/>
              <span>First Name</span>
             </div>
            <div className="input-box">     
              <input type="text" name="Last-Name" required/>
              <span>Last Name</span>
            </div>
          </div>
            <div className="input-box">  
              <input type="email" name="Email" required/>
              <span>E-mail</span>
            </div>
            <div className="input-box"> 
              <textarea name="Message" required style={{ resize: 'none' }}></textarea>
              <span>Message</span>
            </div>
          <button type="submit" className="p-4 rounded-lg bg-indigo-700 text-white">Submit Form</button>
          <span>{result}</span>
        </form>
        <Image src={Sunny} alt="sunny cartoon" width={500} height={250} className="lg:flex hidden"/>
      </div>
   </div>
  );
}
