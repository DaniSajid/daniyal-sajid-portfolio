import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { infoData } from "@/data/personal-info";
import Image from "next/image";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const qualificationData = [
  {
    title: "education",
    data: [
      {
        institute: "Aptech pakistan",
        qualification: "Advanced Diploma in Software Engineering (ADSE)",
        gpa: "3.71/4",
        years: "2022 - 2025",
        link: "https://www.portcity.edu.bd/",
      },
      {
        institute: "Abdul Razzak Gabol Government Degree Boys & Girls College",
        qualification: "Intermediate",
        gpa: "4.50/5",
        years: "2022 - 2024",
        link: "https://gccc.edu.bd/",
      },
      {
        institute: "Al Rehman English Academy",
        qualification: "Matriculation",
        gpa: "5.00/5",
        years: "2019 - 2021",
        link: "https://www.wikibdinfo.com/khagaria-m-l-high-school-satkania-chattagram/",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Self Employed",
        role: "Data Analyst",
        years: "2024 - 2025",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        titleDescription: "Database Management",
      },
      {
        name: "Proficient in MongoDB, SQL Server, and MySQL. Skilled in designing and managing databases to ensure data integrity, security, and performance.",
      },
      { titleDescription: "Programming and Data Analysis" },
      {
        name: "Experienced in Python and Jupyter Notebook for data analysis, visualization, and developing data-driven solutions.Proficient in analyzing large datasets, identifying trends, and delivering insights to support decision-making processes.",
      },
      { titleDescription: "Data Visualization" },
      {
        name: "Skilled in Power BI and Excel for creating interactive dashboards, reports, and presenting actionable insights.",
      },
      { titleDescription: "Web Scraping" },
      {
        name: "Experienced in extracting and processing data from websites using Python for efficient data collection and analysis.",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        name: "MongoDB, SQL Server, MySQL, Python, Jupyter Notebook, Power BI, Excel",
      },
    ],
  },
];


export default function TabComponent() {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <Tabs defaultValue="skills">
      <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
        <TabsTrigger className="w-100 xl:w-100" value="skills">
          Skills
        </TabsTrigger>
        <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
          Personal Info
        </TabsTrigger>
        <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
          Qualifications
        </TabsTrigger>
      </TabsList>
      <div className="text-lg  mt-12 xl:mt-8">
        {/* personal */}
        <TabsContent value="personal">
          <div className="text-center xl:text-left">
            <h3 className="h3 mb-4">
              Data Scientist | Analyst | Web Scraping Expert
            </h3>
            <p className="subtitle max-w-xl mx-auto xl:mx-0">
              A versatile Data Scientist and Analyst skilled in databases, data
              visualization, programming, and web scraping to deliver impactful
              insights and solutions.
            </p>
            {/* icons */}
            <div className="grid xl:grid-cols-2 gap-4 mb-12">
              {infoData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-x-4 mx-auto xl:mx-0"
                  >
                    <div className="text-primary">{item.icon}</div>
                    <div className="">{item.text}</div>
                  </div>
                );
              })}
            </div>
            {/* language */}
            <div className="flex flex-col gap-y-2">
              <div className="text-primary">Language Skill</div>
              <div className="border-b border-border"></div>
              <div className="">English, Urdu</div>
            </div>
          </div>
        </TabsContent>
        {/* qualifications */}
        <TabsContent value="qualifications">
          <div className="">
            <h3 className="h3 mb-8 text-center xl:text-left">
              My Awesome Journey
            </h3>
            {/* experience and education wrapper */}
            <div className="grid md:grid-cols-2 gap-y-8">
              {/* experience */}
              <div className="flex flex-col gap-y-6">
                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                  <Briefcase />
                  <h4 className="capitalize font-medium">
                    {getData(qualificationData, "experience").title}
                  </h4>
                </div>
                {/* list */}
                <div className="flex flex-col gap-y-8">
                  {getData(qualificationData, "experience").data.map(
                    (item, index) => {
                      const { company, role, years } = item;
                      return (
                        <div key={index} className="flex gap-x-8 group ">
                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                          </div>
                          <div className="">
                            <div className="font-semibold text-xl leading-none mb-2">
                              {company}
                            </div>
                            <div className="text-lg leading-none text-muted-foreground mb-4">
                              {role}
                            </div>
                            <div className="text-base font-medium">{years}</div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              {/* education */}
              <div className="flex flex-col gap-y-6">
                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                  <GraduationCap size={28} />
                  <h4 className="capitalize font-medium">
                    {getData(qualificationData, "education").title}
                  </h4>
                </div>
                {/* list */}
                <div className="flex flex-col gap-y-8">
                  {getData(qualificationData, "education").data.map(
                    (item, index) => {
                      const { institute, qualification, years } = item;
                      return (
                        <div key={index} className="flex gap-x-8 group ">
                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                          </div>
                          <div className="">
                            <div className="font-semibold text-xl leading-none mb-2">
                              {institute}
                            </div>
                            <div className="text-lg leading-none text-muted-foreground mb-4">
                              {qualification}
                            </div>
                            <div className="text-base font-medium">{years}</div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="skills">
          <div className="text-center xl:text-left">
            <h3 className="h3 mb-8">What I Use Everyday</h3>
            <div className="mb-16">
              <h1 className="text-xl font-semibold mb-2">Skills</h1>
              <div className="border-b border-border mb-4"></div>
              {/* skill list */}
              <div className="flex flex-wrap items-stretch">
                {getData(skillData, "skills").data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-100 h-auto text-center xl:text-left mx-auto xl:mx-0 mb-2"
                    >
                      <h1 className="text-2xl font-semibold  xl:text-left">{item.titleDescription}</h1>
                      <div className="font-medium">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
}
