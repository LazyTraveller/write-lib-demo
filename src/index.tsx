import React from "react";

const SayHelloWorld = ({ name }: { name: string }): JSX.Element => (
  <div>Hey {name}, This is React Library with TypeScript.</div>
);

export default SayHelloWorld;