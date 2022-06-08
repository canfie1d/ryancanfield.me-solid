import { createEffect, createSignal, For } from 'solid-js';
import { RECOMMENDATIONS } from '../services/Data';
import Icon from './Icon';
import style from '../styles/components/recommendation.module.scss';
import buttonStyle from '../styles/components/button.module.scss';
import tagStyle from '../styles/components/tag-list.module.scss';
import Flex from './layout/Flex';

const Recommendations = (props) => {
  const [recommendation, setRecommendation] = createSignal();
  const [readMore, setReadMore] = createSignal(false);

  createEffect(() => {
    const randomNumber = Math.floor(
      Math.random() * Math.floor(RECOMMENDATIONS.length)
    );
    const randomRecc = {
      ...RECOMMENDATIONS[randomNumber],
      ...{ index: randomNumber },
    };
    setRecommendation(randomRecc);
  });

  const updateRecomendation = (direction) => {
    if (direction === 'prev') {
      if (recommendation().index === 0) {
        setRecommendation({
          ...RECOMMENDATIONS[RECOMMENDATIONS.length - 1],
          ...{ index: RECOMMENDATIONS.length - 1 },
        });
      } else {
        setRecommendation({
          ...RECOMMENDATIONS[recommendation().index - 1],
          ...{ index: recommendation().index - 1 },
        });
      }
    } else {
      if (recommendation().index === RECOMMENDATIONS.length - 1) {
        setRecommendation({ ...RECOMMENDATIONS[0], ...{ index: 0 } });
      } else {
        setRecommendation({
          ...RECOMMENDATIONS[recommendation().index + 1],
          ...{ index: recommendation().index + 1 },
        });
      }
    }
  };

  const classes = {[style['recommendation']]: true, [style['recommendation--auto']]: readMore()};

  if (recommendation()) {
    return (
      <div key={recommendation().name} classList={classes}>
        <div class={style['recommendation__content']}>
          <Flex.Row justify='space-between' alignment='center'>
            <Flex.Column>
              <span class={`${tagStyle['tag__item']} ${tagStyle['tag__item--secondary']}`}>NEW!</span>
              <p class={`p ${style['p']} ${style['p--small']}`}>Recommended By:</p>
              <h3 class={`h3 ${style['h3']}`}>{recommendation().name}</h3>
              <h4 class='h4'>
                {recommendation().position} at {recommendation().company}
              </h4>
            </Flex.Column>
            <Flex.Column grow={0}>
              <button
                onClick={[updateRecomendation, 'prev']}
                classList={`${buttonStyle['button']} ${buttonStyle['button--transparent']} ${buttonStyle['button--inline']} ${buttonStyle['button--small']}`}
              >
                <Icon name='caret-left' />
                <span class='visually-hidden'>Previous recommedation</span>
              </button>
              <button
                onClick={[updateRecomendation, 'next']}
                classList={`${buttonStyle['button']} ${buttonStyle['button--transparent']} ${buttonStyle['button--inline']} ${buttonStyle['button--small']}`}
              >
                <Icon name='caret-right' />
                <span class='visually-hidden'>Next recommedation</span>
              </button>
            </Flex.Column>
          </Flex.Row>
          {readMore() ? (
            <For each={recommendation().message}>{(message, i) => (
              <p key={`message-${i()}`} class={`p ${style['p']}`}>{message}</p>
            )}</For>
          ) : (
            <p class={`p ${style['p']} ${style['p--clamped']}`}>{recommendation().message[0]}</p>
          )}
          <button
            class={`${buttonStyle['button']} ${buttonStyle['button--small']}`}
            onClick={[setReadMore, !readMore()]}
          >
            {readMore() ? 'Hide' : 'Continue Reading'}
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Recommendations;
