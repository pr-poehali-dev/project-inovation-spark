import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/8596f18f-b8cd-40f6-be84-f8381b929ded/files/ebdf99ea-1816-4144-99a7-229aa7f3537d.jpg",
  "https://cdn.poehali.dev/projects/8596f18f-b8cd-40f6-be84-f8381b929ded/files/579d2d5a-f8dc-40f5-b417-ce324b585dee.jpg",
  "https://cdn.poehali.dev/projects/8596f18f-b8cd-40f6-be84-f8381b929ded/files/cd915c9b-5429-4e1d-8c99-3c7d8fdadb68.jpg",
  "https://cdn.poehali.dev/projects/8596f18f-b8cd-40f6-be84-f8381b929ded/files/e045591d-2869-4be7-87b8-48bd10802f88.jpg",
  "https://cdn.poehali.dev/projects/8596f18f-b8cd-40f6-be84-f8381b929ded/files/d36cd45c-42d7-4cbc-88af-2b81d70296fe.jpg",
  "https://cdn.poehali.dev/projects/8596f18f-b8cd-40f6-be84-f8381b929ded/files/6e98ba0f-082b-400d-a6be-fd9a9b7f691a.jpg",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Обувь для любого случая — от повседневного до особенного.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Пример портфолио ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}