import styles from './Heading.module.css';
export function Heading() {
    const classes = `${styles.heading} ${styles.cyan}`
    return <h1 className={classes}>Olá mundo!</h1>;

    //OU FAZER ASSIM:
    //return <h1 className={`${styles.heading} ${styles.cyan}`}>Olá mundo!</h1>;
}
