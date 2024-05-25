import Link from 'next/link';
import {
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiGithub,
  FiTwitter,
} from 'react-icons/fi';

const SocialMedia = () => {
  return (
    <div className='flex gap-7 text-3xl'>
      <Link href='mailto:sarkarsanket21@gmail.com' target='_blank'>
        <FiMail className='cursor-pointer hover:text-green-700' />
      </Link>
      <Link href='https://www.linkedin.com/in/sscodes/' target='_blank'>
        <FiLinkedin className='cursor-pointer hover:text-sky-700' />
      </Link>
      <Link href='https://github.dev/sscodes/' target='_blank'>
        <FiGithub className='cursor-pointer hover:text-slate-700' />
      </Link>
      <Link href='https://www.instagram.com/shawwnket.arts/' target='_blank'>
        <FiInstagram className='cursor-pointer hover:text-red-700' />
      </Link>
      <Link href='https://twitter.com/ss_codes' target='_blank'>
        <FiTwitter className='cursor-pointer hover:text-sky-700' />
      </Link>
    </div>
  );
};

export default SocialMedia;
