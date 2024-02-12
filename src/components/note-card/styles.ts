export const styles = {
  button: `
    inset-0
    md:inset-auto
    md:rounded-md
    bg-slate-800
    p-5 flex
    flex-col
    gap-3
    overflow-hidden
    relative
    text-left
    hover:ring-2
    hover:ring-slate-600
    focus:ring-2
    focus:ring-lime-400
    outline-none
  `,

  dialogOverlay: `
    inset-0
    fixed bg-black/60
  `,

  dialogContent: `
    fixed
    inset-0
    md:inset-auto
    md:top-1/2
    md:left-1/2
    md:-translate-x-1/2
    md:-translate-y-1/2
    md:max-w-[640px]
    md:h-[60vh]
    md:rounded-md
    w-full
    bg-slate-700
    flex
    flex-col
    outline-none
    overflow-hidden
  `,

  dialogClose: `
    absolute
    right-0
    top-0
    bg-transparent
    p-1.5
    to-slate-400
    hover:text-red-700
  `,

  x: `
    size-5
  `,

  modalContentDiv: `
    flex
    flex-1
    flex-col
    gap-3
    p-5
  `,
};
