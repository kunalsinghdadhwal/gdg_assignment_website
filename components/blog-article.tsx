import type React from "react"

type BlogArticleProps = {
  title: string
  dateISO: string
  children: React.ReactNode
}

export function BlogArticle({ title, dateISO, children }: BlogArticleProps) {
  const formatted = new Date(dateISO).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article
      aria-labelledby="post-title"
      className="mx-auto max-w-2xl px-6 py-10 text-center leading-relaxed bg-white text-black dark:bg-black dark:text-white"
    >
      <h2 id="post-title" className="text-2xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      <p className="mt-2 text-xs text-gray-500">
        <time dateTime={dateISO}>{formatted}</time>
      </p>

      <div className="mt-6 space-y-6">{children}</div>
    </article>
  )
}
