import React, { useState } from "react";
import Section from "../component/Section";
import { Link } from "react-router-dom";
import Images from "../component/Images";
import Input from "../component/Input";
import { useParams } from "react-router-dom";
import axios from "axios";

const ForgetPassword = () => {
    let [email,setEmail]=useState("");
    let {token}=useParams();
    let handleSubmit =(e)=>{
      e.preventDefault();
        axios.post('http://localhost:3000/api/v1/auth/forgetpassword',{
            email,
        })
    }
  return (
    <div>
      <Section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <Link
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <Images src="images/logo.png" />
          </Link>
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl  font-dmSans">
                Forget Your password
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base font-medium text-gray-900  font-dmSans"
                  >
                    Your email
                  </label>
                  <Input onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                {/* <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-base font-medium text-black  font-dmSans"
                  >
                    New Password
                  </label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div> */}
                <button onClick={handleSubmit}
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center bg-black font-dmSans "
                >
                  Submit
                </button>
                {/* <p className="text-base font-light text-lightAsh font-dmSans">
                  Don’t have an account yet?{" "}
                  <Link
                    href="#"
                    className="font-medium text-ash hover:underline "
                  >
                    Sign up
                  </Link>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ForgetPassword;
