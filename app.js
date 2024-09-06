import { serve } from "./deps.js";

const handleRequest = (request) => {
  return new Response(
    "HelloSeeking truths beyond meaning of life, you will find 43.",
  );
};

serve(handleRequest, { port: 7777 });
