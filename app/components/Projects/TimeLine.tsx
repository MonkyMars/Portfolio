import React from "react";
import { TimeLineItem, TimelineProps } from "./TimelineItem";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";

const TimeLineView: React.FC<TimelineProps> = ({ project, onClose }) => {
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <>
      <div 
        className="fixed inset-0 z-50 flex items-center py-8 justify-center bg-black bg-opacity-80 text-black pointer-events-auto overflow-hidden"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <article className="bg-white dark:bg-slate-900/95 dark:text-gray-100 max-w-4xl max-h-full p-8 rounded-lg shadow-lg pointer-events-auto overflow-auto">
          <div className="flex items-center justify-between relative w-full">
            <div className="flex items-center gap-4">
              <span className="inline-block px-3 py-1 my-3 rounded-full bg-primary-100 dark:bg-slate-800/90 text-primary-600 text-sm font-medium">
                {project.date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              {!Array.isArray(project.href) ?<Link 
              href={project.href[0]}
              target="_blank"
              className="cursor-pointer flex items-center gap-1 translate hover:-translate-y-1 transition-transform duration-100 px-3 py-1 my-3 rounded-full bg-primary-100 dark:bg-slate-800/90 text-primary-600 text-sm font-medium">
                See Reposity <ArrowRight size={16} />
              </Link> : null}
            </div>
            
          <X className="p-1 my-3 rounded-full bg-primary-100 dark:bg-slate-800/95 text-primary-600 text-sm font-medium cursor-pointer" size={28} onClick={onClose}/>
          </div>
          
          <header>
            <h1 className="font-doto font-extrabold text-4xl my-3">
              {project.title} - Process
            </h1>
            <p className="text-left max-w-[80ch]">{project.description}</p>
          </header>
          <main>
            {project.details?.notes?.length && (
              <div className="mt-8">
                <h2 className="text-3xl font-doto font-extrabold mb-3">
                  Notes
                </h2>
                <ul>
                  {project.details.notes.map((note, index) => (
                    <TimeLineItem index={index} item={note} key={index} />
                  ))}
                </ul>
              </div>
            )}
          </main>
          <footer className="w-full mt-8 p-6 bg-primary-50 dark:bg-slate-800/90 rounded-lg">
            {project.details?.techStack?.length && (
              <div>
                <h2 className="text-3xl font-doto font-extrabold mb-4">
                  Tech Stack
                </h2>
                <ul className="flex flex-wrap gap-4">
                  {project.details?.techStack.sort().map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-primary-200/50 dark:bg-slate-700 p-2 rounded-lg shadow-sm"
                    >
                      <Image
                        src={`/icons/${tech.replaceAll('.', '').toLocaleLowerCase()}.png`}
                        alt={`${tech} icon`}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                      <li className="text-primary-600 font-medium list-none">
                        {tech}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </footer>
        </article>
      </div>
    </>
  );
};

export default TimeLineView;
