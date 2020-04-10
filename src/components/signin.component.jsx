import React from 'react';
import googleLogo from '../assets/search.svg';
import FormInput from './form-input.component.jsx';
import {signInWithGoogle} from '../firebase/firebase.util'

class SignIn extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            email:'',
            password:''
        }

    }

    handleSubmit = (event)=>{
        this.setState({
            email:'',
            password:''
        });
    }


    handleChange = (event)=>{
        const {name,value} = event.target;
        console.log(`Handle Changed triggered - Name: ${name}  Value : ${value} `);
        this.setState({
             [name] : value  
        })
    }

    render()
    {
        return(
            <div className="flex flex-row w-full h-full justify-center items-center md:px-32 md:py-40">
                <div className=" flex flex-col w-full h-full bg-white rounded-md shadow-2xl">
                    <div className=" bg-gray-300 flex flex-col w-full h-10 md:h-20 justify-center items-center rounded-t-md ">
                        <span className="flex font-bold text-2xl text-gray-800">
                            Sign in
                        </span>
                    </div>
                    <div className="flex flex-col flex-1 w-full ">
                        <form className="flex flex-wrap h-full w-full" action="">
                            <div className="flex flex-col w-full md:px-6 md:py-6 justify-center">

                                <FormInput label="Email" handleChange={this.handleChange} name="email" value={this.state.email} type="text" />
                                
                            </div>
                            <div className="flex flex-col  w-full md:px-6 md:py-6 ">
                                 
                                 <FormInput label="Password" handleChange={this.handleChange} name="password" value={this.state.password} type="password" />
                                
                            </div>
                            <div className="flex flex-row  w-full cursor-pointer">
                                <div className=" flex flex bg-indigo-500 w-1/3 h-full justify-center items-center rounded-bl-md md:py-6 ">
                                    <span onClick={this.handleSubmit} className="font-black text-xl text-white ">Sign In</span>
                                </div>
                                <div className="flex flex bg-gray-200  w-2/3 h-full justify-center items-center rounded-br-md md:py-6 ">
                                    <span className="flex flex-row font-black text-xl " onClick={signInWithGoogle}>
                                        <div className="flex">Sign In with </div> 
                                        <img className="flex h-6 w-6 md:ml-2" src={googleLogo} alt=""/>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;