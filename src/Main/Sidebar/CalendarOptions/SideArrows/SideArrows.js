import classes from './SideArrows.module.scss'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { OptionsContext } from '../../../side-options-context'

function SideArrows() {
    const optionsCtx = useContext(OptionsContext)

    function advanceCalendar() {
        optionsCtx.advanceCalendarHandler()
    }

    function retreatCalendar() {
        optionsCtx.retreatCalendarHandler()
    }


    return (
        <div className={classes['arrows-container']}>
            <FontAwesomeIcon onClick={retreatCalendar} className={classes['icon']} icon={faChevronLeft} />
            <FontAwesomeIcon onClick={advanceCalendar} className={classes['icon']} icon={faChevronRight} />
        </div>
    )
}

export default SideArrows