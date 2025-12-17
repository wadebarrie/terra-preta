import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactSubmission } from "./db";
import { notifyOwner } from "./_core/notification";
import { contentRouter } from "./contentRouter";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  content: contentRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          role: z.string(),
          company: z.string(),
          email: z.string().email(),
          phone: z.string().optional(),
          siteSize: z.string().optional(),
          legalDescription: z.string().optional(),
          soilTestUrl: z.string().optional(),
          timeline: z.string().optional(),
          method: z.string().optional(),
          deliveryNeeds: z.string().optional(),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        // Save to database
        await createContactSubmission({
          role: input.role,
          company: input.company,
          email: input.email,
          phone: input.phone,
          siteSize: input.siteSize,
          legalDescription: input.legalDescription,
          soilTestUrl: input.soilTestUrl,
          timeline: input.timeline,
          method: input.method,
          deliveryNeeds: input.deliveryNeeds,
          notes: input.notes,
        });

        // Notify owner
        await notifyOwner({
          title: `New Contact Form Submission from ${input.company}`,
          content: `Role: ${input.role}\nCompany: ${input.company}\nEmail: ${input.email}\nPhone: ${input.phone || 'N/A'}\nSite Size: ${input.siteSize || 'N/A'}\nTimeline: ${input.timeline || 'N/A'}\nMethod: ${input.method || 'N/A'}\n\nNotes: ${input.notes || 'None'}`,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
