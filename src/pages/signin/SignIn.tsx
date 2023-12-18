import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthCardFooter, AuthCardHeader, AuthCardWrapper, AuthForm } from "../../components/AuthForm/AuthForm";
import { Formik } from "formik";
import * as Yup from 'yup';
import { loginUser } from "../../redux/actions/authActions";


const SignIn = () => {
    // @ts-ignore
    const { loading, userInfo, error, success } = useSelector((state) => state.authUserLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    console.log({error})
    useEffect(() => {
        // @ts-ignore
        if (error) toast.error(error);
        if (success) {
            toast.success("Registration successfull")
            navigate("/users")
        }
        return 
    }, [error, success])


    const handleSubmit = async (_values: { email: string, password: string }) => {
        // @ts-ignore
        dispatch(loginUser(_values))
    }


    return (
        <AuthCardWrapper>
            <AuthCardHeader title="Sign In" />
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .max(255)
                        .required('This field is required'),
                    password: Yup.string()
                        .min(4)
                        .required('This field is required')
                })}
                onSubmit={handleSubmit}
            >
                {(formikDatas) => (
                    <AuthForm title="Sign In" isLoading={loading} isSuccess={success} formikDatas={formikDatas} />
                )
                }
            </Formik>
            <AuthCardFooter label="Don't have an account?" linkPath="/registration" linklabel="Sign Up" />
        </AuthCardWrapper>
    )
}

export default SignIn;