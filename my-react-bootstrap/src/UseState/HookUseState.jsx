import {useState} from 'react'

function HookUseState() {
    const [text,setText] = useState("Hello Hook Use state");
    let txt = "Hello";
    const changeText = () => {
        setText("Hello Guy");
        txt = "Hello Everyone"
        console.log(txt);
        console.log(text);
    };
    // ==================================
    const [employee] = useState([
        {id:1,name:"Koma",age:20,salary:2400},
        {id:2,name:"loma",age:19,salary:2000},
        {id:3,name:"mono",age:33,salary:1000},]
    )
    //======================================
    const [person,setPerson] = useState(["Dara",200,10,"Jokolom","Jikaju"])
   
    const addPerson= () => {
        setPerson([...person, `Add ${person.length + 1}`])
    }
    //===================================================
    const [glo,setGlo] = useState("text usestate change")
    const glog = "go go when given";
    const onchange = (e) =>{
        setGlo(e.target.value)
        console.log(glo);
        
    }
    const onchanges = () =>{
        console.log(glog);
        
    }

    

  return (
    <div>
        <button onClick={changeText} className='btn btn-primary'>change</button>
        <p className='fs-1 '>{text}</p>
        <p className='fs-1'>{txt}</p>
        <ul>
           {
            employee.map((e,i) => {
               return <li key={i}>{e.id} , {e.name} , {e.age} , {e.salary}</li>
            })
           }
        </ul>
        <button onClick={addPerson} className='btn btn-primary '>Add </button>
        <ul>
            {
                person.map((res,i) => {
                   return <li key={i}>{res}</li>
                })
            }
        </ul>
        {/* ======================================== */}
        <input onChange={onchange} type="text" value={glo}/>
        <p>use state: {glo}</p>
        <input onChange={onchanges} type="text" value={glog}/>
        <p>use state: {glog}</p>
        
    </div>
  )
}

export default HookUseState