import supernContent from "@content/pages/supern.json";
import { supernDocs } from "@/lib/productDocs";
import { RetailAgProductPage } from "./product/RetailAgProductPage";

export default function SuperN() {
  return (
    <RetailAgProductPage
      content={{
        ...supernContent,
        specSheetUrl: supernDocs.primarySpecSheetUrl,
        documents: supernDocs.docs,
      }}
    />
  );
}
