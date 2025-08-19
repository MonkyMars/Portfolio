import Image from "next/image";
import { Mail, MapPinHouse } from "lucide-react";
import Link from "next/link";

const Aside = () => (
  <aside className="md:col-span-4 lg:col-span-3 shadow-lg h-full" id="aside">
    <div className="bg-white dark:bg-slate-900/95 dark:text-gray-100 rounded-2xl shadow-lg p-4 sm:p-3 sm:py-4 border border-gray-100 dark:border-gray-800 h-full flex flex-col max-w-sm mx-auto">
      {/* Header Section */}
      <div className="text-center mb-4">
        <h1 className="text-xl text-gray-800 dark:text-gray-100 mb-1 font-doto font-extrabold">
          Levi Noppers
        </h1>
        <p className="text-primary-600 font-medium text-base">
          Fullstack Web Developer
        </p>
      </div>

      {/* GitHub Button */}
      <Link
        href="https://www.github.com/monkymars"
        prefetch
        target="_blank"
        className="font-doto font-extrabold w-full flex items-center justify-center gap-2
                bg-gradient-to-r from-gray-700 to-gray-800 text-white py-2.5 px-3 rounded-xl transform
                transition-all duration-300 shadow-md hover:shadow-lg text-base hover:-translate-y-[2px]
                dark:from-slate-900 dark:to-gray-800 mb-4"
      >
        <span className="flex items-center gap-2">
          GitHub
          <Image
            src="/icons/github.png"
            alt="github"
            width={20}
            height={20}
            className="invert opacity-90 hover:opacity-100"
          />
        </span>
      </Link>

      {/* Contact Information */}
      <div className="space-y-4 flex-1">
        <Link
          className="block p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer"
          href="mailto:levi.laptop@hotmail.com"
          prefetch
          target="_blank"
        >
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-100 mb-1">
            <Mail className="text-primary-500" size={20} />
            <span className="text-base font-doto font-extrabold">Email</span>
          </div>
          <p
            className="text-sm text-gray-600 pl-8 text-wrap break-words dark:text-gray-300/90"
            title="Email"
          >
            Levi.laptop@hotmail.com
          </p>
        </Link>

        <Link
          className="block p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer"
          href="https://www.google.com/maps/place/Nederland"
          prefetch
          target="_blank"
        >
          <div className="flex items-center gap-3 text-gray-700 mb-1 dark:text-gray-100">
            <MapPinHouse className="text-primary-500" size={20} />
            <span className="text-base font-doto font-extrabold">Location</span>
          </div>
          <p
            className="text-sm text-gray-600 pl-8 w-full dark:text-gray-300/90"
            title="Location"
          >
            The Netherlands, Europe
          </p>
        </Link>
      </div>
    </div>
  </aside>
);

export default Aside;
