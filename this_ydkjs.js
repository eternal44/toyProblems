// // example #1
function foo(num){
  console.log('foo: ' + num);

  this.count++;
};

foo.count = 0;

var i;

for (i=0; i<10; i++) {
  if(i > 5) foo.call(foo, i);
}
console.log(foo.count);

// example #2
// this will fail because this.bar() is not referring to the funciton below
function foo() {
  var a = 2;
  this.bar();
}

function bar() {
  console.log( this.a );
}

foo(); //undefined

// example #3
// following the call stack
function baz() {
  // call-stack is: `baz`
  // so, our call-site is in the global scope

  console.log( "baz" );
  bar(); // <-- call-site for `bar`
}

function bar() {
  // call-stack is: `baz` -> `bar`
  // so, our call-site is in `baz`

  console.log( "bar" );
  foo(); // <-- call-site for `foo`
}

function foo() {
  // call-stack is: `baz` -> `bar` -> `foo`
  // so, our call-site is in `bar`

  console.log( "foo" );
}

baz(); // <-- call-site for `baz`



/* ###########
 * # BINDING #
 * ###########
 */
// global 'this'
function foo() {
  console.log( this.a );
}

var a = 2;

// the log for #foo actually returns 'undefined' in node but returns '2' in chrome
foo(); // 2




/*
 * CASE #1
 */

/* implicit binding */
function foo() {
  // console.log( this.a );
}

// Because obj is the this for the foo() call, this.a is synonymous with obj.a.
var obj = {
  a: 2,
  foo: foo
};

obj.foo(); // 2


/* explicit binding */
function foo() {
  console.log( this.a );
}

var obj = {
  a: 2
};

foo.call( obj ); // 2





//Only the top/last level of an object property reference chain matters to the call-site. For instance:
function foo() {
  // console.log( this );
}

var obj2 = {
  a: 42,
  foo: foo
};

var obj1 = {
  a: 2,
  obj2: obj2
};

obj1.obj2.foo(); // 42




/*
 * CASE #2
 */

/* implicity lost */
function foo() {
  console.log( this.a );
}

var obj = {
  a: 2,
  foo: foo
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global"


/* hard binding (aka explixit and strong binding) */
function foo() {
      console.log( this.a );
}

var obj = {
      a: 2
};

var bar = function() {
      foo.call( obj );
};

bar(); // 2
setTimeout( bar, 100 ); // 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window ); // 2










// Example:
// implicity lost in a callback function
function foo() {
  console.log( this.a );
}

function doFoo(fn) {
  // `fn` is just another reference to `foo`

  fn(); // <-- call-site!
}

var obj = {
  a: 2,
  foo: foo
};

var a = "oops, global"; // `a` also property on global object

doFoo( obj.foo ); // "oops, global"


// Example:
// implicity lost in a native funciton
function foo() {
  console.log( this.a );
}

var obj = {
  a: 2,
  foo: foo
};

var a = "oops, global"; // `a` also property on global object

setTimeout( obj.foo, 100 ); // "oops, global

