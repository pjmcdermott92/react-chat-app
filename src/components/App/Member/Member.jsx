
import Avatar from '../../Avatar/Avatar';
import './Member.scss';

const Member = ({ user }) => {
	return (
        <div className='member-item-container'>
            <Avatar imageUrl={user.avatar} name={user.name} />
            <span className='member-item-container__name'>{user.name}</span>
        </div>
    );
};

export default Member;
