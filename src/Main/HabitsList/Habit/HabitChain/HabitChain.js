import classes from './HabitChain.module.scss'

function HabitChain(props) {
    function createCircles() {
        const chainData = props.chainData
        let circlesArray = []
        for(let i=0; i<6; i++) {
            if(chainData[i] === undefined) {
                circlesArray.unshift(<div key={Math.random()} className={`${classes['chain-circle']}`}></div>)
            }else if(chainData[i].completed) {
                circlesArray.unshift(<div key={Math.random()} title={new Date(chainData[i].date).toLocaleDateString()} className={`${classes['chain-circle']} ${classes['done']}`}></div>)
            } else {
                circlesArray.unshift(<div key={Math.random()} title={new Date(chainData[i].date).toLocaleDateString()} className={`${classes['chain-circle']} ${classes['skipped']}`}></div>)
            }
        }
        return circlesArray
    }
    const circles = createCircles()
    return (
        <div className={classes['habit-chain']}>
            {circles}
        </div>
    )
}

export default HabitChain