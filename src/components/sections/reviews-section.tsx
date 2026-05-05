import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const reviews = [
  {
    name: "Анна К.",
    text: "Отличный магазин! Помогли подобрать удобные кроссовки для долгих прогулок. Качество на высоте, уже второй раз покупаю здесь.",
    rating: 5,
    date: "Март 2025",
  },
  {
    name: "Михаил Р.",
    text: "Большой выбор, вежливые продавцы. Нашёл зимние ботинки нужного размера — доволен покупкой. Рекомендую всем!",
    rating: 5,
    date: "Февраль 2025",
  },
  {
    name: "Светлана В.",
    text: "Покупала туфли на свадьбу дочери. Консультант помог с выбором, подобрали идеальный вариант. Спасибо за профессионализм!",
    rating: 5,
    date: "Апрель 2025",
  },
  {
    name: "Дмитрий П.",
    text: "Цены адекватные, ассортимент хороший. Брал кеды Nike — пришли быстро, всё совпало с описанием. Буду заходить ещё.",
    rating: 4,
    date: "Январь 2025",
  },
  {
    name: "Ольга Н.",
    text: "Очень удобное расположение — зашла по пути. Купила лоферы на распродаже, очень довольна. Магазин советую соседям!",
    rating: 5,
    date: "Март 2025",
  },
  {
    name: "Игорь С.",
    text: "Хорошее обслуживание, помогли с выбором рабочей обуви. Всё объяснили про уход и гарантию. Профессиональный подход.",
    rating: 5,
    date: "Апрель 2025",
  },
]

export function ReviewsSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Отзывы клиентов
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-serif text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Нам доверяют жители Щёлково
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="bg-background rounded-xl p-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Icon key={j} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, j) => (
                  <Icon key={j} name="Star" size={16} className="text-muted-foreground/30" />
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed flex-1">"{review.text}"</p>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-medium text-sm">{review.name[0]}</span>
                  </div>
                  <span className="font-medium text-foreground text-sm">{review.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
