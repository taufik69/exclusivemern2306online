import React from "react";

const ProductDetailsSkeletion = () => {
  return (
    <div>
      <div class="min-h-screen flex justify-center items-center bg-gray-100">
        <div class="w-11/12 max-w-7xl bg-white rounded-lg shadow p-5 animate-pulse">
          {/* <!-- Breadcrumb --> */}
          <div class="flex items-center space-x-2 mb-6">
            <div class="w-16 h-6 bg-gray-300 rounded"></div>
            <div class="w-6 h-6 bg-gray-300 rounded"></div>
            <div class="w-6 h-6 bg-gray-300 rounded"></div>
          </div>

          {/* <!-- Main Content --> */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Left Section --> */}
            <div class="space-y-4">
              <div class="aspect-square bg-gray-300 rounded"></div>
              <div class="flex space-x-2">
                <div class="w-20 h-20 bg-gray-300 rounded"></div>
                <div class="w-20 h-20 bg-gray-300 rounded"></div>
                <div class="w-20 h-20 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* <!-- Right Section --> */}
            <div class="space-y-4">
              <div class="w-3/4 h-6 bg-gray-300 rounded"></div>
              <div class="w-1/2 h-6 bg-gray-300 rounded"></div>
              <div class="w-full h-24 bg-gray-300 rounded"></div>

              {/* <!-- Colors --> */}
              <div class="space-y-2">
                <div class="w-1/4 h-6 bg-gray-300 rounded"></div>
                <div class="flex space-x-2">
                  <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* <!-- Sizes --> */}
              <div class="space-y-2">
                <div class="w-1/4 h-6 bg-gray-300 rounded"></div>
                <div class="flex space-x-2">
                  <div class="w-10 h-10 bg-gray-300 rounded"></div>
                  <div class="w-10 h-10 bg-gray-300 rounded"></div>
                  <div class="w-10 h-10 bg-gray-300 rounded"></div>
                  <div class="w-10 h-10 bg-gray-300 rounded"></div>
                </div>
              </div>

              {/* <!-- Actions --> */}
              <div class="space-y-2">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-gray-300 rounded"></div>
                  <div class="w-12 h-12 bg-gray-300 rounded"></div>
                  <div class="w-32 h-12 bg-gray-300 rounded"></div>
                </div>
                <div class="w-full h-6 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeletion;
