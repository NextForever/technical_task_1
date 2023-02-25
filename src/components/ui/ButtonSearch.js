const ButtonSearch = ({ text, className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    )
}

export default ButtonSearch
