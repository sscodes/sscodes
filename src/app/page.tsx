import { Metadata } from 'next';
import Home from './_home/page';

export const metadata: Metadata = {
  description: 'Home page of portfolio website of Sanket Sarkar (sscodes)',
};

const page = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default page;
