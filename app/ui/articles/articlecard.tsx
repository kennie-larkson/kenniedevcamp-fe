import Image from "next/image";
import { ArticleType } from "./articles";

export default function ArticleCard(article: ArticleType) {
  return (
    <div className="flex flex-col justify-center bg-white p-2 rounded-lg border-2 border-gray-100">
      <div className="flex justify-center w-full">
        <Image
          src={article.image}
          width={200}
          height={400}
          alt="article-image"
          className="rounded-lg w-full"
        />
      </div>
      <div className="flex flex-col mt-2 p-4 rounded-md ">
        <p className="mb-4 text-start text-lg font-bold font-sans">
          {article.title}
        </p>
        <p className="text-start font-sans text-sm font-normal text-slate-400">
          {article.body}
        </p>
      </div>
    </div>
  );
}
