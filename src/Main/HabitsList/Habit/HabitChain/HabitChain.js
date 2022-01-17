import classes from './HabitChain.module.scss'

function HabitChain(props) {
    const chainData = [true, true, true, false,true, false, true,]
    const circles = chainData.map(data => {
        if(data) {
            return <div key={Math.random()} className={`${classes['chain-circle']} ${classes['done']}`}></div>
        }else {
            return <div key={Math.random()} className={`${classes['chain-circle']} ${classes['skipped']}`}></div>
        }
    })
    return (
        <div className={classes['habit-chain']}>
            {circles}
        </div>
    )
}

export default HabitChain