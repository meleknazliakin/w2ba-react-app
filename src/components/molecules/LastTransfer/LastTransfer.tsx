import React from 'react';
import Styles from './style.module.scss';

const LastTransfer = () => {
  return (
    <div className={Styles.LastTransferContainer}>
      <div className={Styles.header}>Last Transfers</div>
      <div className={Styles.transfers}>
        <div className={Styles.item}>
          <div className={Styles.date}>07/01/2023</div>
          <div className={Styles.iban}>TR76 0009 9012 3456 7800 1000 01</div>
          <div className={Styles.price}>100 TL</div>
        </div>
        <div className={Styles.item}>
          <div className={Styles.date}>07/01/2023</div>
          <div className={Styles.iban}>TR76 0009 9012 3456 7800 1000 01</div>
          <div className={Styles.price}>100 TL</div>
        </div>
      </div>
    </div>
  );
};

export default LastTransfer;