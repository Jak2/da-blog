// src/data/sidebarData.js
export const sidebarData = [
    {
      text: "Home",
      icon: "home",
      path: "/",
    },
    {
      text: "Topics",
      icon: "folder",
      path: "/topics",
      nested: [
        {
          text: "Extracurricular",
          path: "/topics/extracurricular",
          nested: [
            { text: "Photography", path: "/topics/extracurricular/photography" },
          ],
        },
        {
          text: "Health",
          path: "/topics/health",
          nested: [
            { text: "Fitness", path: "/topics/health/fitness" },
            { text: "Mental Wellness", path: "/topics/health/mental_wellness" },
            { text: "Nutrition", path: "/topics/health/nutrition" },
          ],
        },
        {
          text: "Tech",
          path: "/topics/tech",
          nested: [
            { text: "Introduction", path: "/topics/tech/introduction" },
            { text: "My Portfolio", path: "/topics/tech/myportfolio" },
          ],
        },
      ],
    },
    // ... more items
  ];