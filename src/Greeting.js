import React from 'react';

export const Greeting = () => {
    const isMorning = new Date().getHours();
    let greetingHeader = isMorning
    ?  <h3>Good Morning!</h3>  
    :  <h3>Good Evening!</h3> 
    return 
    <>
       {greetingHeader} 
      <h3>You have 5 new messages !</h3>
    </>
}

//export default Greeting;