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
  title: { default: "Software Training Institute in Tambaram | Nexila Tech", template: "%s | Nexila Technologies" },
  description: "Nexila Technologies, software training institute in Tambaram, Chennai. Job-focused IT courses, internships, live projects and career support.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Nexila Technologies", title: "Learn. Build. Get Hired.", description: "Job-focused IT courses, internships, live projects and career support in Tambaram, Chennai.", url: "https://www.nexilatechnologies.com/", images: ["/logo.png"] },
  twitter: { card: "summary_large_image" },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body><SeoClient /><Analytics />{children}</body></html>;
}
