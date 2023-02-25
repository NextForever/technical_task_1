import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styles from './cardPost.module.scss'

export default function CardPost({ id, country, city, title, created }) {
    const date = new Date(created)
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }

    const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date)

    const HandleOpenModal = e => {
        let target = e.target.value
        console.log(target)
    }

    return (
        <div className={styles.wrapper}>
            <Card
                sx={{ minWidth: 248, minHeight: 244 }}
                style={{ borderRadius: 'unset' }}
            >
                <CardContent>
                    <Typography
                        className={styles.countryCity}
                    >{`${country}, ${city}`}</Typography>
                    <Typography className={styles.title}>{title}</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size='small'
                        className={styles.viewButton}
                        value={id}
                        onClick={HandleOpenModal}
                    >
                        Посмотреть
                    </Button>
                </CardActions>
            </Card>
            <div className={styles.addDate}>{`добавлено ${formattedDate}`}</div>
        </div>
    )
}
