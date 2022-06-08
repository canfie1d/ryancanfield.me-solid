import FlexColumn from './FlexColumn';
import FlexRow from './FlexRow';

/**
* A flex row is used to lay out content.
*/
const Flex = props => {
  const c = children(() => props.children);

  return (
    <FlexRow
      style={props.style}
      wrap={props.wrap}
      direction={props.direction}
      inline={props.inline}
      reversed={props.reversed}
      class={props.class}
      alignment={props.alignment}
      justify={props.justify}
    >
      {c()}
    </FlexRow>
  );
};

Flex.Column = FlexColumn;
Flex.Row = FlexRow;

export default Flex;
