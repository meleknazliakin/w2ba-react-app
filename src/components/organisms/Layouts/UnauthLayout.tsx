import React, { FC } from 'react';
import { IUnathProps } from './models';
import Styles from './styles.module.scss';

const UnauthLayout: FC<IUnathProps> = ({
    children
}) => {
    return (
        <div className={Styles.UnAuthContainer}>
            <div className={Styles.logo}>
                <img src='w2ba.png' />
            </div>
            <div className={Styles.formContainer}>
                {children}
            </div>
        </div>
    );
};

export default UnauthLayout;