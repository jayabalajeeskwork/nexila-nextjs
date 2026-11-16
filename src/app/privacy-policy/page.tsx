import { getSeoMetadata } from "../../seo/metadata";
export const generateMetadata = () => getSeoMetadata("/privacy-policy");
import PrivacyPolicy from "../../components/privacy/PrivacyPolicy";
export default function Page() { return <PrivacyPolicy />; }
