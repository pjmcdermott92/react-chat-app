import classNames from '../../../utils/classNames';
import './Panel.scss';

const Panel = ({ children, className, ...rest }) => {
	return (
		<div className={classNames('panel', className)} {...rest}>
			{children}
		</div>
	);
};

Panel.Title = ({ className, children, ...rest }) => (
	<div className={classNames('panel__title', className)} {...rest}>
		{children}
	</div>
);

Panel.Body = ({ className, children, ...rest }) => (
	<div className={classNames('panel__body', className)} {...rest}>
		{children}
	</div>
);

export default Panel;
