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

const Filters = () => {
    return (
        <div className={styles.wrapper}>
            {listButtons.map((text, i) => (
                <ButtonSearch key={i} text={text} />
            ))}
        </div>
    )
}

export default Filters
