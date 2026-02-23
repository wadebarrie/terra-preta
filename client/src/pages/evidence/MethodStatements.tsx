import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import methodStatementsContent from "@content/pages/method-statements.json";

export default function MethodStatements() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {methodStatementsContent.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {methodStatementsContent.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Method Statements */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-8">
            {methodStatementsContent.methods.map((method, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">{method.title}</h2>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {method.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-sm mb-2">Equipment</h3>
                      <p className="text-muted-foreground text-sm">
                        {method.equipment}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-2">Rate</h3>
                      <p className="text-muted-foreground text-sm">
                        {method.rate}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-2">Best For</h3>
                      <p className="text-muted-foreground text-sm">
                        {method.bestFor}
                      </p>
                    </div>
                  </div>

                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Method Statement PDF
                  </Button>
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
              {methodStatementsContent.additionalInfo.title}
            </h2>
            {methodStatementsContent.additionalInfo.paragraphs.map((para, index) => (
              <p key={index} className={`text-muted-foreground leading-relaxed ${index < methodStatementsContent.additionalInfo.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
