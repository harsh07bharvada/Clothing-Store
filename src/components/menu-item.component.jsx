import React from 'react';
import '../assets/main.css';



const MenuItem = ({title,imageUrl,id}) =>{

    
    return (

        
        <div className="w-full md:w-1/3 h-56 md:h-auto  py-2 px-4 flex flex-col flex-grow justify-center items-center ">
            
            <div className="flex flex-row m w-full h-full bg-white rounded-md shadow-md justify-center items-center transition-shadow duration-75 ease-in hover:shadow-2xl">
                
                <div style={ { backgroundImage: `url(${imageUrl})` } } className="flex w-1/2 h-full bg-cover bg-top">
                    
                </div>
                <div className="flex flex-col justify-center items-center w-1/2 h-full ">
                    <div className="flex font-bold text-2xl">
                        {title}
                    </div>
                    <div className="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex tracking-widest bg-indigo-700 px-5 py-2 my-4 rounded-md text-sm text-white">
                        SHOP NOW
                    </div>
                </div>
                
            </div>
        </div>

    );

}

export default MenuItem;