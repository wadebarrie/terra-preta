# Integrating CMS Content into Your React Components

The CMS is now set up and ready to use! Here are different approaches to integrate the content into your React application.

## Current State

Right now, your React components have **hard-coded content**. The CMS provides a way to **edit and manage** that content through a user-friendly interface.

## Integration Options

### Option 1: Manual Updates (Simplest)

Use the CMS to manage content, then manually copy values into your components when you make changes. This is the simplest approach and works well for content that doesn't change frequently.

**Best for:** Small teams, infrequent updates

### Option 2: Import JSON at Build Time (Recommended)

For JSON files (like page content and settings), you can directly import them:

```typescript
// src/pages/Home.tsx
import homeContent from '../../../content/pages/home.json';

export default function Home() {
  return (
    <div>
      <h1>{homeContent.heroTitle}</h1>
      <p>{homeContent.heroSubtitle}</p>
      {/* ... */}
    </div>
  );
}
```

This requires TypeScript configuration to allow JSON imports:

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    // ... other options
  }
}
```

**Best for:** Page content, settings, structured data

### Option 3: Build-time Markdown Processing

For markdown files (case studies, blog posts), you'll need to process them at build time:

#### Step 1: Install Dependencies

```bash
pnpm add gray-matter remark remark-html
pnpm add -D @types/node
```

#### Step 2: Create a Content Loader

```typescript
// src/lib/content-loader.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface CaseStudy {
  slug: string;
  title: string;
  date: string;
  image: string;
  applicationType: string;
  siteType: string;
  resultsSummary: string;
  content: string;
}

export function getCaseStudies(): CaseStudy[] {
  const contentDir = path.join(process.cwd(), 'content/case-studies');
  const files = fs.readdirSync(contentDir);
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(filename => {
      const fileContent = fs.readFileSync(
        path.join(contentDir, filename),
        'utf-8'
      );
      const { data, content } = matter(fileContent);
      
      return {
        slug: filename.replace('.md', ''),
        ...data,
        content,
      } as CaseStudy;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
```

#### Step 3: Use in Your Components

```typescript
// src/pages/evidence/CaseStudies.tsx
import { getCaseStudies } from '@/lib/content-loader';
import { Card, CardContent } from '@/components/ui/card';

export default function CaseStudies() {
  const caseStudies = getCaseStudies();
  
  return (
    <div>
      <h1>Case Studies</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.map(study => (
          <Card key={study.slug}>
            <CardContent className="pt-6">
              <img src={study.image} alt={study.title} />
              <h3>{study.title}</h3>
              <p>{study.resultsSummary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
```

**Best for:** Blog posts, case studies, dynamic content

### Option 4: Create an API Endpoint

Since you have a server, you could create tRPC endpoints to serve content:

```typescript
// server/routers/content.ts
import { z } from 'zod';
import { publicProcedure, router } from '../_core/trpc';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const contentRouter = router({
  getCaseStudies: publicProcedure.query(async () => {
    const contentDir = path.join(process.cwd(), 'content/case-studies');
    const files = fs.readdirSync(contentDir);
    
    return files
      .filter(file => file.endsWith('.md'))
      .map(filename => {
        const fileContent = fs.readFileSync(
          path.join(contentDir, filename),
          'utf-8'
        );
        const { data, content } = matter(fileContent);
        return { slug: filename.replace('.md', ''), ...data, content };
      });
  }),
  
  getCaseStudyBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const filePath = path.join(
        process.cwd(),
        'content/case-studies',
        `${input.slug}.md`
      );
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      return { ...data, content };
    }),
});
```

Then use in your components with React Query:

```typescript
// src/pages/evidence/CaseStudies.tsx
import { trpc } from '@/lib/trpc';

export default function CaseStudies() {
  const { data: caseStudies, isLoading } = trpc.content.getCaseStudies.useQuery();
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      {caseStudies?.map(study => (
        <Card key={study.slug}>
          {/* ... */}
        </Card>
      ))}
    </div>
  );
}
```

**Best for:** Dynamic content, server-side rendering, complex queries

## Quick Start: JSON Page Content

The easiest way to get started is with the JSON page content files. Here's how:

### 1. Update tsconfig.json

```typescript
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true,
    // ... keep other options
  }
}
```

### 2. Import and Use

```typescript
// src/pages/Home.tsx
import homeContent from '../../../content/pages/home.json';

export default function Home() {
  const { heroTitle, heroSubtitle, features, outcomes } = homeContent;
  
  return (
    <div>
      <section>
        <h1>{heroTitle}</h1>
        <p>{heroSubtitle}</p>
      </section>
      
      <section>
        <h2>Who it's for</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card key={i}>
              <CardContent>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
```

## Testing Content Changes

1. Edit content in the CMS at `/admin`
2. Publish your changes (commits to Git)
3. Pull changes locally: `git pull`
4. Restart your dev server: `pnpm dev`
5. See updated content in your app!

## Workflow

```
┌─────────────────┐
│  Edit in CMS    │
│   (/admin)      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Content saved   │
│ to Git (auto)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Netlify detects │
│ changes & builds│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Site updates    │
│  automatically  │
└─────────────────┘
```

## Recommended Approach

For your Terra Preta site, I recommend:

1. **Start with JSON imports** for page content (home, about, settings)
   - Quick to implement
   - No build tooling needed
   - Content updates automatically

2. **Add API endpoints later** for case studies and blog
   - More flexible
   - Can add search, filtering, pagination
   - Works with your existing tRPC setup

3. **Keep team data simple**
   - Either import JSON or use API
   - Not updated frequently

## Next Steps

1. Choose your integration approach
2. Install any needed dependencies
3. Update one component as a test
4. Verify it works with CMS content
5. Gradually migrate other components

## Need Help?

- The CMS is working independently of your React app
- You can start using it immediately to manage content
- Integration can happen gradually over time
- Start with the simplest approach and evolve as needed

---

The CMS is ready to use! You can manage all your content through the admin interface at `/admin` once deployed to Netlify.

