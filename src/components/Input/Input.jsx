import styles from "./input.module.scss";

const Input = ({ type = "text", placeholder, onChange, ...props }) => {

    const handleOnChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className={styles.inputContainer}>
            <input
                className={styles.customInput}
                type={type}
                placeholder={placeholder}
                onChange={handleOnChange}
                {...props}
            />
        </div>
    );
};

export default Input;
