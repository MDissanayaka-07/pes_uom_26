type MemberProps = {
  name: string
  role: string
  image: string
}

export default function MemberCard({ name, role, image }: MemberProps) {

  return (
    <div className="member-card">

      <img src={image} alt={name} className="member-img"/>

      <h3>{name}</h3>

      <p>{role}</p>

    </div>
  )

}