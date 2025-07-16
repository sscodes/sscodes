import { Metadata } from 'next';
import Home from '@/components/home/page';

export const metadata: Metadata = {
  description: 'Home page of portfolio website of Sanket Sarkar (sscodes)',
};

const page = () => {
  return (
    <div className='relative'>
      <Home />
    </div>
  );
};

export default page;
