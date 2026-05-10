import React from "react";
import Input from "../Input/Input";

const InputEmail = ({placeholder , onChange}) => (
    <div>
        <Input
            type='email'
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
);

export default InputEmail;
