import Image from "next/image";

export default function TheEnigmaticTarsier() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 my-24 md:my-28 lg:my-32">
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-extrabold mb-4">
        The Enigmatic Tarsier
      </h1>
      <hr className="my-4 md:my-10 lg:my-12" />
      <p className="text-sm md:text-lg lg:text-xl text-justify leading-relaxed">
        Tarsiers are small, nocturnal primates found only in the islands of
        Southeast Asia. Known for their bizarre yet captivating appearance, they
        are some of the most unique creatures in the animal kingdom. Their most
        striking feature is their enormous eyes, which are the largest of any
        mammal relative to their body size.
      </p>
      <Image
        src="/assets/images/articles/tarsier.png"
        alt="The Enigmatic Tarsier"
        className="w-full rounded-l-lg lg:rounded-xl my-8"
        width={600}
        height={400}
      />
      <section className="mt-12 md:mt-16 lg:mt-24 text-sm md:text-lg lg:text-xl text-justify leading-relaxed">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-4">
          Unique Adaptations
        </h2>
        <hr className="my-2 md:my-6 lg:my-8" />
        <p>
          Tarsiers possess a range of fascinating adaptations that help them
          thrive in their forested habitats. Their name, &quot;tarsier,&quot; comes from
          their incredibly elongated <b>tarsus bones</b> (ankle bones), which
          allow them to leap impressive distances between trees-up to 5 meters
          (16 feet)!
        </p>
        <ul className="list-disc list-outside ms-6 mt-4 space-y-2">
          <li>
            <b>Massive Eyes:</b> Each eyeball is about 16 mm in diameter and is
            as large as its entire brain. Unlike most animals, their eyes cannot
            rotate; instead, a special adaptation allows their head to turn <b>180 degrees</b> in each direction.
          </li>
          <li>
            <b>Carnivorous Diet:</b> Tarsiers are the only entirely carnivorous
            primates. They are skilled hunters, feasting mainly on insects, but
            they will also catch birds, snakes, and lizards.
          </li>
          <li>
            <b>Specialized Hands and Feet:</b> They have long, slender fingers
            and toes equipped with soft pads and sharp nails, which help them
            grip branches and prey securely.
          </li>
        </ul>
      </section>
      <section className="mt-10 md:mt-16 lg:mt-20 text-sm md:text-lg lg:text-xl text-justify leading-relaxed">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-4">
          Habitat and Conservation
        </h2>
        <hr className="my-2 md:my-6 lg:my-8" />
        <p>
          These creatures inhabit tropical rainforests, preferring dense,
          secondary growth forests with plenty of vertical branches for climbing
          and leaping. They are found in countries like the Philippines and
          Malaysia, and across many islands of Indonesia, including Borneo,
          Sumatra, Sulawesi, and Belitung.
        </p>
        <p className="mt-4">
          Unfortunately, all tarsier species are classified as <b>vulnerable or
          endangered. </b> The primary threats to their survival are habitat
          destruction due to deforestation and the illegal pet trade. Tarsiers
          do not fare well in captivity, as they are easily stressed, often
          leading them to harm themselves. Conservation efforts are crucial to
          protect these remarkable and sensitive primates from extinction.
        </p>
      </section>
    </div>
  );
}
