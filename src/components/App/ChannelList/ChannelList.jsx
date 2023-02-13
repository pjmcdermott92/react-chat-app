import Panel from '../Panel/Panel';
import {
    IoMenu
} from 'react-icons/io5';
import './ChannelList.scss';

const ChannelList = () => {
	return(
        <Panel>
            <Panel.Title>
                {/* <button><IoMenu /></button> */}
                Channels
            </Panel.Title>
            <Panel.Body className='channel-list'>
                <ul className='channel_list'>
                    <li className='channel_list--channel'># awesome-channel-1</li>
                    <li className='channel_list--channel'># lorem-channel-ipsum</li>
                    <li className='channel_list--channel'># sample-channel</li>
                    <li className='channel_list--channel'># channel-about-stuff</li>
                    <li className='channel_list--channel'># coders-chat</li>
                    <li className='channel_list--channel'># js-is-fun</li>

                    <li className='channel_list--channel'># awesome-channel-1</li>
                    <li className='channel_list--channel'># lorem-channel-ipsum</li>
                    <li className='channel_list--channel'># sample-channel</li>
                    <li className='channel_list--channel'># channel-about-stuff</li>
                    <li className='channel_list--channel'># coders-chat</li>
                    <li className='channel_list--channel'># js-is-fun</li>
                    <li className='channel_list--channel'># js-is-fun</li>
                    <li className='channel_list--channel'># js-is-fun</li>
                    <li className='channel_list--channel'># js-is-fun</li>
                    <li className='channel_list--channel'># js-is-fun</li>
                    <li className='channel_list--channel'># js-is-fun</li>
                    <li className='channel_list--channel'># js-is-fun</li>
                    <li className='channel_list--channel'># js-is-fun</li>
                    <li className='channel_list--channel'># js-is-fun</li>
                    <li className='channel_list--channel'># js-is-fun</li>
                    <li className='channel_list--channel'># js-is-fun</li>
                    <li className='channel_list--channel'># js-is-fun</li>
                    <li className='channel_list--channel'># js-is-fun</li>
                </ul>
            </Panel.Body>
        </Panel>
    );
};

export default ChannelList;
