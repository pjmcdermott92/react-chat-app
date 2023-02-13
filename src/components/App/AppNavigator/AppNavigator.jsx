import {
	IoFileTrayFullSharp,
	IoChatbubblesSharp,
	IoSettings,
	IoPowerSharp,
} from 'react-icons/io5';
import ChannelList from '../ChannelList/ChannelList';
import Member from '../Member/Member';
import './AppNavigator.scss';

const AppNavigator = () => {
	return (
		<aside className='app-navigator'>
			<nav className='mode-ribbon'>
				<ul className='mode-ribbon__nav'>
					<li>
						<a>
							<span>
								<IoFileTrayFullSharp />
							</span>
						</a>
						<span className='item-tooltip'>Direct Messages</span>
					</li>
					<li  className='active'>
						<a>
							<span>
								<IoChatbubblesSharp />
							</span>
						</a>
						<span className='item-tooltip'>Channels</span>
					</li>
				</ul>
				<ul className='mode-ribbon__nav'>
					<li>
						<a>
							<span>
								<IoSettings />
							</span>
						</a>
						<span className='item-tooltip'>App Settings</span>
					</li>
					<li>
						<a>
							<span>
								<IoPowerSharp />
							</span>
						</a>
						<span className='item-tooltip'>Log Out</span>
					</li>
				</ul>
			</nav>
            <div className='list-pane'>
				<div>
					<ChannelList />
				</div>
                <div className='current-user-info'>
                    <Member user={{ name: 'John Doe' }} />
                </div>
            </div>
		</aside>
	);
};

export default AppNavigator;
