import React from 'react'
import {motion } from "framer-motion"
export default function Featured() {
  return (
    <>
        <section class="bg-white ">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">explore our <br/> awesome <span class="text-blue-500">Components</span></h1>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl ">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full  ">
<svg className='h-10 w-10' viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M973.312 330.752c-7.168-94.72-22.016-188.928-41.984-282.112-1.536-6.144-5.632-8.192-10.24-8.192-2.56-0.512-5.12 0-7.68 1.536-36.864 20.992-73.728 42.496-111.616 61.44-35.328 17.92-72.704 32.256-108.032 51.2-65.024 34.304-123.392 79.872-174.592 132.608-48.128 49.152-91.648 105.984-113.664 171.52-12.288 36.864-15.36 75.264-15.872 113.664v7.68c-80.384-108.032-204.8-178.176-339.456-189.952-10.752-1.024-13.824 11.776-8.192 18.432-0.512 1.024-0.512 2.048-0.512 3.072-3.584 76.288-6.656 154.112-0.512 230.4 4.608 59.904 23.552 115.2 60.416 163.328 73.216 95.232 200.704 138.24 318.464 123.392 1.024 0 1.536-0.512 2.048-0.512 6.144 1.024 13.312-2.56 13.824-10.752 2.048-20.48-0.512-39.936-5.12-59.392 11.264 21.504 25.088 41.984 42.496 59.904 2.56 3.072 6.144 4.608 11.264 3.072 36.864-12.288 73.728-22.528 112.128-28.672 36.864-5.632 72.704-13.312 107.008-27.648 64-25.6 120.832-66.048 169.472-114.688 47.616-47.616 81.408-107.52 95.232-173.568 17.408-78.336 10.752-165.888 5.12-245.76zM140.288 539.136c65.024 43.52 116.736 102.912 166.4 162.304 48.128 57.344 109.056 125.44 107.52 204.8-112.64 12.288-233.472-28.672-301.056-122.368-36.352-50.176-49.152-107.008-51.712-167.936-2.56-67.072-1.536-134.656 1.536-202.24 132.096 15.872 253.44 92.16 324.608 204.8 0 25.6 0 51.2 1.536 76.288 2.56 36.352 7.68 72.192 18.432 107.008-20.48-37.888-49.152-72.704-75.264-103.936-54.272-65.536-110.08-130.048-181.248-178.176-11.776-8.192-23.04 11.776-10.752 19.456z m813.056-13.312c-4.096 70.144-32.256 141.824-80.384 193.536-45.568 49.152-99.328 90.624-160.768 118.784-37.376 16.896-76.8 26.624-117.248 32.768-32.768 5.12-64 12.8-95.744 22.528-9.728-60.928 8.704-121.344 31.232-177.664 11.776-29.184 23.552-56.832 29.184-88.064 1.536-8.192 2.56-15.872 4.096-23.552 75.264-28.672 146.432-91.136 230.912-79.36 14.336 2.048 20.48-19.968 6.144-22.016-87.552-12.288-155.648 43.52-231.936 74.752 2.56-10.752 5.12-22.016 9.216-32.768 37.888-111.616 126.464-195.072 215.552-267.776 11.264-9.216-4.608-25.088-15.872-15.872-92.672 75.264-181.76 162.304-221.184 277.504-5.632 16.384-9.216 33.28-12.288 50.176-2.56 3.072-3.072 7.168-2.048 10.752-2.048 10.24-3.584 19.968-5.632 30.208-6.144 31.744-20.48 60.928-32.256 91.136-20.48 53.248-34.304 108.544-28.16 165.376-40.96-51.712-57.856-117.248-62.976-182.784-2.048-28.672-2.56-57.344-2.048-85.504 0.512-1.536 0.512-2.56 0-4.096 0-8.704 0-16.896 0.512-25.6 0.512-38.4 1.024-76.8 12.288-113.664 19.456-66.048 63.488-123.392 111.104-172.032 48.128-49.152 102.912-92.16 163.328-125.44 35.84-19.456 74.24-34.304 111.104-52.736 35.328-17.408 69.12-36.864 103.424-56.32 30.72 150.016 49.664 304.64 40.448 457.728z" fill="#72AA29" /></svg></span>
                <h1 class="text-xl font-semibold text-gray-700 capitalize ">Fresh From farm</h1>

                <p class="text-gray-500 ">
                    We deliver our products directly from the farm and we ensure it reached in your hands as soon it is plucked from the plant
                </p>

                <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span class="mx-1">read more</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white ">
                <svg className='w-10 h-10' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 10H22H19.7639C20.3132 9.38625 21.1115 9 22 9C22.8885 9 23.6868 9.38625 24.2361 10H23ZM22 7C24.0503 7 25.8124 8.2341 26.584 10H27H28L29 10V12H28V17V18H27H25C24.087 18 23.2692 17.5921 22.719 16.9487C22.4842 16.9825 22.2442 17 22 17C19.2386 17 17 14.7614 17 12C17 9.23858 19.2386 7 22 7ZM24 12H26V16H25C24.4477 16 24 15.5523 24 15V12ZM5 22C5 19.7909 6.79086 18 9 18H8C7.44772 18 7 17.5523 7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H11C12.0465 18 12.9991 18.4018 13.7119 19.0596C14.2622 18.4114 15.0831 18 16 18H18H22C24.2091 18 26 19.7909 26 22V28.5585L28.7433 29.4729L34.6046 27.0451L34.9659 27.9173L36.4801 26.3988L40.3659 22.5019L41.7821 23.9141L39.5976 26.1049H42.6882V28.1049H37.1882H35.0436L35.3699 28.8928L31.3755 30.5474C31.9217 31.0653 32.1511 31.8712 31.8974 32.6325C31.5691 33.6172 30.549 34.1767 29.5576 33.9506C28.2987 38.0332 24.4958 41 20 41C14.8147 41 10.5511 37.0533 10.0494 32H9C6.79086 32 5 30.2091 5 28V22ZM25.9295 32.7514L27.6563 33.327C26.6597 36.6103 23.6089 39 20 39C15.8729 39 12.4757 35.8748 12.0459 31.8619C13.7478 31.4021 15 29.8473 15 28V24V22V21C15 20.4477 15.4477 20 16 20V32C16 34.2091 17.7909 36 20 36H22C23.9523 36 25.5779 34.6013 25.9295 32.7514ZM18 20V32C18 33.1046 18.8954 34 20 34H22C23.0686 34 23.9414 33.1619 23.9972 32.1072L20.3675 30.8974C19.5509 30.6251 19 29.8609 19 29V23C19 21.8954 19.8954 21 21 21C22.1046 21 23 21.8954 23 23V27.5585L24 27.8918V22C24 20.8954 23.1046 20 22 20H18ZM10 22.5858L11.2929 21.2929L12.7071 22.7071L11.4142 24L12.7071 25.2929L11.2929 26.7071L10 25.4142L8.70711 26.7071L7.29289 25.2929L8.58579 24L7.29289 22.7071L8.70711 21.2929L10 22.5858Z" fill="#333333"></path> </g></svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize ">Pesticide Free</h1>

                <p class="text-gray-500 ">
                    We make our environment pest free such that avoiding the use of pesticide in the plants.
                </p>

                <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span class="mx-1">read more</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl ">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
                <svg className=' h-10 w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 12V22H4V18.6127V12" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 22H22.5V4C22.5 2.89543 21.6046 2 20.5 2H19C17.8954 2 17 2.89543 17 4V9" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13.9002 21.6125L7.10019 16.0875" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 22V16H7V22" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 7H22.5" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 16H22.5" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 19H22.5" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 13L10.5 7L19 13" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 11.9375L10.5 11L12 11.9375" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 6L3.5 7.0625L5 6" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 2L7.5 3.0625L9 2" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize ">Well Maintained Farms</h1>

                <p class="text-gray-500">
                Our aeroponic farm is superior in terms of excellent aeration, water use efficiency,seasonal independence and disease free plant propagation etc.                </p>

                <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span class="mx-1">read more</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    </div>
</section>
      
    </>
  )
}
