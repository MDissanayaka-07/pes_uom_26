interface MemberCardProps {
  name: string;
  role: string;
  image: string;
}

export default function MemberCard({name,role,image}: MemberCardProps){

return(

<div className="member-card">

<img src={image} alt={name} />

<h3>{name}</h3>

<p>{role}</p>

</div>

)

}