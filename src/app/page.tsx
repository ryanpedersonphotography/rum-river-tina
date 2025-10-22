import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Welcome to Rum River TinaCMS
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A modern content management system built with Next.js and TinaCMS
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                Content Management
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Edit your content with TinaCMS's visual editor. Navigate to{" "}
                <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                  /admin
                </code>{" "}
                to get started.
              </p>
              <Link
                href="/admin"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Open Admin
              </Link>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                Git-Based Workflow
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                All content changes are committed to your Git repository,
                providing version control and collaboration features.
              </p>
              <Link
                href="/posts"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                View Posts
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-8">
              Quick Links
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-black dark:text-white px-4 py-2 rounded-lg transition-colors"
              >
                About
              </Link>
              <a
                href="https://tina.io/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-black dark:text-white px-4 py-2 rounded-lg transition-colors"
              >
                TinaCMS Docs
              </a>
              <a
                href="https://github.com/ryanpedersonphotography/rum-river-tina"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-black dark:text-white px-4 py-2 rounded-lg transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
