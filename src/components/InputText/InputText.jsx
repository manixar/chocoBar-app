import Input from "../Input/Input";

const InputText = ({placeholder , onChange, ...props}) => (
    <div>
        <Input type="text"
               placeholder={placeholder}
               onChange={onChange}
               {...props}/>
    </div>
)
export default InputText;