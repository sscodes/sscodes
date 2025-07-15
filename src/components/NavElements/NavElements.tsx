import Link from 'next/link';
import headerStyles from '../Header/Header.module.css';
import ToggleButton from '../ToggleButton/ToggleButton';

const NavElements = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <Link
          href='/projects'
          className='cursor-pointer text-2xl xl:text-base xl:font-bold hover:text-sky-700'
        >
          Projects
        </Link>
      </div>
      <div className='flex justify-center items-center'>
        <Link
          href='/blogs'
          className='cursor-pointer text-2xl xl:text-base xl:font-bold hover:text-sky-700'
        >
          Blogs
        </Link>
      </div>
      <div className='flex justify-center items-center'>
        <Link
          href='/illustrations'
          className='cursor-pointer text-2xl xl:text-base xl:font-bold hover:text-sky-700'
        >
          Illustrations
        </Link>
      </div>
      <div className='flex justify-center items-center'>
        <Link
          href='/resume'
          className='cursor-pointer text-2xl xl:text-base xl:font-bold hover:text-sky-700'
        >
          Resume
        </Link>
      </div>
      <div className={`flex justify-center items-center ${headerStyles.neo}`}>
        <ToggleButton />
      </div>
    </>
  );
};

export default NavElements;
