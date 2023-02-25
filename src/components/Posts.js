import { useEffect, useState } from 'react'
import CardPost from './CardPost'
import styles from './posts.module.scss'
import { fetchData } from '@/servises/fetchStatic'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [btnClick, setBtnClick] = useState('Показать все')

    useEffect(() => {
        fetchData(4).then(res => setPosts(res))
    }, [])

    const showAllPosts = () => {
        fetchData(100).then(res => setPosts(res))
        setTimeout(() => {
            setBtnClick('Скрыть')
        }, 1000)
    }

    const hideAllPosts = () => {
        fetchData(8).then(res => setPosts(res))

        setBtnClick('Показать все')
    }

    return (
        <>
            <div className={styles.wrapper}>
                {posts &&
                    posts.map(post => <CardPost key={post.id} {...post} />)}
            </div>
            <div className={styles.wrapButton}>
                <div className={styles.btnBackground}>
                    <button
                        className={styles.buttons}
                        onClick={() =>
                            btnClick === 'Показать все'
                                ? showAllPosts()
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
