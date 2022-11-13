import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaTrash, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProfileHeader from './header';
import axios from 'utils/axios';
import { IProfileData } from 'types/profile';
import { LoadingPage } from 'components/fallback';
import { AiOutlineClose } from 'react-icons/ai';

const Profile = () => {
  const [data, setData] = useState<IProfileData>();
  const [expand, setExpand] = useState<boolean[]>([]);
  const [loading, setLoading] = useState(false);

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
    console.log('expand', expand);
  };

  const handleDelete = async (subjectId: string, sec: string) => {
    const data = {
      subjectId: subjectId,
      sec: sec,
    };

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
          <div className='px-4'>
            <h1 className='text-2xl text-white sukhumvit-semibold text-center mb-4'>My Profile</h1>
            <div className='profile-card bg-card flex items-center gap-2'>
              <img src={data?.image} width='60' height='60' className='h-fit my-auto rounded-full bg-body shadow-lg' />
              <div className='flex flex-col'>
                <div className='sukhumvit-semibold  text-lg text-white'>{data?.username}</div>
                <div className='text-sm text-gray-400'>(auto generated)</div>
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
            <div className='max-h-[60vh] overflow-auto'>
              {data?.favGenEd.map(({ subjectId, sec }, index) => {
                return (
                  <div
                    className={`text-white bg-transparent border border-body px-4 py-2 mb-2 
                    rounded-lg transition-all duration-500`}
                    key={subjectId + sec}
                    onClick={() => {
                      expand.forEach((item, i) => {
                        if (i !== index) expand[i] = false;
                      });
                      expand[index] = !expand[index];
                      setExpand([...expand]);
                    }}
                  >
                    <div className='flex justify-between items-center'>
                      <h4 className='text-primary'>รหัสวิชา {subjectId}</h4>
                      <button onClick={() => handleDelete(subjectId, sec)}>
                        <AiOutlineClose className='text-base' />
                      </button>
                    </div>
                    <h4>กลุ่มเรียน {sec}</h4>
                    {expand[index] && (
                      <div>
                        <div>Tuesday, 09:00 - 12:00</div>
                        <div>27th September 2020, 09:00 - 12:00</div>
                        <div>27th September 2020, 09:00 - 12:00</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
