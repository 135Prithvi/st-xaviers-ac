
export function Button({ text1, text2 }: { text1: string; text2: string }) {
  return (
    <div className="grid gap-8 items-start justify-center ">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <button className="relative px-5 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
          <span className="pr-3 text-gray-100 truncate whitespace-normal">
            {text1}
          </span>

          <span className="pl-3 text-indigo-400 group-hover:text-gray-100 transition duration-200">
            {text2} &rarr;
          </span>
        </button>
      </div>
    </div>
  );
}
