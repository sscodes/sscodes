import Link from 'next/link';
import headerStyles from '../Header/Header.module.css';
import ToggleButton from '../ThemeToggle/ToggleButton';

const NavElements = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <Link
          href='/experience'
          className='cursor-pointer lg:text-base lg:font-bold hover:text-sky-700'
        >
          Experience
        </Link>
      </div>
      <div className='flex justify-center items-center'>
        <Link
          href='/projects'
          className='cursor-pointer lg:text-base lg:font-bold hover:text-sky-700'
        >
          Projects
        </Link>
      </div>
      <div className='flex justify-center items-center'>
        <Link
          href='/blogs'
          className='cursor-pointer lg:text-base lg:font-bold hover:text-sky-700'
        >
          Blogs
        </Link>
      </div>
      <div className='flex justify-center items-center'>
        <Link
          href='/resume.pdf'
          target='_blank'
          className='cursor-pointer lg:text-base lg:font-bold hover:text-sky-700'
        >
          Resume
        </Link>
      </div>
      <div className='flex justify-center items-center'>
        <Link
          href='/contact'
          target='_blank'
          className='cursor-pointer lg:text-base lg:font-bold hover:text-sky-700'
        >
          Contact
        </Link>
      </div>
      <div className={`flex justify-center items-center ${headerStyles.neo}`}>
        <ToggleButton />
      </div>
    </>
  );
};

export default NavElements;
