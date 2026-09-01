import styles from './Heading.module.css';
export function Heading(props) {
  return <h1 className={styles.heading}>{props.children}</h1>;
  //OU FAZER ASSIM:
  //const classes = `${styles.heading} ${styles.cyan}`
  //return <h1 className={classes}>Olá mundo!</h1>;
}
