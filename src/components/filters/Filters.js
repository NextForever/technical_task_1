import { useEffect, useState } from 'react'
import ButtonSearch from '../ui/button/ButtonSearch'
import { fetchAllData, filterFetchData } from '@/servises/fetchStatic'

import styles from './filters.module.scss'

const Filters = ({ filters, setFilters }) => {
    const [listButton, setListButton] = useState([])
    const [filrerArr, setFilrerArr] = useState([])

    const filterQuery = e => {
        const fiterText = e.target.innerHTML
        const newFilters = [...filrerArr, fiterText]
        setFilrerArr(newFilters)

        filterFetchData(newFilters).then(res => setFilters(res))
    }
    console.log(filrerArr)

    useEffect(() => {
        fetchAllData().then(res => setListButton(res))
    }, [])

    const uniqueList = listButton.filter((item, index) => {
        return (
            listButton.findIndex(
                obj => obj.application === item.application,
            ) === index
        )
    })

    const clearFilter = () => {
        setFilters([])
        setFilrerArr([])
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.filter}>
                {uniqueList.map((text, i) => (
                    <ButtonSearch
                        key={i}
                        text={text.application}
                        className={styles.buttons}
                        onClick={filterQuery}
                    />
                ))}
            </div>
            <button className={styles.clearButton} onClick={clearFilter}>
                <span className={styles.clearButtonText}>
                    СБРОСИТЬ ВСЕ ФИЛЬТРЫ
                </span>
            </button>
        </div>
    )
}

export default Filters
