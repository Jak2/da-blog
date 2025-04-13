// src/pages/topics/extracurricular/photography.js
import React from "react";
import Layout from "../../../components/Layout";

const PhotographyPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Photography</h1>
        <div className="prose lg:prose-xl">
          <p>
            Welcome to my photography section! Here, I share insights, techniques, and stories about my
            journey in photography. From landscape shots to portrait techniques, I cover a variety of
            topics that both beginners and experienced photographers might find useful.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Latest Photography Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Urban Landscapes</h3>
              <p>Exploring the concrete jungle and finding beauty in city architecture.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Nature Close-ups</h3>
              <p>Macro photography revealing the intricate details of the natural world.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PhotographyPage;