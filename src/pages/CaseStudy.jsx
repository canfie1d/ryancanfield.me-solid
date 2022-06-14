import { Link, useParams } from "solid-app-router";
import { createSignal, For } from 'solid-js';
import { Portal } from "solid-js/web";
// import { useModal } from '../hooks/useModal';
// import classNames from 'classnames';
import { CASE_STUDIES } from '../services/Data';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
import Icon from '../components/Icon';
import Video from '../components/Video';
import AnimatedWaypoint from '../components/AnimatedWaypoint';
import CardList from '../components/CardList';
import ProgressiveImage from '../components/ProgressiveImage';
import Collection from '../components/Collection';
import SEO from '../components/Seo';
import style from '../styles/components/layout.module.scss';
import buttonStyle from '../styles/components/button.module.scss';

const CaseStudy = (props) => {
  // const { openModal, closeModal, isOpen, Modal } = useModal();
  const [activeImage, setActiveImage] = createSignal();

  const params = useParams();

  const caseStudyId = params.id;

  const caseStudy = CASE_STUDIES.find(
    (caseStudy) => caseStudy.id === caseStudyId
  );

  const handleClick = (image, e) => {
    props.setActiveImage(image);
    props.openModal(e);
  }

  const renderAdditionalImages = () => {
    return (
    <For each={caseStudy.additionalImages}>{(image, i) => (
      <button
        key={`additional-image-${i}`}
        class='button button--invisible'
        onClick={[handleClick, image.src]}
      >
        <ProgressiveImage
          class='display--block max-width--100 shadow'
          src={image.src}
          caption={image.caption}
          alt=''
        />
      </button>
    )};
    </For>
  )};

  if (caseStudy || caseStudyId === 'collection') {
    return (
      <main>
        <SEO title={caseStudy.title} siteTitle='Ryan Canfield' description={caseStudy.subtitle} />
        {activeImage() && (
          <Portal mount={document.getElementById("modal")}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  class='button button--invisible'
                  style={{ marginBottom: '16px' }}
                  onClick={closeModal}
                >
                  <Icon name='close' color='white' size='large' />
                  <span class='visually-hidden'>Close</span>
                </button>
              </div>
              <ProgressiveImage
                style={{
                  width: 'inherit',
                  height: 'auto',
                }}
                src={activeImage()}
              />
            </div>
          </Portal>
        )}
        {caseStudyId === 'collection' ? (
          <Collection setActiveImage={setActiveImage} openModal={openModal} />
        ) : (
          <>
            <Introduction
              key={caseStudy.id}
              super='Case Study:'
              title={caseStudy.title}
              subtitle={caseStudy.subtitle}
            />
            <div class={style['content']} id='content'>
              <div class={style['content__split']}>
                <AnimatedWaypoint class={style['content__split__column']}>
                  <div class='hr' />
                  <h3 class='h3'>Problem Analysis</h3>
                  <For each={caseStudy.problem.content}>{(problem, i) => (
                    <p key={`problem-${i()}`} class='p'>
                      {problem}
                    </p>
                  )}
                  </For>
                </AnimatedWaypoint>
                <AnimatedWaypoint class={style['content__split__column']}>
                  <For each={caseStudy.problem.images}>{(image, i) => (
                    <button
                      key={`problem-image-${i()}`}
                      class='button button--invisible margin-top--large'
                      onClick={[handleClick, image.src]}
                    >
                      <div>
                        <ProgressiveImage
                          class='shadow display--block max-width--100'
                          src={image.src}
                          caption={image.caption}
                          alt=''
                        />
                      </div>
                    </button>
                  )}</For>
                </AnimatedWaypoint>
              </div>
              <div class={style['content__split content__split--reverse-small']}>
                <AnimatedWaypoint class={style['content__split__column']}>
                  <For each={caseStudy.solution.images}>{(image, i) => (
                    <button
                      key={`solution-image-${i}`}
                      class='button button--invisible margin-top--large'
                      onClick={[handleClick, image.src]}
                    >
                      <ProgressiveImage
                        class='shadow display--block max-width--100'
                        src={image.src}
                        caption={image.caption}
                        alt=''
                      />
                    </button>
                  )}</For>
                </AnimatedWaypoint>
                <AnimatedWaypoint class={style['content__split__column']}>
                  <div class='hr' />
                  <h3 class='h3'>Solution</h3>
                  <For each={caseStudy.solution.content}>{(solution, i) => (
                    <p key={`solution-${i}`} class='p'>
                      {solution}
                    </p>
                  )}
                  </For>
                </AnimatedWaypoint>
              </div>
              <div class={style['content__split']}>
                <AnimatedWaypoint class={style['content__split__column']}>
                  <div class='hr' />
                  <h3 class='h3'>Result</h3>
                  <For each={caseStudy.result.content}>{(result, i) => (
                    <p key={`result-${i}`} class='p'>
                      {result}
                    </p>
                  )}</For>
                </AnimatedWaypoint>
                <AnimatedWaypoint class={style['content__split__column']}>
                  <For each={caseStudy.result.images}>{(image, i) => (
                    <button
                      key={`result-image-${i}`}
                      class={`${buttonStyle['button']} ${buttonStyle['button--invisible']} margin-top--large`}
                      onClick={[handleClick, image.src]}
                    >
                      <ProgressiveImage
                        class='browser display--block max-width--100'
                        src={image.src}
                        caption={image.caption}
                        alt=''
                      />
                    </button>
                  )}
                  </For>
                </AnimatedWaypoint>
                <AnimatedWaypoint class='margin-top--large'>
                  <CardList cards={renderAdditionalImages()} />
                </AnimatedWaypoint>
                {caseStudy.videoUrl && (
                  <AnimatedWaypoint class='margin--auto margin-top--large'>
                    <Video
                      class='browser'
                      poster={caseStudy.videoPoster}
                      src={caseStudy.videoUrl}
                    />
                  </AnimatedWaypoint>
                )}
              </div>
            </div>
          </>
        )}
        <Footer>
          <Link href='/work'>
            <a class='a a--large'>
              Back
            </a>
          </Link>
        </Footer>
      </main>
    );
  }
  return null;
};

export default CaseStudy;
