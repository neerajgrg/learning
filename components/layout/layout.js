import { Fragment } from "react";
import MainNavigation from "./main-navigation";
import styles from './layout.module.css';

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main className={styles.main}>
        {props.children}
      </main>
    </Fragment>
  );
}

export default Layout;