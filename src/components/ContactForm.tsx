"use client";

import { useState } from "react";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!FORM_ENDPOINT) {
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl bg-navy-50 border border-navy-100 p-8 text-center"
      >
        <h3 className="font-display text-xl font-semibold text-navy-950">
          Thanks — your message is on its way.
        </h3>
        <p className="mt-2 text-navy-900/70">
          We&apos;ll get back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-1.5 w-full rounded-md border border-navy-200 px-4 py-2.5 text-navy-950 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-navy-900">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="mt-1.5 w-full rounded-md border border-navy-200 px-4 py-2.5 text-navy-950 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1.5 w-full rounded-md border border-navy-200 px-4 py-2.5 text-navy-950 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          />
        </div>
        <div>
          <label htmlFor="tel" className="block text-sm font-semibold text-navy-900">
            Tel No
          </label>
          <input
            id="tel"
            name="tel"
            type="tel"
            autoComplete="tel"
            className="mt-1.5 w-full rounded-md border border-navy-200 px-4 py-2.5 text-navy-950 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-md border border-navy-200 px-4 py-2.5 text-navy-950 focus:border-navy-500 focus:outline-none focus:ring-1 focus:ring-navy-500"
        />
      </div>

      <div role="alert" aria-live="assertive">
        {status === "error" && (
          <p className="text-sm font-medium text-red-600">
            Sorry, the message couldn&apos;t be sent right now. Please email{" "}
            <a href="mailto:info@totalelectricsolutions.co.uk" className="underline">
              info@totalelectricsolutions.co.uk
            </a>{" "}
            directly instead.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-md bg-blue-500 px-7 py-3.5 text-sm font-bold text-white hover:bg-blue-600 transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Us A Message"}
      </button>
    </form>
  );
}
