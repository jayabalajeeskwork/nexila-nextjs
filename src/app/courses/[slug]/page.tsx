import { getSeoMetadata } from "../../../seo/metadata";
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 return getSeoMetadata("/courses/" + slug);
}
import CourseDetail from "../../../components/courses/CourseDetail";
export default function Page() { return <CourseDetail />; }
