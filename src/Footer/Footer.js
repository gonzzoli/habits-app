import classes from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer className={classes['footer']}>
            <p>
            <a target='_blank' href='https://www.instagram.com/gonzalopozzoli/'>Gonzalo Pozzoli</a>
              - 2022 <FontAwesomeIcon className={classes['icon']} icon={faCopyright} /></p>
        </footer>
    )
}

export default Footer