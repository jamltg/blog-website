import { Link } from 'react-router-dom'
import { Pivot as Hamburger } from 'hamburger-react'

// eslint-disable-next-line react/prop-types
export default function MainHeader({toggleMenu, isOpen}) {
  return (
    <>
      <Link to="/">
              <h1 className="text-3xl font-semibold">Jam&apos;s Blog</h1>
            </Link>
            <div>
              <h1>Search</h1>
            </div>
            <div className='flex items-center'>
              <ul className='flex'>
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
              <div className='hidden md:block'>
                <Link to="/sign-in"><button className='border-2 px-4 py-2 rounded-lg'>Sign In</button></Link>
              </div>
            </div>
            <div className="md:hidden">
                <Hamburger toggled={isOpen} toggle={toggleMenu} size={20}/>
            </div>
    </>
  )
}
