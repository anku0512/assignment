import React, {useEffect, useState} from 'react';
import ContactForm from "./Form/ContactForm";
import UserDataForm from "./Form/UserDataForm";
import {uuid} from "uuidv4";
import Counter from "./Counter/Counter";
import TextEditor from "./Editor/TextEditor";
import {Box} from "@chakra-ui/react";
import {USER_DATA_STORAGE_KEY} from "./App";

export interface UserData {
    uuid: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    showUserDataJson: boolean;
}
function MainFormContainer() {

    const [userDataState, setUserDataState] = useState<UserData | undefined>()
    useEffect(() => {
        let x = localStorage.getItem(USER_DATA_STORAGE_KEY)
        if (!x){
            let initUserData = {
                uuid: crypto.randomUUID(),
                name: "",
                email: "",
                phone: "",
                address: "",
            showUserDataJson: false};

            localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(initUserData));
            console.log(JSON.stringify(initUserData))
            setUserDataState(initUserData)
        } else {
            setStateValue(JSON.parse(x))
        }

    }, []);
    function setStateValue(userData: UserData){
        let newData = {
            ...userDataState, ...userData
        }
        localStorage.setItem('initUserData', JSON.stringify(newData));
        setUserDataState(newData)
    }
    return (
        <Box sx={{
            display: 'grid',
            columnGap: 3,
            rowGap: 3,
            gridTemplateColumns: 'repeat(2, 1fr)',
            marginTop: 10,
            marginBottom: 10,
            overflow: "hidden",

            // justifyContent: 'center',

        }}>
            <Counter />
            <TextEditor />
            <ContactForm state={userDataState} setState={setStateValue}/>

            {userDataState && <UserDataForm state={userDataState} setState={setStateValue}/>}
        </Box>
    );
}

export default MainFormContainer;