export interface Project {
  id?: number;
  title?: string;
  description?: string;
  tech?: string;
  siteLink?: string;
  gitLink?: string;
  imgSrc?: string;
  bgSrc?: string;
  detailInfo?: {
    projectType?: string;
    time?: string;
    TeamRole?: string;
    techDetail?: string;
    description1?: string;
    description2?: string;
  };
  technicalChallenges?: {
    title: string;
    challenges: {
      title: string;
      issue: string;
      solution1?: string;
      solution2?: string;
      solution3?: string;
      result1?: string;
      result2?: string;
    }[];
  };
  blog?: {
    title: string;
    blogImgSrc?: string;
    link: string;
  }[];
}
