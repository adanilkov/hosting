export const FAQInfo = {
  name: "MC Hosting FAQ",
  description: "A sample FAQ",
}

export type FAQPost = {
  link: string
  date: string // date is a string 'YYYY-MM-DD'
  title: string
  description: string
  parsedDate?: Date // Optional because it's added dynamically
}

// Update this list with the actual FAQ post list
// Create a page in the "(posts)" directory for each entry
const FAQPosts: FAQPost[] = [
  {
    title: "How we built a beautiful 41kb SaaS website with this template",
    description: "How to use this template you to bootstrap your own site.",
    link: "/FAQ/how_we_built_our_41kb_saas_website",
    date: "2024-03-10",
  },
  {
    title: "Example FAQ Post 2",
    description: "Even more example content!",
    link: "/FAQ/awesome_post",
    date: "2022-9-23",
  },
  {
    title: "Example FAQ Post",
    description: "A sample FAQ post, showing our FAQ engine",
    link: "/FAQ/example_FAQ_post",
    date: "2023-03-13",
  },
]

// Parse post dates from strings to Date objects
for (const post of FAQPosts) {
  if (!post.parsedDate) {
    const dateParts = post.date.split("-")
    post.parsedDate = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
    ) // Note: months are 0-based
  }
}

export const sortedFAQPosts = FAQPosts.sort(
  (a: FAQPost, b: FAQPost) =>
    (b.parsedDate?.getTime() ?? 0) - (a.parsedDate?.getTime() ?? 0),
)
