import { z } from "zod";

const localizedSchema = z.object({
  title: z.string().min(1),
  excerpt: z.string().min(1),
  content: z
    .string()
    .min(1)
    .refine((value) => value.replace(/<[^>]*>/g, "").trim().length > 0, "Content is required"),
});

export const articleInputSchema = z.object({
  slug: z.string().optional(),
  coverImageUrl: z.string().optional(),
  readMinutes: z.coerce.number().int().min(1).max(60).default(5),
  status: z.enum(["draft", "published"]).default("draft"),
  locales: z.object({
    ar: localizedSchema,
    en: localizedSchema,
  }),
});
