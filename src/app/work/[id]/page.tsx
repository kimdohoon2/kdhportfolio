import { projects } from "@/app/data/project";
import { Project } from "@/app/types/project";
import WorkDetailSection from "@/app/components/WorkDetailSection/WorkDetailSection";
import Footer from "@/app/components/Footer/Footer";

interface ProjectDetailProps {
  params: {
    id: string;
  };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const projectId = Number(params.id);
  const project = projects.find((p) => p.id === projectId) as Project;

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <WorkDetailSection project={project} />
      <Footer />
    </>
  );
}
