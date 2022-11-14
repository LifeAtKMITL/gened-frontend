import useProfile from 'hooks/useProfile';

const ProfileCard = () => {
  const { image, username } = useProfile();

  return (
    <div className='px-4 pt-6 mb-8 flex flex-col items-center'>
      <div className='flex flex-col items-center'>
        <img src={image} className='w-32 h-32 mb-2' />
        <div className='text-center'>
          <div className='sukhumvit-semibold text-lg text-white'>{username}</div>
          <div className='text-sm text-gray-400'>is your pokémon persona.</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
