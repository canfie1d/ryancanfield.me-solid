import { createSignal } from 'solid-js';

const ProgressiveImage = (props) => {
  const [highResImageLoaded, setHighResImageLoaded] = createSignal(false);

  return (
    <>
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
        style={{
          position: 'absolute',
          filter: 'blur(1px)',
          clipPath: 'inset(0)',
          ...(!highResImageLoaded() && { transition: 'opacity ease-in 500ms' }),
          ...(highResImageLoaded() && { opacity: 0 }),
        }}
        src={props.placeholderSrc}
        alt=''
      />
      <p class='p p--caption'>{props.caption}</p>
    </>
  );
};

export default ProgressiveImage;
