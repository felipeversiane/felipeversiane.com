import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./config";

type Locale = (typeof locales)[number];

const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation({ locales });

export { Link, locales, redirect, usePathname, useRouter, type Locale };