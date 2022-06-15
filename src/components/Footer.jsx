import style from '../styles/components/footer.module.scss';

const Footer = props => {
  return (
    <footer class={style['footer']}>
      {props.children && (
        <div class={style['footer__content']}>{props.children}</div>
      )}
      <span>View the <a class={`a ${style['a']}`} href='http://www.github.com/canfie1d/ryancanfield.me-solid'>Source Code</a></span>
    </footer>
  );
}

export default Footer;
