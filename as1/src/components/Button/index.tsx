import React from "react";
import './Button.css'



type Button = {
    children: React.ReactNode; 
    type?: "dager"| "primary";
    dager?: boolean;
    primary?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
};


const Button = ({ children, type, icon ,onClick }: Button) => {
    return(
        <button  onClick={onClick}
        className={`p-2 border border-gray-400 rounded,
                    ${type === "primary" && "bg-blue-500 text-white"},
                    ${type === "dager" && "bg-red-500 text-white"}  `}>
            {icon && icon}
            {children}
        </button>
        )
};

export default Button;
   