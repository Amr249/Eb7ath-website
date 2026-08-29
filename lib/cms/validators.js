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

const expertLocalizedSchema = z.object({
  name: z.string().min(1),
  specialty: z.string().min(1),
  affiliation: z.string().min(1),
});

export const expertInputSchema = z.object({
  slug: z.string().optional(),
  imageUrl: z.string().optional(),
  status: z.enum(["draft", "published"]).default("draft"),
  featuredOnLanding: z.boolean().default(false),
  sortOrder: z.coerce.number().int().min(0).max(9999).default(0),
  locales: z.object({
    ar: expertLocalizedSchema,
    en: expertLocalizedSchema,
  }),
});

const researchTeamMemberSchema = z.object({
  nameEn: z.string().min(1),
  nameAr: z.string().optional().default(""),
  affiliationEn: z.string().min(1),
  affiliationAr: z.string().optional().default(""),
  email: z.string().optional().default(""),
  isCorresponding: z.boolean().default(false),
});

export const researchInputSchema = z.object({
  slug: z.string().optional(),
  expertId: z.string().min(1),
  title: z.string().min(1),
  journal: z.string().min(1),
  doi: z.string().optional(),
  volume: z.coerce.number().int().min(0).optional().nullable(),
  articleNumber: z.coerce.number().int().min(0).optional().nullable(),
  year: z.coerce.number().int().min(1900).max(2100).optional().nullable(),
  publishedAt: z.string().optional().nullable(),
  externalUrl: z.string().optional(),
  telegramUrl: z.string().optional(),
  status: z.enum(["draft", "published"]).default("draft"),
  teamMembers: z.array(researchTeamMemberSchema).default([]),
});
