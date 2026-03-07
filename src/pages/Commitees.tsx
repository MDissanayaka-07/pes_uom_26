import { useState } from "react";
import MemberCard from "../components/MemberCard";
import "../styles/pages.css";

export default function Committees(){

const [activeTab,setActiveTab] = useState(0);

const committees = [

{
title:"Executive Committee",
members:[
{name:"President",role:"President",image:"src/assets/committee/president.jpg"},
{name:"Vice President",role:"Vice President",image:"src/assets/committee/vp.jpg"},
{name:"Secretary",role:"Secretary",image:"src/assets/committee/sec.jpg"},
{name:"Treasurer",role:"Treasurer",image:"src/assets/committee/treasurer.jpg"},
{name:"Webmaster",role:"Webmaster",image:"src/assets/committee/webmaster.jpg"}
]
},

{
title:"Public Relations",
members:[
{name:"Vidura Jayawardhene",role:"Lead",image:"src/assets/committee/vidura.jpeg"},
{name:"Dulsika Mendis",role:"Member",image:"src/assets/committee/dulsika.jpeg"},
{name:"Mahesha Weerasinghe",role:"Member",image:"src/assets/committee/mahesha.jpg"}
]
},

{
title:"Organizing",
 members: [
        { name: "Pabasara Piyumal", role: "Lead", image: "src/assets/committee/pabasara.jpeg" },
        { name: "Shakya Marasingha", role: "Member", image: "src/assets/committee/shakya.webp" },
        { name: "Seynath Chathwara Suraweera", role: "Member", image: "src/assets/committee/seynath.jpg" },
        { name: "Sembakuttige Vihanga Kaushal", role: "Member", image: "src/assets/committee/vihanga.webp" },
        { name: "Hasitha Rupasinghe", role: "Member", image: "src/assets/committee/hasitha.jpg" },
        { name: "P.K. Anupa Minojitha", role: "Member", image: "src/assets/committee/anupa.png" },
        { name: "Kivira Vehan Gammaddegoda", role: "Member", image: "src/assets/committee/kivira.jpeg" }
      ]
},

{
title:"Creative Design",
members:[
  {name:"Chamiru Gajasinghe",role:"Lead",image:"src/assets/committee/chamix.jpeg"},
  {name:"Easha Wanniarachchi",role:"Member",image:"src/assets/committee/easha.jpeg"},
  {name:"Achintha Niroshan",role:"Member",image:"src/assets/committee/achintha.jpg"},
  {name:"Dilni Nimanya Muthukuda",role:"Member",image:"src/assets/committee/dilni.jpeg"},
  {name:"Thuvarahan Thayalan",role:"Member",image:"src/assets/committee/thuvarahan.jpg"},
  {name:"B.G. Thisul Dulneth",role:"Member",image:"src/assets/committee/thisul.jpg"}
]
},


{
title:"Editorial",
members:[
{name:"Shalani Ambalangodage",role:"Lead",image:"src/assets/committee/shalani.jpg"},
{name:"Vindya Nilushika",role:"Member",image:"src/assets/committee/vindya.jpeg"},
{name:"Harshani Lakmali",role:"Member",image:"src/assets/committee/harshani.jpg"},
{name:"Dulasha Perera",role:"Member",image:"src/assets/committee/dulsha.jpg"},
{name:"Raveesha Samarasinghe",role:"Member",image:"src/assets/committee/raveesha.jpg"}
]
},

{
title:"Finance",
members:[
{name:"Charithma Dewmi",role:"Lead",image:"src/assets/committee/charithma.png"},
{name:"Okindu Fernando",role:"Member",image:"src/assets/committee/okindu.jpg"}
]
},

{
title:"Web Development",
members: [
        { name: "Sawani Thiwandika", role: "Lead", image: "src/assets/committee/sawani.png" },
        { name: "Chanupa Hansaja Vithanage", role: "Member", image: "src/assets/committee/chanupa.jpg" },
        { name: "Madhuwantha Dissanayaka", role: "Member", image: "src/assets/committee/madhuwantha.jpeg" }
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