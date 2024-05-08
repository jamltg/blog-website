import { Link } from 'react-router-dom'
import { Pivot as Hamburger } from 'hamburger-react'
import { useSelector } from 'react-redux';
import { Avatar, Dropdown } from 'flowbite-react';

// eslint-disable-next-line react/prop-types
export default function MainHeader({toggleMenu, isOpen}) {
  const { currentUser } = useSelector(state => state.user);

  return (
    <>
            <Link to="/">
              <h1 className="text-3xl font-semibold">Jam&apos;s Blog</h1>
            </Link>
            <div>
              <h1>Search</h1>
            </div>
            <div className='flex items-center'>
              <ul className='hidden lg:flex'>
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
              <div>
                {currentUser ?(
                  <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <Avatar
                        alt="user"
                        img={currentUser.profilePicture}
                        rounded
                      />
                    }
                  >
                    <Dropdown.Header>
                      <span className='block text-sm'>@{currentUser.username}</span>
                      <span className='block text-sm font-medium truncate mt-1'>{currentUser.email}</span>
                    </Dropdown.Header>
                    <Link to={'/dashboard?tab=profile'}>
                      <Dropdown.Item>Profile</Dropdown.Item>
                    </Link>
                    <Dropdown.Divider/>
                    <Dropdown.Item>Sign Out</Dropdown.Item>
                  </Dropdown>
                ):(
                  <Link to="/sign-in"><button className='border-2 px-4 py-2 rounded-lg'>Sign In</button></Link>
                )}
              </div>
            </div>
            <div className="lg:hidden">
                <Hamburger toggled={isOpen} toggle={toggleMenu} size={20}/>
            </div>
    </>
  )
}
