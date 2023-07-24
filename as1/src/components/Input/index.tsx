import React from "react";

type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    prefix?: React.ReactNode;
    placeholder?: string;
};

const Input = ({ onChange , prefix , placeholder}: InputProps) => {
    return (
        <div>
            {prefix&&prefix}
            <input onChange={onChange}
             placeholder={placeholder}
             className="w-full p-2 mr-2 border border-red-500" />
        </div>
    ) 
};
            
export default Input;