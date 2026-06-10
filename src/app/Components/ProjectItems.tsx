import Image from "next/image";
import Link from "next/link";

interface ProjectItemsProps {
  projectDataObject: {
    title: string;
    logo: string;
    link: string;
    category: string;
    description: string;
  };
  index: number;
}

const ProjectItems = ({ projectDataObject, index }: ProjectItemsProps) => {
  return (
    <Link
      href={projectDataObject.link}
      target="_blank"
      rel="noreferrer"
      className="project-card"
      aria-label={`Open ${projectDataObject.title} project`}
    >
      <div className="project-image">
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        <Image
          src={projectDataObject.logo}
          width={96}
          height={96}
          alt={`${projectDataObject.title} logo`}
          className="project-logo"
        />
      </div>
      <div className="project-content">
        <span className="project-category">{projectDataObject.category}</span>
        <h3>{projectDataObject.title}</h3>
        <p>{projectDataObject.description}</p>
        <span className="project-link-text">View launch</span>
      </div>
    </Link>
  );
};

export default ProjectItems;
