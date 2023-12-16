import React, { useEffect } from "react";
import { CompanyLogo } from "../../components/Logo/Logo";
import { authApi, useRegisterUserMutation } from "../../redux/services/auth";
import { toast } from "react-toastify";
import { AuthCardFooter, AuthCardHeader, AuthCardWrapper, AuthForm } from "../../components/AuthForm/AuthForm";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";


const SignUp = () => {

    const [login, { isLoading, error, isSuccess }] = useRegisterUserMutation();
    const navigate = useNavigate();
    useEffect(() => {
        // @ts-ignore
        if (error) toast.error(error);
    }, [error])

    useEffect(() => {
        if (isSuccess) {
            toast.success("Registration successfull")
            navigate("/users")
        }
    }, [isSuccess])

    const handleSubmit = async (_values: { email: string, password: string }) => {
        login(_values)
            .unwrap()
        // .then((res) => {
        //     console.log({ res })
        //     alert("successfull")
        // })
        // .catch(() =>
        //     alert("there was an error"),
        // );
    }

    return (
        <AuthCardWrapper>
            <AuthCardHeader title="Sign Up" />
            <Formik
                // validateOnMount={true}
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
                    <AuthForm title="Sign Up" withProgressBar={true} isLoading={isLoading} isSuccess={isSuccess} formikDatas={formikDatas} />
                )
                }
            </Formik>
            <AuthCardFooter label="Already have an account?" linkPath="/login" linklabel="Sign In" />
        </AuthCardWrapper>
    )
}

export default SignUp;