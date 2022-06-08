import { For } from 'solid-js';
import style from '../styles/components/tag-list.module.scss';

const TagList = props => {
  const renderList = () => {
    return (
      <For each={props.tags}>
        {tag => {
          if (tag.url) {
            return (
              <li key={tag.title} class={`${style['tag__item']} ${style['tag__item--hasLink']}`}>
                <a href={tag.url} class={`a ${style['tag__link']}`}>{tag.title}</a>
              </li>
            );
          } else {
            return (
              <li key={tag.title} class={style['tag__item']}>
                {tag.title}
              </li>
            );
          }
        }}
      </For>
    );
  };

  return (
    <ul class={style['tag__list']}>
      {renderList()}
    </ul>
  );
}

export default TagList;
