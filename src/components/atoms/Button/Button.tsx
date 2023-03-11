import React, { FC, memo } from 'react';
import classNames from 'classnames';
import SVG from 'react-inlinesvg';

import { IButtonProps } from './models';
import Styles from './style.module.scss';

const Button: FC<IButtonProps> = ({
	outline = false,
	primary = false,
	danger = false,
	link = false,
	text = false,
	type='button',
	justify,
	disabled = false,
	fullWidth = false,
	sm,
	md,
	lg,
	className = '',
	shadow,
	children,
	withIcon,
	spinner,
	onClick
}) => {
	const classes = classNames(
		Styles.button,
		{
			[Styles.outline]: outline,
			[Styles.primary]: primary,
			[Styles.danger]: danger,
			[Styles.link]: link,
			[Styles.text]: text,
			[Styles.disabled]: disabled,
			[Styles.fullWidth]: fullWidth,
			[Styles.sm]: sm,
			[Styles.md]: md,
			[Styles.lg]: lg,
			[Styles.shadow]: shadow,
			[Styles.justifyCenter]: justify === 'center',
			[Styles.justifyFlexStart]: justify === 'flex-start',
			[Styles.justifyFlexEnd]: justify === 'flex-end',
		},
		className
	);

	return (
		<button className={classes} disabled={disabled} onClick={onClick} type={type}>
			{
				spinner ? 
					<div className={Styles.spinner}>
						{
							spinner?.loading ? 
								<>
									<SVG src="/icons/spinner.svg" className={Styles.buttonIcon} width={24} />
									<span className={Styles.text}>{spinner.loadingText}</span>
								</>
								:   spinner?.text
						}
					</div>
					: 
					<>
						<div className={classNames({ [Styles.withOutIcon]: withIcon })}>{children}</div>
						{
							withIcon ? <div className={Styles.withIcon}>{withIcon}</div> : null
						}
					</>
			}
		</button>
	);
};

export default memo(Button);
