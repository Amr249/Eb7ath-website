"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Redo2,
  Undo2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contentToHtml } from "@/lib/cms/content";

function ToolbarButton({ active, onClick, title, children }) {
  return (
    <Button
      type="button"
      variant={active ? "secondary" : "ghost"}
      size="icon"
      className="h-8 w-8 shrink-0"
      onClick={onClick}
      title={title}
      aria-label={title}
    >
      {children}
    </Button>
  );
}

export function RichTextEditor({ value, onChange, placeholder = "اكتب محتوى المقال هنا...", className = "" }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({ placeholder }),
    ],
    content: contentToHtml(value),
    editorProps: {
      attributes: {
        class: "cms-editor__content",
        dir: "rtl",
      },
    },
    onUpdate: ({ editor: current }) => {
      onChange(current.getHTML());
    },
    immediatelyRender: false,
  });

  if (!editor) {
    return <div className="cms-editor cms-editor--loading">جارٍ تحميل المحرر...</div>;
  }

  return (
    <div className={`cms-editor ${className}`.trim()}>
      <div className="cms-editor__toolbar">
        <ToolbarButton
          active={editor.isActive("heading", { level: 1 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          title="عنوان رئيسي (H1)"
        >
          <Heading1 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          active={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          title="عنوان فرعي (H2)"
        >
          <Heading2 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          active={editor.isActive("heading", { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          title="عنوان صغير (H3)"
        >
          <Heading3 className="h-4 w-4" />
        </ToolbarButton>

        <span className="cms-editor__divider" aria-hidden="true" />

        <ToolbarButton
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="عريض"
        >
          <Bold className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="مائل"
        >
          <Italic className="h-4 w-4" />
        </ToolbarButton>

        <span className="cms-editor__divider" aria-hidden="true" />

        <ToolbarButton
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          title="قائمة نقطية"
        >
          <List className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          title="قائمة مرقمة"
        >
          <ListOrdered className="h-4 w-4" />
        </ToolbarButton>

        <span className="cms-editor__divider" aria-hidden="true" />

        <ToolbarButton
          active={editor.isActive({ textAlign: "right" })}
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          title="محاذاة لليمين"
        >
          <AlignRight className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          active={editor.isActive({ textAlign: "center" })}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          title="توسيط"
        >
          <AlignCenter className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          active={editor.isActive({ textAlign: "left" })}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          title="محاذاة لليسار"
        >
          <AlignLeft className="h-4 w-4" />
        </ToolbarButton>

        <span className="cms-editor__divider" aria-hidden="true" />

        <ToolbarButton
          active={false}
          onClick={() => editor.chain().focus().undo().run()}
          title="تراجع"
        >
          <Undo2 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          active={false}
          onClick={() => editor.chain().focus().redo().run()}
          title="إعادة"
        >
          <Redo2 className="h-4 w-4" />
        </ToolbarButton>
      </div>

      <EditorContent editor={editor} className="cms-editor__surface" />
    </div>
  );
}
