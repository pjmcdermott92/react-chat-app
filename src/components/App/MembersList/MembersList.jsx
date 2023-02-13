
import Panel from '../Panel/Panel';
import Member from '../Member/Member';
import './MembersList.scss';

const DemoUser = {
    name: 'John Doe'
}

const MembersList = () => {

    return (
        <aside className='members-panel'>
            <Panel>
                <Panel.Title>
                    Online Users
                </Panel.Title>
                <Panel.Body className='users-list'>
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                    <Member user={DemoUser} />
                </Panel.Body>
            </Panel>
        </aside>
    )
}

export default MembersList;
