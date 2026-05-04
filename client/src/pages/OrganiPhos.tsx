import organiphosContent from "@content/pages/organiphos.json";
import { organiphosDocs } from "@/lib/productDocs";
import { RetailAgProductPage } from "./product/RetailAgProductPage";
import NotFound from "./NotFound";

export default function OrganiPhos() {
  if (organiphosContent.published === false) {
    return <NotFound />;
  }
  return (
    <RetailAgProductPage
      content={{
        ...organiphosContent,
        specSheetUrl: organiphosDocs.primarySpecSheetUrl,
        documents: organiphosDocs.docs,
      }}
    />
  );
}
