"use client";
import Link from "next/link";
import PawIcon from "./Icon";

export default function Footer() {
  return (
    <footer>
      <div className="scrollable-container">
        <Link href="/" className="flex gap-x-2 items-center">
          <PawIcon />
          <h3 className="text-white">
            woof<span className="font-normal">pix</span>
          </h3>
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <Link href="/contact">Contact</Link>
          </ul>
        </nav>

        <p className="text-white">&copy; 2024 WeAreDevelopers</p>
      </div>
    </footer>
  );
}
