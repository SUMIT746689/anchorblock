import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { AuthCardFooter, AuthCardHeader, AuthCardWrapper, AuthForm } from "../../components/AuthForm/AuthForm";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";


const SignUp = () => {
    // @ts-ignore
    const { loading, userInfo, error, success } = useSelector((state) => state.authUserRegister)
    const dispatch = useDispatch()
    // const [login, { isLoading, error, isSuccess }] = useRegisterUserMutation();
    const navigate = useNavigate();
    useEffect(() => {
        // @ts-ignore
        if (error) toast.error(error);
        if (success) {
            toast.success("Registration successfull")
            navigate("/users")
        }
    }, [error, success])


    const handleSubmit = async (_values: { email: string, password: string }) => {
        // @ts-ignore
        dispatch(registerUser(_values))
        // login(_values)
        //     .unwrap()
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
                    <AuthForm title="Sign Up" withProgressBar={true} isLoading={loading} isSuccess={success} formikDatas={formikDatas} />
                )
                }
            </Formik>
            <AuthCardFooter label="Already have an account?" linkPath="/login" linklabel="Sign In" />
        </AuthCardWrapper>
    )
}

export default SignUp;