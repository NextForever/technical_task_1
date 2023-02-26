import styles from './title.module.scss'

const Title = ({ filters }) => {
    return (
        <div className={styles.title} id='headerTitle'>
            Заголовок <span>({filters.length})</span>
        </div>
    )
}

export default Title
