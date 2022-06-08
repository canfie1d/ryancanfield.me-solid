import { createSignal, createEffect } from 'solid-js';
import style from '../styles/components/icon.module.scss';

const Icon = props => {
  const [ isMounted, setIsMounted ] = createSignal(false);
  const [ icon, setIcon ] = createSignal('');

  createEffect(() => {
    // This article details webpack magic comments used in dynamic import
    // https://medium.com/front-end-hacking/webpack-and-dynamic-imports-doing-it-right-72549ff49234

    setIsMounted(true);
    const iconPath = `./icons/${props.name}`;
    import(/* webpackMode: "eager" */ /* @vite-ignore */`${iconPath}`)
      .then(module => {
        return module.default();
      })
      .then(IconComponent => {
        if (isMounted) {
          setIcon(IconComponent);
        }
      })
      .catch(() => {
        console.warn(`ICON NOT FOUND - ${props.name}`)
      })

    return function cleanup() {
      setIsMounted(false);
    };
  }, [isMounted, props.name])

  const classes = {
    [style['icon']]: true,
    [style[`icon--${props.size}`]]: props.size,
    [style[`icon--${props.color}`]]: props.color,
    [style[`icon--rotate-${props.rotate}`]]: props.rotate,
    [style['icon--inline']]: props.displayInline,
    [style['drop-shadow']]: props.dropShadow,
    [props.class]: props.class
  };

  return (
    <span classList={classes} style={props.style}>
      {icon()}
    </span>
  );
};

Icon.defaultProps = {
  size: null,
  rotate: null,
  color: null,
  class: null
}

export default Icon;
