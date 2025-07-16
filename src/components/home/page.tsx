import Headline from '@/components/Headline/Headline';
import Name from '@/components/Name/Name';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import Image from 'next/image';
import profilePic from '../../../public/Photo.jpg';
import style from './page.module.css';

const Home = () => {
  return (
    <div
      className={`${style.home} flex flex-col gap-7 justify-center items-center`}
    >
      <Image
        className={`${style.image} rounded-full`}
        src={profilePic}
        alt='profile-pic'
        width={247}
      />
      <Name />
      <Headline />
      <SocialMedia />
    </div>
  );
};

export default Home;
