import classes from './HabitsListOptions.module.scss'
import { useState, useEffect, useContext, Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import { OptionsContext } from '../../side-options-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'

function HabitsListOptions(props) {

    const [showSortOptions, setShowSortOptions] = useState(false)

    const location = useLocation()
    const optionsCtx = useContext(OptionsContext)
    
    function toggleSortOptions() {
        setShowSortOptions(prevState => !prevState)
    }

    useEffect(() =>{
        setShowSortOptions(false)
    }, [location])

    function sortChangeHandler(sort) {
        optionsCtx.changeHabitSortHandler(sort)
    }

    const sortOptions = (
        <div className={`${classes['sort-options']} ${showSortOptions ? classes['shown'] : ''}`}>
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
        </div>
    )

    return (
        <Fragment>
            <li onClick={toggleSortOptions} className={classes['sidebar-option']}>
                Sort Habits
                <FontAwesomeIcon className={`${classes['icon']} ${showSortOptions ? classes['active']: ''}`} icon={faChevronDown}/>
            </li>
            {sortOptions}
        </Fragment>
        )
}

export default HabitsListOptions