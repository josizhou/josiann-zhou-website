import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-gradient-to-tl from-indigo-500 to-80%">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex flex-row-reverse">
        <div className="fixed bottom-0 end-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://drive.google.com/file/d/18RLuBh6h-9dTJvxrI_h11AsWqAck_OGL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-bold fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Resume
            </p>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center" >
        <div className="rounded-full overflow-hidden m-6">
          <Image 
              className=""
              src="/photoOfJosie.jpg"
              alt="Photo of Josiann Zhou"
              width={180}
              height={37}
          />
        </div>
        <div className="flex-col text-lg">
          <div className="text-4xl font-bold py-3">
            <p className="py-1">Hi, my name is Josie.</p>
            <p className="py-1">Welcome to my website!</p>
          </div>
          <div className="w-auto">
            <p className="py-1">I'm a recent UBC grad who's interested in web dev and product management.</p>
            <p className="py-1">Feel free to poke around and get to know me a bit better :)</p>
          </div>
        </div> 
      </div>

      <div className="flex-col">
        <div className="flex place-items-center p-5 m-10 flex-col border rounded-lg border-gray-300 bg-indigo-600 bg-opacity-25">
          <div className="font-bold text-2xl p-2 w-full"> Work Experience </div>
          <div>
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
              <Link
                href="./invokeMedia"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                    Invoke Media{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    I worked on a live event streaming application called Incrowd.
                  </p>
              </Link>

              <a
                href="./kinaxis"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Kinaxis Inc.{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  I learned a lot about building components and using new technologies.
                </p>
              </a>

              <a
                href="./thriveHealth"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Thrive Health{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Working on a vaccine declaration system in the height of COVID-19.
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex place-items-center p-5 m-10 flex-col border rounded-lg border-gray-300 bg-indigo-600 bg-opacity-30">
          <div className="font-bold text-2xl p-2 w-full">Projects</div>
          <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
            <a
                href="./DAG"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Digital Art Glove{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Built a canvas UI to pair with computer vision and a sensor glove.
                </p>
              </a>
              <a
                href="./overlap"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Overlap{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  An application to explore and visualize your music taste and compare it with that of your friends.
                </p>
              </a>
            </div>
        </div>
        <div className="flex place-items-center p-5 m-10 flex-col border rounded-lg border-gray-300 bg-indigo-600 bg-opacity-40">
          <div className="font-bold text-2xl p-2 w-full">For Fun</div>
          <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
            <a
                href="./canvas"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Canvas{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  A canvas for you to play around with.
                </p>
            </a>
            <a
                href="./funFacts"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Fun Facts{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Some more fun facts about me!
                </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
