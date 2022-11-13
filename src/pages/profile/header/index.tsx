import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProfileHeader = () => {
  return (
    <header className='px-6 flex justify-between mb-4'>
      <Link to='/'>
        <FaArrowLeft className='text-white' />
      </Link>
    </header>
  );
};

export default ProfileHeader;
