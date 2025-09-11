import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useRef } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";

//internal import
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import Loading from "@components/preloader/Loading";

const CategoryCarousel = () => {
  const router = useRouter();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { showingTranslateValue } = useUtilsFunction();
  const { isLoading, setIsLoading } = useContext(SidebarContext);

  const {
    data,
    error,
    isLoading: loading,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => await CategoryServices.getShowingCategory(),
  });

  // console.log("data", data, "error", error, "isFetched", isFetched);

  const handleCategoryClick = (id, category) => {
    const category_name = showingTranslateValue(category)
      ?.toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");

    router.push(`/search?category=${category_name}&_id=${id}`);
    setIsLoading(!isLoading);
  };

  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Controller]}
        navigation
        breakpoints={{
          320: {
            slidesPerView: Math.min(3)
          },
          576: {
            slidesPerView: Math.min(4),
          },
          768: {
            slidesPerView: Math.min(5),
          },
          992: {
            slidesPerView: Math.min(6),
          },
          1200: {
            slidesPerView: Math.min(6),
          },
          1400: {
            slidesPerView: Math.min(7),
          }
        }}
        className="my-6 rounded-full"
      >
        {loading ? (
          <Loading loading={loading} />
        ) : error ? (
          <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
            {error?.response?.data?.message || error?.message}
          </p>
        ) : (
          data?.[0]?.children?.map((category, i) => (
            <SwiperSlide key={i + 1}>
              <div className="flex items-center justify-center gap-3 bg-white cursor-pointer p-2 hover:bg-gray-50 hover:shadow"
                   onClick={() => handleCategoryClick(category?._id, category?.name)}>
                {/* Image container */}
                <div className="w-8 h-8 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={category?.icon || "https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"}
                    alt={category?.name || "category"}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text content */}
                <p className="text-xs text-gray-500 truncate">{showingTranslateValue(category?.name)}</p>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default React.memo(CategoryCarousel);
