import { pt_mono_400 } from '@/helpers/Fonts';
import { PiHamburgerBold } from 'react-icons/pi';
import NavElements from '../NavElements/NavElements';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav
      className={`${pt_mono_400.className} grid grid-cols-6 ${styles.header} text-lg`}
    >
      <div className='hidden 2xl:grid 2xl:col-span-1'></div>
      <div className='grid col-span-5 lg:col-span-2 2xl:col-span-2 border-b-2 border-b-stone-400'>
        <div className='flex ml-7 items-center justify-center lg:justify-start font-bold text-4xl'>
          <b className='cursor-pointer'>sscodes</b>
        </div>
      </div>
      <div className='hidden lg:grid lg:col-span-4 2xl:col-span-2 grid-cols-5 border-b-2 border-b-stone-400'>
        <NavElements />
      </div>
      <div className='hidden 2xl:grid  2xl:col-span-1'></div>
      <div className='grid col-span-1 lg:hidden border-b-2 border-b-stone-400 text-4xl justify-start md:justify-center items-center'>
        <PiHamburgerBold />
      </div>
    </nav>
  );
};

export default Header;
