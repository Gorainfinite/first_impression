import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="tfi-footer bg-ink">
      <div className="wrap">
        <div className="tfi-grid-3">
          <div>
            <p className="tfi-footer__brand">{site.name}</p>
            <p>{site.description}</p>
          </div>
          <div>
            <p className="tfi-footer__heading">Explore</p>
            <ul>
              {site.nav.map((n) => (
                <li key={n.href}><a href={`/${n.href}`}>{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="tfi-footer__heading">Talk to us</p>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
          </div>
        </div>
        <p className="tfi-footer__bottom">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
