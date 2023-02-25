import { useEffect, useState } from 'react'
import CardPost from './CardPost'
import styles from './posts.module.scss'

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'http://localhost:3001/dataPost?_limit=8',
            )
            const data = await response.json()
            setPosts(data)
            console.log(posts)
        }
        fetchData()
    }, [])

    return (
        <div className={styles.wrapper}>
            {posts.map((post, i) => (
                <CardPost key={i} {...post} />
            ))}
        </div>
    )
}

export default Posts
