import { getSeoMetadata } from "../../seo/metadata";
export const generateMetadata = () => getSeoMetadata("/courses");
import CoursesPage from "../../components/courses/CoursesPage";
export default function Page() { return <CoursesPage />; }
