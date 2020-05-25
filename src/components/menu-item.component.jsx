import React from 'react';
import '../assets/main.css';



const MenuItem = ({title,imageUrl,id}) =>(
    <div key={id} className="flex flex-col w-full md:w-1/3 h-auto pt-8 px-3 md:px-8 flex-grow justify-center items-center">
        
        <div className="flex flex-row w-full h-auto bg-white rounded-md justify-center items-center transition-shadow duration-75 ease-in hover:shadow-2xl">
            
            <div  className="flex w-1/2 h-auto py-8 px-8">
                <div style={ { backgroundImage: `url(${imageUrl})` } } className="flex h-32 md:h-56 w-full rounded-md bg-cover bg-center ">

                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 h-full px-2 md:px-4">
                <div className="flex font-bold text-2xl">
                    {title}
                </div>
                <div className="flex tracking-widest bg-indigo-700 px-5 py-2 my-4 rounded-md text-xs md:text-sm text-white cursor-pointer transition duration-200 ease-in transform hover:-translate-y-1 hover:scale-105">
                    SHOP NOW
                </div>
            </div>
            
        </div>
    </div>

    );


export default MenuItem;