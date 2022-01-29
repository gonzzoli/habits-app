import { useRef } from 'react'
import classes from './OptionsModal.module.scss'

function OptionsModal(props) {
    const blurRef = useRef()

    function checkBlurClick(e) {
        if(e.target !== blurRef.current) {
            props.onCloseModal()
        }
    }

    return (
    <div ref={blurRef} className={classes['blur']} onClick={checkBlurClick}>
        <div className={classes['modal-container']}>
            {props.children}
        </div>
    </div>
    )
}

export default OptionsModal