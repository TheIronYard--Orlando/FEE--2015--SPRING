(function(){
  var vm = new Vue({
    el: '#vue-panel',
    data: {
      assignments: [ ]
    },
    methods: {
      labeled: function(assignment){
        return (assignment.greens + assignment.yellows + assignment.reds);
      },
      percent: function(assignment, color){
        return Math.floor(assignment[color] / assignment.total * 100);
      },
      percentTotal: function(assignment){
        return (
          this.percent(assignment, 'greens') +
          this.percent(assignment, 'yellows') +
          this.percent(assignment, 'reds')
        );
      },
      percentGreens: function(assignment){
        return this.percent(assignment, 'greens');
      },
      percentYellows: function(assignment){
        return this.percent(assignment, 'yellows');
      },
      percentReds: function(assignment){
        return this.percent(assignment, 'reds');
      }
    }
  });

  jQuery.getJSON('apis/assignments.json').done(function(assignments){
    vm.assignments = assignments;
  });

  var $panel = jQuery('#jquery-panel');

  $panel.after($panel.clone());
})();
