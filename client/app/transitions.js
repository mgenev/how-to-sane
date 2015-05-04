export default function () {
  this.transition(
    this.hasClass('geo-info'),
    this.toValue(true),
    this.use('toDown', {duration: 300})
  );
  this.transition(
    this.hasClass('wizard'),
    this.toValue(true),
    this.use('toRight', {duration: 200})
  );
  this.transition(
    this.hasClass('wizard'),
    this.toValue(true),
    this.use('toRight', {duration: 200})
  );
  this.transition(
    this.hasClass('slideUp'),
    this.toValue(true),
    this.use('toUp', {duration: 200}),
    this.reverse('toDown', {duration: 200})
);
}
