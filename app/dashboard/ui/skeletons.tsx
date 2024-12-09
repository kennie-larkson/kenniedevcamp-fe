export function CourseSkeleton() {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="flex w-full">
        <div className="flex w-full space-x-3 p-4 bg-gray-200">
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
        </div>
      </div>

      <div className="flex flex-col p-6 w-full min-h-screen bg-slate-100">
        {/* Title Skeleton */}
        <div className="flex justify-center items-center">
          <div className="flex text-center">
            <div className="h-8 w-48 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Course Details Skeleton */}
        <div className="flex flex-col mt-6 p-3 border justify-center rounded-md">
          <div className="space-y-4 p-4">
            {/* Description */}
            <div className="flex items-center space-x-2">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>

            {/* Duration */}
            <div className="flex items-center space-x-2">
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
            </div>

            {/* Level */}
            <div className="flex items-center space-x-2">
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>

            {/* Prerequisites */}
            <div className="flex items-center space-x-2">
              <div className="h-4 w-28 bg-gray-200 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Enroll Button Skeleton */}
          <div className="flex p-2 ml-4 w-1/4 h-10 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
