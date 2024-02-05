import { PlusIcon } from "@heroicons/react/solid";
import ShopSVG from "../../assets/ShopIcon"
import { useState } from "react";
import CreateStoreModal from "./CreateStoreModal";

function EmptyStoresView() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (toggle) => {
    setIsModalOpen(toggle);
  };
  return (
    <>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-4 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex justify-center items-center flex-col">
            <div className="text-center">
                <div className="flex items-center justify-center">
                <ShopSVG/>
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No stores
                </h3>
                <p className="mt-1 text-sm text-gray-500">Get started by creating a store</p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <PlusIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    New Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {isModalOpen ? (
        <CreateStoreModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      ) : (
        <></>
      )}
    </>
  );
}

export default EmptyStoresView;
