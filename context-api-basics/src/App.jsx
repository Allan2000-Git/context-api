import React, { useState } from 'react'
import './App.css'
import ComponentA from './components/ComponentA';

const FirstNameContext = React.createContext();
const LastNameContext = React.createContext();

function App() {

  const firstName="Allan";
  const lastName="Fernandes";

  return (
    <>
      {/*<FirstNameContext.Provider value={{firstName, lastName}}>
        <ComponentA/>
      </FirstNameContext.Provider> */  } 
      
      
      <FirstNameContext.Provider value={""}>
          <LastNameContext.Provider value={""}>
            <ComponentA/>
          </LastNameContext.Provider>
      </FirstNameContext.Provider>

    </>
  )
}

export default App
export {FirstNameContext, LastNameContext};