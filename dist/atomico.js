// src/atomico.tsx
import { c, css } from "atomico";
import { jsx } from "atomico/jsx-runtime";
function component() {
  return /* @__PURE__ */ jsx("host", { children: "..." });
}
component.styles = css`.example {
    display: grid;
    transition: all 0.5s;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
    background: linear-gradient(to bottom, white, black);
  }`;
var C = c(component);
export {
  C
};
