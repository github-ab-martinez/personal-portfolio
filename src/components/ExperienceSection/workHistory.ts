interface WorkInfo {
  company: string;
  location: string;
  startDate: Date;
  endDate: Date;
  role: string;
  techStack: string[];
}

export const getWorkHistory = (): WorkInfo[] => {
  return [
    {
      company: "BigCommere, Inc.",
      location: "Austin, TX",
      startDate: new Date(2022, 2, 22),
      endDate: new Date("12 2, 2023"),
      role: "Senior Software Engineer",
      techStack: [
        "React",
        "NextJS",
        "PHP",
        "TailWind CSS",
        "GraphQL",
        "StyledComponents",
      ],
    },
    {
      company: "Dell Technologies",
      location: "Austin, TX",
      startDate: new Date(2021, 3, 22),
      endDate: new Date(2022, 2, 22),
      role: "Principle Software Engineer",
      techStack: ["AngularJS", "React", "ASP.Net Core", "LESS"],
    },
    {
      company: "Dell Technologies",
      location: "Austin, TX",
      startDate: new Date(2017, 7, 22),
      endDate: new Date(2021, 3, 22),
      role: "Senior Software Engineer",
      techStack: ["AngularJS", "React", "ASP.Net Core", "LESS"],
    },
    {
      company: "Tk20, Inc.",
      location: "Austin, TX",
      startDate: new Date(2016, 2, 22),
      endDate: new Date(2017, 6, 22),
      role: "Front End Developer",
      techStack: ["AngularJS", "Bootstrap", "jQuery"],
    },
  ];
};
