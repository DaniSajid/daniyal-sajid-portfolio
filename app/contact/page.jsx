import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = () => {
    return (
        <section>
            <div className="container mx-auto">
                {/* Text and Illustration */}
                <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
                    <div className="flex flex-col justify-center">
                        {/* Text */}
                        <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                            <span className="w-[30px] h-[2px] bg-primary"></span>
                            Say Hello 👋🏾
                        </div>
                        <h1 className="h1 max-w-md mb-8">
                            Let&apos;s Work Together
                        </h1>
                        <p className="subtitle max-w-[480px]">
                            I&apos;m always excited to connect with fellow developers, potential collaborators, and anyone interested in my work. Whether you have a project in mind, need a consultation, or just want to chat about the latest in web development, feel free to reach out!
                        </p>
                    </div>
                    {/* Illustration */}
                    <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
                </div>

                {/* Info and Form */}
                <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
                    {/* Contact Info */}
                    <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
                        {/* Email */}
                        <div className="flex items-center gap-x-8">
                            <MailIcon size={18} className="text-primary" />
                            <div>daniyalsajid128@gmail.com</div>
                        </div>
                        {/* Address */}
                        <div className="flex items-center gap-x-8">
                            <HomeIcon size={18} className="text-primary" />
                            <div>Pakistan, Karachi</div>
                        </div>
                        {/* Phone */}
                        <div className="flex items-center gap-x-8">
                            <PhoneCall size={18} className="text-primary" />
                            <div>+923272153650</div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <Form />
                </div>
            </div>
        </section>
    );
};

export default Contact;
