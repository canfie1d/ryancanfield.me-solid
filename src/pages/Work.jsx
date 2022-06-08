import { Link } from "solid-app-router";
// import classNames from 'classnames';
import { CLIENTS, DEMOS, OPEN_SOURCE, PROJECTS } from '../services/Data';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
import OpenSourceList from '../components/OpenSourceList';
import CardList from '../components/CardList';
import TagList from '../components/TagList';
import DemoLink from '../components/DemoLink';
import AnimatedWaypoint from '../components/AnimatedWaypoint';
import SEO from '../components/Seo';
import Recommendations from '../components/Recommendations';
import ProgressiveImage from '../components/ProgressiveImage';
import style from '../styles/components/layout.module.scss';
import cardStyle from '../styles/components/card.module.scss';
import projectStyle from '../styles/components/project.module.scss';
import buttonStyle from '../styles/components/button.module.scss';
import tagStyle from '../styles/components/tag-list.module.scss';
import { For } from "solid-js";

const Work = props => {
  const renderProjectList = () => {
    return (<For each={PROJECTS}>{(project, i) => (
      <div class={cardStyle['card_row']} key={i}>
        <div class={`${cardStyle['card__column']} ${cardStyle['card__column--auto']}`}>
          <ProgressiveImage
            class={`${cardStyle['card__image']} ${projectStyle['project__image']}`}
            src={project.image}
            alt=''
          />
        </div>
        <div class={`${cardStyle['card__column']} ${cardStyle['card__column--auto']}`}>
          <h3 class={`h3 ${cardStyle['h3']} ${cardStyle['card__title']} ${projectStyle['project__title']}`}>
            {project.title}
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              Visit
            </a>
          </h3>
          <div class={cardStyle['card__description-wrapper']}>
            <p class={cardStyle['card__description']}>{project.description}</p>
          </div>
          <Link href={project.url} class={projectStyle['project__link']}>
            <a class={`${buttonStyle['button']} ${buttonStyle['button--secondary']}`}>
              Case Study
            </a>
          </Link>
        </div>
      </div>
    )};
    </For>);
  };

  const renderDemoList = () => {
    return (
      <For each={DEMOS}>
        {(demo, i) => (
          <DemoLink
            key={`${demo.title}-${i()}`}
            id={demo.id}
            title={demo.title}
            image={demo.image}
            hearts={demo.hearts}
          />
        )}
      </For>
    );
  };

  return (
    <main class='fade'>
      <SEO title='Work' siteTitle='Ryan Canfield' description='A selection of projects, demos &amp;&nbsp;clients.' />
      <Introduction title="My Work." subtitle="A selection of projects, demos & clients." />
      <div class={style['content']} id='content'>
        <div class='hr' />
        <h3 class='h3'>
          <span class={`${tagStyle['tag__item']} ${tagStyle['tag__item--secondary']}`}>NEW!</span> Case
          Studies
        </h3>
        {/* <CardList twoWide cards={renderProjectList()} /> */}
        <div class='hr hr--extra-margin' />
        <h3 class='h3'>Interface Demos</h3>
        {/* <CardList cards={renderDemoList()} /> */}
        <div class={style['content__split']}>
          {/* {/* <AnimatedWaypoint class={style['content__split__column']}> */}
          <div class={style['content__split__column']}>
            <div class='hr' />
            <h3 class='h3'>Open source projects</h3>
            <OpenSourceList items={OPEN_SOURCE} />
          {/* </AnimatedWaypoint> */}
          </div>
          {/* <AnimatedWaypoint class={style['content__split__column']}> */}
          <div class={style['content__split__column']}>
            <div class='hr' />
            <h3 class={`h3 ${style['client__list__header']}`}>Companies I've worked with</h3>
            <TagList tags={CLIENTS} />
          {/* </AnimatedWaypoint> */}
          </div>
        </div>
      </div>
      <Recommendations />
      <Footer />
    </main>
  );
}

export default Work;
