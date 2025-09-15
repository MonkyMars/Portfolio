import Image from "next/image";
import Link from "next/link";

const Likes = () => {
  return (
    <section
      className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6"
      id="likes"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-1">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-doto">
            Things
          </h2>
          <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 font-doto">
            I like
          </h2>
        </div>

        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LikesCard
          label="Go"
          iconSrc="go"
          note="I love coding in Go. It's currently my favorite language due to the simplicity and speed."
        />
        <LikesCard
          label="Music"
          iconSrc="spotify"
          note="I love listening to music while coding."
        />
        <LikesCard
          label="Linux"
          iconSrc="linux"
          note="I enjoy using Linux for its flexibility and control over my PC. I personally use CachyOS."
          link="https://github.com/MonkyMars/dotfiles"
        />
      </div>
    </section>
  );
};

interface LikesCardProps {
  label: string;
  iconSrc: string;
  note: string;
  link?: string;
}

const LikesCard = ({ label, iconSrc, note, link }: LikesCardProps) => {
  const invertedIcons: string[] = ["spotify"];
  const isInverted = invertedIcons.includes(iconSrc);
  const iconClass = isInverted
    ? "object-contain dark:invert"
    : "object-contain";

  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200 text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center">
        <Image
          src={`/icons/${iconSrc}.png`}
          alt={label}
          width={32}
          height={32}
          className={iconClass}
          priority
        />
      </div>

      <h3 className="text-lg font-extrabold text-gray-900 dark:text-gray-100 mb-3 font-doto">
        {label}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
        {note}
      </p>

      {link && (
        <Link
          href={link}
          target="_blank"
          className="text-primary-600 dark:text-primary-400 text-sm font-extrabold font-doto hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
        >
          View dotfiles →
        </Link>
      )}
    </div>
  );
};

export default Likes;
