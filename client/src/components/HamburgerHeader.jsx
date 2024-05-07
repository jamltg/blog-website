import { Link } from "react-router-dom";

export default function HamburgerHeader() {
  return (
    <div>
      <ul className="text-right">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4">
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
    </div>
  )
}
