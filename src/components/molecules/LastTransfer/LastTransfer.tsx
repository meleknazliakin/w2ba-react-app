import React from 'react';
import useLastTransfersStore from "../../../store/lastTransfersStore";
import Styles from './style.module.scss';

const LastTransfer = () => {
  const { transfers } = useLastTransfersStore((state) => state);
  return (
    <div className={Styles.LastTransferContainer}>
      <div className={Styles.header}>Last Transfers</div>
      <div className={Styles.transfers}>
        {
          transfers.map(transfer => {
            return (
              <div key={transfer.iban} className={Styles.item}>
                <div className={Styles.date}>{transfer.date}</div>
                <div className={Styles.iban}>{transfer.iban}</div>
                <div className={Styles.price}>{transfer.amount}</div>
                <div className={Styles.currency}>{transfer.currency}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default LastTransfer;