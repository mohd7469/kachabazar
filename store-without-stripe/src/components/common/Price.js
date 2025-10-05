import useUtilsFunction from "@hooks/useUtilsFunction";

const Price = ({ product, price, card, currency, originalPrice }) => {
  // console.log("price", price, "originalPrice", originalPrice, "card", card);
  const { getNumberTwo } = useUtilsFunction();

  return (
    <>
      {product?.isCombination ? (
        <div>***isCombination***</div>
      ) : (
        <div className={"flex items-center gap-2"}>
          <span className="inline-block text-base font-bold text-gray-900">{currency} {getNumberTwo(product?.prices?.price)} </span>
          <span className="inline-block text-base text-xs line-through text-red-600">{getNumberTwo(originalPrice)}</span>
        </div>
      )}
    </>
    
    /*
    <div className="font-serif product-price font-bold">
      {product?.isCombination ? (
        <div className={"flex flex-col"}>
          <span
            className={
              card
                ? "inline-block text-lg font-semibold text-gray-800"
                : "inline-block text-2xl"
            }
          >
            {currency}
            {getNumberTwo(price)}
          </span>
          {originalPrice > price ? (
            <>
              <del
                className={
                  card
                    ? "sm:text-sm font-normal text-base text-gray-400"
                    : "text-lg font-normal text-gray-400 ml-1"
                }
              >
                {currency}
                {getNumberTwo(originalPrice)}
              </del>
            </>
          ) : null}
        </div>
      ) : (
        <div className={"flex flex-col"}>
          <span
            className={
              card
                ? "inline-block text-lg font-semibold text-gray-800"
                : "inline-block text-2xl"
            }
          >
            {currency}
            {getNumberTwo(product?.prices?.price)}
          </span>
          {originalPrice > price ? (
            <>
              <del
                className={
                  card
                    ? "sm:text-sm font-normal text-base text-gray-400"
                    : "text-lg font-normal text-gray-400 ml-1"
                }
              >
                {currency}
                {getNumberTwo(originalPrice)}
              </del>
            </>
          ) : null}
        </div>
      )}
    </div>
    */
  );
};

export default Price;
