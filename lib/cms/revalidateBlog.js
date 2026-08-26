import { revalidatePath, revalidateTag } from "next/cache";
import { BLOG_TAG } from "./getBlogPosts";

export function revalidateBlogCache() {
  revalidateTag(BLOG_TAG);
  revalidatePath("/");
  revalidatePath("/blog");
}
