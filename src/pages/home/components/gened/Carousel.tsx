import React from 'react';
import { IClass } from 'types/subject';
import GenedCard from './GenedCard';

interface ICarousel {
  gened: IClass[];
}

const Carousel = ({ gened }: ICarousel) => {
  return (
    <>
      {gened.map((subject) => (
        <GenedCard key={subject.subjectId + subject.sec} subject={subject} />
      ))}
    </>
  );
};

export default Carousel;
