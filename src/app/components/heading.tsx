export default function Heading({ title }: any) {
  return (
    <div className="flex items-center justify-center w-full my-8">
      <div className="flex-grow border-t border-gray-300"></div>
      <h2 className="mx-4 text-2xl font-semibold text-center text-gray-600">
        {title}
      </h2>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}
