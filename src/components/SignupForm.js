import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';



const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName:"",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword ){
            toast.error("Password do not match");
            return;
            
        }
        setIsLoggedIn(true);
        toast.success("Accout Created");
        const accountData={
            ...formData
        }
        console.log(accountData);
        navigate("/dashboard");
        
    }
    const [accountType, setAccountType] = useState("student");

  return (
    <div >
        {/* button */}
        <div className="flex my-6 bg-richblack-800 border-x-0 border-t-0 border border-b-slate-600 p-1 gap-x-1 rounded-full max-w-max">
        <button
          
          className={`${
            accountType === "student"
              ? 
              "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>
        <form onSubmit={submitHandler}>
            <div className="flex gap-x-4 mt-[20px]">
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name
                <sup className="text-pink-200">*</sup></p>
                <input type="text"
                required
                 name="firstName"
                 value={formData.firstName}
                 onChange={changeHandler}
                 placeholder='Enter First Name'
                 className="bg-richblack-800 rounded-[0.75rem] border-x-0 border-t-0 border border-b-slate-600 w-full p-[12px] text-richblack-5"

                 />
            </label>

            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name
                <sup className="text-pink-200">*</sup></p>
                <input type="text"
                required
                 name="lastName"
                 value={formData.lastName}
                 onChange={changeHandler}
                 placeholder='Enter Last Name'
                 className="bg-richblack-800 border-x-0 border-t-0 border border-b-slate-600 rounded-[0.75rem] w-full p-[12px] text-richblack-5"

                 />
            </label>

            </div>
           
           <div className='mt-[20px]'>
               {/* email */}
               <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                >Email Address <sup className="text-pink-200">* </sup>

                </p>
                <input
                    required
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter Email Id'
                    className="bg-richblack-800 rounded-[0.75rem] border-x-0 border-t-0 border border-b-slate-600  appearance-none w-full p-[12px] text-richblack-5"
                />
            </label>


           </div>
         
            {/* Password */}

            <div className="flex mt-[20px] gap-x-4">
            <label className='w-full relative'>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup>

                </p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    name='password'
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter password '
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] border-x-0 border-t-0 border border-b-slate-600 text-richblack-5"
                />
                 {/* className="absolute right-3 top-[38px] cursor-pointer " */}
                  <span onClick={() => setShowPassword(!showPassword)}   className="absolute right-3 top-[38px] cursor-pointer z-10">
                {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
            </label>

            <label className="w-full relative">
                <p
                className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                >Confirm Password
                <sup className="text-pink-200">*</sup>

                </p>
                <input
                    required
                    type={showNewPassword ? ("text") : ("password")}
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={changeHandler}
                    placeholder='Confirm Password '
                    className="bg-richblack-800 rounded-[0.75rem] border-x-0 border-t-0 border border-b-slate-600 w-full p-[12px] text-richblack-5"
                />
                {/* className="absolute right-3 top-[38px] cursor-pointer " */}
                  <span onClick={() => setShowNewPassword(!showNewPassword)}   className="absolute right-3 top-[38px] cursor-pointer z-10">
                {showNewPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'  /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />} 
             </span>
            </label>
            </div>

            <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
                Create Password
            </button>

           
        </form>
            
            
    </div>
  )
}

export default SignupForm