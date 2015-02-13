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

  setTimeout(function(){
    vm.assignments = [
      { title: "Assignment 00: Brace Yourself",
        greens: 4,
        yellows: 2,
        reds: 1,
        total: 11
      },
      { title: "Assignment 01: MF'g Website",
        greens: 11,
        yellows: 0,
        reds: 0,
        total: 11
      },
      { title: "Assignment 02: Learning Layout",
        greens: 0,
        yellows: 8,
        reds: 3,
        total: 11
      }
    ];

  }, 3000)

  var $panel = jQuery('#jquery-panel');

  $panel.after($panel.clone());
})();
