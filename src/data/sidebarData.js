// src/data/sidebarData.js
const sidebarData = [
    {
      title: "Topics",
      path: "/topics",
      children: [
        {
          title: "Extracurricular",
          path: "/topics/extracurricular",
          children: [
            {
              title: "Photography",
              path: "/topics/extracurricular/photography",
            },
          ],
        },
        {
          title: "Health",
          path: "/topics/health",
          children: [
            {
              title: "Fitness",
              path: "/topics/health/fitness",
            },
            {
              title: "Mental Wellness",
              path: "/topics/health/mental-wellness",
            },
            {
              title: "Nutrition",
              path: "/topics/health/nutrition",
            },
          ],
        },
        {
          title: "Tech",
          path: "/topics/tech",
          children: [
            {
              title: "Introduction",
              path: "/topics/tech/introduction",
            },
            {
              title: "My Portfolio",
              path: "/topics/tech/my-portfolio",
            },
          ],
        },
      ],
    },
  ];
  
  export default sidebarData;