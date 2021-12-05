

const hexvalues =["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
 let randomcolor=() =>{
   let hex ="#";

   for ( let i=0; i<6; i++) {
          let randomIndex =Math.floor ( hexvalues.length * Math.random());

          let randomvalue = hexvalues[randomIndex];
          hex = hex + randomvalue;
   }
   //console.log (hex);
   return hex;
 }
  let randomcolorbutton = document.getElementById('buttonclick');
  randomcolorbutton.onclick =()=> {
    document.body.style.backgroundColor = randomcolor();
  };



    // let index=["0","1"];
    //  let randomcolor=()=>{
    //    let hex="#";
       
    //  }
