import classes from './DeleteModal.module.scss'
import { createPortal } from 'react-dom'
import { useRef, useState } from 'react/cjs/react.development'

function DeleteModal(props) {
    const blurRef = useRef()
    const [deletingHabit, setDeletingHabit] = useState(false)

    function checkBlurClick(e) {
        if(e.target === blurRef.current) {
            props.onCloseModal()
        }
    }

    function deleteHabit() {
        setDeletingHabit(true)
        setTimeout(() => {
            props.onDeleteHabit()
        }, 1000)
    }
    return createPortal((
        <div ref={blurRef} className={classes['blur']} onClick={checkBlurClick}>
            <div className={classes['modal-container']}>
                <p>Sure you want to delete the habit?</p>
                {deletingHabit ? <p style={{textAlign: 'center'}}>Deleting...</p> : 
                <div className={classes['buttons']}>
                    <button onClick={props.onCloseModal}>No, keep it</button>
                    <button onClick={deleteHabit} className={classes['confirm']}>Yeah, burn it</button>
                </div>}
            </div>
        </div>
    ), document.getElementById('modal-portal'))
}

export default DeleteModal