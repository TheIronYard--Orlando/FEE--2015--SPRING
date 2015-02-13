(function(){
  new Vue({
    el: '#vue-panel',
    data: {
      greens: 4,
      yellows: 2,
      reds: 1,
      total: 11
    },
    methods: {
      percent: function(part){
        return Math.floor(part / this.total * 100);
      }
    },
    computed: {
      percentTotal: function(){
        return (
          this.percent(this.greens) +
          this.percent(this.yellows) +
          this.percent(this.reds)
        );
      }
    }
  });

  var $panel = jQuery('#jquery-panel');

  $panel.after($panel.clone());
})();
