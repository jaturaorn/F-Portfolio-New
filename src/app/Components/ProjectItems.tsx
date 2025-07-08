import Image from "next/image";
import Link from "next/link";

interface ProjectItemsProps {
  projectDataObject: {
    title: string;
    logo: string;
    link: string;
  };
}

const ProjectItems = ({ projectDataObject }: ProjectItemsProps) => {
  return (
    <Link href={projectDataObject.link} target="_blank" className="project-card">
    <div className="">
      <div className="project-image project-web" >
        <Image src={projectDataObject.logo} width={200} height={200} alt="" className=" size-[55px] rounded-[15px]" />
      </div>
      <div className="project-content">
        <h3>{projectDataObject.title}</h3>
        <p></p>
      </div>
    </div>
    </Link>
  );
};

export default ProjectItems;
