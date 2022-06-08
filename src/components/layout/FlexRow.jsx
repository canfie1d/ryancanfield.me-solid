import style from '../../styles/components/flex.module.scss';
  /**
  * A flex row is used to lay out content.
  */
const FlexRow = props => {
  const classes = {
    [style['flex']]: true,
    [style['flex--wrap']]: props.wrap,
    [style['flex--inline']]: props.inline,
    [style['flex--reversed']]: props.reversed,
    [style[`flex--${props.direction}`]]: props.direction,
    [style[`flex--align-${props.alignment}`]]: props.alignment,
    [style[`flex--justify-${props.justify}`]]: props.justify,
    [props.class]: props.class,
  };

  const c = children(() => props.children);

  return (
    <div classList={classes} style={props.style}>
      {c()}
    </div>
  );
};

FlexRow.defaultProps = {
  wrap: false,
  inline: false,
  direction: 'row',
};

export default FlexRow;
