import { useEffect, useState } from "react"


function Storage01() {
    const [storag,setStorage] = useState('')
    const [task,setTask] = useState()
    const handler = (e) =>{
        e.preventDefault()
        localStorage.setItem("storage",JSON.stringify(storag))
        setStorage("")

    }
    const getTask = () =>{
        let getData = JSON.parse(localStorage.getItem("storage"))
        setTask(getData)
    }
    useEffect(()=>{
        getTask()
    })
  return (
    <div>
        <form onSubmit={handler}  className="d-flex">
            <input type="text" className="form-control w-50" onChange={(e)=>setStorage(e.target.value)} value={storag}/>
            <button  className="btn btn-primary" >save</button>
        </form>
        <p>{task}</p>
    </div>
  )
}

export default Storage01