import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function ShoeAnimation() {
  const [active, setActive] = useState(0)
  const sizes = ["36", "37", "38", "39", "40", "41", "42"]

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % sizes.length)
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full gap-2 flex-wrap px-4">
      {sizes.map((size, i) => (
        <motion.div
          key={size}
          className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium border transition-colors ${
            i === active
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background text-muted-foreground border-border"
          }`}
          animate={{ scale: i === active ? 1.2 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {size}
        </motion.div>
      ))}
    </div>
  )
}

function BrandsAnimation() {
  const brands = ["Nike", "Adidas", "Ecco", "Clarks", "Rieker"]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % brands.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full overflow-hidden">
      <motion.span
        key={current}
        className="font-serif text-3xl md:text-4xl text-foreground text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {brands[current]}
      </motion.span>
    </div>
  )
}

function QualityIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(98), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <span className="text-3xl md:text-4xl font-sans font-medium text-foreground">98%</span>
      <span className="text-sm text-muted-foreground">Довольных покупателей</span>
      <div className="w-full max-w-[120px] h-1.5 bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Почему выбирают нас
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sizes Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <ShoeAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Полная размерная линейка</h3>
              <p className="text-muted-foreground text-sm mt-1">Размеры от 36 до 47 — найдём пару для каждого.</p>
            </div>
          </motion.div>

          {/* Brands Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <BrandsAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Ведущие бренды</h3>
              <p className="text-muted-foreground text-sm mt-1">Только проверенные производители с гарантией качества.</p>
            </div>
          </motion.div>

          {/* Quality Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <QualityIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Довольные клиенты</h3>
              <p className="text-muted-foreground text-sm mt-1">Тысячи покупателей возвращаются снова и снова.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
