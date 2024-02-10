import React, {useEffect} from 'react';
import {Box, ButtonGroup, Heading, Textarea, Input} from "@chakra-ui/react";
import {UserData} from "../MainFormContainer";
import {Formik} from "formik";
import {InputControl, ResetButton, SubmitButton} from "formik-chakra-ui";

import * as Yup from "yup";


interface ContactFormProps {
    state: UserData | undefined,
    setState: Function,
}


const validationSchema = Yup.object({
    name: Yup.string().required(),
    uuid: Yup.string().required(),

});

function UserDataForm({state, setState}: ContactFormProps) {
    console.log(state)
    console.log(state?.uuid)
    const initialValues = {
        name: state?.name,
        uuid: state ? state.uuid : "defult",
    };
    const onSubmit = (values: any) => {
        console.log("onSubmit called")
        console.log(values)

        setState({
            ...state,
            name: values.name
        });
        return true;
    };


    return (
        <Box className='boxLayout'>

            <Heading as='h3' size='lg'>User Data Form</Heading>
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
                        width= "80%"
                        p={6}
                        m="10px auto"
                        as="form"
                        onSubmit={handleSubmit as any}
                    >
                        <Box as="pre" marginY={10} overflow='scroll'>
                            {JSON.stringify(state, null, 2)}
                        </Box>

                        <InputControl name="name" label="Name"/>
                        <InputControl name="uuid" label="Uuid" />


                        <ButtonGroup>
                            <SubmitButton>Submit</SubmitButton>
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

export default UserDataForm;