import { getSeoMetadata } from "../seo/metadata";
export const generateMetadata = () => getSeoMetadata("/");
import Home from "../pages/Home";
export default function Page() { return <Home />; }
