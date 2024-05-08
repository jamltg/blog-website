import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';
export default function Footer() {
  return (
    <div>
      <div className='h-28 max-w-[1240px] px-8 py-4 mx-auto flex justify-between items-center'>
        <div>
          <h1>Jam&apos;s Blog</h1>
          <div className='hidden lg:flex gap-6 mt-3'>
            <BsFacebook/>
            <BsInstagram/>
            <BsTwitter/>
            <BsGithub/>
          </div>
        </div>
        <div className='hidden space-x-10 lg:flex'>
          <div className='p-2'>
            <h3 className='font-semibold'>ABOUT</h3>
            <ul>
              <li>100 JS Projects</li>
              <li>Jam&apos;s Blog</li>
            </ul>
          </div>
          <div className='p-2'>
            <h3 className='font-semibold'>FOLLOW US</h3>
            <ul>
              <li>GitHub</li>
              <li>Discord</li>
            </ul>
          </div>
          <div className='p-2'>
            <h3 className='font-semibold'>LEGAL</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className='flex gap-6 lg:hidden'>
          <BsFacebook/>
          <BsInstagram/>
          <BsTwitter/>
          <BsGithub/>
        </div>
      </div>
    </div>
  )
}
