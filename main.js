// // /** @jsx plainReact.createElement */
// const plainReact = {
//   createElement,
//   createTextElement,
//   render,
// };
// const render = (element, container) => {
//   const dom = element.type == "TEXT_ELEMENT"
//     ? document.createTextNode("")
//     : document.createElement(element.type);
//   const isProperty = (key) => key !== "children";
//   Object.keys(element.props)
//     .filter(isProperty)
//     .foreach((name) => {
//       dom[name] = element.props[name];
//     });
//   element.props.children.forEach((child) => {
//     render(child, dom);
//   });
//   container.appendChild(dom);
// };
// const createElement = (type, props, ...children) => {
//   return {
//     type: type,
//     props: {
//       ...props,
//       children: children.map((child) =>
//         typeof child === "object" ? child : createTextElement(child)
//       ),
//     },
//   };
// };
// const createTextElement = (text) => {
//   return {
//     type: "TEXT_ELEMENT",
//     props: {
//       nodeValue: text,
//       children: [],
//     },
//   };
// };
const container = document.getElementById("root");
const title = document.createElement("h1");
const text = document.createTextNode("it works finally");
title.appendChild(text);
container.appendChild(title);
// let element = <h1 id="foo">"eid mubarak"</h1>;
