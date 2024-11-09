import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import './App.css'

function App(){
  return(
    <>
     {/* navbar  */}
     <div>
      <div className="navbar-flex">
         <h1 className="title">Brisphere</h1>
         <div className="nav-flex">

         <p className="navbar">Discover</p>  
         <p className="navbar">Sevices</p>
         <p className="navbar">About</p>

         </div>
  
      </div>
   {/* home */}
      <div className="flex">
          <div className="one">
            <h1 className="home">Work from <br/>ladakh</h1>
            <p className="home-para">Indian's first true digital tourism ecosystem</p>
              <div>
              <FaFacebook  className="icon"/>
            <RiInstagramFill className="icon"/>


              </div>
           
          </div>

          <div className="two">
            <img src="https://img.freepik.com/free-photo/magnetic-hill-mountain-blue-sky-road-way-leh-ladakh-india_1150-11111.jpg?t=st=1731166990~exp=1731170590~hmac=30bc5d78958f965dfe983d3ea919f58d5c4ec5f0e9d323646ba8c5a515f3c7b4&w=900" className="image"/>
          </div>
        
      </div>


      <div>
        <div>
          <p>CHECK-IN</p>
          <input type="date"/>
        </div>

        <div>
          <p>CHECK-OUT</p>
          <input type="date"/>
        </div>



      </div>

     </div>

    </>
  )
}

export default App