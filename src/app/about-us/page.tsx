import { getSeoMetadata } from "../../seo/metadata";
export const generateMetadata = () => getSeoMetadata("/about-us");
import About from "../../pages/About";
export default function Page() { return <About />; }
