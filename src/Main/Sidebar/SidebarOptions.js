import { Fragment, useState } from "react/cjs/react.development";
import classes from './SidebarOptions.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from "react";
import { useLocation } from 'react-router-dom'

function SidebarOptions(props) {
    const [showSortOptions, setShowSortOptions] = useState(false)
    const location = useLocation()

    function toggleSortOptionsHandler() {
        setShowSortOptions(prevState => !prevState)
    }

    useEffect(() =>{
        setShowSortOptions(false)
    }, [location])

    if(props.page==='calendar') {
        return (
            <Fragment>
                <li className={classes['sidebar-option']}>
                    Daily
                </li>
                <li className={classes['sidebar-option']}>
                    Weekly
                </li>
                <li className={classes['sidebar-option']}>
                    Monthly
                </li>
                <li className={`${classes['sidebar-option']} ${classes['hide-option']}`}>
                    Hide Habits
                </li>
                <li className={`${classes['sidebar-option']} ${classes['hide-option']}`}>
                    Hide Goals
                </li>
            </Fragment>
        )
    }
    if(props.page==='habits-list') {
        const sortOptions = (
            <div className={`${classes['sort-options']} ${showSortOptions ? classes['shown'] : ''}`}>
                <li className={classes['sort-option']}>
                    Newest
                </li>
                <li className={classes['sort-option']}>
                    Oldest
                </li>
                <li className={classes['sort-option']}>
                    Success Rate
                </li>
                <li className={classes['sort-option']}>
                    Failure Rate
                </li>
            </div>
        )
        return (
        <Fragment>
            <li onClick={toggleSortOptionsHandler} className={classes['sidebar-option']}>
                Sort Habits
                <FontAwesomeIcon className={`${classes['icon']} ${showSortOptions ? classes['active']: ''}`} icon={faChevronDown}/>
            </li>
            {sortOptions}
        </Fragment>
        )
    }
    if(props.page==='stats') {
        return <p>asd</p>
    }
}

export default SidebarOptions