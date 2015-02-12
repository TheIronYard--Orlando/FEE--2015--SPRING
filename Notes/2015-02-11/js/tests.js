var assert = chai.assert;

var vm = new Vue({ /* options */ });

it('should totally work like the docs say', function(){
  assert.isDefined(vm.$el);
  assert.isDefined(vm.$data);

  vm.$data = { a: 1 };

  assert.equal(vm.$data.a, vm.a);

  vm.a = 2;

  assert.equal(vm.a, 2);
});
