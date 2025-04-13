// src/pages/index.js
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to My Gatsby Blog</h1>
        <p className="text-lg mb-8">
          A clean, modern blog built with Gatsby and Tailwind CSS. Explore topics in tech, health, and extracurricular activities.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Tech</h3>
            <p className="mb-4">Explore programming tutorials, tech reviews, and portfolio projects.</p>
            <Link to="/topics/tech/introduction" className="text-blue-600 hover:underline">
              Get Started →
            </Link>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Health</h3>
            <p className="mb-4">Tips and insights on fitness, nutrition, and mental wellness.</p>
            <Link to="/topics/health/fitness" className="text-green-600 hover:underline">
              Learn More →
            </Link>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Extracurricular</h3>
            <p className="mb-4">Dive into photography and other creative pursuits.</p>
            <Link to="/topics/extracurricular/photography" className="text-purple-600 hover:underline">
              Explore →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;