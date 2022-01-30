import { useRef } from 'react'
import classes from './OptionsModal.module.scss'

function OptionsModal(props) {
    const blurRef = useRef()

    function checkBlurClick(e) {
        //Had to do this if because it failed on the logic, not sure why
        //consoled.logged(e.target !== blurRef.current) and it threw false
        // but the if would execute anyways. not sure what happened
        if(props.from === 'calendar') {
            if(e.target === blurRef.current) {
                props.onCloseModal()
            }
        } else if(props.from === 'habits-list') {
            if(e.target === blurRef.current) {
                props.onCloseModal()
            }
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