import style from '../../styles/components/flex.module.scss';

 const FlexColumn = props => {
  const c = children(() => props.children);

   return (
     <div
       class={style['flex__column']}
       style={{
         flex: `${props.grow} ${props.shrink} ${props.basis}`,
         alignSelf: props.alignSelf,
         ...props.style,
       }}
     >
       {c()}
     </div>
   );
 };

 FlexColumn.defaultProps = {
   grow: 1,
   shrink: 1,
   basis: 'auto',
   alignSelf: 'auto',
 };

 export default FlexColumn;
