import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faBook,
  faDownload,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-around mt-20 flex-wrap">
      <div className="w-1/4 flex flex-col text-center mb-10 transition-transform ease duration-300 hover:-translate-y-2">
        <i className="flex justify-center items-center rounded-full text-4xl h-14 w-14 mx-auto mb-5">
          <FontAwesomeIcon icon={faRobot} />
        </i>
        <h3 className="text-xl font-semibold">AI-Powered Writing</h3>
        <p className="text-gray-300">Generate high-quality content with advanced AI technology.</p>
      </div>
      <div className="w-1/4 flex flex-col text-center mb-10 transition-transform ease duration-300 hover:-translate-y-2">
        <i className="flex justify-center items-center rounded-full text-4xl h-14 w-14 mx-auto mb-5">
          <FontAwesomeIcon icon={faBook} />
        </i>
        <h3 className="text-xl font-semibold">Custom Genres</h3>
        <p className="text-gray-300">Create stories in any genre or blend multiple styles.</p>
      </div>
      <div className="w-1/4 flex flex-col text-center mb-10 transition-transform ease duration-300 hover:-translate-y-2">
        <i className="flex justify-center items-center rounded-full text-4xl h-14 w-14 mx-auto mb-5">
          <FontAwesomeIcon icon={faDownload} />
        </i>
        <h3 className="text-xl font-semibold">Instant Download</h3>
        <p className="text-gray-300">Get your completed book in various formats instantly.</p>
      </div>
      <div className="w-1/4 flex flex-col text-center mb-10 transition-transform ease duration-300 hover:-translate-y-2">
        <i className="flex justify-center items-center rounded-full text-4xl h-14 w-14 mx-auto mb-5">
          <FontAwesomeIcon icon={faLanguage} />
        </i>
        <h3 className="text-xl font-semibold">Multilingual</h3>
        <p className="text-gray-300">Generate content in multiple languages effortlessly.</p>
      </div>
    </div>
  );
};

export default page;
