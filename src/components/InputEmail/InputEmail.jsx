import React from "react";
import Input from "../Input/Input";

const InputEmail = ({placeholder , onChange , ...props}) => (
    <div>
        <Input
            type='email'
            placeholder={placeholder}
            onChange={onChange}
            {...props}
        />
    </div>
);

export default InputEmail;
