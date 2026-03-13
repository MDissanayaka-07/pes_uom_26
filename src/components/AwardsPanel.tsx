import { useEffect, useState } from "react";
import "../styles/pages.css";

import awd1 from "../assets/awards/awd_1.png";
import awd2 from "../assets/awards/awd_2.png";
import awd3 from "../assets/awards/awd_3.png";
import awd4 from "../assets/awards/awd_4.png";
import awd5 from "../assets/awards/awd_5.png";
import awd6 from "../assets/awards/awd_6.png";
import awd7 from "../assets/awards/awd_7.png";

interface Award {
  id: string;
  img: string;
  title: string;
  desc: string;
}

const awards: Award[] = [

{
id:"1",
img:awd1,
title:"IEEE Darrel Chong Student Activity Award – Gold (2021)",
desc:"Recognized for the project 'Gammadatta IEEE API – Phase 2'."
},

{
id:"2",
img:awd2,
title:"IEEE PES High Performance Student Branch Chapter – 2021",
desc:"Awarded for outstanding IEEE PES student branch performance."
},

{
id:"3",
img:awd3,
title:"Special Recognition – Best Humanitarian Project (2021)",
desc:"Awarded at IEEE Sri Lanka Section Awards Night."
},

{
id:"4",
img:awd4,
title:"Best Technical Chapter Activity Award – 2020",
desc:"Awarded for outstanding technical activities."
},

{
id:"5",
img:awd5,
title:"IEEE Darrel Chong Student Activity Award – Silver (2020)",
desc:"Recognized for IEEE API Phase 1 project."
},

{
id:"6",
img:awd6,
title:"IEEE PES High Performance Student Branch Chapter – 2020",
desc:"Awarded for leadership and engagement."
},

{
id:"7",
img:awd7,
title:"IEEE PES High Performance Student Branch Chapter – 2019",
desc:"Recognized for excellence in activities."
}

];

export default function AwardsPanel(){

const [popup,setPopup] = useState<Award | null>(null);
const [bottom,setBottom] = useState(90);

useEffect(()=>{

const handleScroll = ()=>{

const footer = document.querySelector("footer");

if(!footer) return;

const rect = footer.getBoundingClientRect();

if(rect.top < window.innerHeight){

setBottom(window.innerHeight - rect.top + 20);

}else{

setBottom(20);

}

};

window.addEventListener("scroll",handleScroll);

return ()=>window.removeEventListener("scroll",handleScroll);

},[]);

return(

<>

<div className="awards-panel" style={{bottom:`${bottom}px`}}>

{awards.map((award,index)=>(

<div
key={award.id}
className={`award-icon blink-${index%3}`}
onClick={()=>setPopup(award)}
>

<img src={award.img} alt={award.title}/>

</div>

))}

</div>


{popup && (

<div className="award-popup" onClick={()=>setPopup(null)}>

<div className="award-popup-card" onClick={(e)=>e.stopPropagation()}>

<img src={popup.img} alt={popup.title}/>

<h3>{popup.title}</h3>

<p>{popup.desc}</p>

<button onClick={()=>setPopup(null)}>
Close
</button>

</div>

</div>

)}

</>

);

}