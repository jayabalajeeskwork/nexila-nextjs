import { getSeoMetadata } from "../../../seo/metadata";
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 return getSeoMetadata("/blogs/" + slug);
}
import BlogPost from "../../../components/blog/BlogPost";
export default function Page() { return <BlogPost />; }
