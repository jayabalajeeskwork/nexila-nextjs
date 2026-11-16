import { getSeoMetadata } from "../../seo/metadata";
export const generateMetadata = () => getSeoMetadata("/terms-and-conditions");
import TermsAndCondition from "../../components/termsandcondition/TermsAndConditions";
export default function Page() { return <TermsAndCondition />; }
