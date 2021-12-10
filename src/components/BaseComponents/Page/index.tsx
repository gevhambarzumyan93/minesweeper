import React from 'react';
import classNames from 'classnames';
import Loader from '../Loader';
import styles from './Page.module.less';

type TPageProps = {
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
  inner?: boolean;
  transparent?: boolean;
  dynamic?: boolean;
};

export default ({
  loading = false,
  inner = false,
  transparent = false,
  dynamic = false,
  children,
  className,
}: TPageProps) => {
  const loadingStyle = {
    height: 'auto',
    overflow: 'hidden',
  };

  return (
    <div
      className={classNames(className, {
        [styles.contentInner]: inner,
        [styles.transparent]: transparent,
        [styles.dynamic]: dynamic,
        [styles.loading]: loading,
      })}
    >
      {loading && <Loader spinning />}
      {children}
    </div>
  );
};
