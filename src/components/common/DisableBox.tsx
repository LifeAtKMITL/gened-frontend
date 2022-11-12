import React from 'react';
import { FiRefreshCcw } from 'react-icons/fi';

interface IDisableBox {
  line1: string;
  line2?: boolean;
}

const DisableBox = ({ line1, line2 }: IDisableBox) => {
  return (
    <div className='w-full h-[30vh] border-2 border-gray-500 border-dashed rounded-xl flex flex-col justify-center items-center'>
      <h1 className='text-gray-500'>{line1}</h1>
      {line2 ? (
        <h2 className='text-gray-500 flex gap-2'>
          กดเครื่องหมาย <FiRefreshCcw className='text-sm my-1' /> เพื่อทำการค้นหา
        </h2>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DisableBox;
