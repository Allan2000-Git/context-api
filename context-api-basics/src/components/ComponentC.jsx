import React,{useContext} from 'react'
import { FirstNameContext, LastNameContext } from '../App'

const ComponentC = () => {

    // const {firstName, lastName}  = useContext(FirstNameContext);

    return (
    <>
        // <h1>Hello, {firstName} {lastName}</h1>


        <FirstNameContext.Consumer>
        {(firstName)=>{
            return(
                <LastNameContext.Consumer>
                {(lastName)=>{
                    return(
                            <h1>Hello, {firstName}{lastName}</h1>
                        )
                    }
                }
                </LastNameContext.Consumer>
            )
            }
        }
        </FirstNameContext.Consumer>

    </>
    )
}

export default ComponentC
