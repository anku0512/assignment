import React from 'react';

import './App.css';
import Counter from "./Counter/Counter";

import {Box} from "@chakra-ui/react";
import TextEditor from "./Editor/TextEditor";
import MainFormContainer from "./MainFormContainer";

export const USER_DATA_STORAGE_KEY = "user_data_key"

function App() {
  return (
      <div>
          <MainFormContainer />
      </div>
  );
}

export default App;
