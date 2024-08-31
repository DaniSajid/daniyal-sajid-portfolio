"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mesg: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save the form data in localStorage
        localStorage.setItem("contactFormData", JSON.stringify(formData));
        // Alert the user with their name
        alert(`Thank you, ${formData.name}, for reaching out!`);
        // Clear the form fields
        setFormData({
            name: "",
            email: "",
            mesg: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            {/* Name input */}
            <div className="relative flex items-center">
                <Input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <User className="absolute right-8" size={20} />
            </div>
            {/* Email input */}
            <div className="relative flex items-center">
                <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <MailIcon className="absolute right-8" size={20} />
            </div>
            {/* Message input */}
            <div className="relative flex items-center">
                <Textarea
                    id="mesg"
                    placeholder="Type Your Message Here..."
                    value={formData.mesg}
                    onChange={handleChange}
                    required
                />
                <MessageSquare className="absolute right-8 top-4" size={20} />
            </div>
            <Button type="submit" className="flex items-center gap-x-2 px-4">
                Send
                <ArrowRightIcon size={20} />
            </Button>
        </form>
    );
}
