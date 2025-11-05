import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { setSelectedInnerOptions } from "../../features/customization/customizationSlice";
import PreviewWindow from "./PreviewWindow";

const SubTab = ({
  activeSubTab,
  activeTab,
  subTabsObject,
  selectedOption,
  handleRadioChange,
  previewImage,
  selectedSize,
}) => {
  if (!activeSubTab) return null;

  const dispatch = useDispatch();
  const { selectedInnerOptions } = useSelector((state) => state.customization);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(selectedInnerOptions[activeTab] || {}); // inner radios per card
  const prevActiveTab = useRef(null);

  // set selected to loaded selectedInnerOptions for the current tab
  useEffect(() => {
    if (activeTab) {
      setSelected(selectedInnerOptions[activeTab] || {});
    }
  }, [activeTab, selectedInnerOptions]);

  // Persist selection across tab changes
  // Removed reset logic to allow selections to persist
  // selectedOption is now loaded from Redux per tab

  // ensure selectedOption is array
  const selectedArray = Array.isArray(selectedOption)
    ? selectedOption
    : [selectedOption].filter(Boolean);

  const selectedItem =
    subTabsObject[activeSubTab]?.find(
      (item) => item.text === selectedArray[0]
    ) || {};

  // Build selectedOptions with portion and price
  const selectedOptionsWithDetails = selectedArray.map((optionText) => {
    const item = subTabsObject[activeSubTab]?.find((i) => i.text === optionText);
    const portion = selected[optionText] || "full"; // default to full if not selected
    // For simplicity, assume price is for full, and portions don't change price; adjust if needed
    return {
      text: optionText,
      portion,
      price: item?.price || 0,
    };
  });

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  const handleAddToCart = () => {
    // Assuming product is passed or available; for now, create a mock product
    const product = {
      name: selectedItem.text || activeSubTab,
      image: previewImage,
      price: selectedItem.price || 0,
    };
    dispatch(addToCart({
      product,
      selectedOptions: selectedOptionsWithDetails,
      quantity,
      selectedSize,
    }));
    alert(`${quantity} × ${product.name} added to cart!`);
  };

  // multiple outer selection allowed
  const handleMultiSelect = (optionText, index) => {
    const isAlreadySelected = selectedArray.includes(optionText);
    let updated;

    if (isAlreadySelected) {
      // unselect card
      updated = selectedArray.filter((item) => item !== optionText);
      const newSelected = { ...selected };
      delete newSelected[optionText];
      setSelected(newSelected);
      const updatedInnerOptions = { ...selectedInnerOptions, [activeTab]: newSelected };
      dispatch(setSelectedInnerOptions(updatedInnerOptions));
    } else {
      // select card → set default inner radio “full”
      updated = [...selectedArray, optionText];
      const newSelected = {
        ...selected,
        [optionText]: "full", // default radio
      };
      setSelected(newSelected);
      const updatedInnerOptions = { ...selectedInnerOptions, [activeTab]: newSelected };
      dispatch(setSelectedInnerOptions(updatedInnerOptions));
    }
    handleRadioChange(updated);
  };

  const options = [
    { id: "full", type: "full" },
    { id: "half", type: "half" },
    { id: "half-red", type: "half-red" },
    { id: "quarter", type: "quarter" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 text-gray-800 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      {/* ---- Left Section ---- */}
      <div className="flex flex-col items-start w-full md:w-1/2">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Choose {activeSubTab}
        </h3>

        {/* ---- TOPPINGS Section ---- */}
        {activeTab === "TOPPINGS" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {subTabsObject[activeSubTab]?.map((item, index) => {
              const isSelected = selectedArray.includes(item.text);

              return (
                <div
                  key={index}
                  onClick={() => handleMultiSelect(item.text, index)}
                  className={`relative flex flex-col justify-center items-center text-center border rounded-xl p-2 cursor-pointer transition-all select-none
                    ${
                      isSelected
                        ? "border-orange-500 bg-orange-50 shadow-md scale-105"
                        : "border-gray-200 hover:border-orange-400 hover:bg-orange-50"
                    }`}
                >
                  {/* ---- Item Text ---- */}
                  <span className="font-medium text-gray-800 text-sm">
                    {item.text}
                  </span>
                  <span className="text-xs font-semibold text-orange-600 mt-1">
                    ${item.price}
                  </span>

                  {/* ---- Inner Radios ---- */}
                  <div
                    className="mt-3 flex gap-2"
                    onClick={(e) => e.stopPropagation()} // stop outer select
                  >
                    {options.map((option) => {
                      const isInnerSelected = selected[item.text] === option.id;
                      const isDisabled = !isSelected;

                      return (
                        <label
                          key={option.id}
                          className={`relative cursor-pointer ${
                            isDisabled ? "opacity-40 pointer-events-none" : ""
                          }`}
                        >
                          <input
                            type="radio"
                            name={`segment-${item.text}`}
                            value={option.id}
                            checked={isInnerSelected}
                            disabled={isDisabled}
                            onChange={() => {
                              const newSelected = {
                                ...selected,
                                [item.text]: option.id,
                              };
                              setSelected(newSelected);
                              const updatedInnerOptions = { ...selectedInnerOptions, [activeTab]: newSelected };
                              dispatch(setSelectedInnerOptions(updatedInnerOptions));
                            }}
                            className="hidden"
                          />

                          <div
                            className={`w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center relative overflow-hidden
                              ${
                                isInnerSelected
                                  ? "border-orange-600 scale-110"
                                  : "border-gray-300"
                              }`}
                          >
                            {/* Visuals */}
                            {option.type === "full" && (
                              <div
                                className={`absolute inset-0 rounded-full ${
                                  isInnerSelected
                                    ? "bg-orange-600"
                                    : "bg-gray-400"
                                }`}
                              />
                            )}
                            {option.type === "half" && (
                              <>
                                <div
                                  className={`absolute inset-y-0 left-0 w-1/2 rounded-l-full ${
                                    isInnerSelected
                                      ? "bg-orange-600"
                                      : "bg-gray-400"
                                  }`}
                                />
                                <div className="absolute inset-y-0 right-0 w-1/2 bg-white rounded-r-full" />
                              </>
                            )}
                            {option.type === "half-red" && (
                              <>
                                <div className="absolute inset-y-0 left-0 w-1/2 bg-white rounded-l-full" />
                                <div
                                  className={`absolute inset-y-0 right-0 w-1/2 rounded-r-full ${
                                    isInnerSelected
                                      ? "bg-orange-600"
                                      : "bg-gray-400"
                                  }`}
                                />
                              </>
                            )}
                            {option.type === "quarter" && (
                              <div className="absolute inset-0 rounded-full bg-gray-200">
                                <div
                                  className={`absolute right-0 top-0 w-1/2 h-1/2 rounded-tr-full ${
                                    isInnerSelected
                                      ? "bg-orange-600"
                                      : "bg-gray-500"
                                  }`}
                                />
                              </div>
                            )}
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ---- Default Grid ---- */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {subTabsObject[activeSubTab]?.map((item, index) => (
              <div
                key={index}
                onClick={() => handleRadioChange(item.text)}
                className={`flex flex-col justify-center items-center text-center border rounded-xl p-4 cursor-pointer transition-all select-none ${
                  selectedOption === item.text
                    ? "border-orange-500 bg-orange-50 shadow-md scale-105"
                    : "border-gray-200 hover:border-orange-400 hover:bg-orange-50"
                }`}
              >
                <span className="font-medium text-gray-800 text-sm">
                  {item.text}
                </span>
                <span className="text-xs font-semibold text-orange-600 mt-1">
                  ${item.price}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ---- Right Section ---- */}
      <div className="flex flex-col items-center relative">
        <PreviewWindow
          image={previewImage}
          label={selectedItem.text || activeSubTab}
          price={selectedItem.price || 0}
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
          onAddToCart={handleAddToCart}
          selectedSize={selectedSize}
          selectedOptions={selectedOptionsWithDetails}
        />
      </div>
    </div>
  );
};

export default SubTab;
