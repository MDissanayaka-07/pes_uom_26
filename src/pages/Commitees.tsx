import { useState } from "react";
import MemberCard from "../components/MemberCard";
import "../styles/pages.css";
import kavishka from "../../public/committee/kavishka.png"
import nadun from "../../public/committee/nadun.png"
import saneru from "../../public/committee/saneru.png"
import lasindu from "../../public/committee/lasindu.png"
import ishan from "../../public/committee/ishan.png"
import vidura from "../../public/committee/vidura.jpeg"
import dulsika from "../../public/committee/dulsika.jpeg"
import mahesha from "../../public/committee/mahesha.jpg"
import pabasara from "../../public/committee/pabasara.jpeg"
import shakya from "../../public/committee/shakya.webp"
import seynath from "../../public/committee/seynath.jpg"
import vihanga from "../../public/committee/vihanga.webp"
import hasitha from "../../public/committee/hasitha.jpg"
import anupa from "../../public/committee/anupa.png"
import kivira from "../../public/committee/kivira.jpeg"
import chamix from "../../public/committee/chamix.jpeg"
import easha from "../../public/committee/easha.jpeg"
import achintha from "../../public/committee/achintha.jpg"
import dilini from "../../public/committee/dilni.jpeg"
import thuvarahan from "../../public/committee/thuvarahan.jpg"
import thisul from "../../public/committee/thisul.jpg"
import shalani from "../../public/committee/shalani.jpg"
import vindya from "../../public/committee/vindya.jpeg"
import harshani from "../../public/committee/harshani.jpg"
import dulasha from "../../public/committee/dulasha.jpg"
import raveesha from "../../public/committee/raveesha.jpg"
import charithma from "../../public/committee/charithma.png"
import okindu from "../../public/committee/okindu.jpg"
import sawani from "../../public/committee/sawani.jpeg"
import chanupa from "../../public/committee/chanupa.jpg"
import madhuwantha from "../../public/committee/madhuwantha.jpeg"



export default function Committees(){

const [activeTab,setActiveTab] = useState(0);

const committees = [

{
title:"Executive Committee",
members:[
{name:"Kavishka Lakshan",role:"Chairman",image:kavishka},
{name:"Nadun Walaketiya",role:"Vice Chairman",image:nadun},
{name:"Saneru Weerasinghe",role:"Secretary",image:saneru},
{name:"Lasindu Shaluka",role:"Treasurer",image:lasindu},
{name:"Ishan Sasnaka",role:"Webmaster",image:ishan}
]
},

{
title:"Public Relations",
members:[
{name:"Vidura Jayawardhene",role:"Lead",image:vidura},
{name:"Dulsika Mendis",role:"Member",image:dulsika},
{name:"Mahesha Weerasinghe",role:"Member",image:mahesha}
]
},

{
title:"Organizing",
 members: [
        { name: "Pabasara Piyumal", role: "Lead", image: pabasara },
        { name: "Shakya Marasingha", role: "Member", image: shakya },
        { name: "Seynath Chathwara Suraweera", role: "Member", image:seynath },
        { name: "Sembakuttige Vihanga Kaushal", role: "Member", image:vihanga },
        { name: "Hasitha Rupasinghe", role: "Member", image:hasitha },
        { name: "P.K. Anupa Minojitha", role: "Member", image: anupa},
        { name: "Kivira Vehan Gammaddegoda", role: "Member", image: kivira }
      ]
},

{
title:"Creative Design",
members:[
  {name:"Chamiru Gajasinghe",role:"Lead",image:chamix},
  {name:"Easha Wanniarachchi",role:"Member",image:easha},
  {name:"Achintha Niroshan",role:"Member",image:achintha},
  {name:"Dilni Nimanya Muthukuda",role:"Member",image:dilini},
  {name:"Thuvarahan Thayalan",role:"Member",image:thuvarahan},
  {name:"B.G. Thisul Dulneth",role:"Member",image:thisul}
]
},


{
title:"Editorial",
members:[
{name:"Shalani Ambalangodage",role:"Lead",image:shalani},
{name:"Vindya Nilushika",role:"Member",image:vindya},
{name:"Harshani Lakmali",role:"Member",image:harshani},
{name:"Dulasha Perera",role:"Member",image:dulasha},
{name:"Raveesha Samarasinghe",role:"Member",image:raveesha}
]
},

{
title:"Finance",
members:[
{name:"Charithma Dewmi",role:"Lead",image:charithma},
{name:"Okindu Fernando",role:"Member",image:okindu}
]
},

{
title:"Web Development",
members: [
        { name: "Sawani Thiwandika", role: "Lead", image: sawani },
        { name: "Chanupa Hansaja Vithanage", role: "Member", image: chanupa},
        { name: "Madhuwantha Dissanayaka", role: "Member", image: madhuwantha}
      ]
}

];

const current = committees[activeTab];

const lead = current.members.find(m=>m.role==="Lead");

const members = current.members.filter(m=>m.role!=="Lead");

return(

<div className="committee-page">

<h1 className="committee-main-title">Committees</h1>

{/* Tabs */}

<div className="committee-tabs">

{committees.map((c,i)=>(
<button
key={i}
className={activeTab===i?"tab active":"tab"}
onClick={()=>setActiveTab(i)}
>
{c.title}
</button>
))}

</div>


{/* Executive special layout */}

{current.title==="Executive Committee" ? (

<>
<div className="committee-row">

<MemberCard {...current.members[0]} />
<MemberCard {...current.members[1]} />

</div>

<div className="committee-row">

{current.members.slice(2).map((m,i)=>(
<MemberCard key={i} {...m} />
))}

</div>
</>

) : (

<>
{/* Lead first row */}

{lead &&

<div className="committee-row">

<MemberCard {...lead} />

</div>

}

{/* Members second row */}

<div className="committee-row">

{members.map((m,i)=>(
<MemberCard key={i} {...m} />
))}

</div>

</>

)}

</div>

)

}