import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
} from "lucide-react";

export const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Daniyal Sajid",
        field: "name",
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+923272153650",
        field: "phone",
    },
    {
        icon: <MailIcon size={20} />,
        text: "daniyalsajid128@@gmail.com",
        field: "email",
    },
    {
        icon: <Calendar size={20} />,
        text: "Born on Oct 27, 2004",
        field: "dob",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Bachelor on Computer Science",
        field: "degree",
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Pakistan, karachi",
        field: "address",
    },
];
