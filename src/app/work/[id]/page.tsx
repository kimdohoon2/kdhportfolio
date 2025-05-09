import { projects } from "@/app/data/project";
import { Project } from "@/app/types/project";
import WorkDetailSection from "@/app/components/WorkDetailSection/WorkDetailSection";
import { Metadata } from "next";

type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// 메타데이터 동적 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projectId = Number(params.id);
  const project = projects.find((p) => p.id === projectId) as Project;

  if (!project) {
    return {
      title: "프로젝트를 찾을 수 없습니다",
      description: "요청하신 프로젝트 정보를 찾을 수 없습니다.",
    };
  }

  return {
    title: `${project.title} | 프론트엔드 개발자 김도훈 포트폴리오`,
    description: project.description,
    openGraph: {
      title: `${project.title} | 프론트엔드 개발자 김도훈 포트폴리오`,
      description: project.description,
      type: "article",
      url: `https://kdhportfolio.vercel.app/work/${project.id}`,
      images: project.imgSrc
        ? [
            {
              url: project.imgSrc,
              alt: project.title || "",
            },
          ]
        : undefined,
    },
  };
}

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
