import React, { FC, ReactNode, useEffect } from "react"
import { CompanyLogo } from "../Logo/Logo"
import { Link } from "react-router-dom"

type AuthCardWrapperType = {
    children: ReactNode
}

export const AuthCardWrapper: FC<AuthCardWrapperType> = ({ children }) => {
    return (
        <div className=" h-[100vh] w-full flex justify-center items-center">
            <div className=" grow max-w-[444px] max-h-[576px] shadow-lg shadow-gray-200 rounded-2xl" >
                <div className=" w-full px-[62px] py-[54px] ">
                    {children}
                </div>
            </div>
        </div>
    )
}

type AuthCardHeaderType = {
    title: string
}

export const AuthCardHeader: FC<AuthCardHeaderType> = ({ title }) => {
    return (
        <section className="grid gap-5 pb-[52px]">
            <div className=" flex gap-2">
                <CompanyLogo />
                <span className=" text-[#4E5D78] text-2xl font-bold my-auto">Stack</span>
            </div>
            <div className=" text-[#404040] text-xl font-semibold">
                {title} to join with Stack
            </div>
        </section>
    )
}

type AuthCardFormType = {
    title: string
    isLoading: boolean
    withProgressBar?: boolean
    isSuccess: boolean
    formikDatas: {
        errors: { email?: string, password?: string }
        handleChange: (arg: any) => void
        handleSubmit: (arg: any) => void
        isSubmitting: boolean,
        values: { email: string, password: string, submit: null }
        isValid: boolean
        resetForm: () => void
    }
}


export const AuthForm: FC<AuthCardFormType> = (props) => {
    const { title, formikDatas, withProgressBar = false, isLoading, isSuccess } = props;
    const { errors, handleChange, handleSubmit, isValid, isSubmitting, values, resetForm } = formikDatas
    useEffect(() => {
        resetForm()
    }, [isSuccess])
    return (
        <form onSubmit={handleSubmit} className=" grid gap-5">
            <section className=" flex flex-col align-top gap-[6px]">
                <div className=" text-sm font-medium text-[#344054]">Email</div>
                <div >
                    <input
                        name="email"
                        className=" px-[14px] py-[10px] border border-[#FDA29B] rounded-lg shadow w-full outline-none ring-4 ring-[#FDA29B] ring-opacity-30 "
                        placeholder="Enter Email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div className=" text-[#F04438] text-sm "> {errors.email}</div>
            </section>
            <section className=" flex flex-col align-top gap-[6px]">
                <div className=" text-sm font-medium text-[#344054] ">Password</div>
                <div >
                    <input
                        name="password"
                        className=" px-[14px] py-[10px] border border-[#D6BBFB] rounded-lg shadow w-full outline-none ring-4 ring-[#D6BBFB] ring-opacity-30 "
                        placeholder="Enter Password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <div className=" text-[#F04438] text-sm"> {errors.password}</div>
            </section>

            {
                withProgressBar &&
                <section className="grid grid-cols-6 gap-2">
                    <div className=" border rounded-sm h-1 bg-[#F04438]"></div>
                    <div className=" border rounded-sm h-1 bg-[#F04438]"></div>
                    <div className=" border rounded-sm h-1 bg-[#F04438]"></div>
                    <div className=" border rounded-sm h-1 bg-[#F04438]"></div>
                    <div className=" border rounded-sm h-1 bg-[#F04438]"></div>
                    <div className=" border rounded-sm h-1 bg-[#F04438]"></div>
                </section>
            }

            <button onClick={handleSubmit} disabled={!isValid || isLoading} type="submit" className=" bg-[#6941C6] text-white w-full px-[18px] py-[10px] rounded-lg disabled:bg-opacity-30">{isLoading ? "Loading.." : title}</button>
        </form>
    )
}

type AuthCardFooterType = {
    label: string
    linkPath: string
    linklabel: string
}

export const AuthCardFooter: FC<AuthCardFooterType> = ({ label, linkPath, linklabel }) => {
    return (
        <section className=" font-medium pt-2">
            <span className=" text-[#B0B7C3]">{label}</span>
            <Link to={linkPath}><span className=" text-[#377DFF] cursor-pointer"> {linklabel}</span></Link>
        </section>
    )
}

