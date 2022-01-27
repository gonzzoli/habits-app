import classes from './SidebarOptions.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, Fragment, useState, useContext } from "react";
import { useLocation } from 'react-router-dom'
import { OptionsContext, MONTHS } from '../side-options-context';

const SOME_YEARS = [2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010]

function SidebarOptions(props) {
    const [showSortOptions, setShowSortOptions] = useState(false)
    const [showMonthOptions, setShowMonthOptions] = useState(false)
    const [showYearOptions, setShowYearOptions] = useState(false)

    const location = useLocation()
    const optionsCtx = useContext(OptionsContext)
    
    function toggleSortOptions() {
        setShowSortOptions(prevState => !prevState)
    }

    function toggleMonthOptions() {
        setShowMonthOptions(prevState => !prevState)
        setShowYearOptions(false)
    }

    function toggleYearOptions() {
        setShowYearOptions(prevState => !prevState)
        setShowMonthOptions(false)
    }

    useEffect(() =>{
        setShowSortOptions(false)
        setShowMonthOptions(false)
        setShowYearOptions(false)
    }, [location])

    function sortChangeHandler(sort) {
        optionsCtx.changeHabitSortHandler(sort)
    }

    function monthChangeHandler(month) {
        optionsCtx.changeMonthShowingHandler(month)
    }

    function yearChangeHandler(year) {
        optionsCtx.changeYearShowingHandler(year)
    }

    function timeframeChangeHandler(timeframe) {
        optionsCtx.changeCalendarTimeframeHandler(timeframe)
    }

    const monthOptions = MONTHS.map(month =>
    <li onClick={() => {monthChangeHandler(month)}} key={month} className={`${classes['sidebar-option']} ${classes['option']}`}>
        <p>{month}</p>
    </li>
    )

    const yearOptions = SOME_YEARS.map(year => 
        <li onClick={() => {yearChangeHandler(year)}} key={year} className={`${classes['sidebar-option']} ${classes['option']}`}>
            <p>{year}</p>
        </li>
        )
    if(props.page==='calendar') {
        return (
            <Fragment>
                <li onClick={toggleMonthOptions} className={`${classes['sidebar-option']} ${classes['selection']}`}>
                    <p>{MONTHS[optionsCtx.monthShowing - 1]}</p>
                    <FontAwesomeIcon className={`${classes['icon']} ${showMonthOptions ? classes['active']: ''}`} icon={faChevronDown} icon={faChevronDown} />
                </li>
                {showMonthOptions && monthOptions}
                <li onClick={toggleYearOptions} className={`${classes['sidebar-option']} ${classes['selection']}`}>
                    <p>{optionsCtx.yearShowing}</p>
                    <FontAwesomeIcon className={`${classes['icon']} ${showYearOptions ? classes['active']: ''}`} icon={faChevronDown} icon={faChevronDown} />
                </li>
                {showYearOptions && yearOptions}
                <li onClick={()=>{timeframeChangeHandler('weekly')}} className={classes['sidebar-option']}>
                    Weekly
                </li>
                <li onClick={()=>{timeframeChangeHandler('monthly')}} className={classes['sidebar-option']}>
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
    if(props.page==='stats') {
        return <p>asd</p>
    }
}

export default SidebarOptions