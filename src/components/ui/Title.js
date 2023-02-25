import styles from './title.module.scss'

const Title = ({ text }) => {
    return (
        <div className={styles.title}>
            Заголовок <span>({text})</span>
        </div>
    )
}

export default Title
