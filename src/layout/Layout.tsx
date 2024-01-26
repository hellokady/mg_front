import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>header</header>
      <section className={styles.content}>
        <aside className={styles.aside}>asidae</aside>
        <main className={styles.main}>
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default Layout;
