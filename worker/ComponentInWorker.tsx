declare global {
  namespace JSX {
    interface IntrinsicElements {
      "my-custom-component": {};
    }
  }
};

export default function ComponentInWorker() {
  return <my-custom-component />;
}