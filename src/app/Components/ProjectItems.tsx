interface ProjectItemsProps {
  projectDataObject: {
    title: string;
    photoName: string;
    link: string;
  };
}

const ProjectItems = ({ projectDataObject }: ProjectItemsProps) => {
  return (
    <div className="project-card">
      <div className="project-image project-web" />
      <div className="project-content">
        <h3>{projectDataObject.title}</h3>
        <p>{projectDataObject.link}</p>
      </div>
    </div>
  );
};

export default ProjectItems;
