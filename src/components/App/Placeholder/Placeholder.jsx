import './Placeholder.scss';

const Placeholder = ({ icon: Icon, message }) => {
    return (
        <div className='placeholder'>
            <div className='placeholder__icon'>
                <Icon />
            </div>
            <div className='placeholder__message'>
                {message}
            </div>
        </div>
    )
}

export default Placeholder;
