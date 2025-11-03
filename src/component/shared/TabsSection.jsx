import React from "react";
import SubTab from "./SubTab";

const TabsSection = ({
  tabs,
  activeTab,
  setActiveTab,
  activeSubTab,
  setActiveSubTab,
  subTabsObject,
  selectedOption,
  handleRadioChange,
  previewImage,
  selectedSize,
}) => {
  return (
    <div className="border-t pt-10 mt-12">
      {/* ---------- Main Tabs ---------- */}
      <div className="flex flex-wrap gap-3 mb-6 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setActiveSubTab(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ---------- Active Tab Content ---------- */}
      <div className="p-4 rounded-2xl">
        {subTabsObject ? (
          <>
            {/* ---------- Sub Tabs ---------- */}
            <div className="flex justify-center gap-8 border-t pt-4 flex-wrap">
              {Object.keys(subTabsObject).map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubTab(sub)}
                  className={`relative font-medium text-sm pb-1 transition-all ${
                    activeSubTab === sub
                      ? "text-orange-600 border-b-2 border-orange-600"
                      : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* ---------- SubTab Component ---------- */}
            {activeSubTab && (
                              <SubTab
                         activeTab={activeTab}
                activeSubTab={activeSubTab}
                subTabsObject={subTabsObject}
                selectedOption={selectedOption}
                handleRadioChange={handleRadioChange}
                previewImage={previewImage}
                selectedSize={selectedSize}
              />
            )}
          </>
              ) 
                 : (
          <div className="flex justify-center items-center gap-16 text-gray-700">
            <div className="text-lg">Content for {activeTab}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsSection;
