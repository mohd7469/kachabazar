import dynamic from "next/dynamic";
import Image from "next/image";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageCarousel = ({ images, handleChangeImage }) => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Controller]}
        navigation
        slidesPerView={Math.min(images?.length, 3)} // 1 → 1, 2 → 2, 3 → 3, ... 4 → 3 ...
        className="my-6"
      >
        {images?.map((img, i) => (
          <SwiperSlide key={i + 1}>
            <div className={`flex items-center justify-center gap-4 bg-white cursor-pointer p-2 border border-gray-100 transition-all duration-100 ease-in-out hover:border-emerald-500 ${images?.length > 3 ? 'rounded-full' : 'rounded-lg'}`}
                 onClick={() => handleChangeImage(img)}>
              <div className="w-8 h-8 rounded-lg">
                <Image
                  src={img}
                  alt="product"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default dynamic(() => Promise.resolve(ImageCarousel), { ssr: false });
