import React from "react";
import photo1 from './photo1.jpeg'
import  './App.css'

const App=()=>{

  return(
    <div className="container">
    <div className="m-5 d-flex text-center justify-content-center">
    <div className="row">
      <div className="col-md-12">
      <img   src={photo1} alt='wedding' width='270' height='250' className="rounded-circle" />
      </div>
      <div className="col-md-12 card1 mt-3">
      <h4 className="display-6 line1">Together with their families</h4>
      <h1 className="display-5 h2"><span className="capital">G</span>ANGADHARAYYA <span className="and">WEDS</span> <span className="capital">P</span>RATIKSHA</h1>
      <h2 className="h2">Invite you to Their Wedding </h2>
      <h2 className="line2">DECEMBER-19, 2022 </h2>
      <h2 className="line8"><span className="at">@</span> 12:34 PM AFTERNOON</h2>
      <h2 className="line3">-:VENUE:-</h2>
      <h2 className="line4">HEBSUR BHAVAN </h2>
      <h2 className="line5">GOKUL ROAD HUBBALLI</h2>
      <h3 className="line7"> We,Gangadharayya Pratiksha, would like to invite you to witness and be a part of our new beginning.</h3>
      <h3 className="line6">Love is in the air... We make a fantastic pair! You’re invited to attend the wedding affair of Gangadharayya on Moday on 19th DEC  at and venue.</h3>
      <hr/>
      <a href="https://maps.app.goo.gl/obR3SLYoXQSG1KCE6" className="maplink" target="_blanck" >Click Here For Location</a>
      <hr/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default App
