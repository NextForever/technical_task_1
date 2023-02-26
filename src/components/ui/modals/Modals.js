import styles from './modals.module.scss'

const Modals = () => {
    const modalClose = () => {
        const blockModal = document.querySelector('#modalText')
        blockModal.classList.remove('visibleModal')
    }

    return (
        <div className={styles.modal} id='modalText'>
            <div className={styles.modalContainer}>
                <div className={styles.blockHeaderModal}>
                    <div
                        id='applicationModal'
                        className={styles.applicationModal}
                    >
                        Медецина
                    </div>
                    <div className={styles.closeModal} onClick={modalClose}>
                        x
                    </div>
                    <div id='regionModal' className={styles.regionModal}>
                        Россия , Москва
                    </div>
                    <h1 id='titleModal' className={styles.titleModal}></h1>
                </div>

                <div className={styles.blockCenterModal}>
                    <div className={styles.titleObjectModal}>
                        Объект внедрения
                        <div
                            id='objectModal'
                            className={styles.objectModal}
                        ></div>
                    </div>
                    <div className={styles.titleDirectionModal}>
                        Применяемое решение
                        <div
                            id='directionModal'
                            className={styles.directionModal}
                        ></div>
                    </div>
                    <div className={styles.titleDeveloperModal}>
                        Разработчик
                        <div
                            id='developerModal'
                            className={styles.developerModal}
                        ></div>
                    </div>
                </div>
                <div className={styles.blockFooterModal}>
                    <div className={styles.titleDescriptionModal}>Описание</div>
                    <p
                        id='descriptionModal'
                        className={styles.descriptionModal}
                    ></p>
                </div>
            </div>
        </div>
    )
}

export default Modals
