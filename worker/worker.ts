import dynamic from "next/dynamic";
// import ComponentInWorker from "./ComponentInWorker"; // This works fine

console.log("Hello from Worker");

const ComponentInWorker = dynamic(() => import("./ComponentInWorker"));
console.log(ComponentInWorker);

export { };
