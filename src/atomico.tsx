import { c, css } from "atomico";

function component() {
  return <host>...</host>;
}

component.styles = css`
  :host {
    color: red;
  }
`;

export const C = c(component);
