import classes from './Nav.module.scss'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'



function Nav() {
    const [showLinks, setShowLinks] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth<=768)
    const blurRef = useRef()
    const containerRef = useRef()

    function checkWindowSize() {
        setIsSmallScreen(window.innerWidth <= 768)
    }

    function checkBlurClick(e) {
        if(e.target===blurRef.current) {
            disapearAnimation()
        }
    }
    useEffect(() => {
        window.addEventListener('resize', checkWindowSize)
        return () => {
            window.removeEventListener('resize', checkWindowSize)
        }
    })
    function disapearAnimation() {
        containerRef.current.classList.add(classes['dissapearing'])
        setTimeout(() =>{
            setShowLinks(false)
        },100)
    }
    
    const linksContainer = <div ref={containerRef} className={classes['links-container']}>
                {isSmallScreen && <div className={classes['icon']}>
                    <FontAwesomeIcon onClick={disapearAnimation} icon={faTimes} />
                </div>}
                <ul className={classes['links-list']}>
                    <li>
                        <NavLink to='/calendar' onClick={disapearAnimation} className={({isActive})=>`${classes['link']} ${isActive ? classes['active']:''}`}>Calendar</NavLink>
                    </li>
                    <li>
                        <NavLink to='/habits-list' onClick={disapearAnimation} className={({isActive})=>`${classes['link']} ${isActive ? classes['active']:''}`}>Habits List</NavLink>
                    </li>
                    <li>
                        <NavLink to='/stats' onClick={disapearAnimation} className={({isActive})=>`${classes['link']} ${isActive ? classes['active']:''}`}>My Stats</NavLink>
                    </li>
                </ul>
            </div>
    return (
        <nav id='nav'>
            <div className={classes['logo-container']}>
                <Link to='habits-list'><p>Habit <span>Crash</span></p></Link>
            </div>
            {!isSmallScreen && linksContainer}
            {isSmallScreen && <FontAwesomeIcon onClick={()=>{setShowLinks(true)}} className={classes['icon']} icon={faBars} />}
            {isSmallScreen&&showLinks&&<div ref={blurRef} onClick={checkBlurClick} className={classes['blur']}>
                {linksContainer}
            </div>}
        </nav>
    )
}

export default Nav