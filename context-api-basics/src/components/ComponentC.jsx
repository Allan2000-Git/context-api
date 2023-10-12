import React,{useContext} from 'react'
import { FirstNameContext, LastNameContext } from '../App'

const ComponentC = () => {

    // const {firstName, lastName}  = useContext(FirstNameContext);

    return (
    <div>
        // <h1>Hello, {firstName} {lastName}</h1>


        <FirstNameContext.Consumer>
        {
            (firstName)=>{
                return(
                    <LastNameContext.Consumer>
                    {
                        (lastName)=>{
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

    </div>
    )
}

export default ComponentC
