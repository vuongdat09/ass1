import { Button } from "..";
import {useDispatch, useSelector } from "react-redux";

const Counter = ()=>{
    const dispatch = useDispatch()
    const {count} = useSelector((state:any)=> state.counter)
    return (
        <div>
            Counter: {count}
            <Button type="primary" onClick={()=> dispatch({type:"INCREMENT"})}>
                increment
            </Button>   

            <Button type="primary" onClick={()=> dispatch({type:"DECREMENT"})}>
                Decrement
            </Button>

            <Button type="primary" onClick={()=> dispatch({type:"INCRESE" , paload:10})}>
                increse
            </Button>
        </div>
    )
}

export default Counter 