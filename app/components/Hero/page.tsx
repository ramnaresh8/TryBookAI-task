import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center min-h-screen mt-0 px-12 pr-0 pb-0 pl-1">
      <h1 className="text-5xl mb-4 font-bold">
        Explore the Possibilities of
        <span
          className="text-accent-color pl-2 pr-2 text-violet-600 underline"
          style={{ textUnderlineOffset: "10px" }}
        >
          AI Book Writing
        </span>
        with
        <div className="mt-1">BookAI</div>
      </h1>
      <div className="text-lg mb-6 text-slate-400">
        <p>Unleash the power of AI to create captivating books in minutes.</p>
        <p>
          Download, Distribute wherever you want. Generate unlimited free books
        </p>
      </div>
      <div className=" flex gap-4">
        <a href="/playground" className="btn-primary">
          <SecondaryButton title="Get Started" />
        </a>
        <a href="/api" className="btn-secondary">
          <SecondaryButton title="Get API Access" />
        </a>
      </div>
      <br />
      <br />
      <p className="mt-6 text-sm text-yellow-300">
        Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM will
        be used for text and image generation
      </p>
    </div>
  );
};

export default page;
