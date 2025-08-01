const projects = [
    {
      name: "Develop a Portfolio Website for a Freelancer",
      description: "Create a responsive portfolio website for a fictional freelancer, 'Alex Carter' to showcase their projects, skills, and contact information, using HTML, CSS, and JavaScript with a modern front-end framework like React.",
      live: "https://freelancer-portfolio-website-tawny.vercel.app/",
      github: "https://shorturl.at/B3aF5"
    },
    {
      name: "E-commerce Product Listing Page",
      description: "Develop a product listing page for an e-commerce website, featuring product images, descriptions, and a shopping cart functionality using HTML, CSS, and JavaScript.",
      github: "https://shorturl.at/LJitM",
      live: "https://e-commerce-product-listing-page-seven.vercel.app/"
    },
    {
      name: "Blog Website with CMS",
      description: "Build a blog website with a content management system (CMS) that allows users to create, edit, and delete blog posts, using HTML, CSS, JavaScript, and a backend technology Node.js.",
      github: "https://shorturl.at/uqb4v",
      live: "https://life-vibe-magazine.vercel.app/"
    },
    {
      name: "Task Flow - Task Management Dashboard with Authentication",
      description: "Build a task management dashboard for a fictional startup, 'TaskFlow', allowing users to create, edit, and delete tasks, with user authentication using Firebase and a front-end in Vue.js.",
      github: "https://shorturl.at/XSI0g",
      live: "https://todo-list-df2be.web.app/"
    },
    {
      name: "WanderEasy - Weather Forecast Web App Using Angular and Public wather API",
      description: "Create a weather forecast web application that provides real-time weather updates and forecasts for different locations, using Angular and a public weather API.",
      github: "https://shorturl.at/3ewuw",
      live: "https://wandereasy.vercel.app/"
    },
    // Add more projects below
  ];
  
  const projectList = document.getElementById("projectList");
  
  projects.forEach(project => {
    const div = document.createElement("div");
    div.classList.add("project");
    div.innerHTML = `
      <h2>${project.name}</h2>
      <p>${project.description}</p>
      <div class="links">
        <a href="${project.github}" target="_blank">GitHub Repo</a>
        <a href="${project.live}" target="_blank">Live Demo</a>
      </div>
    `;
    projectList.appendChild(div);
  });
  