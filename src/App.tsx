import React from 'react';

import './App.css';
import MainFormContainer from "./MainFormContainer";

export const USER_DATA_STORAGE_KEY = "initUserData"

function App() {
    return (
        <div>
            <MainFormContainer/>
        </div>
    );
}

export default App;
