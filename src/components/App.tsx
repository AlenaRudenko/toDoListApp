import { useState } from 'react'
import classes from './App.module.scss'

export const App = () => {
    const [count,setCount] = useState(0)
    const handleClick = () => {
        setCount(prevState => prevState + 1)
    }
    return <div>
        <h1>hello 1111ss11fvfsawwdads</h1>
        <span>{count}</span>
        <div className={classes.button} onClick={handleClick}>Press</div>
    </div>
}