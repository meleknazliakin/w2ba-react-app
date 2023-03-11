import React from 'react';
import Styles from './style.module.scss';

const SavedTransfer = () => {
  return (
    <div className={Styles.SavedTransferContainer}>
    <div className={Styles.header}>Saved Transfers</div>
    <div className={Styles.transfers}>
      <div className={Styles.item}>
        <div className={Styles.name}>Transfer 1</div>
        <div className={Styles.iban}>TR76 0009 9012 3456 7800 1000 01</div>
        <div className={Styles.price}>100 TL</div>
      </div>
      <div className={Styles.item}>
        <div className={Styles.name}>Transfer 2</div>
        <div className={Styles.iban}>TR76 0009 9012 3456 7800 1000 01</div>
        <div className={Styles.price}>100 TL</div>
      </div>
    </div>
  </div>
  );
};

export default SavedTransfer;