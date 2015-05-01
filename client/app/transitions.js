export default function () {
  this.transition(
    this.hasClass('geo-info'),

    // this makes our rule apply when the liquid-if transitions to the
    // true state.
    this.toValue(true),
    this.use('toDown', {duration: 300})
  );
}
