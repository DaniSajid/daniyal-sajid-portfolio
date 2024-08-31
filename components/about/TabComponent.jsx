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
        role: "Front end developer",
        years: "2023 - 2024",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Front-End Development",
      },
      {
        name: "Proficient in HTML, CSS, JavaScript, Bootstrap, Material UI, React.js and Next.js. Expertise in creating responsive, interactive, and user-friendly web interfaces.",
      },
      { name: <br /> },
      { name: "Back-End Development" },
      {
        name: "Skilled in Node.js and Express.js, with experience in building RESTful APIs and server-side logic to support dynamic web applications.",
      },
      { name: <br /> },
      { name: "Database Management" },
      {
        name: "Experienced with SQL Server and MongoDB, capable of designing and managing databases to ensure data integrity, security, and performance.",
      },
      { name: <br /> },
      { name: "Version Control" },
      {
        name: "Proficient with Git and GitHub for collaborative development, maintaining clean codebases, and managing project versions effectively.",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vs.png",
      },
      {
        imgPath: "/about/html.png",
      },
      {
        imgPath: "/about/css.png",
      },
      {
        imgPath: "/about/bootstrap.png",
      },
      {
        imgPath: "/about/mui.png",
      },
      {
        imgPath: "/about/js.png",
      },
      {
        imgPath: "/about/react.png",
      },
      {
        imgPath: "/about/node.png",
      },
      {
        imgPath: "/about/ex.png",
      },
      {
        imgPath: "/about/mongodb.png",
      },
      {
        imgPath: "/about/sql.png",
      },
      {
        imgPath: "/about/git.png",
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
      <div className="text-lg mt-12 xl:mt-8">
        {/* personal */}
        <TabsContent value="personal">
          <div className="text-center xl:text-left">
            <h3 className="h3 mb-4">
              Unmatched Service Quality for Over 2 Years
            </h3>
            <p className="subtitle max-w-xl mx-auto xl:mx-0">
              I specialize in crafting innovative websites with cutting-edge
              technology, delivering dynamic and engaging user experiences.
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
              <h4 className="text-xl font-semibold mb-2">Skills</h4>
              <div className="border-b border-border mb-4"></div>
              {/* skill list */}
              <div className="">
                {getData(skillData, "skills").data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 "
                    >
                      <div className="font-medium">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* tools */}
            <div className="">
              <h3 className="text-xl font-semibold mb-2 xl:text-left">Tools & Programing Language</h3>
              <div className="border-b border-border mb-4"></div>
              {/* tool list */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-8 justify-center xl:justify-start">
                {getData(skillData, "tools").data.map((item, index) => {
                  return (
                    <div key={index} className="flex jsutify-center w-full">
                      <Image
                        src={item.imgPath}
                        width={90}
                        height={90}
                        alt=""
                        priority
                        className="object-contain" 
                      />
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
