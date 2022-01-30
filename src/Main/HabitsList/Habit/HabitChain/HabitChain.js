import classes from './HabitChain.module.scss'

function HabitChain(props) {
    function createCircles() {
        //Working with random data for now, but properly prepared to receive
        //real chainData from the habit
        const chainData = props.chainData
        let circlesArray = []
        let rand;
        for(let i=0; i<6; i++) {
            /*if(chainData[i] === undefined) {
                circlesArray.unshift(<div key={Math.random()} className={`${classes['chain-circle']}`}></div>)
            }else*/
            rand = Math.random()
            if(rand>0.5) {
                circlesArray.unshift(<div key={rand} title={new Date().toLocaleDateString()} className={`${classes['chain-circle']} ${classes['done']}`}></div>)
            } else {
                circlesArray.unshift(<div key={rand} title={new Date().toLocaleDateString()} className={`${classes['chain-circle']} ${classes['skipped']}`}></div>)
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