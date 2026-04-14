import supernSpecUrl from "@/assets/docs/supern/SuperN-SpecSheet.pdf?url";
import supernCertifiedSpecUrl from "@/assets/docs/supern/SuperN-Certified-SpecSheet.pdf?url";
import supernCfiaLabelUrl from "@/assets/docs/supern/SuperN-CFIA-Label.pdf?url";
import supernSdsUrl from "@/assets/docs/supern/SuperN-SDS.pdf?url";

import organiphosSpecUrl from "@/assets/docs/organiphos/OrganiPhos-SpecSheet.pdf?url";
import organiphosCfiaLabelUrl from "@/assets/docs/organiphos/OrganiPhos-CFIA-Label.pdf?url";
import organiphosSdsUrl from "@/assets/docs/organiphos/OrganiPhos-SDS.pdf?url";

export type ProductDoc = {
  title: string;
  url: string;
};

export const supernDocs = {
  primarySpecSheetUrl: supernCertifiedSpecUrl,
  docs: [
    { title: "SuperN Spec Sheet", url: supernSpecUrl },
    { title: "SuperN Certified Spec Sheet", url: supernCertifiedSpecUrl },
    { title: "SuperN CFIA Label", url: supernCfiaLabelUrl },
    { title: "SuperN Safety Data Sheet (SDS)", url: supernSdsUrl },
  ] satisfies ProductDoc[],
};

export const organiphosDocs = {
  primarySpecSheetUrl: organiphosSpecUrl,
  docs: [
    { title: "OrganiPhos Spec Sheet", url: organiphosSpecUrl },
    { title: "OrganiPhos CFIA Label", url: organiphosCfiaLabelUrl },
    { title: "OrganiPhos Safety Data Sheet (SDS)", url: organiphosSdsUrl },
  ] satisfies ProductDoc[],
};

