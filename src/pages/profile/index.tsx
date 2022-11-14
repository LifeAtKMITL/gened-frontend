import { useEffect, useState } from 'react';
import ProfileHeader from './components/header';
import axios from 'utils/axios';
import { IProfileData } from 'types/profile';
import { LoadingPage } from 'components/fallback';
import useProfile from 'hooks/useProfile';
import ProfileCard from './components/profile';
import FavoriteGenEdAccordion from './components/accordion';

const Profile = () => {
  const { setProfile } = useProfile();
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
    try {
      const { data } = await axios.get<IProfileData>('/user/profile/subject');
      // console.log(data);
      setProfile(data);
      setExpand([]);
      data.favGenEd.forEach((item) => {
        expand.push(false);
      });
      setExpand(expand);
      setFavoriteLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className='w-screen min-h-screen pt-6 pb-14 bg-background'>
          <ProfileHeader />
          <ProfileCard />
          <FavoriteGenEdAccordion
            expand={expand}
            setExpand={setExpand}
            favoriteLoading={favoriteLoading}
            setFavoriteLoading={setFavoriteLoading}
          />
        </div>
      )}
    </>
  );
};

export default Profile;
