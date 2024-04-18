import { useState } from 'react'
import './styles.scss'

export const App = () => {
    const [count,setCount] = useState(0)
    const handleClick = () => {
        setCount(prevState => prevState + 1)
    }
    return <div>
        <span>{count}</span>
        <button onClick={handleClick}>Press</button>
    </div>
}