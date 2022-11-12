import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';

const anchor = 'right';

const SubjectDrawer = () => {
  const [isToggle, setIsToggle] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsToggle(open);
  };

  return (
    <div>
      {/* Toogle Drawer Textfield */}
      <header className='px-4' onClick={toggleDrawer(true)}>
        <div className='flex items-center bg-card py-2 p-4 rounded-2xl active:bg-gray-600'>
          <AiOutlineSearch className='text-placeholder' />
          <span className='ml-3 text-placeholder'>เพิ่มวิชา</span>
        </div>
      </header>

      <Drawer anchor={anchor} open={isToggle} onClose={toggleDrawer(false)}>
        <DrawerContent />
      </Drawer>
    </div>
  );
};

export default SubjectDrawer;
