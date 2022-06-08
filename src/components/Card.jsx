// import AnimatedWaypoint from '../components/AnimatedWaypoint';
import style from '../styles/components/card.module.scss';

const Card = props => {
  const classes = {
    [style['card__item']]: true,
    [props.class]: props.class
  };

  const c = children(() => props.children);

  if (props.inList) {
    return (
      // <AnimatedWaypoint element={props.element || 'li'} classList={classes}>
      <div classList={classes}>
        {c()}
      {/* </AnimatedWaypoint> */}
      </div>
    );
  }

  return (
    // <AnimatedWaypoint element={props.element || 'div'}>
      <div classList={classes}>
        {c()}
      </div>
    // </AnimatedWaypoint>
  );
}

export default Card;
