import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface CaseStudy {
  slug: string;
  title: string;
  date: string;
  image: string;
  applicationType: string;
  siteType: string;
  resultsSummary: string;
  location?: string;
  vegetationCoverage?: string;
  timeline?: string;
  content: string;
  contentHtml?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image?: string;
  excerpt: string;
  author: string;
  tags?: string[];
  content: string;
  contentHtml?: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  description: string;
  photo?: string;
  order: number;
}

/**
 * Get all case studies from the content directory
 */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  const contentDir = path.join(process.cwd(), 'content/case-studies');
  
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDir);
  
  const caseStudies = await Promise.all(
    files
      .filter(file => file.endsWith('.md'))
      .map(async (filename) => {
        const fileContent = fs.readFileSync(
          path.join(contentDir, filename),
          'utf-8'
        );
        const { data, content } = matter(fileContent);
        
        // Convert markdown to HTML
        const processedContent = await remark()
          .use(html)
          .process(content);
        const contentHtml = processedContent.toString();
        
        return {
          slug: filename.replace('.md', ''),
          ...data,
          content,
          contentHtml,
        } as CaseStudy;
      })
  );
  
  // Sort by date, newest first
  return caseStudies.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get a single case study by slug
 */
export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const filePath = path.join(process.cwd(), 'content/case-studies', `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();
    
    return {
      slug,
      ...data,
      content,
      contentHtml,
    } as CaseStudy;
  } catch (error) {
    return null;
  }
}

/**
 * Get all blog posts from the content directory
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const contentDir = path.join(process.cwd(), 'content/blog');
  
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDir);
  
  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.md'))
      .map(async (filename) => {
        const fileContent = fs.readFileSync(
          path.join(contentDir, filename),
          'utf-8'
        );
        const { data, content } = matter(fileContent);
        
        const processedContent = await remark()
          .use(html)
          .process(content);
        const contentHtml = processedContent.toString();
        
        return {
          slug: filename.replace('.md', ''),
          ...data,
          content,
          contentHtml,
        } as BlogPost;
      })
  );
  
  // Sort by date, newest first
  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();
    
    return {
      slug,
      ...data,
      content,
      contentHtml,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

/**
 * Get all team members from the content directory
 */
export function getTeamMembers(): TeamMember[] {
  const contentDir = path.join(process.cwd(), 'content/team');
  
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDir);
  
  const members = files
    .filter(file => file.endsWith('.md'))
    .map((filename) => {
      const fileContent = fs.readFileSync(
        path.join(contentDir, filename),
        'utf-8'
      );
      const { data } = matter(fileContent);
      
      return {
        slug: filename.replace('.md', ''),
        ...data,
      } as TeamMember;
    });
  
  // Sort by order
  return members.sort((a, b) => (a.order || 0) - (b.order || 0));
}

