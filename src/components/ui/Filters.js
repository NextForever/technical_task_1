import ButtonSearch from './ButtonSearch'
import styles from './filters.module.scss'

const listButtons = [
    'РИТЕЙЛ ',
    'ФИНАНСЫ ',
    'ПРОМЫШЛЕННОСТЬ',
    'ЛОГИСТИКА И ПЕРЕВОЗКИ ',
    'ТЕЛЕКОМ ',
    'ИНТЕРНЕТ ВЕЩЕЙ',
    'FOODTECH ',
    'СЕЛЬСКОЕ ХОЗЯЙСТВО И АГРОПРОМЫШЛЕННОСТЬ ',
    'НЕДВИЖИМОСТЬ И ДЕВЕЛОПМЕНТ ',
    'МЕДИЦИНА ',
    'ОБУЧЕНИЕ',
    'ГОСУДАРСТВЕННЫЙ СЕКТОР',
    'ГОРОДСКАЯ СФЕРА ',
    'СОЦИАЛЬНАЯ СФЕРА ',
    'БЕЗОПАСНОСТЬ ',
    'ПРОЧЕЕ',
]

const filterQuery = e => {
    console.log(e.target.innerHTML)
}

const Filters = () => {
    return (
        <>
            <div className={styles.wrapper}>
                {listButtons.map((text, i) => (
                    <ButtonSearch
                        key={i}
                        text={text}
                        className={styles.buttons}
                        onClick={filterQuery}
                    />
                ))}
            </div>
            <div></div>
        </>
    )
}

export default Filters
