import Image from "next/image";
import Link from "next/link";
import Heading from "./heading";

const weddingFilms = [
  {
    id: 1,
    slug: "brand-story",
    title: "Brand Story",
    thumbnailUrl:
      "https://sunnydhiman.com/wp-content/uploads/2023/08/DCG09858-1024x683.jpg",
  },
  {
    id: 2,
    slug: "product-launch",
    title: "Product Launch",
    thumbnailUrl:
      "https://sunnydhiman.com/wp-content/uploads/2023/08/DCG09858-1024x683.jpg",
  },
];

const preweddingFilms = [
  {
    id: 1,
    slug: "nature-doc",
    title: "Nature Documentary",
    description: "Exploring the wonders of our planet",
    thumbnailUrl:
      "https://sunnydhiman.com/wp-content/uploads/2023/08/DCG09858-1024x683.jpg",
  },
  {
    id: 2,
    slug: "social-impact",
    title: "Social Impact",
    description: "Stories of change-makers around the world",
    thumbnailUrl:
      "https://sunnydhiman.com/wp-content/uploads/2023/08/DCG09858-1024x683.jpg",
  },
];

const FilmCategories = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Commercial Films Section */}
      <section className="mb-24">
        <Heading title="Wedding Films" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {weddingFilms.map((film, index) => (
            <Link
              href={`/commercial/${film.slug}`}
              key={film.id}
              className="group"
            >
              <div
                className={`relative overflow-hidden ${
                  index % 3 === 0 ? "row-span-2" : ""
                }`}
              >
                <Image
                  src={film.thumbnailUrl}
                  alt={film.title}
                  width={400}
                  height={index % 3 === 0 ? 600 : 400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold text-center">
                    {film.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Documentary Films Section */}
      <section>
        <Heading title="Pre-wedding Films" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {preweddingFilms.map((film, index) => (
            <Link
              href={`/documentary/${film.slug}`}
              key={film.id}
              className="group"
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={film.thumbnailUrl}
                  alt={film.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <h3 className="text-white text-2xl font-semibold text-center mb-2">
                    {film.title}
                  </h3>
                  <p className="text-white text-sm text-center">
                    {film.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FilmCategories;
