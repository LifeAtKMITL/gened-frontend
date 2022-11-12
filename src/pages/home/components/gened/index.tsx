import DisableBox from 'components/common/DisableBox';
import useSubject from 'hooks/useSubject';
import React, { useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import { IClass } from 'types/subject';
import axios from 'utils/axios';

import Carousel from './Carousel';
import { CircularProgress } from '@mui/material';
import useToast from 'hooks/useToast';

const Gened = () => {
  const { subjects } = useSubject();
  const { toggleToast } = useToast();
  const [gened, setGened] = useState<IClass[]>([]);
  const [loadingGened, setLoadingGened] = useState(false);

  const fetchGened = async () => {
    if (subjects.length === 0) {
      toggleToast(true, 'ยังไม่ได้เลือกวิชาเรียน', 'error');
      return;
    }

    setLoadingGened(true);

    // Transform Data -> Theories and Labs sec
    const theories = subjects.map((subject) => ({ subjectId: subject.theory.subjectId, sec: subject.theory.sec }));
    const labs = subjects.map((subject) => {
      if (subject?.lab) return { subjectId: subject.lab?.subjectId, sec: subject.lab?.sec };
    });

    // Merge data and remove undefined
    const merge = [...theories, ...labs].filter((subject) => subject);

    // Fetch Gened
    const { data: gened } = await axios.post<IClass[]>('/subject/filter', merge);

    setGened(gened);
    setLoadingGened(false);
  };

  return (
    <div className='flex flex-col overflow-hidden mt-3'>
      {/* Header */}
      <header className='mt-4 mb-3 px-5 flex justify-between items-center text-white '>
        <h1 className=' text-lg sukhumvit-semibold '>
          วิชาเลือกที่ลงได้{' '}
          {gened.length !== 0 && <span className='text-gray-400 text-sm'>( {gened.length} วิชา )</span>}
        </h1>
        <button
          onClick={fetchGened}
          disabled={loadingGened}
          className='text-primary active:text-orange-700 disabled:text-zinc-600'
        >
          <FiRefreshCcw className='' />
        </button>
      </header>

      {/* Content */}
      <div className='w-screen flex-grow'>
        {loadingGened ? (
          <div className='text-white px-5 h-60 flex justify-center items-center'>
            <CircularProgress sx={{ color: '#ff8934' }} />
          </div>
        ) : gened.length === 0 ? (
          <div className='px-5'>
            <DisableBox line1='ยังไม่มีวิชาเลือก' line2 />
          </div>
        ) : (
          <div className='w-screen px-5 flex overflow-y-auto gap-3'>
            <Carousel gened={gened} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gened;
