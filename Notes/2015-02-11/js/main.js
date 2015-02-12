var vm = new Vue({
  el: '#chessboard',
  data: {
    message: 'Hello from Vue'
  },
});

setTimeout(function(){
  vm.message = 'Do you like my hat?';
}, 3000);
