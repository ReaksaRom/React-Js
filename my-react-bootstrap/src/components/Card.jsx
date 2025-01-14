
function Card() {
  return (
    <div className="container-fluid navbar bg-secondary">
        <div className="container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCAIBuT2o5XLvTXgI0rCp1JC9WqRcXT6bF-Q&s" width="40px" height="40px" className="rounded-circle object-fit-cover mx-2" alt="" />
        <div className="">
        <button className="btn d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">click</button>
       <div className="offcanvas  offcanvas-end"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">  <button type="button" className="btn-close shadow-none"  data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
        <div className="offcanvas-body">
        <ul className="d-flex flex-column nav">
            <li><a href="#" className="  nav-link ">Home</a></li>
            <li><a href="#" className="  nav-link ">About</a></li>
            <li><a href="#" className="  nav-link ">Contact</a></li>
            <li><a href="#" className="  nav-link ">Comunication</a></li>
            <li><a href="#" className="  nav-link ">Skill</a></li>
        </ul>        
        </div>
       </div>
        </div>
        </div>
       
    </div>
  )
}

export default Card