import React from 'react'

function Finalpage() {
  return (
    <form action>
    <img src='./vyzen.png' alt="Neeraj Meka" />
    <div className="main">
        <h1>Candidate Application Form - VYZEN</h1>
        <hr />
        <h6> <p>
        <i><strong>
        Please fill out the following details accurately to apply for the position..
         Ensure you upload necessary documents where required. Fields marked with an asterisk (*) are mandatory.
        </strong></i>
     </p></h6>  
    <h6 style={{ color: 'red' }}>* Indicates required question</h6>
    </div><br></br>
    <div>
        <h3>
        <strong>
            Your Records Has Been Submitted Successfully
        </strong>
        </h3>
        <h5> Thank You </h5>

    </div>
    
</form>  )
}

export default Finalpage
