// import classNames from 'classnames';
import { createMemo } from 'solid-js';
import { Link, useLocation } from "solid-app-router";
import Icon from './Icon';
import style from '../styles/components/navigation.module.scss';

const Navigation = props => {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  return (
    <nav class={style['nav']}>
      <ul class={style['nav__list']}>
        <li class={style['nav__item']}>
          <Link href='/'>
            <a classList={{[style['nav__link']]: true, [style["nav__link--active"]]: pathname === '/'}}>
              <Icon class={style['nav__link__icon']} name='about' color='white' size='large' />
              <span class={style['nav__link__title']}>About</span>
            </a>
          </Link>
        </li>
        <li class={style['nav__item']}>
          <Link href='/work'>
            <a classList={{[style['nav__link']]: true, [style["nav__link--active"]]: pathname === '/work'}}>
              <Icon class={style['nav__link__icon']} name='work' color='white' size='large' />
              <span class={style['nav__link__title']}>Work</span>
            </a>
          </Link>
        </li>
        <li class={style['nav__item']}>
          <Link href='/writing'>
            <a classList={{[style['nav__link']]: true, [style["nav__link--active"]]: pathname === '/writing'}}>
              <Icon class={style['nav__link__icon' ]} name='writing' color='white' size='large' />
              <span class={style['nav__link__title']}>Writing</span>
            </a>
          </Link>
        </li>
        <li class={style['nav__item']}>
          <Link href='/contact'>
            <a classList={{[style['nav__link']]: true, [style["nav__link--active"]]: pathname === '/contact'}}>
              <Icon class={style['nav__link__icon']} name='contact' color='white' size='large' />
              <span class={style['nav__link__title']}>Contact</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
