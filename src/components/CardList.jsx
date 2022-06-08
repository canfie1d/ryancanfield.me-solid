import Card from './Card';
import style from '../styles/components/card.module.scss';

const CardList = props => {
  const renderCards = () => {
    return (
      <For
        each={props.cards}>{(card, i) => (
          <Card
            key={i()}
            el={props.element}
            inList
          >
            {card}
          </Card>
        )}
      </For>
    );
  }

  return (
    <ul class={style['card__list']}>
      {renderCards()}
    </ul>
  );
}

export default CardList;
