import organiphosContent from "@content/pages/organiphos.json";
import { organiphosDocs } from "@/lib/productDocs";
import { RetailAgProductPage } from "./product/RetailAgProductPage";

export default function OrganiPhos() {
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
