import classes from './CalendarOptions.module.scss'
import { useEffect, useState, Fragment, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { MONTHS, OptionsContext } from '../../side-options-context'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SOME_YEARS = [2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010]

function CalendarOptions(props) {
    const [showMonthOptions, setShowMonthOptions] = useState(false)
    const [showYearOptions, setShowYearOptions] = useState(false)
    
    const location = useLocation()
    const optionsCtx = useContext(OptionsContext)

    useEffect(() =>{
        setShowMonthOptions(false)
        setShowYearOptions(false)
    }, [location])

    function toggleMonthOptions() {
        setShowMonthOptions(prevState => !prevState)
        setShowYearOptions(false)
    }

    function toggleYearOptions() {
        setShowYearOptions(prevState => !prevState)
        setShowMonthOptions(false)
    }

    function monthChangeHandler(month) {
        optionsCtx.changeDateMonthHandler(month)
    }

    function yearChangeHandler(year) {
        optionsCtx.changeDateYearHandler(year)
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
        
    return (
        <Fragment>
            <li onClick={toggleMonthOptions} className={`${classes['sidebar-option']} ${classes['selection']}`}>
                <p>{MONTHS[optionsCtx.startDate.getMonth()]}</p>
                <FontAwesomeIcon className={`${classes['icon']} ${showMonthOptions ? classes['active']: ''}`} icon={faChevronDown} icon={faChevronDown} />
            </li>
            {showMonthOptions && monthOptions}
            <li onClick={toggleYearOptions} className={`${classes['sidebar-option']} ${classes['selection']}`}>
                <p>{optionsCtx.startDate.getFullYear()}</p>
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

export default CalendarOptions