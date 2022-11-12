import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import useSubject from 'hooks/useSubject';
import { AiOutlineClose } from 'react-icons/ai';
import DisableBox from 'components/common/DisableBox';

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
    <div>
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
            <p>sec: {subject.theory.sec}</p>
            <p>{subject.theory.classDateTime_v}</p>
            <p>{subject.theory.midtermDateTime_v}</p>
            <p>{subject.theory.finalDateTime_v}</p>
            <p>credit: {subject.theory.credit}</p>
            <p>Instructor: {subject.theory.teachers}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionContent;
