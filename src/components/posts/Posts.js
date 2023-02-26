import { useEffect, useState } from 'react'
import CardPost from '../cardPost/CardPost'
import styles from './posts.module.scss'
import { fetchData, fetchAllData } from '@/servises/fetchStatic'
import Modals from '../ui/modals/Modals'

const Posts = ({ filters, setFilters }) => {
    const [btnClick, setBtnClick] = useState('Показать все')

    useEffect(() => {
        fetchData(8).then(res => setFilters(res))
    }, [])

    const fetchShowAll = () => {
        fetchAllData().then(res => setFilters(res))
        setTimeout(() => {
            setBtnClick('Скрыть')
        }, 1000)
    }

    const hideAllPosts = () => {
        fetchData(8).then(res => setFilters(res))
        setBtnClick('Показать все')
    }

    return (
        <>
            <Modals />
            <div className={styles.wrapper}>
                {filters &&
                    filters.map(post => <CardPost key={post.id} {...post} />)}
            </div>
            <div className={styles.wrapButton}>
                <div className={styles.btnBackground}>
                    <button
                        className={styles.buttons}
                        onClick={() =>
                            btnClick === 'Показать все'
                                ? fetchShowAll()
                                : hideAllPosts()
                        }
                    >
                        {btnClick}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Posts
