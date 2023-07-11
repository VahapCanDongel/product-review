import BigCard from "./components/Home/BigCard";
import BlogCard from "./components/Home/BlogCard";

export default function Home() {
  return (
    <div className="w-full flex justify-center p-14">
      <div className="w-3/4 flex flex-col justify-center gap-6 items-center">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <BigCard />
          <BigCard />
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}
