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
    metadataBase: new URL("https://daniyalsajid.netlify.app"), // Replace with your actual domain
    title: "Daniyal Sajid | Data & Insights Analyst Portfolio",
    description: "Explore Daniyal Sajid's portfolio, a Full Stack Developer specializing in MERN Stack Development focused on performance, scalability, and user experience.",
    keywords: "Daniyal Sajid, Full Stack Developer, MERN Stack, Web Developer, JavaScript, React.js, Node.js, MongoDB, Express.js, Portfolio",
    author: "Daniyal Sajid",
    openGraph: {
        title: "Daniyal Sajid | Full Stack Developer",
        description: "Discover the professional portfolio of Daniyal Sajid, highlighting expertise in MERN Stack development and full-stack web applications development.",
        url: "https://daniyalsajid.netlify.app",
        type: "website",
        images: [
            {
                url: "https://daniyalsajid.netlify.app/_next/image?url=%2Fhero%2Fdaniyalsajid.jpg&w=1920&q=75",
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
