import Icon from "@/components/Icon";
import { getSite } from "@/lib/content";

export default function ClientMarquee() {
  const site = getSite();

  return (
    <section aria-label="Clients we've worked with" className="bg-navy-900 border-y border-navy-800">
      <div className="marquee-viewport overflow-hidden py-4">
        <div className="marquee-track" aria-hidden="false">
          {[false, true].map((isClone) => (
            <ul
              key={isClone ? "clone" : "original"}
              aria-hidden={isClone}
              className="flex items-center shrink-0"
            >
              {site.clients.map((client) => (
                <li
                  key={client}
                  className="flex items-center gap-3 px-6 sm:px-10 font-display text-lg sm:text-xl font-semibold uppercase tracking-wide text-navy-200 whitespace-nowrap"
                >
                  <Icon name="zap" className="h-4 w-4 text-lime-400" />
                  {client}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
