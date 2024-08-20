import React from 'react';

export const Greeting = ({name, numberOfMessages}) => {
    //console.log(props);
    //const {name, numberOfMessages} = props;
    console.log("Rendering Greeting")
    if (!name) return null;
    const isMorning = new Date().getHours();
    let greetingHeader = isMorning < 12
    ?  <h3>Good Morning {name}!</h3>  
    :  <h3>Good Evening {name}!</h3> 
    return (
     <>
        {greetingHeader} 
       {numberOfMessages===0 ? null : <h3>You have {numberOfMessages} new messages !</h3>}
     </>
    );
 
}

//export default Greeting;