import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaTrash, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProfileHeader from './components/header';
import axios from 'utils/axios';
import { IProfileData } from 'types/profile';
import { LoadingPage } from 'components/fallback';
import { AiOutlineClose } from 'react-icons/ai';
import { CircularProgress } from '@mui/material';
import DisableBox from 'components/common/DisableBox';
import { classNames } from 'utils/classNames';

const Profile = () => {
  const [data, setData] = useState<IProfileData>();
  const [expand, setExpand] = useState<boolean[]>([]);
  const [loading, setLoading] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(false);

  useEffect(() => {
    initProfile();
  }, []);

  const initProfile = async () => {
    setLoading(true);
    await fetchSubject();
    setLoading(false);
  };

  const fetchSubject = async () => {
    const { data } = await axios.get<IProfileData>('/user/profile/subject', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlUwZjk1NTdiMDlmMTI0N2U0ZGUyYmYzYjFjYjcyNjc5ZSIsImlhdCI6MTY2ODAwMTgyOSwiZXhwIjoxNjcwNTkzODI5fQ.hj-m3KVnEx6hwPjJGOqkAnBZIFocOB8B8Ey_j5uuoTA`,
      },
    });
    // console.log(data);
    setData(data);
    setExpand([]);
    data.favGenEd.forEach((item) => {
      expand.push(false);
    });
    setExpand(expand);
    setFavoriteLoading(false);
  };

  const handleDelete = async (subjectId: string, sec: string) => {
    const data = {
      subjectId: subjectId,
      sec: sec,
    };
    setFavoriteLoading(true);
    await axios.delete('/user/subject/favorite', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlUwZjk1NTdiMDlmMTI0N2U0ZGUyYmYzYjFjYjcyNjc5ZSIsImlhdCI6MTY2ODAwMTgyOSwiZXhwIjoxNjcwNTkzODI5fQ.hj-m3KVnEx6hwPjJGOqkAnBZIFocOB8B8Ey_j5uuoTA`,
      },
      data,
    });

    fetchSubject();
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className='w-screen min-h-screen pt-6 pb-14 bg-background'>
          <ProfileHeader />
          <div className='px-4 flex flex-col items-center'>
            {/* <h1 className='text-2xl text-white sukhumvit-semibold text-center mb-4'>My Profile</h1> */}
            <div className='profile-card bg-transparent border-zinc-400 w-fit pr-6 flex items-center gap-4'>
              <img
                src={data?.image}
                width='60'
                height='60'
                className='h-fit my-auto rounded-full bg-slate-400 shadow-lg'
              />
              <div className='flex flex-col'>
                <div className='sukhumvit-semibold  text-lg text-white'>{data?.username}</div>
                <div className='text-sm text-gray-400'>is your pokémon persona.</div>
              </div>
            </div>
          </div>

          <div className='mt-6 px-4 text-white'>
            <section className='mb-3 sukhumvit-semibold text-lg'>
              วิชาที่ชื่นชอบของฉัน{' '}
              {data?.favGenEd.length !== 0 ? (
                <span className='sukhumvit-semibold text-gray-400 text-sm'>&nbsp;({data?.favGenEd.length} วิชา) </span>
              ) : (
                <span className='sukhumvit-semibold text-gray-400 text-sm'>&nbsp;(คุณไม่มีวิชาที่ชื่นชอบ)</span>
              )}
            </section>
            {data?.favGenEd.length === 0 ? (
              <div>
                <DisableBox line1='ยังไม่มีวิชาที่ชื่นชอบ' line2={false} />
              </div>
            ) : (
              <div className='max-h-[60vh] overflow-auto transition-all duration-500'>
                {favoriteLoading ? (
                  <div className='flex mt-6 justify-center items-center'>
                    <CircularProgress sx={{ color: '#ff8934' }} />
                  </div>
                ) : (
                  data?.favGenEd.map(
                    ({ subjectId, name, sec, classDateTime_v, midtermDateTime_v, finalDateTime_v }, index) => {
                      return (
                        <div
                          className={`text-white bg-transparent border border-body px-4 py-2 mb-2 
                    rounded-lg transitiona-all ease-linear`}
                          key={subjectId + sec}
                          onClick={() => {
                            expand.forEach((item, i) => {
                              if (i !== index) expand[i] = false;
                            });
                            expand[index] = !expand[index];
                            setExpand([...expand]);
                          }}
                        >
                          <div className='grid grid-cols-[95fr_5fr] gap-1 w-full relative'>
                            <h4 className='text-primary  text-ellipsis whitespace-nowrap overflow-hidden'>
                              <span className='sukhumvit-semibold'>{name}</span>
                            </h4>
                            <button onClick={() => handleDelete(subjectId, sec)}>
                              <AiOutlineClose className='text-base' />
                            </button>
                          </div>
                          <h4>
                            {subjectId} กลุ่มเรียน {sec}
                          </h4>
                          <div
                            className={classNames(
                              `mt-2 text-sm text-zinc-300 transition-all max-h-0 overflow-hidden`,
                              expand[index] ? `max-h-screen` : ` `,
                            )}
                          >
                            <div>
                              <span className='sukhumvit-semibold text-white'>วันเวลาเรียน </span>
                              {classDateTime_v}
                            </div>
                            <div>
                              <span className='sukhumvit-semibold text-white'>กลางภาค </span>
                              {midtermDateTime_v || 'ไม่มีการสอบกลางภาค'}
                            </div>
                            <div>
                              <span className='sukhumvit-semibold text-white'>ปลายภาค </span>
                              {finalDateTime_v || 'ไม่มีการสอบปลายภาค'}
                            </div>
                          </div>
                        </div>
                      );
                    },
                  )
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
