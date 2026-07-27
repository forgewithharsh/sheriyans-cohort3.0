import {
  ListTodo,
  ListChecks,
  MoonStar,
  Zap,
  Compass,
  Code2,
  Link2,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  const features = [
    {
      icon: ListChecks,
      title: "Task Management",
      description:
        "Add, complete, and remove tasks instantly with a clean, focused list.",
    },
    {
      icon: MoonStar,
      title: "Adaptive Interface",
      description:
        "Switch between light and dark mode, saved automatically for next time.",
    },
    {
      icon: Zap,
      title: "Redux State Engine",
      description:
        "Task state managed centrally with Redux Toolkit for predictable updates.",
    },
    {
      icon: Compass,
      title: "Client-Side Routing",
      description:
        "Move between Inbox and About instantly with React Router, no reloads.",
    },
  ];

  const profiles = [
    {
      label: "GitHub",
      title: "GitHub Profile",
      description: "Source code & active engineering projects",
      href: "https://github.com/forgewithharsh/sheriyans-cohort3.0",
      icon: Code2,
    },
    {
      label: "LinkedIn",
      title: "LinkedIn Network",
      description: "Professional background & career history",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7487397484839751680/",
      icon: Link2,
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-orange-500 flex items-center justify-center text-white">
          <ListTodo size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            About TodoFlow
          </h1>
          <p className="text-sm font-semibold tracking-wide text-gray-400 dark:text-gray-500 uppercase">
            Personal Task Manager
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-orange-100 dark:border-gray-800 rounded-xl p-6 flex flex-col gap-3">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
          What I Built
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300">
          TodoFlow is a task management app built to practice Redux Toolkit. It
          uses a single slice to add, complete, and remove tasks, React Router
          for navigating between pages, and a light/dark theme that persists
          across visits.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-bold tracking-wide text-gray-400 dark:text-gray-500 uppercase">
          System Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-gray-900 border border-orange-100 dark:border-gray-800 rounded-xl p-5 flex gap-4"
            >
              <div className="h-12 w-12 shrink-0 rounded-lg bg-orange-50 dark:bg-gray-800 flex items-center justify-center text-orange-500">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-800 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-bold tracking-wide text-gray-400 dark:text-gray-500 uppercase">
          Developer Profiles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profiles.map((profile) => (
            <div
              key={profile.label}
              className="bg-white dark:bg-gray-900 border border-orange-100 dark:border-gray-800 rounded-xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-lg bg-orange-50 dark:bg-gray-800 flex items-center justify-center text-orange-500">
                  <profile.icon size={22} />
                </div>
                <span className="text-xs font-semibold bg-orange-50 dark:bg-gray-800 text-orange-500 px-2 py-1 rounded-full">
                  {profile.label}
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-800 dark:text-gray-100">
                  {profile.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {profile.description}
                </p>
              </div>

              <a
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-sm font-bold text-gray-800 dark:text-gray-100 hover:text-orange-500"
              >
                Access Link
                <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-orange-100 dark:border-gray-800 rounded-xl p-4 text-center text-sm text-gray-500 dark:text-gray-400">
        Built with{" "}
        <span className="font-bold text-gray-700 dark:text-gray-200">
          React
        </span>
        ,{" "}
        <span className="font-bold text-gray-700 dark:text-gray-200">
          Redux Toolkit
        </span>
        , and{" "}
        <span className="font-bold text-gray-700 dark:text-gray-200">
          Tailwind CSS
        </span>
        .
      </div>
    </div>
  );
}
