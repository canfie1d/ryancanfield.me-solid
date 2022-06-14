import Icon from './Icon';
import style from '../styles/components/demo-link.module.scss';

const DemoLink = props => {
  return (
    <a class={`a ${style['demo__link']}`} href={`http://www.codepen.io/canfie1d/full/${props.id}`}>
      <div class={style['demo__link__column']}>
        <h3 class={`h3 ${style['demo__title']}`}>{props.title}</h3>
        <div class={style['demo__heart-container']}>
          <Icon name='heart' size='small' color='secondary' />
          <span class={style['demo__heart__quantity']}>{props.hearts}</span>
        </div>
      </div>
      <div class={style['demo__link__column']}>
        <img src={props.image} alt='' />
      </div>
    </a>
  );
}

export default DemoLink;
