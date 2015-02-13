(function(){
  new Vue({
    el: '#vue-panel',
    data: {
      assignments: [
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
      ]
    },
    methods: {
      percent: function(part, total){
        return Math.floor(part / total * 100);
      },
      percentTotal: function(assignment){
        return (
          this.percent(assignment.greens, assignment.total) +
          this.percent(assignment.yellows, assignment.total) +
          this.percent(assignment.reds, assignment.total)
        );
      }
    }
  });

  var $panel = jQuery('#jquery-panel');

  $panel.after($panel.clone());
})();
