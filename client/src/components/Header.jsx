import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="h-20 w-full px-8 bg-red-200 flex justify-between items-center">
      <Link>
        <span className="text-xl font-semibold">Jam&apos;s Blog</span>
      </Link>
      <ul className="flex space-x-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
    </div>
  )
}
