import { SyntexLogo } from './SyntexLogo';
import { company, navItems } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 bg-ink-950 text-ink-400">
      <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-10 lg:py-20">
        {/* Top: logo + nav */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Logo */}
          <div className="lg:col-span-4">
            <SyntexLogo variant="light" className="h-8" />
            <p className="mt-6 max-w-xs text-sm leading-[1.6] text-ink-500">
              Namibian ICT systems integrator. Security, enterprise and utility
              systems — engineered in Windhoek since 2008.
            </p>
            <p className="mt-4 font-display text-sm text-ink-300">
              Synergy to Excel
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs tracking-wide2 uppercase text-ink-600">
              Navigate
            </p>
            <ul className="mt-6 flex flex-col gap-3">
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
            <p className="font-mono text-xs tracking-wide2 uppercase text-ink-600">
              Contact
            </p>
            <ul className="mt-6 flex flex-col gap-4 text-sm">
              <li>
                <p className="text-ink-600">Sales</p>
                <a
                  href={`mailto:${company.contact.salesEmail}`}
                  className="text-ink-400 transition-colors hover:text-white"
                >
                  {company.contact.salesEmail}
                </a>
              </li>
              <li>
                <p className="text-ink-600">Support</p>
                <a
                  href={`mailto:${company.contact.supportEmail}`}
                  className="text-ink-400 transition-colors hover:text-white"
                >
                  {company.contact.supportEmail}
                </a>
              </li>
              <li>
                <p className="text-ink-600">Telephone</p>
                <a
                  href="tel:+26461309171"
                  className="text-ink-400 transition-colors hover:text-white"
                >
                  {company.contact.phone}
                </a>
              </li>
              <li>
                <p className="text-ink-600">Facsimile</p>
                <span className="text-ink-400">{company.contact.fax}</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="lg:col-span-2">
            <p className="font-mono text-xs tracking-wide2 uppercase text-ink-600">
              Location
            </p>
            <p className="mt-6 text-sm text-ink-400">
              {company.location}
            </p>
            <a
              href="https://syntexnam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm text-ink-400 transition-colors hover:text-white"
            >
              syntexnam.com
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-ink-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-600">
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-xs tracking-wide2 uppercase text-ink-600">
            Engineered in Namibia
          </p>
        </div>
      </div>
    </footer>
  );
}
