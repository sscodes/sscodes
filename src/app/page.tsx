import { Metadata } from 'next';
import Home from './_home/page';
import Sidebar from '@/components/Sidebar/Sidebar';

export const metadata: Metadata = {
  description: 'Home page of portfolio website of Sanket Sarkar (sscodes)',
};

const page = () => {
  return (
    <div className='relative'>
      <Home />
      {/* <Sidebar /> */}
    </div>
  );
};

export default page;
