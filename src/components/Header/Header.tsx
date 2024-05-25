import React from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import styles from '../Header/Header.module.css';
import { pt_mono_400 } from '@/helpers/Fonts';

const Header = () => {
  return (
    <nav className={`${pt_mono_400.className} grid grid-cols-6 ${styles.header} text-lg`}>
      <div></div>
      <div className='grid col-span-2 border-b-2 border-b-stone-400'>
        <div className='flex xl:ml-7 items-center font-bold text-4xl'>
          <b className='cursor-pointer'>sscodes</b>
        </div>
      </div>
      <div className='grid col-span-2 grid-cols-5 border-b-2 border-b-stone-400'>
        <div className='flex justify-center items-center'>
          <b className='cursor-pointer hover:text-sky-700'>Projects</b>
        </div>
        <div className='flex justify-center items-center'>
          <b className='cursor-pointer hover:text-sky-700'>Blogs</b>
        </div>
        <div className='flex justify-center items-center'>
          <b className='cursor-pointer hover:text-sky-700'>Illustrations</b>
        </div>
        <div className='flex justify-center items-center'>
          <b className='cursor-pointer hover:text-sky-700'>Resume</b>
        </div>
        <div className={`flex justify-center items-center ${styles.neo}`}>
          <ToggleButton />
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Header;
