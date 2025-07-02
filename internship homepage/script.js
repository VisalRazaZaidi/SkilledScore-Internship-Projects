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
      github: "https://e-commerce-product-listing-page-seven.vercel.app/",
      live: "https://shorturl.at/LJitM"
    },
    {
      name: "Blog Website with CMS",
      description: "Build a blog website with a content management system (CMS) that allows users to create, edit, and delete blog posts, using HTML, CSS, JavaScript, and a backend technology Node.js.",
      github: "https://github.com/yourusername/invoice-dashboard",
      live: "https://invoicedash.vercel.app"
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
  