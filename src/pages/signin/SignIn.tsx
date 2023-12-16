import React, { useEffect } from "react";
import { useLoginUserMutation } from "../../redux/services/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthCardFooter, AuthCardHeader, AuthCardWrapper, AuthForm } from "../../components/AuthForm/AuthForm";
import { Formik } from "formik";
import * as Yup from 'yup';


const SignIn = () => {
    const auth = useSelector((state: { authUser: { isAuth: boolean } }) => state.authUser);
    console.log({ auth })
    const [login, { isLoading, error, isSuccess }] = useLoginUserMutation();
    const navigate = useNavigate()
    useEffect(() => {
        // @ts-ignore
        if (error) toast.error(error);
    }, [error])

    useEffect(() => {
        if (isSuccess) {
            toast.success("Login successfull")
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
                    <AuthForm title="Sign In" isLoading={isLoading} isSuccess={isSuccess} formikDatas={formikDatas} />
                )
                }
            </Formik>
            <AuthCardFooter label="Don't have an account?" linkPath="/registration" linklabel="Sign Up" />
        </AuthCardWrapper>
    )
}

export default SignIn;