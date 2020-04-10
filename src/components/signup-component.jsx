import React from 'react';
import FormInput from './form-input.component'
import {auth,createUserProfileData} from '../firebase/firebase.util'

class SignUp extends React.Component{

    constructor()
    {
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange=(event)=>{

        const {name,value} = event.target;
        this.setState({
            [name] : value
        })

    }

    handleSubmit= async (event)=>{
        console.log(this.state);
        const {displayName,email,password,confirmPassword} = this.state;

        if(password === confirmPassword)
        {
            try{
                const {user} = await auth.createUserWithEmailAndPassword(email,password);
                await createUserProfileData(user,{displayName});
            }
            catch(error)
            {
                console.log(`Error while creating new user! ${error.message}`);
            }
        }
        this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        })
    }


    render(){
        return(

            <div className="flex flex-row w-full h-full justify-center items-center px-10 md:px-24">
                <div className=" flex flex-col w-full h-full bg-white rounded-md shadow-2xl">
                    <div className=" bg-gray-300 flex flex-col w-full h-16 md:h-20 justify-center items-center rounded-t-md ">
                        <span className="flex font-bold text-2xl text-gray-800">
                            Sign Up / Register
                        </span>
                    </div>
                    <div className="flex flex-col flex-1 w-full ">
                        <form className="flex flex-wrap h-full w-full" action="">
                            <div className="flex flex-col w-full px-4 py-4 md:px-6 md:py-6 justify-center">

                                <FormInput label="Display Name" handleChange={this.handleChange} name="displayName" value={this.state.displayName} type="text" />

                            </div>
                            <div className="flex flex-col w-full px-4 py-4 md:px-6 md:py-6 justify-center">

                                <FormInput label="Email" handleChange={this.handleChange} name="email" value={this.state.email} type="text" />
                                
                            </div>
                            <div className="flex flex-col  w-full px-4 py-4 md:px-6 md:py-6 ">
                                 
                                 <FormInput label="Password" handleChange={this.handleChange} name="password" value={this.state.password} type="password" />
                                
                            </div>
                            <div className="flex flex-col  w-full px-4 py-4 md:px-6 md:py-6 ">
                                 
                                 <FormInput label="Confirm Password" handleChange={this.handleChange} name="confirmPassword" value={this.state.confirmPassword} type="password" />
                                
                            </div>
                            <div className="bg-indigo-500 flex flex-row  w-full cursor-pointer justify-center items-center rounded-b-md py-4">
                                
                                <span onClick={this.handleSubmit} className="font-black text-xl text-white ">Sign Up</span>
    
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        );
    }
}

export default SignUp;