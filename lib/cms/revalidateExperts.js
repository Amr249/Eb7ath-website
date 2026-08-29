import { revalidatePath, revalidateTag } from "next/cache";
import { EXPERTS_TAG, RESEARCH_TAG } from "./getExpertsData";

export function revalidateExpertsCache(slug) {
  revalidateTag(EXPERTS_TAG);
  revalidatePath("/");
  if (slug) revalidateTag(`expert-${slug}`);
  revalidatePath(`/experts/${slug || ""}`);
}

export function revalidateResearchCache(slug, expertSlug) {
  revalidateTag(RESEARCH_TAG);
  revalidateTag(EXPERTS_TAG);
  if (slug) {
    revalidateTag(`research-${slug}`);
    revalidatePath(`/research/${slug}`);
  }
  if (expertSlug) {
    revalidateTag(`expert-${expertSlug}`);
    revalidatePath(`/experts/${expertSlug}`);
  }
}
