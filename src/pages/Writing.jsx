import { ARTICLE_LINKS } from '../services/Data';
import CardList from '../components/CardList';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
import ArticleLink from '../components/ArticleLink';
import SEO from '../components/Seo';
import style from '../styles/components/layout.module.scss';
import Recommendations from '../components/Recommendations';

const Writing = () => {
  const getCardLinks = () => {
    return (
      ARTICLE_LINKS.map((link, i) => (
        <ArticleLink
          key={i()}
          url={link.url}
          imageUrl={link.imageUrl}
          title={link.title}
          description={link.description}
          length={link.length}
        />
      ))
    );
  }

  return (
    <main class='fade'>
      <SEO title='Writing' siteTitle='Ryan Canfield' description="Organized thoughts on front-end design & development." />
      <Introduction title="My Writing." subtitle="Organized thoughts on front-end design & development." />
      <div class={style['content']} id='content'>
        <div class='hr' />
        <h3 class='h3'>Selected Medium Articles</h3>
        <CardList cards={getCardLinks()} />
      </div>
      <Recommendations />
      <Footer />
    </main>
  );
}

export default Writing;
