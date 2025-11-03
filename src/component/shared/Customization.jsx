import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TabsSection from "../../component/shared/TabsSection";
import { addToCart } from "../../features/cart/cartSlice";
import {
  setSelectedBox,
  setQuantity,
  setActiveTab,
  setActiveSubTab,
  setSelectedOption,
  setPreviewImage,
  resetCustomization,
} from "../../features/customization/customizationSlice";

const Customization = ({ product, onSelect }) => {
  const dispatch = useDispatch();
  const {
    selectedBox,
    quantity,
    activeTab,
    activeSubTab,
    previewImage,
    selectedOption,
  } = useSelector((state) => state.customization);

  const tabs = ["DOUGH", "CHEESE", "SPICY", "SAUCE", "COOK", "TOPPINGS"];

  useEffect(() => {
    dispatch(setPreviewImage(product.image));
    dispatch(resetCustomization()); // Reset on product change
  }, [product, dispatch]);

  const handleBoxSelect = (index) => {
    dispatch(setSelectedBox({ index, image: product.options[index]?.image || product.image }));
  };

  const handleRadioChange = (optionLabel) => {
    dispatch(setSelectedOption(optionLabel));
    if (onSelect) onSelect(activeTab, optionLabel);
  };

  const handleQuantityChange = (type) => {
    dispatch(setQuantity({ type }));
  };

  const activeTabContent = product.tabContent?.[activeTab];
  const subTabsObject = activeTabContent?.subTabs ? activeTabContent.subTabs : null;
  const selectedSize = selectedBox !== null ? product.options[selectedBox] : null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* ---------------- Main Layout ---------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* ---------------- Left Image Section ---------------- */}
        <div className="flex flex-col items-center relative">
          <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            <img
              src={previewImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            {selectedBox !== null && (
              <div className="absolute bottom-3 left-3 text-white text-sm px-3 py-1 rounded-lg">
                Previewing: {product.options[selectedBox]?.label || ""}
              </div>
            )}
          </div>
        </div>

        {/* ---------------- Right Section ---------------- */}
        <div className="flex flex-col space-y-6">
          {/* ---------- Product Title ---------- */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-gray-600">{product.description?.tab?.join(", ")}</p>
          </div>

          {/* ---------- Size Options Section ---------- */}
          <div className="grid grid-cols-2 gap:5  sm:grid-cols-2 lg:grid-cols-4 lg:gap-20  ">
            {product.options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleBoxSelect(index)}
                className={`flex items-center border rounded-xl  w-40 space-x-3  cursor-pointer transition-all duration-200 ${selectedBox === index
                    ? "bg-orange-500 text-white shadow-lg border-orange-600 scale-[1.02]"
                    : "bg-white border-gray-300 hover:border-orange-400 hover:shadow-md"
                  }`}
              >
                {/* Image Left Side */}
                <div className="flex-shrink-0 w-15 h-20  overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <img
                    src={option.image}
                    alt={option.text}
                    className="w-25 h-30 object-fill"
                  />
                </div>

                {/* Text Right Side */}
                <div className="flex flex-col justify-center">
                  <h4
                    className={`font-semibold text-lg ${selectedBox === index ? "text-white" : "text-gray-800"
                      }`}
                  >
                    {option.text}
                  </h4>
                  <p
                    className={`text-sm font-medium mt-1 ${selectedBox === index ? "text-orange-100" : "text-gray-600"
                      }`}
                  >
                    ${option.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ---------- Quantity + Add to Cart ---------- */}
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center border rounded-xl overflow-hidden">
              <button
                onClick={() => handleQuantityChange("dec")}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
              >
                –
              </button>
              <span className="px-5 py-2 text-lg font-medium">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("inc")}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>

            <button
              onClick={() => {
                const selectedSize = selectedBox !== null ? product.options[selectedBox] : null;
                dispatch(addToCart({
                  product: {
                    name: product.name,
                    image: product.image,
                    price: selectedSize?.price || 0,
                  },
                  selectedOptions: [], // No options selected in main customization
                  quantity,
                  selectedSize,
                }));
                alert(`${quantity} × ${product.name} added to cart!`);
              }}
              disabled={selectedBox === null}
              className={`px-6 py-3 rounded-xl shadow-md transition-all ${selectedBox === null
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
            >
              Add to Cart
            </button>
          </div>
        </div>

      </div>

      {/* ---------------- Tabs Section (Now Separated) ---------------- */}
      <TabsSection
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={(tab) => dispatch(setActiveTab(tab))}
        activeSubTab={activeSubTab}
        setActiveSubTab={(subTab) => dispatch(setActiveSubTab(subTab))}
        subTabsObject={subTabsObject}
        selectedOption={selectedOption}
        handleRadioChange={handleRadioChange}
        previewImage={previewImage}
        selectedSize={selectedSize}
      />
    </section>
  );
};

export default Customization;
