import Image from "next/image";
import { Mail, MapPinHouse } from "lucide-react";
import Link from "next/link";

const Aside = () => (
  <aside
    className="md:col-span-4 lg:col-span-3 shadow-lg h-full"
    id="aside" 
  >
    <div className="bg-white dark:bg-slate-900/95 dark:text-gray-100 rounded-2xl shadow-lg p-8 sm:p-4 sm:py-8 border border-gray-100 dark:border-gray-800">
      <div className="text-center mb-8">
        <h1 className="text-2xl text-gray-800 dark:text-gray-100 mb-3 font-doto font-extrabold">
          Levi Noppers
        </h1>
        <p className="text-primary-600 font-medium text-lg">
          Fullstack Web Developer
        </p>
      </div>

      <Link
        href="https://www.github.com/monkymars"
        prefetch
        target="_blank"
        className="font-doto font-extrabold w-full flex items-center justify-center gap-3 
                bg-gradient-to-r from-gray-700 to-gray-800 text-white py-3 px-4 rounded-xl transform
                transition-all duration-300 shadow-md hover:shadow-lg text-lg translate hover:-translate-y-[2px] dark:from-slate-900 dark:to-gray-800"
      >
        <span className="flex items-center gap-3">
          GitHub
          <Image
            src="/icons/github.png"
            alt="github"
            width={28}
            height={28}
            className="invert opacity-90 hover:opacity-100"
          />
        </span>
      </Link>

      <div className="space-y-6 mt-8">
        <Link
          className="p-5 rounded-lg transition-all cursor-pointer"
          href="mailto:levi.laptop@hotmail.com"
          prefetch
          target="_blank"
        >
          <div className="flex items-center gap-4 text-gray-700 dark:text-gray-100 mb-2">
            <Mail className="text-primary-500" size={24} />
            <span className="text-lg font-doto font-extrabold">Email</span>
          </div>
          <p
            className="text-base text-gray-600 pl-2 text-wrap break-words dark:text-gray-300/90"
            title="Email"
          >
            Levi.laptop@hotmail.com
          </p>
        </Link>

        <Link
          className="p-5 rounded-lg transition-all cursor-pointer"
          href="https://maps.app.goo.gl/DaZ11s9p4dsVNVjn7"
          prefetch
          target="_blank"
        >
          <div className="flex items-center gap-4 text-gray-700 mb-2 dark:text-gray-100">
            <MapPinHouse className="text-primary-500" size={24} />
            <span className="text-lg font-doto font-extrabold">Location</span>
          </div>
          <p className="text-base text-gray-600 pl-2 w-full dark:text-gray-300/90" title="Location">
            The Hague, The Netherlands
          </p>
        </Link>
      </div>
      <div></div>
    </div>
  </aside>
);

export default Aside;
