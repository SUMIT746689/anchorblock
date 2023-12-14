import React from "react";
import { CompanyLogo } from "../../components/Logo/Logo";

const SignIn = () => {
    return (
        <div className=" h-[100vh] w-full flex justify-center items-center">
            <div className=" grow max-w-[444px] max-h-[576px] shadow-lg shadow-gray-200 rounded-2xl" >
                <div className=" w-full px-[62px] py-[54px] ">

                    <section className="grid gap-5 pb-[52px]">
                        <div className=" flex gap-2">
                            <CompanyLogo />
                            <span className=" text-[#4E5D78] text-2xl font-bold my-auto">Stack</span>
                        </div>
                        <div className=" text-[#404040] text-xl font-semibold">
                            Sign up to join with Stack
                        </div>
                    </section>

                    <section className=" flex flex-col align-top gap-[6px]">
                        <div className=" text-sm font-medium text-[#344054]">Email</div>
                        <div >
                            <input className=" px-[14px] py-[10px] border border-[#FDA29B] rounded-lg shadow w-full " placeholder="Enter Email" />
                        </div>
                        <div className=" text-[#F04438] text-sm"> This field is required</div>
                    </section>
                    <section className=" flex flex-col align-top gap-[6px]">
                        <div className=" text-sm font-medium text-[#344054]">Password</div>
                        <div >
                            <input className=" px-[14px] py-[10px] border border-[#D6BBFB] rounded-lg shadow w-full " placeholder="Enter Password" type="password" />
                        </div>
                        <div className=" text-[#F04438] text-sm"> This field is required</div>
                    </section>

                    <section className="grid grid-cols-6 gap-2 py-5">
                        <div className=" border rounded-sm h-1 bg-[#F04438]"></div>
                        <div className=" border rounded-sm h-1 bg-[#F04438]"></div>
                        <div className=" border rounded-sm h-1 bg-[#F04438]"></div>
                        <div className=" border rounded-sm h-1 bg-[#F04438]"></div>
                        <div className=" border rounded-sm h-1 bg-[#F04438]"></div>
                        <div className=" border rounded-sm h-1 bg-[#F04438]"></div>
                    </section>

                    <button className=" bg-[#6941C6] text-white w-full px-[18px] py-[10px] rounded-lg">Sign In</button>

                    <section className=" font-medium pt-2">
                        <span className=" text-[#B0B7C3]">Already have an account?</span>
                        <span className=" text-[#377DFF] cursor-pointer"> Sign In</span>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SignIn;