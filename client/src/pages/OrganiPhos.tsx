import organiphosSpecPdfUrl from "@/assets/spec-sheets/TerraPretaAg-OrganiPhos.pdf?url";
import organiphosContent from "@content/pages/organiphos.json";
import { RetailAgProductPage } from "./product/RetailAgProductPage";

export default function OrganiPhos() {
  return (
    <RetailAgProductPage
      content={{ ...organiphosContent, specSheetUrl: organiphosSpecPdfUrl }}
    />
  );
}
