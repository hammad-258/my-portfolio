const projects = [
  {
    title: "Trekking Management System",
    description: "A management web application designed for the purpose of booking and managing treks for a trekking organisation. The application provides access to three users: Admin, trek staff and user (trekker).The application is built on Flask web framework and uses SQLite Relational Database with SQLAlchemy Object-Relational Mapper.",
    tags: ["Python", "Flask", "SQLite3", "SQLAlchemy"],
    link: "https://github.com/25f3005703/trekking-management-app-v1",
  },
  {
    title: "Whack-a-mole mini game",
    description: "A minimal whack-a-mole game written in python and using customTkinter module for graphics.",
    tags: ["Python", "customTkinter"],
    link: "https://github.com/hammad-258/whack-a-mole",
  },
  {
    title: "Lost Bot",
    description: "A fast paced platformer where you play as a bot stranded on an unknown planet with sole purpose of collecting energy orbs to contact home before your battery drains out.",
    tags: ["Godot", "GDscript", "itch.io"],
    link: "https://hammad258.itch.io/lost-bot",
  },
];

function ProjectCard({ title, description, tags, link }) {
  return (
    <div
      className="mat-short shadow-[10px_10px_0px_0px_rgba(35,35,35,1)] block border-8 border-white p-5 hover:rotate-[2deg] transition-all duration-300 ease-out">
      <h3 className="font-semibold text-xl roboto-regular text-white mb-2">{title}</h3>
      <div  className="w-[28px]">
        <a href={link} target="_blank"><svg height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></a>
      </div>
      
      <p className="text-sm jetbrains-mono-regular text-gray-200 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-yellow-200 text-neutral-800 px-2 py-1 -rotate-2 shadow-md jetbrains-mono-regular"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-16 pb-0">
      <h2
      className="jetbrains-mono-regular text-[24px] font-semibold text-white mt-8 mb-3 uppercase tracking-wide">
      ~PROJECTS</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;