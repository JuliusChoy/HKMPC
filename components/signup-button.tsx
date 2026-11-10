import Link from "next/link";
import { event } from "@/lib/site";

export function SignupButton({ className = "" }: { className?: string }) {
  return (
    <Link
      id="signup"
      href={event.signupUrl}
      className={`inline-flex min-h-12 items-center justify-center border-2 border-green bg-green px-7 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-green-deep hover:border-green-deep ${className}`}
    >
      Signup
    </Link>
  );
}
