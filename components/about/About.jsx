import DevImg from "../DevImg";
import Image from "next/image"
import TabComponent from "./TabComponent";

const About = () => {
    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    About me
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/* image */}
                    <div className="hidden xl:flex flex-1 relative">
                        {/* <DevImg
                            containerStyles={
                                "w-[500px] h-[420px] bg-no-repeat relative rounded-sm"
                            }
                            imgSrc={"/about/daniyalsajid.jpg"}
                        /> */}
                        <div className="w-[500px] h-[420px] bg-no-repeat relative rounded-sm">
      <Image src="/about/daniyalsajid.jpg" className="rounded-[54%_50%_50%_50%_/_56%_36%_64%_44%]" fill priority alt="dev image" />
    </div>
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <TabComponent />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
