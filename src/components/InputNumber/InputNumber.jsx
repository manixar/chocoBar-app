import React from "react";
import Input from "../Input/Input";

const InputNumber = ({ placeholder, onChange,...props }) => {

    const handleChange = (value) => {

        value = value.replace(/\D/g, "");

        if (value.length > 11) return;

        onChange(value);
    };

    return (
        <div dir="rtl">
            <Input
                dir="rtl"
                type="tel"
                style={{ textAlign: "right" }}
                placeholder={placeholder || "شماره همراه"}
                onChange={handleChange}
                {...props}
            />
        </div>
    );
};

export default InputNumber;
