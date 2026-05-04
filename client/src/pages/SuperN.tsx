import supernContent from "@content/pages/supern.json";
import { supernDocs } from "@/lib/productDocs";
import { RetailAgProductPage } from "./product/RetailAgProductPage";
import NotFound from "./NotFound";

export default function SuperN() {
  if (supernContent.published === false) {
    return <NotFound />;
  }
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
