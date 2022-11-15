import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import useSubject from 'hooks/useSubject';
import { AiOutlineClose } from 'react-icons/ai';
import DisableBox from 'components/common/DisableBox';
import { getDay } from 'services/subject';

const AccordionContent = (): JSX.Element => {
  const { subjects, removeSubject } = useSubject();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDelete = (subjectId: string) => () => {
    const isDelete = confirm('ต้องการลบวิชาเรียนใช่ไหม');
    if (!isDelete) return;

    removeSubject(subjectId);
  };

  if (subjects.length === 0) return <DisableBox line1='ยังไม่มีวิชาเรียน' />;

  return (
    <div className='min-h-[30vh]'>
      {subjects.map((subject) => (
        <Accordion
          key={subject.theory.subjectId}
          expanded={expanded === subject.theory.subjectId}
          onChange={handleChange(subject.theory.subjectId)}
        >
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <div className='w-full relative grid grid-cols-[95fr_5fr] gap-1'>
              <h4 className='text-ellipsis whitespace-nowrap overflow-hidden'>
                <span>{subject.theory.subjectId}</span> {subject.theory.name}
              </h4>
              <button onClick={handleDelete(subject.theory.subjectId)}>
                <AiOutlineClose />
              </button>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <p className='text-sm'>
              <span className='text-primary'>ภาคทฤษฏี</span> เซค {subject.theory.sec} ({subject.theory.credit} หน่วยกิต)
            </p>

            <div className='mt-2'>
              <h4 className='text-sm'>วันเรียน</h4>
              <h4 className='text-sm' style={{ color: getDay(subject.theory.classDateTime_v) }}>
                {subject.theory.classDateTime_v}
              </h4>
            </div>

            <div className='mt-1.5'>
              <h4 className='text-sm'>วันสอบกลางภาค</h4>
              <h4 className='text-zinc-300 text-sm'>{subject.theory.midtermDateTime_v || 'ไม่มีการสอบกลางภาค'} </h4>
            </div>

            <div className='mt-1.5'>
              <h4 className='text-sm'>วันสอบปลายภาค</h4>
              <h4 className='text-zinc-300 text-sm'>{subject.theory.finalDateTime_v || 'ไม่มีการสอบกลางภาค'}</h4>
            </div>

            <div className='mt-1.5'>
              <h4 className='text-sm'>อาจารย์</h4>
              <h4 className='text-zinc-300 text-sm'>
                {subject.theory.teachers.substring(0, subject.theory.teachers.length - 2)}
              </h4>
            </div>

            {subject.lab && (
              <div className='mt-4'>
                <p className='text-sm'>
                  <span className='text-primary'>ภาคปฏิบัติ</span> เซค {subject.lab.sec}
                </p>

                <div className='mt-2'>
                  <h4 className='text-sm'>วันเรียน</h4>
                  <h4 className='text-zinc-300 text-sm' style={{ color: getDay(subject.lab.classDateTime_v) }}>
                    {subject.lab.classDateTime_v}
                  </h4>
                </div>

                <div className='mt-1.5'>
                  <h4 className='text-sm'>วันสอบกลางภาค</h4>
                  <h4 className='text-zinc-300 text-sm'>{subject.lab.midtermDateTime_v || 'ไม่มีการสอบกลางภาค'} </h4>
                </div>

                <div className='mt-1.5'>
                  <h4 className='text-sm'>วันสอบปลายภาค</h4>
                  <h4 className='text-zinc-300 text-sm'>{subject.lab.finalDateTime_v || 'ไม่มีการสอบกลางภาค'}</h4>
                </div>

                <div className='mt-1.5'>
                  <h4 className='text-sm'>อาจารย์</h4>
                  <h4 className='text-zinc-300 text-sm'>
                    {subject.lab.teachers.substring(0, subject.lab.teachers.length - 2)}
                  </h4>
                </div>
              </div>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionContent;
