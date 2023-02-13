import { IoSadSharp, IoHandRight } from 'react-icons/io5';
import AppNavigator from '../AppNavigator/AppNavigator';
import ChatInput from '../ChatInput/ChatInput';
import MembersList from '../MembersList/MembersList';
import Messages from '../Messages/Messages';
import Placeholder from '../Placeholder/Placeholder';
import './AppLayout.scss';

const AppLayout = () => {

    return (
        <>
        <AppNavigator />
        <main className='main-container'>
            <div className='main-container__top'>
                
            </div>
            <Placeholder icon={IoHandRight} message='Hello there! Select a channel to see messages!' />
            <Messages />
            <ChatInput />
        </main>
        <MembersList />
        </>
    )
}

export default AppLayout;
