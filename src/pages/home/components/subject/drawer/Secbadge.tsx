import React from 'react';
import { classNames } from 'utils/classNames';

interface ISecBadge {
  sec: string;
  secSelected: string;
  setSecSelected: React.Dispatch<React.SetStateAction<string>>;
}

const SecBadge = ({ sec, secSelected, setSecSelected }: ISecBadge) => {
  return (
    <button
      className={classNames(
        'border rounded-2xl px-6 py-1 text-white text-sm',
        sec === secSelected ? 'bg-primary text-black border-primary' : 'border-white',
      )}
      onClick={() => setSecSelected(sec)}
    >
      {sec}
    </button>
  );
};

export default SecBadge;
