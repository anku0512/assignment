import React from 'react';
import {Box, ButtonGroup, Heading} from "@chakra-ui/react";
import {UserData} from "../MainFormContainer";
import {Formik} from "formik";
import {InputControl, ResetButton, SubmitButton} from "formik-chakra-ui";
import * as Yup from "yup";
import {setMaxIdleHTTPParsers} from "node:http";

interface UserDataFormProps {
    state: UserData | undefined,
    setState: Function,
}



const validationSchema = Yup.object({

    email: Yup.string().required(),
    phone: Yup.string().required(),
    address: Yup.string().required(),
});
function ContactForm({state, setState}: UserDataFormProps) {
    const initialValues = {
        email: state?.email,
        phone: state?.phone,
        addresss: state?.address,
    }
    const onSubmit = (values: any) => {
        console.log("onSubmit called")
        console.log(values)

        setState({
            ...state,
                email: values.email,
                phone: values.phone,
                address: values.address
        })
        //window.alert(JSON.stringify(values, null, 2));
        return true;
    };
    return (
        <Box className='boxLayout' >

            <Heading as='h3' size='lg'> Contact Form </Heading>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, formikHelpers) => {
                    console.log("form submitted")
                    onSubmit(values);
                    formikHelpers.setSubmitting(false)
                }}
                validationSchema={validationSchema}
            >
                {({handleSubmit, values, errors}) => (
                    <Box
                        borderWidth="1px"
                        rounded="lg"
                        shadow="1px 1px 3px rgba(0,0,0,0.3)"
                        width="80%"
                        p={6}
                        m="10px auto"
                        as="form"
                        onSubmit={handleSubmit as any}
                    >
                        <InputControl name="email" label="Email"/>
                        <InputControl name="phone" label="Phone" />
                        <InputControl name="address" label="address" />

                        <ButtonGroup>
                            <SubmitButton isLoading={false}>Submit</SubmitButton>
                        </ButtonGroup>

                        {/*<Box as="pre" marginY={10}>*/}
                        {/*    {JSON.stringify(values, null, 2)}*/}
                        {/*    <br/>*/}
                        {/*    {JSON.stringify(errors, null, 2)}*/}
                        {/*</Box>*/}
                    </Box>
                )}
            </Formik>
        </Box>

    );
}

export default ContactForm;