// import { TransitionGroup,CSSTransition } from 'react-transition-group';
// import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import styles from '../styles/components/layout.module.scss';
import { Outlet } from 'solid-app-router';

const Layout = (props) => {
  return (
    <div class={styles['l']}>
      <div class={styles['l--rightColumn']}>
        <a class='visually-hidden' href="#content">Skip to content</a>
        <Header />
      </div>
      <div class={styles['l--leftColumn']}>
        {/* <TransitionGroup id='TransitionGroup'> */}
          {/* <CSSTransition
            key={uuidv4()}
            class='fade'
            timeout={{ enter: 1000, exit: 300 }}
          > */}
            <Outlet />
          {/* </CSSTransition>
        </TransitionGroup> */}
      </div>
    </div>
  )
}

export default Layout;
