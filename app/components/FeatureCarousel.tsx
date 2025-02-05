import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

interface FeatureCard {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeatureCarouselProps {
  featureCards: FeatureCard[]
}

const FeatureCarousel: React.FC<FeatureCarouselProps> = ({ featureCards }) => {
  return (
    <div className="lg:hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {featureCards.map(({ icon, title, description }, idx) => (
          <SwiperSlide key={idx}>
            <div className="group p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md flex flex-col justify-between min-h-[300px]">
              {/* Icon Section */}
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mt-4">{title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mt-2 flex-grow">
                {description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          width: 10px;
          height: 10px;
          margin: 5px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: white;
          width: 12px;
          height: 12px;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  )
}

export default FeatureCarousel
