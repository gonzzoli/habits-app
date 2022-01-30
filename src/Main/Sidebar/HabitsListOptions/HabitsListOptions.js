import classes from './HabitsListOptions.module.scss'
import { useState, useEffect, useContext, Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import { OptionsContext } from '../../side-options-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
import OptionsModal from '../OptionsModal/OptionsModal'

function HabitsListOptions(props) {

    const [showSortOptions, setShowSortOptions] = useState(false)

    const location = useLocation()
    const optionsCtx = useContext(OptionsContext)
    
    const isSmallScreen = window.innerWidth <= 768

    function toggleSortOptions() {
        setShowSortOptions(prevState => !prevState)
    }

    useEffect(() =>{
        setShowSortOptions(false)
    }, [location])

    function sortChangeHandler(sort) {
        optionsCtx.changeHabitSortHandler(sort)
        setShowSortOptions(false)
    }

    const sortOptions = (
        <>
            <li onClick={()=>{sortChangeHandler('Newest')}} className={classes['sort-option']}>
                Newest
            </li>
            <li onClick={()=>{sortChangeHandler('Oldest')}} className={classes['sort-option']}>
                Oldest
            </li>
            <li onClick={()=>{sortChangeHandler('Success')}} className={classes['sort-option']}>
                Success Rate
            </li>
            <li onClick={()=>{sortChangeHandler('Failure')}} className={classes['sort-option']}>
                Failure Rate
            </li>
        </>
    )
    return (
        <ul className={classes['sidebar-options']}>
            <li onClick={toggleSortOptions} className={classes['sidebar-option']}>
                Sort Habits
                {!isSmallScreen && <FontAwesomeIcon className={`${classes['icon']} ${showSortOptions ? classes['active']: ''}`} icon={faChevronDown}/>}
            </li>
            {showSortOptions && window.innerWidth > 768 && sortOptions}
            {showSortOptions && window.innerWidth <= 768 && <OptionsModal from='habits-list' onCloseModal={toggleSortOptions}>
                {sortOptions}
            </OptionsModal>}
        </ul>
        )
}

export default HabitsListOptions