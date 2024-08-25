import Image from "next/image";
import Link from "next/link";
import Heading from "./heading";
const blogs = [
  {
    url: "https://sunnydhiman.com/hire-professional-photographers-in-jalandhar/",
    title: "Blog 1",
    author: "Tanmoy",
    excerpt: "This is the first blog post.",
    thumbnailUrl:
      "https://sunnydhiman.com/wp-content/uploads/2023/08/SKP07220-1024x683.jpg",
  },
  {
    url: "https://sunnydhiman.com/hire-professional-photographers-in-jalandhar/",
    title: "Blog 2",
    author: "Tanmoy",
    excerpt: "This is the second blog post.",
    thumbnailUrl:
      "https://sunnydhiman.com/wp-content/uploads/2023/08/SKP07220-1024x683.jpg",
  },
  {
    url: "https://sunnydhiman.com/hire-professional-photographers-in-jalandhar/",
    title: "Blog 3",
    author: "Tanmoy",
    excerpt: "This is the third blog post.",
    thumbnailUrl:
      "https://sunnydhiman.com/wp-content/uploads/2023/08/SKP07220-1024x683.jpg",
  },
];

export default function Blogs() {
  return (
    <div className="container mx-auto px-4">
      <Heading title="Blog Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {blogs.map((blog) => (
          <Link href={blog.url} key={blog.title} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-48 w-full">
                <Image
                  src={blog.thumbnailUrl}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{blog.author}</span>
                  <span>30th August</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
