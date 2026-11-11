import { getSeoMetadata } from "../../seo/metadata";
export const generateMetadata = () => getSeoMetadata("/contact-us");
import Contact from "../../pages/Contact";
export default function Page() { return <Contact />; }
