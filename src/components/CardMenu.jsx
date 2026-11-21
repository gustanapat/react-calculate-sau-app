import { Link } from 'react-router'

export default function CardMenu({ to, showTitle, showPic, showDetail }) {
  return (
    <Link to={to} className="menu-card">
      <img src={showPic} alt="" />
      <h2>{showTitle}</h2>
      <p>{showDetail}</p>
    </Link>
  )
}
