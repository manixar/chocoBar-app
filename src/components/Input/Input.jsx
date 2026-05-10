import styles from "./input.module.scss";

const Input = ({ type = "text", placeholder, onChange }) => {

    const handleOnChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };


    return (
        <div className={styles.inputContainer}>
            <input
                className={styles.customInput}
                onChange={handleOnChange}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
