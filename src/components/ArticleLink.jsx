import style from '../styles/components/card.module.scss';

const ArticleLink = props => {
  return (
    <a href={props.url} class={style['card__link']}>
      <div class={style['card__row']}>
        <div class={style['card__column']}>
          <img src={props.imageUrl} class={style['card__image']} alt='presentational card' role="presentation" />
        </div>
        <div class={style['card__column']}>
          <span class={style['card__title']}>
            {props.title}
          </span>
          <div class={style['card__description-wrapper']}>
            <p class={style['card__description']}>
              {props.description}
            </p>
          </div>
          <span class={style['card__length']}>
            {props.lengthœ}
          </span>
        </div>
      </div>
    </a>
  );
}

export default ArticleLink;
