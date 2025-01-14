import { useEffect } from "react";
import { useState } from "react"

function PromotionEffect() {
    const [showAdd,setShowAdds] = useState(true)
    useEffect(()=>{
        let ads = setTimeout(() =>{
            setShowAdds(false)
            
        },10000)
        return () => clearTimeout(ads)
    },[])
    
  return (
    <div>
        {showAdd &&
         <div className="bg-danger text-white  text-center" >
            Get promotions....!
            
        </div>}
    </div>
  )
}

export default PromotionEffect