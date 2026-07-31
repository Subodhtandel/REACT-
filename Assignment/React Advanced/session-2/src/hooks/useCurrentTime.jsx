import { useEffect, useState } from "react"

function useCurrentTime() {
    const[time,settime] =useState(new Date())

    useEffect(()=>{
        const interval = setInterval(()=>{
            settime(new Date())
        },1000)
        return () => clearInterval(interval)
    },[])

    return time


}
export default useCurrentTime