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
            <div className="flex items-center justify-center bg-white p-2" onClick={() => handleChangeImage(img)}>
              <Image
                className="flex items-center justify-center bg-gray-50 rounded-full shadow"
                src={img}
                alt="product"
                width={80}
                height={80}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default dynamic(() => Promise.resolve(ImageCarousel), { ssr: false });
