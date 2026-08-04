import { z } from "zod";

const localizedSchema = z.object({
  title: z.string().min(1),
  excerpt: z.string().min(1),
  content: z
    .string()
    .min(1)
    .refine((value) => value.replace(/<[^>]*>/g, "").trim().length > 0, "Content is required"),
});

export const articleInputSchema = z
  .object({
    slug: z.string().optional(),
    coverImageUrl: z.string().optional(),
    readMinutes: z.coerce.number().int().min(1).max(60).default(5),
    status: z.enum(["draft", "scheduled", "published"]).default("draft"),
    scheduledAt: z.string().optional().nullable(),
    locales: z.object({
      ar: localizedSchema,
      en: localizedSchema,
    }),
  })
  .superRefine((data, ctx) => {
    if (data.status !== "scheduled") return;
    if (!data.scheduledAt) {
      ctx.addIssue({
        code: "custom",
        path: ["scheduledAt"],
        message: "Scheduled date/time is required",
      });
      return;
    }
    const date = new Date(data.scheduledAt);
    if (Number.isNaN(date.getTime())) {
      ctx.addIssue({
        code: "custom",
        path: ["scheduledAt"],
        message: "Invalid scheduled date/time",
      });
    }
  });
