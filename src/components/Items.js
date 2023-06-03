import { React, useEffect, useState } from "react";
import CardItem  from "./CardItem";
import {cakesData} from "../data/cakesData";

export function Items() {
    const [loading, setLoading] = useState(true);
    const [data,setData] = useState(cakesData);
    useEffect(()=>{
        setLoading(false)
    },[])
    return (
        <>        {loading ? <div>Loading...</div> :
            <><div className="flex-container">
                <div className="all-items">
                    {data.map((obj,index)=>{
                        return <CardItem key={obj.id} {...obj}></CardItem>
                    })}
                    
                </div>
            </div></>
        }
        </>


    )
}