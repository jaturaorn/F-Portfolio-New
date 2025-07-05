import Link from "next/link";

interface ProjectItemsProps {
  projectDataObject: {
    title: string;
    photoName: string;
    link: string;
  };
}

const ProjectItems = ({ projectDataObject }: ProjectItemsProps) => {
  return (
    <Link href={projectDataObject.link} target="_blank" className="project-card">
    <div>
      <div className="project-image project-web" />
      <div className="project-content">
        <h3>{projectDataObject.title}</h3>
        <p></p>
      </div>
    </div>
    </Link>
  );
};

export default ProjectItems;
