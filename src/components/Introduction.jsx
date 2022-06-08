import style from '../styles/components/introduction.module.scss';

const Introduction = props => {
  return (
    <div class={style['introduction']}>
      <h1 class={`h1 ${style['h1']}`}>{props.title}</h1>
      <h2 class={`h2 ${style['h2']}`}>{props.subtitle}</h2>
    </div>
  );
}

export default Introduction;
