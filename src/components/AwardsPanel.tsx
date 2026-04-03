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
{ id:"1", img:awd1, title:"Gold Award 2021", desc:"IEEE Darrel Chong Gold Award" },
{ id:"2", img:awd2, title:"High Performance 2021", desc:"IEEE PES Student Branch Award" },
{ id:"3", img:awd3, title:"Humanitarian Award", desc:"Best Humanitarian Project" },
{ id:"4", img:awd4, title:"Technical Award 2020", desc:"Best Technical Chapter Activity" },
{ id:"5", img:awd5, title:"Silver Award 2020", desc:"IEEE Darrel Chong Silver Award" },
{ id:"6", img:awd6, title:"High Performance 2020", desc:"IEEE PES Student Branch Award" },
{ id:"7", img:awd7, title:"High Performance 2019", desc:"IEEE PES Student Branch Award" },
];

export default function AwardsPanel(){

const [popup,setPopup] = useState<Award | null>(null);
const [index,setIndex] = useState(0);
const [bottom,setBottom] = useState(20);

/* 🔁 auto rotate (mobile only) */
useEffect(()=>{
const interval = setInterval(()=>{
setIndex(prev => (prev + 1) % awards.length);
},3000);

return ()=>clearInterval(interval);
},[]);

/* ✅ FOOTER SAFE POSITION */
useEffect(()=>{

const handleScroll = ()=>{

const footer = document.querySelector("footer");

if(!footer) return;

const rect = footer.getBoundingClientRect();

/* if footer visible */
if(rect.top < window.innerHeight){

setBottom(window.innerHeight - rect.top + 20);

}else{

setBottom(20);

}

};

handleScroll();

window.addEventListener("scroll",handleScroll);
window.addEventListener("resize",handleScroll);

return ()=>{
window.removeEventListener("scroll",handleScroll);
window.removeEventListener("resize",handleScroll);
};

},[]);

/* 📱 mobile 3 items */
const visible = [
awards[(index-1+awards.length)%awards.length],
awards[index],
awards[(index+1)%awards.length]
];

return(

<>

{/* ===== DESKTOP ===== */}
<div className="awards-desktop" style={{bottom:`${bottom}px`}}>

{awards.map((award)=>(
<div
key={award.id}
className="award-icon"
onClick={()=>setPopup(award)}
>
<img src={award.img} alt={award.title} title={award.title}/>
</div>
))}

</div>


{/* ===== MOBILE ===== */}
<div className="awards-mobile" style={{bottom:`${bottom}px`}}>

{visible.map((award,i)=>(
<div
key={award.id}
className={`award-mobile ${i===1 ? "center" : "side"}`}
onClick={()=>setPopup(award)}
>
<img src={award.img} alt={award.title} title={award.title}/>
</div>
))}

</div>


{/* ===== POPUP ===== */}
{popup && (

<div className="award-popup" onClick={()=>setPopup(null)}>

<div className="award-popup-card" onClick={(e)=>e.stopPropagation()}>

<img src={popup.img} alt={popup.title} title={popup.title}/>

<h3>{popup.title}</h3>
<p>{popup.desc}</p>

<button onClick={()=>setPopup(null)}>Close</button>

</div>

</div>

)}

</>

);

}