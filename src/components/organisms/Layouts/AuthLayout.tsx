import React, { FC } from 'react';
import SVG from 'react-inlinesvg';
import useUserStore from '../../../store/userStore';
import Button from '../../atoms/Button';
import Navigation from '../../molecules/Navigation/Navigation';
import { IAthProps } from './models';
import Styles from './styles.module.scss';

const AuthLayout: FC<IAthProps> = ({
  children
}) => {
  const { user, isAuthentication } = useUserStore((state) => state);
  return (
    <div className={Styles.AuthContainer}>
      <div className={Styles.header}>
        <div className={Styles.logo}>
          <img src='w2ba.png'/>
        </div>

        <div className={Styles.navigationContainer}>
          <Navigation />
        </div>

        <div className={Styles.userInfo}>
          <div className={Styles.user}>
            <SVG src="/icons/user-duble.svg" width={20} />
            {user.name}</div>
          <Button type="submit" primary sm>
            <div className={Styles.button}>
              Güvenli Çıkış
            </div>
          </Button>
        </div>
        
      </div>
    
      <div className={Styles.main}>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;