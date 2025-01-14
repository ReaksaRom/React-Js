import { useState } from 'react'

function LoopRender() {
    const [arr,setArr] = useState(["Banana","Apple","Grape"])
    const [arrUser,setArrUser] = useState([
        {id:1,name:"Jonh"},
        {id:2,name:"Koko"},
        {id:3,name:"Dara"}
    ])
  return (
    <div>
        <ul>
            {
                arr.map((e,i) =>{
                    return (
                        <li key={i}>{e}</li>
                    )
                })
                
            }
            {
                
                arrUser.map((e,i) =>{
                    return (
                        <li key={i}>{e.id} {e.name}</li>
                    )
                })
            }
        </ul>

    </div>
  )
}

export default LoopRender