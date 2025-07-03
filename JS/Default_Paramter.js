 let default_Value = (a=0,b=0) =>{
  setTimeout(() => {
    console.log(`Using Default Method with SETTIMEOUT function for 1000ms ${a + b}`);
  }, 1000);
 };

 default_Value(5, 10); // Outputs: 15 after 1 second