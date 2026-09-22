import { SyntexLogo } from './SyntexLogo';
import { company, navItems } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 bg-ink-950 text-ink-400">
      <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 lg:py-16">
        {/* Top: logo + nav */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Logo */}
          <div className="lg:col-span-4">
            <SyntexLogo variant="light" className="h-8" />
            <p className="mt-5 max-w-xs text-sm leading-[1.6] text-ink-500">
              Namibian ICT systems integrator. Security, enterprise and utility
              systems — engineered in Windhoek since 2008.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] tracking-wide2 uppercase text-ink-600">
              Navigate
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-sm text-ink-400 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] tracking-wide2 uppercase text-ink-600">
              Contact
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={`mailto:${company.contact.salesEmail}`}
                  className="text-ink-400 transition-colors hover:text-white"
                >
                  {company.contact.salesEmail}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.contact.supportEmail}`}
                  className="text-ink-400 transition-colors hover:text-white"
                >
                  {company.contact.supportEmail}
                </a>
              </li>
              <li>
                <a
                  href="tel:+26461309171"
                  className="text-ink-400 transition-colors hover:text-white"
                >
                  {company.contact.phone}
                </a>
              </li>
              <li className="text-ink-500">
                Fax {company.contact.fax}
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="lg:col-span-2">
            <p className="font-mono text-[11px] tracking-wide2 uppercase text-ink-600">
              Location
            </p>
            <p className="mt-5 text-sm text-ink-400">
              {company.location}
            </p>
            <a
              href="https://syntexnam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm text-ink-400 transition-colors hover:text-white"
            >
              syntexnam.com
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-ink-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-600">
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] tracking-wide2 uppercase text-ink-600">
            Engineered in Namibia — Synergy to Excel
          </p>
        </div>
      </div>
    </footer>
  );
}
