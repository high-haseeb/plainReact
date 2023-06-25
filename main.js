// convert jsx element to VDOM element.
// VDOM element is just a object
// with three keys: type, props, children
// props is also an object
// children is an array
const createElement = (type, props, ...children) => {
  props = props || {};
  return { type, props, children };
};
let element = <h1 id="foo">"hello world!"</h1>;
