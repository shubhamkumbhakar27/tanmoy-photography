import Image from "next/image";
import Link from "next/link";
import Heading from "./heading";

const FILMS = [
  {
    id: 1,
    slug: "https://www.youtube.com/playlist?list=PLMyDjoKzIAnzAs6rJGFKOOp5ZJLXlDieC",
    title: "Wedding Films",
    description: "Relive the magic of your wedding day forever.",
    thumbnailUrl: require("../../../public/images/portfolio/5.JPG"),
  },
  {
    id: 2,
    slug: "https://www.youtube.com/playlist?list=PLMyDjoKzIAnxDV-_Y8uo0_okmu-FFxmFE",
    title: "Pre-wedding Films",
    description: "Moments before forever, beautifully captured.",
    thumbnailUrl: require("../../../public/images/portfolio/3.jpg"),
  },
];

const Films = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <section>
        <Heading title="Films" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FILMS.map((film, index) => (
            <Link
              href={`${film.slug}`}
              key={film.id}
              className="group"
              target="_blank"
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

export default Films;
