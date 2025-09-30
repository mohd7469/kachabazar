import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {useContext, useState} from "react";
import { IoAdd, IoBagAddSharp, IoRemove } from "react-icons/io5";
import { useCart } from "react-use-cart";

//internal import

import Price from "@components/common/Price";
import Stock from "@components/common/Stock";
import { notifyError } from "@utils/toast";
import useAddToCart from "@hooks/useAddToCart";
import useGetSetting from "@hooks/useGetSetting";
import Discount from "@components/common/Discount";
import useUtilsFunction from "@hooks/useUtilsFunction";
import ProductModal from "@components/modal/ProductModal";
import ImageWithFallback from "@components/common/ImageWithFallBack";
import { handleLogEvent } from "src/lib/analytics";
import { SidebarContext } from "@context/SidebarContext";

const ProductCard = ({ product, attributes }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { toggleCartDrawer, toggleCategoryDrawer } = useContext(SidebarContext);
  const { items, addItem, updateItemQuantity, inCart } = useCart();
  const { handleIncreaseQuantity } = useAddToCart();
  const { globalSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  const currency = globalSetting?.default_currency || "$";

  // console.log('attributes in product cart',attributes)

  const handleAddItem = (p) => {
    if (p.stock < 1) return notifyError("Insufficient stock!");

    if (p?.variants?.length > 0) {
      setModalOpen(!modalOpen);
      return;
    }
    const { slug, variants, categories, description, ...updatedProduct } =
      product;
    const newItem = {
      ...updatedProduct,
      title: showingTranslateValue(p?.title),
      id: p._id,
      variant: p.prices,
      price: p.prices.price,
      originalPrice: product.prices?.originalPrice,
    };
    addItem(newItem);
    toggleCartDrawer();
  };

  const handleModalOpen = (event, id) => {
    setModalOpen(event);
  };
  
  const productRating = (product) => {
    const initialStock = 1000;
    const currentStock = product?.stock ?? initialStock;
    const ordered = initialStock - currentStock;
    
    let rating = 0;
    if (ordered > 0) {
      const everyAfter = 5;
      const steps = Math.floor(ordered / everyAfter);
      const base = 4 + Math.random();
      const raw = base + steps * 0.1;
      rating = Math.min(everyAfter, raw);
      rating = Math.round(rating * 10) / 10;
    }
    
    return (
      <>
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            <div className="flex space-x-1">
              <div className="text-yellow-400">
                <i className="fa fa-star"></i>
                {/*<i className="fa fa-star-half"></i>*/}
                {/*<i className="fa fa-star-o"></i>*/}
              </div>
            </div>
          </div>
          <div className="text-xs ml-1 text-gray-400">
            <span className="font-medium">{rating.toFixed(1)}</span>
            <span> ({ordered} reviews)</span>
          </div>
        </div>
      </>
    );
  }
  
  return (
    <div data-aos="fade-up">
      {modalOpen && (
        <ProductModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          product={product}
          currency={currency}
          attributes={attributes}
        />
      )}
      {/*
      <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
        <div className="w-full flex justify-between">
          <Stock product={product} stock={product.stock} card />
          <Discount product={product} />
        </div>
        <div
          onClick={() => {
            handleModalOpen(!modalOpen, product._id);
            handleLogEvent(
              "product",
              `opened ${showingTranslateValue(product?.title)} product modal`
            );
          }}
          className="relative flex justify-center cursor-pointer pt-2 w-full h-44"
        >
          <div className="relative w-full h-full p-2">
            {product.image[0] ? (
              <ImageWithFallback src={product.image[0]} alt="product" />
            ) : (
              <Image
                src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                fill
                style={{
                  objectFit: "contain",
                }}
                sizes="100%"
                alt="product"
                className="object-contain transition duration-150 ease-linear transform group-hover:scale-105"
              />
            )}
          </div>
        </div>
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
          <div className="relative mb-1">
            <span className="text-gray-400 font-medium text-xs d-block mb-1">
              {product.unit}
            </span>
            <h2 className="text-heading truncate block text-sm font-medium text-gray-600 mb-2">
              <span className="line-clamp-2">
                {showingTranslateValue(product?.title)}
              </span>
            </h2>
          </div>

          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
            <Price
              card
              product={product}
              currency={currency}
              price={
                product?.isCombination
                  ? product?.variants[0]?.price
                  : product?.prices?.price
              }
              originalPrice={
                product?.isCombination
                  ? product?.variants[0]?.originalPrice
                  : product?.prices?.originalPrice
              }
            />

            {inCart(product._id) ? (
              <div>
                {items.map(
                  (item) =>
                    item.id === product._id && (
                      <div
                        key={item.id}
                        className="w-10 flex flex-col items-center justify-center py-2 px-2 bg-emerald-500 text-white rounded"
                      >
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <span className="text-dark text-base">
                            <IoRemove />
                          </span>
                        </button>
                        <p className="text-sm text-dark px-1 py-1 font-serif font-semibold">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() =>
                            item?.variants?.length > 0
                              ? handleAddItem(item)
                              : handleIncreaseQuantity(item)
                          }
                        >
                          <span className="text-dark text-base">
                            <IoAdd />
                          </span>
                        </button>
                      </div>
                    )
                )}{" "}
              </div>
            ) : (
              <button
                onClick={() => handleAddItem(product)}
                aria-label="cart"
                className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
              >
                {" "}
                <span className="text-xl">
                  <IoBagAddSharp />
                </span>{" "}
              </button>
            )}
          </div>
        </div>
      </div>
      */}
      <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-white border-gray-100 transition-all duration-100 ease-in-out hover:border-emerald-500 ">
        <div className="w-full flex justify-between">
          <Stock product={product} stock={product.stock} card/>
          <Discount product={product}/>
        </div>
        <div className="relative w-full min-h-48 lg:h-48 xl:h-52">
          <Link href={`/product/${product.slug}`} passHref> {/* relative block w-full h-full overflow-hidden bg-gray-100 */}
            {product.image[0] ? (
              <ImageWithFallback src={product.image[0]} alt="product"/>
            ) : (
              <Image
                src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                fill
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent",
                }}
                sizes="100%"
                alt="product"
                className="object-contain transition duration-150 ease-linear transform group-hover:scale-105"
              />
            )}
          </Link>
          <div className="hidden md:block">
            <div className="absolute lg:bottom-0 bottom-4 lg:group-hover:bottom-4 inset-x-1 opacity-100 flex justify-center lg:opacity-0 lg:invisible group-hover:opacity-100 group-hover:visible transition-all">
              <button onClick={() => {handleModalOpen(!modalOpen, product._id); handleLogEvent("product",`opened ${showingTranslateValue(product?.title)} product modal`);}}
                      className="relative h-auto inline-flex items-center cursor-pointer justify-center rounded-full transition-colors text-xs py-2 px-4 bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:text-emerald-700 hover:bg-gray-100 dark:hover:bg-slate-800 shadow-lg focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-emerald-600 dark:focus:ring-offset-0"
              >
                <i className="fa-solid fa-expand"></i>
                <span className="ms-1 hidden xl:block lg:block">Quick View</span></button>
            </div>
          </div>
          <div className="absolute bottom-3 right-3 z-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-emerald-500">
            {inCart(product._id) ? (
              <div>
                {items.map(
                  (item) =>
                    item.id === product._id && (
                      <div
                        key={item.id}
                        className="w-10 flex flex-col items-center justify-center py-3 px-2 border-2 border-gray-50 bg-emerald-600 text-white rounded-full"
                      >
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <span className="text-dark text-base">
                            <IoRemove/>
                          </span>
                        </button>
                        <p className="text-sm text-dark px-1 py-1 font-serif font-semibold">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() =>
                            item?.variants?.length > 0
                              ? handleAddItem(item)
                              : handleIncreaseQuantity(item)
                          }
                        >
                          <span className="text-dark text-base">
                            <IoAdd/>
                          </span>
                        </button>
                      </div>
                    )
                )}{" "}
              </div>
            ) : (
              <button
                onClick={() => handleAddItem(product)}
                className="w-11 h-11 flex items-center justify-center rounded-full cursor-pointer border-2 bg-emerald-700 text-white border-gray-10 font-medium transition-colors duration-300 hover:border-accent hover:bg-emerald-800 hover:border-emerald-800 hover:text-gray-50">
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col space-y-2 px-4 pt-2 pb-4">
          <div className="relative mb-1">
            <span className="text-gray-400 font-medium text-xs d-block mb-1">{product?.unit || ''}</span>
            <Link href={`/product/${product.slug}`} passHref
                  className="text-sm font-medium text-gray-800 line-clamp-1 hover:text-emerald-600">
              {showingTranslateValue(product?.title)}
            </Link>
          </div>
          <div className="flex gap-0.5 items-center">
            {productRating(product)}
          </div>
          <div className="product-price">
            <Price
              card
              product={product}
              currency={currency}
              price={
                product?.isCombination
                  ? product?.variants[0]?.price
                  : product?.prices?.price
              }
              originalPrice={
                product?.isCombination
                  ? product?.variants[0]?.originalPrice
                  : product?.prices?.originalPrice
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProductCard), {ssr: false});
