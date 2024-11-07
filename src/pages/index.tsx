import { LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-900 px-4 py-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xs space-y-6">
        <Link
          href={"/user"}
          className="inline-flex justify-center items-center border border-transparent rounded-md font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative px-3 py-2 text-sm leading-4 w-full bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 disabled:hover:bg-green-600"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-primary-500 group-hover:text-primary-400"
              aria-hidden="true"
            />
          </span>
          Sign in with google
        </Link>
      </div>
    </div>
  );
}
