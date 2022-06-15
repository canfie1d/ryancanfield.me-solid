import Icon from './Icon';
import style from '../styles/components/open-source.module.scss';
import { For } from 'solid-js';

const OpenSourceList = props => {
  const renderNpmLink = item => {
    if (item.npmUrl) {
      return (
        <a class='a' href={item.npmUrl}>
          <Icon color='primary' name='npm' size='x-large' />
          <span class='visually-hidden'>{`View ${item.title} on NPM`}</span>
        </a>
      );
    }
  }

  const renderItems = () => {
    return (
    <For each={props.items}>
      {item => (
        <li class={style['open-source__item']}>
          <a class='a' href={item.githubUrl}>
            <Icon color='primary' name='github' size='x-large' />
            <span class='visually-hidden'>{`View ${item.title} on Github`}</span>
          </a>
          {renderNpmLink(item)}
          <div class={style['open-source__header']}>
            <h4 class={`h4 ${style['h4']}`}>{item.title}</h4>
          </div>
        </li>
      )}
    </For>
    );
  }

  return (
    <ul class={style['open-source__list']}>
      {renderItems()}
    </ul>
  );
}

export default OpenSourceList;
