import React from 'react';
import SignIn from '../components/signin.component'

class SignInSignUp extends React.Component{
    // constructor(props)
    // {
    //     super(props);
    // }

    render()
    {
        return(
            <div className="flex bg-gray-100 md:flex-row w-full h-wrap justify-center items-center">
                
                <div className="flex flex-col w-full md:w-1/2 h-full justify-center items-center">
                    <SignIn/>
                </div>
                <div className="flex flex-col w-full md:w-1/2 h-full justify-center items-center">
                    Right
                </div>
            </div>
        )
    }
}

export default SignInSignUp;