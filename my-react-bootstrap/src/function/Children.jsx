// import React from 'react'

// function Func01({name,age,salary,skill}) {
// let arr = ["Dara"," Thida", 18]
// let obj = {n:"Tola",a:20,dob:"12/09/2003",study:"NPIC"}
//   return (
//     <div>
//         <p>Name: {name} another: {arr} Object {obj.n}</p>
//         <p>Age: {age}</p>
//         <p>Salary: {salary}</p>
//         <p>Skill: {skill}</p>
//     </div>
//   )
// }

// export default Func01

import React from 'react'

function Children(props) {
  const {name,age,gender} = props
  return (
    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
    </div>
  )
}

export default Children