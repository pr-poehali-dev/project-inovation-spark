import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function ContactsSection() {
  const yandexMapUrl =
    "https://yandex.ru/maps/?text=Талсинская+улица+Щёлково+Московская+область&z=16"

  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Как нас найти
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-serif text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Приходите в магазин
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contacts Info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Адрес</p>
                <a
                  href={yandexMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  data-clickable
                >
                  Талсинская улица, Щёлково, Московская область
                  <Icon name="ExternalLink" size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Режим работы</p>
                <p className="text-muted-foreground text-sm">Пн–Пт: 10:00 – 20:00</p>
                <p className="text-muted-foreground text-sm">Сб–Вс: 10:00 – 19:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Телефон</p>
                <a
                  href="tel:+74951234567"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-clickable
                >
                  +7 (495) 123-45-67
                </a>
              </div>
            </div>

            <motion.a
              href={yandexMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors w-fit mt-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-clickable
            >
              <Icon name="Map" size={18} />
              Открыть на Яндекс.Картах
            </motion.a>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            className="w-full h-[380px] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=Талсинская+улица+Щёлково+Московская+область&z=15&l=map"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Карта магазина"
              style={{ border: "none" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
