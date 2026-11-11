import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

export default function Header() {
  return (
    <header className="tfi-header-outer">
      <div className="tfi-header">
        <Link href="/" className="tfi-brand">{site.name}</Link>
        <div className="tfi-header__right">
          <nav className="tfi-nav" aria-label="Primary">
            {site.nav.map((n) => (
              <a key={n.href} href={`/${n.href}`}>{n.label}</a>
            ))}
          </nav>
          <a className="btn tfi-header__cta" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
}
