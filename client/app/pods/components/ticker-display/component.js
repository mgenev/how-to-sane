import Ember from 'ember';

export default Ember.Component.extend({
  stocks: [],
  setup: Ember.on('init', function () {

    // io.socket.on('connect', function (socket) {
    //   console.log('Connected', socket);
    // });
    var _this = this;
    io.socket.on('stock', function (message) {
      console.log('NEW', message);
      if (message.verb === "created") {
        _this.get('stocks').pushObject(message.data);
      }
    });

    io.socket.get('/api/v1/stocks', function (resData, jwres) {
      _this.get('stocks').pushObjects(resData.stocks);
    });

    // setInterval(function () {
    //   io.socket.post('/api/v1/stocks', {stock: {name: 'NBC', price: 20}}, function () {
    //   })
    // }, 1000);
  })
});
