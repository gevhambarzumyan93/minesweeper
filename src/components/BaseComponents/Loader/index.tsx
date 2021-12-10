import React from 'react';
import classNames from 'classnames';
import styles from './Loader.module.less';

type TLoaderType = {
  spinning: boolean;
  fullScreen?: boolean;
  text?: string;
};

export default ({ spinning, fullScreen = false, text = '' }) => {
  return (
    <div
      className={classNames(styles.loader, {
        [styles.hidden]: !spinning,
        [styles.fullScreen]: fullScreen,
      })}
    >
      <div className={styles.warpper}>
        <div className={styles.inner} />
        <div className={styles.text}>{text || 'LOADING'}</div>
      </div>
    </div>
  );
};
