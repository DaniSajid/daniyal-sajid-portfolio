import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Crafting visually appealing, responsive, and user-friendly interfaces is my specialty. I use the latest technologies, including HTML, CSS, JavaScript, React.js, and Bootstrap, to create intuitive user experiences that work seamlessly across all devices.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Application Development",
    description:
      "As a MERN Stack Developer, I offer end-to-end web development services. From front-end interfaces to back-end logic and database management, I provide complete solutions that are both efficient and scalable.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Consultation and Project Planning",
    description:
      "I offer consulting services to help you plan and execute your web development projects. Whether you need guidance on the best technology stack, project architecture, or optimization strategies, I provide expert advice to help you succeed.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center ">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center ">
                  <CardTitle className="mb-4 ">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
