import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Company A",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83xwhMsCLMOdS4a2YoNnZpBAQ_JdBHLZ14g&s",
    quote:
      "This service has transformed our business operations. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Director, Company B",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2q83JcZgPQfNlAnwAJkBJ-eS9OK7UUzJ5Q&s",
    quote:
      "The team's expertise and dedication are unmatched. A pleasure to work with!",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Freelance Designer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDGBjBKY7glUXYb9c-6xuun0Fo2yYZNz-NA3o5Rg1rrKbmqfyOE1r2Q3lj2QL_wKXj2s&usqp=CAU",
    quote:
      "As a freelancer, this service has been a game-changer for my productivity.",
  },
];

const TestimonialCard = ({ name, role, image, quote }: any) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
    <div className="w-24 h-24 relative mb-4">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <h3 className="font-semibold text-lg">{name}</h3>
    <p className="text-gray-500">{role}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
