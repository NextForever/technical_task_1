import styles from './buttonSearch.module.scss'

const ButtonSearch = ({ text }) => {
    return <button className={styles.buttons}>{text}</button>
}

export default ButtonSearch
