import { pt_mono_400 } from '@/helpers/Fonts';
import NavElements from '../NavElements/NavElements';
import classes from './Header.module.css';
import Link from 'next/link';
import { NavigationDrawer } from '@/components/NavigationDrawer/NavigationDrawer';

const Header = () => {
  return (
    <nav
      className={`${pt_mono_400.className} grid grid-cols-6 ${classes.header} text-lg`}
    >
      <div className='hidden 2xl:grid 2xl:col-span-1'></div>
      <div className='grid col-span-5 lg:col-span-2 2xl:col-span-2 border-b-2 border-b-stone-400'>
        <div className='flex ml-7 items-center justify-center lg:justify-start font-bold text-4xl'>
          <Link href='/' className='cursor-pointer'>
            sscodes
          </Link>
        </div>
      </div>
      <div className='hidden lg:grid lg:col-span-4 2xl:col-span-2 grid-cols-6 border-b-2 border-b-stone-400'>
        <NavElements />
      </div>
      <div className='border-b-2 border-b-stone-400 lg:border-0 2xl:col-span-1 flex justify-center align-middle'>
        <NavigationDrawer />
      </div>
    </nav>
  );
};

export default Header;
