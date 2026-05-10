import styles from './layoutAuth.module.scss';
import Image from "next/image";

const LayoutAuth = ({children}) => {
    return (
        <div className={styles.layoutAuthContainer}>
            <Image
                src="/img/logo.png"
                alt="auth image"
                width={400}
                height={100}
            />
            <div>
                {children}
            </div>
        </div>
            )
}
export default LayoutAuth