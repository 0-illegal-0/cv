export default function TransitionAnimation({
  transitionAnimation,
  transitionAnimationTop,
  transitionAnimationBottom,
}) {
  return (
    <div
      className="transition-animation"
      id="transition-animation"
      ref={transitionAnimation}
    >
      <div className="transition-animation-container">
        <div
          className="transition-animation-top"
          id="transition-animation-top"
          ref={transitionAnimationTop}
        ></div>
        <div
          className="transition-animation-bottom"
          id="transition-animation-bottom"
          ref={transitionAnimationBottom}
        ></div>
      </div>
    </div>
  );
}
