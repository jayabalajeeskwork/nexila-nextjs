import { getSeoMetadata } from "../../seo/metadata";
export const generateMetadata = () => getSeoMetadata("/enquiry-form");
import EnquiryForm from "../../components/enquiry/EnquiryForm";
export default function Page() { return <EnquiryForm />; }
