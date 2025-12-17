import { z } from 'zod';
import { publicProcedure, router } from './_core/trpc';
import {
  getCaseStudies,
  getCaseStudyBySlug,
  getBlogPosts,
  getBlogPostBySlug,
  getTeamMembers,
} from '../client/src/lib/content-loader';

export const contentRouter = router({
  getCaseStudies: publicProcedure.query(async () => {
    return await getCaseStudies();
  }),
  
  getCaseStudyBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      return await getCaseStudyBySlug(input.slug);
    }),
  
  getBlogPosts: publicProcedure.query(async () => {
    return await getBlogPosts();
  }),
  
  getBlogPostBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      return await getBlogPostBySlug(input.slug);
    }),
  
  getTeamMembers: publicProcedure.query(() => {
    return getTeamMembers();
  }),
});

