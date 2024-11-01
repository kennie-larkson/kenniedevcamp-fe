import ArticleCard from "./articlecard";

export type ArticleType = {
  title: string;
  body: string;
  image: string;
};

const articles: ArticleType[] = [
  {
    title: "First Article",
    body: "This is the body of the first article",
    image: "/pexels-eva-bronzini-7599547.jpg",
  },
  {
    title: "Second Article",
    body: "This is the body of the second article",
    image: "/pexels-eva-bronzini-7599547.jpg",
  },
  {
    title: "Third Article",
    body: "This is the body of the third article",
    image: "/pexels-eva-bronzini-7599547.jpg",
  },
  {
    title: "Fourth Article",
    body: "This is the body of the fourth article",
    image: "/pexels-eva-bronzini-7599547.jpg",
  },
];

export default function ArticlesComponent() {
  return (
    <section
      id="articles"
      className="flex flex-col justify-center items-center mt-16  rounded-lg bg-gradient-to-b  "
    >
      <div className="flex flex-col w-full items-center justify-center text-center p-2 md:p-6">
        <div className="flex w-3/5 justify-center border-4 rounded-xl bg-gray-400 p-2 text-xl">
          <p className="text-black font-sans font-semibold text-xs md:text-lg">
            This is the Articles section
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4  mt-6 gap-2 w-full p-4  ">
          {articles.map((article) => {
            return (
              <div key={article.title}>
                <ArticleCard {...article} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// bg-gradient-to-b from-orange-600 via-orange-400 to-purple-600
