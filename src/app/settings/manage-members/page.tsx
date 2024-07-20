"use client";

import { CustomToast } from "~/components/common/customToast/toast";

const MockPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
      <div className="relative py-3 sm:mx-auto sm:max-w-xl">
        <div className="to-light-blue-500 absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
        <div className="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="mx-auto max-w-md">
            <div className="divide-y divide-gray-200">
              <div className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Welcome to Our Service
                </h2>
                <p>Click the button below to see an important message.</p>
                <div className="pt-6">
                  <CustomToast
                    message="Scheduled: Catch up"
                    description="1 Invitation sent succesfully"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockPage;
