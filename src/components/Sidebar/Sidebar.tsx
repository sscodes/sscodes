import NavElements from '../NavElements/NavElements';
import sidebarStyles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div
      className={`flex justify-center items-center w-screen h-screen z-40 bg-stone-100 absolute top-0 ${sidebarStyles.sidebar}`}
    >
      <div className='flex flex-col gap-24'>
        <NavElements />
      </div>
    </div>
  );
};

export default Sidebar;
