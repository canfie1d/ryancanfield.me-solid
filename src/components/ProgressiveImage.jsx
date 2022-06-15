import { createSignal } from 'solid-js';

const ProgressiveImage = (props) => {
  const [highResImageLoaded, setHighResImageLoaded] = createSignal(false);

  return (
    <div style={{position: 'relative', width: '100%'}}>
      <img
        {...props}
        onLoad={() => {
          setHighResImageLoaded(true);
        }}
        src={props.src}
        alt=''
      />
      <img
        {...props}
        style={highResImageLoaded() ? {
          position: 'absolute',
          top: 0,
          filter: 'blur(1px)',
          'clip-path': 'inset(0)',
          opacity: 0
        } : {
          position: 'absolute',
          top: 0,
          filter: 'blur(1px)',
          'clip-path': 'inset(0)',
          opacity: 1,
          transition: 'opacity ease-in 500ms'
        }
      }
        src={props.placeholderSrc}
        alt=''
      />
      <p class='p p--caption'>{props.caption}</p>
    </div>
  );
};

export default ProgressiveImage;
