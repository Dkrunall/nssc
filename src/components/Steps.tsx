import { steps } from "@/content/steps";

export function Steps({ dark = false }: { dark?: boolean }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li
          key={s.title}
          className={`relative rounded-2xl p-6 ${dark ? "bg-ivory-50/5" : "bg-white shadow-soft"}`}
        >
          <span className="font-heading text-5xl font-bold text-gold-600" aria-hidden="true">
            {i + 1}
          </span>
          <h3 className="mt-2 text-lg font-extrabold">
            <span className="sr-only">Step {i + 1}: </span>
            {s.title}
          </h3>
          <p className={`mt-2 text-sm ${dark ? "text-ivory-50/80" : "text-muted"}`}>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
