import styles from './formControl.module.scss';

const FormControl = ({children}) => {
    return (
<div className={styles.formControlContainer}>
    {children}
</div>
    )
}
export default FormControl;
