import { h, render } from "preact";
import { Counter } from "@ebey.dev/counter";

render(h(Counter, {}), document.getElementById("root")!);
