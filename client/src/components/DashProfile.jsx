import { Button, TextInput } from "flowbite-react"
import { useSelector } from "react-redux"

export default function DashProfile() {
  const { currentUser } = useSelector(state => state.user)
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer">
          <img 
            src={currentUser.profilePicture} 
            alt="user"
            className="rounded-full w-full h-full object-cover border-4 border-gray-600"
          />
        </div>
        <TextInput 
          type='text' 
          id='username' 
          placeholder='Username'
          defaultValue={currentUser.username}
        />
        <TextInput 
          type='email' 
          id='email' 
          placeholder='Email'
          defaultValue={currentUser.email}
        />
        <TextInput 
          type='password' 
          id='password' 
          placeholder='Password'
        />
        <Button type="submit">Update</Button>
      </form>
      <div className="mt-5 text-red-500">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  )
}
