import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
// import AnimatedWaypoint from '../components/AnimatedWaypoint';
import SEO from '../components/Seo';
import style from '../styles/components/layout.module.scss';
import Recommendations from '../components/Recommendations';

const About = props => {
  return (
    <main class='fade'>
      <SEO title='About' siteTitle='Ryan Canfield' description="Ryan Canfield is a digital product designer & developer in Seattle, Wa." />
      <Introduction title="I'm Ryan Canfield," subtitle="a digital product designer & developer in Seattle, Wa." />
      <div class={style['content']} id='content'>
        <div class={style['content__split']}>
          {/* <AnimatedWaypoint> */}
            <div class={style['content__split__column']}>
              <div class='hr' />
              <h3 class='h3'>Expertise</h3>
              <p class='p'>While designing for digital products, I use an assortment of tools such as <a class='a' href="https://www.sketchapp.com/">Sketch</a>, Principle, Marvel & inVision to design and prototype. I am always on the hunt for tools that will allow me to design more iteratively and effectively.</p>
              <p class='p'>In addition to my traditional graphic design education, I'm extremely comfortable with HTML, CSS(SCSS & Stylus) & Javascript. In development I specialize in dynamic user interfaces built with javascript (<a class='a' href='http://www.reactjs.org'>Reactjs</a> in particular). I strive for maintainable, extensible code that is accessible and user-centric.</p>
              <p class='p'>I am accustomed to an agile development flow including daily stand-up, sprint based development, and iterative & incremental development cycles. I am comfortable with complex git workflows as well as kanban style issue tracking services.</p>
              <p class='p'>I work well on a team and can brainstorm and problem solve sticking points on the fly; especially in areas where design and development meet. Because I can speak both languages, I am an excellent liason between design and development teams.</p>
            </div>
          {/* </AnimatedWaypoint>
          <AnimatedWaypoint> */}
            <div class={style['content__split__column']}>
              <div class='hr' />
              <h3 class='h3'>Professional Achievements & Initiatives</h3>
              <p class='p'>Spoke on personal design & development methodology at 2016 Phoenix Design Week.</p>
              <p class='p'>Established a weekly team training session in which one team member would research and present on a topic of interest in order to expand domain knowledge and team knowledge sharing capabilities.</p>
              <p class='p'>Technical lead for a 3 person team developing an application in collaboration with Shopify.</p>
              <p class='p'>Developed and maintained application frameworks, user interface component libraries, and knowledge bases in multiple previous positions.</p>
              <p class='p'>Introduced the importance and advocated for the inclusion of accessibility and building accessible digital products in multiple previous positions.</p>
              <p class='p'>Introduced company-wide coding standards to assist in developing highly readable & maintainable source code.</p>
            </div>
          {/* </AnimatedWaypoint>
          <AnimatedWaypoint> */}
            <div class={style['content__split__column']}>
              <div class='hr' />
              <h3 class='h3'>Work & Education</h3>
              <p class='p'>In 2009, I earned an Associates in Information Technology as a member of the National Honor Society. In May 2012, I earned a Bachelor of Fine Art in Graphic Design with Honors/Cum Laude & as the Salutatorian.</p>
              <p class='p'>Shortly thereafter, I began my career as a designer for the <a class='a' href='http://www.azstatefair.com'>Arizona State Fair</a> in Phoenix, AZ before focusing my career on web design and development. By October 2012, I was offered a position as a UI engineer at <a href='http://www.synapsestudios.com' class='a'>Synapse Studios</a>. A position I held until my move to Seattle, WA in 2016.</p>
              <p class='p'>After the move to Seattle, I began a new position at <a class='a' href='http://helpfulhuman.com'>Helpful Human</a> where I specialized in user interface design & front-end development. During my time with Helpful Human, I cut my teeth on large-scale, distributed application architecture while also working within a large and evolving design system.</p>
              <p class='p'>Following my work with Helpful Human, I was a software engineer at a R&D startup called <a class='a' href='https://xinova.com'>Xinova</a> where I architected and rebuilt the frontend of their innovation network platform- reducing 250,000 lines of legacy frontend code to only 40,000 lines of React in just 6 months.</p>
              <p class='p'>I then joined a seed startup called FreightWeb who was looking to shake up the logistic industry as a UI designer and frontend developer where I lead frontend efforts resulting in 4 applications in about 15 months.</p>
              <p class='p'>Currently, I am an engineering manager at <a href='http://assembleinc.com' class='a'>Assemble</a>. In addition to leading an engineering team I am frequently relied on for architectural and technical estimations and vetting in addition to being a codebase contributor.</p>
            </div>
          {/* </AnimatedWaypoint> */}
        </div>
      </div>
      <Recommendations />
      <Footer />
    </main>
  );
}

export default About;
