import { BsPersonFill } from 'react-icons/bs';
import './Avatar.scss';

const Avatar = ({ imageUrl, name, size = 40 }) => {
	return (
		<div className='user-avatar' style={{ '--size': size }}>
			{imageUrl?.length ? <img src={imageUrl} alt={name} /> : <BsPersonFill />}
		</div>
	);
};

export default Avatar;
