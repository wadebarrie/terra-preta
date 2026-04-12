import supernContent from "@content/pages/supern.json";
import { RetailAgProductPage } from "./product/RetailAgProductPage";

export default function SuperN() {
  return <RetailAgProductPage content={supernContent} />;
}
