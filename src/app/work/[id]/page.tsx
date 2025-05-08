import { projects } from "@/app/data/project";
import { Project } from "@/app/types/project";
import WorkDetailSection from "@/app/components/WorkDetailSection/WorkDetailSection";

type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function ProjectDetail({ params }: Props) {
  const projectId = Number(params.id);
  const project = projects.find((p) => p.id === projectId) as Project;

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <WorkDetailSection project={project} />
    </>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: String(project.id),
  }));
}
