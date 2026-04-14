import { Card, CardContent } from "@/components/ui/card";
import { Award, Building, Shield, Users } from "lucide-react";
import aboutContent from "@content/pages/about.json";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE_ORIGIN } from "@/const";

export default function About() {
  usePageMeta(
    aboutContent.metaTitle,
    aboutContent.metaDescription,
    `${SITE_ORIGIN}/about`,
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{aboutContent.heroTitle}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {aboutContent.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder Photo Section */}
      <section className="py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src="/placeholder-about-us.jpg" 
                alt="Terra Preta Organics Facility"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-muted"><p class="text-muted-foreground">Photo Placeholder: Facility Overview</p></div>';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      {aboutContent.story.enabled && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">{aboutContent.story.title}</h2>
              {aboutContent.story.paragraphs.map((paragraph, index) => (
                <p key={index} className={`text-lg text-muted-foreground leading-relaxed ${index < aboutContent.story.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Facility and QA */}
      {aboutContent.facility.enabled && (
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                {aboutContent.facility.sectionTitle}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {aboutContent.facility.items.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      {/* Photo Placeholder instead of icon */}
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                        <img 
                          src={`/placeholder-facility-${index + 1}.jpg`}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-muted"><p class="text-muted-foreground text-sm">Photo Placeholder: ${item.title}</p></div>`;
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      {aboutContent.team.enabled && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">{aboutContent.team.title}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {aboutContent.team.members.map((member, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        {member.photo ? (
                          <img 
                            src={member.photo} 
                            alt={member.name}
                            className="rounded-full h-32 w-32 object-cover flex-shrink-0"
                          />
                        ) : (
                          <div className="bg-muted rounded-full h-32 w-32 flex items-center justify-center flex-shrink-0">
                            <Users className="h-16 w-16 text-primary" />
                          </div>
                        )}
                        <div>
                          <h3 className="font-semibold text-lg mb-1">
                            {member.name}
                          </h3>
                          <p className="text-sm text-primary mb-2">
                            {member.role}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {member.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Safety and Insurance */}
      {aboutContent.safetyInsurance.enabled && (
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                {aboutContent.safetyInsurance.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {aboutContent.safetyInsurance.items.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <Shield className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        {item.title}
                      </h3>
                      <div className="space-y-2 text-muted-foreground">
                        {item.points.map((point, pointIndex) => (
                          <p key={pointIndex}>{point}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
