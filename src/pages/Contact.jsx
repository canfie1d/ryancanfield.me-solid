// import classNames from 'classnames';
import { CONTACT_POINTS } from '../services/Data';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Icon from '../components/Icon';
import SEO from '../components/Seo';
import lStyle from '../styles/components/layout.module.scss';
import style from '../styles/components/contact-card.module.scss';
import Recommendations from '../components/Recommendations';
import { Switch } from 'solid-js';

const Contact = props => {

  const renderContactPoints = () => {
    return (
      <For each={CONTACT_POINTS}>{(contact, i) => {
        if (contact.type === 'button') {
          return (
            <li key={i()} class={`${style['contact-card__item']} ${style['contact-card__item__email']}`}>
              <a class={style['button']} href={contact.url}>
                {contact.title}
              </a>
            </li>
          );
        } else {
          return (
            <li key={i} class={style['contact-card__item']}>
              <a class='a' href={contact.url}>
                <Icon color='primary' size='x-large' name={contact.icon} />
                <span class='visually-hidden'>{contact.title}</span>
              </a>
            </li>
          );
        }}}
      </For>
    );
  }

  return (
    <main class='fade'>
      <SEO title='Contact' siteTitle='Ryan Canfield' description="I'd love to hear from you." />
      <Introduction title="Contact Me." subtitle="You can reach to out me in several ways." />
      <div class={lStyle['content']} id='content'>
        <div class='hr' />
        <h3 class={`h3 ${style['h3']}`}>I'd love to hear from you</h3>
        <Card>
          <div class={style['contact-card']}>
            <h3 class={`h3 ${style['h3']}`}>Would you like to work together?</h3>
            <h3 class={`h3 ${style['h3']}`}>I'm not seeking a new opportunity but I always<br /> like hearing from new (and familiar) people!</h3>
            <ul class={style['contact-card__list']}>
              {renderContactPoints()}
            </ul>
          </div>
        </Card>
      </div>
      <Recommendations />
      <Footer />
    </main>
  );
}

export default Contact;
