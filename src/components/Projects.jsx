const projects = [
  {
    title: "Trekking Management System",
    description: "A management web application designed for the purpose of booking and managing treks for a trekking organisation. The application provides access to three users: Admin, trek staff and user (trekker).The application is built on Flask web framework and uses SQLite Relational Database with SQLAlchemy Object-Relational Mapper.",
    tags: ["Python", "Flask", "SQLite3", "SQLAlchemy"],
    link: "https://github.com/25f3005703/trekking-management-app-v1",
  },
  {
    title: "Whack-a-mole",
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
      className="relative p-6 bg-yellow-100 text-gray-800 rounded-none shadow-[6px_6px_0px_0px_rgba(35,35,35,1)] font-handwriting">
      <div class="absolute -top-2 left-1/8 transform -translate-x-1/2 w-12 h-4 bg-yellow-400 opacity-60 rotate-[-4deg]"></div>

      <a href={link} target="_blank">
      <h3 className="font-['times-new-roman'] font-bold underline md:no-underline hover:underline text-xl mb-2">{title}</h3>
      </a>      
      <p className="text-sm jetbrains-mono-regular py-3 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-yellow-200 text-neutral-800 px-2 py-1 -rotate-2 shadow-[3px_3px_0px_0px_rgba(145,145,145,1)] jetbrains-mono-regular"
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
    <section id="projects" className="max-w-3xl mx-auto px-6 py-10">
      <h2
      className="jetbrains-mono-regular text-[28px] font-semibold text-white mt-8 mb-3 uppercase tracking-wide">
      ~Things I made</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;