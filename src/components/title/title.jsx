import styles from '../title/Title.module.css'

//exemplo de componente react com children (filho)

function Title (props) {
    return (
        <h1 className={styles.title}>
        {props.children}
     </h1>
    )
}

export default Title