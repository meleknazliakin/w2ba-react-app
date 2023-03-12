import React from 'react';
import useSavedTransfersStore from "../../../store/savedTransfersStore";
import Styles from './style.module.scss';

const SavedTransfer = () => {
  const { transfers } = useSavedTransfersStore((state) => state);
  return (
    <div className={Styles.SavedTransferContainer}>
      <div className={Styles.header}>Saved Transfers</div>
      <div className={Styles.transfers}>
        {
          transfers.map(transfer => {
            return (
              <div key={transfer.name} className={Styles.item}>
                <div className={Styles.name}>{transfer.name}</div>
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

export default SavedTransfer;