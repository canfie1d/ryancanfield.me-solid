// import { Waypoint } from 'react-waypoint';
import { children, createSignal, Show } from 'solid-js';
import { createViewportObserver } from "@solid-primitives/intersection-observer"

const AnimatedWaypoint = props => {
  const [add] = createViewportObserver([], { threshold: 0.9 });
  const blocks = [...new Array(10)].map(
    () => createSignal(false)
  );
  const observer = (el, entry) => {
    const [getter, setter] = entry();
    add(el, (entry) => setter(entry.isIntersecting));
  };
  // const [waypoint, setWaypoint] = createSignal({});

  const renderElement = () => {
      const classes = {
      'waypoint': true,
      'waypoint--inView': waypoint().currentPosition === 'inside',
      [props.class]: props.class
    };

    const c = children(() => props.children);

    if (props.element) {
      return (
        <props.element use:observer={block} classList={classes}>
          {c()}
        </props.element>
      );
    }

    return (
      <div use:observer={block} classList={classes}>
        {c()}
      </div>
    );
  }

  return (
    // <Waypoint
      // scrollableAncestor={typeof window !== 'undefined' ? window: ''}
    //   onEnter={waypoint => setWaypoint(waypoint)}
    //   bottomOffset={100}
    // >
    <div>
      {renderElement()}
    </div>
    // </Waypoint>
  );
};

export default AnimatedWaypoint;
