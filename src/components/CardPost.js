import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styles from './cardPost.module.scss'

export default function CardPost({ country, city, title, created }) {
    const date = new Date(created)
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }

    const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date)

    return (
        <div className={styles.wrapper}>
            <Card sx={{ minWidth: 248, minHeight: 244 }}>
                <CardContent>
                    <Typography className=''>{`${country}, ${city}`}</Typography>
                    <Typography className=''>{title}</Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Посмотреть</Button>
                </CardActions>
            </Card>
            <div>{`добавлено ${formattedDate}`}</div>
        </div>
    )
}
