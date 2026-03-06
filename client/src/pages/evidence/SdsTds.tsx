import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";
import sdsTdsContent from "@content/pages/sds-tds.json";
import { trackDocumentDownload } from "@/lib/analytics";

export default function SdsTds() {
  const handleDownload = (docName: string, docType: string) => {
    trackDocumentDownload(docName, docType);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {sdsTdsContent.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {sdsTdsContent.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {sdsTdsContent.documents.map((doc) => (
              <Card key={doc.id} className={doc.featured ? "border-primary" : ""}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    {doc.featured ? (
                      <Download className="h-16 w-16 text-primary flex-shrink-0" />
                    ) : (
                      <FileText className="h-16 w-16 text-primary flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-3">
                        {doc.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {doc.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        {doc.featured ? (
                          <Button 
                            size="lg"
                            onClick={() => handleDownload('Complete Spec Pack', 'spec_pack')}
                          >
                            <Download className="mr-2 h-5 w-5" />
                            Download Complete Spec Pack (ZIP)
                          </Button>
                        ) : (
                          <>
                            <Button asChild>
                              <a 
                                href={doc.pdfUrl} 
                                download={doc.downloadFilename}
                                onClick={() => handleDownload(doc.title, doc.id)}
                              >
                                <Download className="mr-2 h-4 w-4" />
                                Download {doc.id.toUpperCase()} (PDF)
                              </a>
                            </Button>
                            <Button 
                              variant="outline" 
                              asChild
                            >
                              <a 
                                href={doc.pdfUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={() => handleDownload(doc.title, `${doc.id}_view`)}
                              >
                                View Online
                              </a>
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              {sdsTdsContent.additionalInfo.title}
            </h2>
            {sdsTdsContent.additionalInfo.paragraphs.map((paragraph, index) => (
              <p key={index} className={`text-muted-foreground leading-relaxed ${index < sdsTdsContent.additionalInfo.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
