import Image from "next/image"

export const articles = [
  {
    id: 1,
    slug: "the-enigmatic-tarsier",
    title: "The Enigmatic Tarsier",
    content: "Learn about the rare and unique Tarsier, one of the world’s smallest primates that can be found in the forests of Belitong Island.",
    imageUrl: "/assets/images/articles/tarsier.png",
  },
]

export default function DiscoverSection() {
  return (
    <section className="md:min-h-[100vh]">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center mt-24">
        <h2 className="text-2xl font-bold md:font-extrabold md:text-center mb-4">Discover Belitong</h2>
        <p className="md:text-center text-gray-700 mb-4">
          Learn more about the unique attractions and wildlife of Belitong Island
        </p>
        <div className="flex flex-wrap flex-col md:flex-row gap-8 justify-center md:py-16 ">
          {articles.map((article) => (
          <div key={article.id} className={`mb-8 border-2 border-primary rounded-lg overflow-hidden ${articles.length > 1 ? 'md:w-[40%]' : 'md:max-w-3xl'} `}>
            <Image src={article.imageUrl} alt={article.title} className="w-full aspect-[924/290] object-cover" width={300} height={300} />
            <div className="py-4 px-4 md:px-8  flex flex-col gap-4 mb-4">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="text-gray-600">{article.content}</p>
              <div>
                <a href={`articles/${article.slug}`} className="bg-primary text-sm text-white py-2 px-4 rounded-lg">Read More</a>
              </div>
            </div>
          </div>
          
        ))}
        </div>
      </div>
    </section>
  )
}