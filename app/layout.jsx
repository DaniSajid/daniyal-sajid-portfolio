import { Outfit } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // Import Head component

// components
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL("https://your-portfolio-url.com"), // Replace with your actual domain
    title: "Daniyal Sajid | Full Stack Developer Portfolio",
    description: "Explore the portfolio of Daniyal Sajid, a Full Stack Developer specializing in MERN Stack, showcasing dynamic and scalable web applications with a focus on performance, scalability, and user experience.",
    keywords: "Daniyal Sajid, Full Stack Developer, MERN Stack, Web Developer, JavaScript, React.js, Node.js, MongoDB, Express.js, Portfolio",
    author: "Daniyal Sajid",
    openGraph: {
        title: "Daniyal Sajid | Full Stack Developer Portfolio",
        description: "Discover the professional portfolio of Daniyal Sajid, highlighting expertise in MERN Stack development and full-stack web applications.",
        url: "https://your-portfolio-url.com",
        type: "website",
        images: [
            {
                url: "/about/daniyalsajid.jpg", // Use relative path
                width: 1200,
                height: 630,
                alt: "Daniyal Sajid Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Daniyal Sajid | Full Stack Developer Portfolio",
        description: "Visit the portfolio of Daniyal Sajid, showcasing skills in full-stack development with a focus on MERN Stack technologies.",
        images: ["/twitter-image.jpg"], // Use relative path
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <Head>
                {/* Use correct favicon link */}
                <link rel="icon" href="/react.png" type="image/x-icon" />
                {/* Alternatively, use PNG if you prefer */}
                <link rel="icon" href="/react.png" type="image/png" />
                {/* Add other meta tags if necessary */}
            </Head>
            <body className={outfit.className}>
                <ThemeProvider attribute="class" defaultTheme="light">
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
