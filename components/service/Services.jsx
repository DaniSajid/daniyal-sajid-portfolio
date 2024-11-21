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
    title: "Data Analytics and Reporting",
    description:
      "Leverage the power of data with my expertise in tools like SQL Server, MySQL, MongoDB, Power BI, and Excel. I specialize in creating detailed reports and dashboards to provide actionable insights that drive decision-making.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Data Science and Automation",
    description:
      "Unlock the potential of your data with advanced techniques in Python and Jupyter Notebook. From predictive analytics to process automation, I deliver solutions that optimize operations and uncover hidden opportunities.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Web Scraping",
    description:
      "Extract valuable data from websites efficiently with my web scraping services. Leveraging technologies like Python and BeautifulSoup, I automate data collection processes to save time and enhance productivity, delivering structured data tailored to your needs.",
  },
];

const Services = () => {
  return (
    <section className="mb-10 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative my-1"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[120px] h-[40px] bg-white dark:bg-background flex justify-center items-center ">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center ">
                  <CardTitle className="mb-4 mt-5">{item.title}</CardTitle>
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
