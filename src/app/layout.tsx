import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import SeoClient from "./SeoClient";
import Analytics from "./Analytics";
import "./tailwind.css";
import "../styles.css";
import "../index.css";
import "../pages/Home.css";
import "../pages/About.css";
import "../pages/Contact.css";
import "../pages/Hackathon.css";
import "../pages/Internship.css";
import "../pages/test/Internship.css";
import "../components/blog/Blog.css";
import "../components/blog/BlogPost.css";
import "../components/blog/BlogPost2.css";
import "../components/courses/Courses.css";
import "../components/enquiry/EnquiryForm.css";
import "../components/internship/GroupInternship.css";
import "react-datepicker/dist/react-datepicker.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexilatechnologies.com"),
  icons: {
    icon: "/nexila_n_logo.jpeg",
    shortcut: "/nexila_n_logo.jpeg",
    apple: "/nexila_n_logo.jpeg",
  },
  title: {
    default: "Software Training Institute in Tambaram | Nexila Tech",
    template: "%s | Nexila Technologies",
  },

  description:
    "Nexila Technologies, software training institute in Tambaram, Chennai. Job-focused IT courses, internships, live projects and career support.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "Nexila Technologies",
    title: "Learn. Build. Get Hired.",
    description:
      "Job-focused IT courses, internships, live projects and career support in Tambaram, Chennai.",
    url: "https://www.nexilatechnologies.com/",
    images: [
      {
        url: "/nexila_n_logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Nexila Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Learn. Build. Get Hired.",
    description:
      "Job-focused IT courses, internships, live projects and career support.",
    images: ["/nexila_n_logo.jpeg"],
  },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body><SeoClient /><Analytics />{children}</body></html>;
}
