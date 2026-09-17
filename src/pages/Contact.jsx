import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field) {
    return (event) =>
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // No backend in this project, this simply confirms the form works.
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-panel px-4 py-1.5 text-xs font-medium text-fog">
        <Mail size={13} />
        Get in touch
      </span>

      <h1 className="mt-5 font-display text-4xl tracking-wide text-white sm:text-5xl">
        Questions, feedback, or bug reports?
      </h1>
      <p className="mt-4 max-w-xl text-fog">
        Send a message and we'll get back to you. This demo form doesn't
        connect to a backend, but it shows how the flow would work.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-[1fr_1.3fr]">
        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-panel text-fog">
              <Mail size={18} />
            </span>
            <div>
              <p className="text-sm font-medium text-white">Email</p>
              <p className="text-sm text-fog">hello@movieexplorer.app</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-panel text-fog">
              <MapPin size={18} />
            </span>
            <div>
              <p className="text-sm font-medium text-white">Based</p>
              <p className="text-sm text-fog">Remote-first, everywhere</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-hairline bg-panel p-6"
        >
          {submitted ? (
            <p className="text-sm font-medium text-white">
              Thanks, your message has been noted. We'll be in touch soon.
            </p>
          ) : (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-fog"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                  className="w-full rounded-lg border border-hairline bg-panel-raised px-3.5 py-2.5 text-sm text-white outline-none focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-fog"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full rounded-lg border border-hairline bg-panel-raised px-3.5 py-2.5 text-sm text-white outline-none focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-fog"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  className="w-full resize-none rounded-lg border border-hairline bg-panel-raised px-3.5 py-2.5 text-sm text-white outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
              >
                <Send size={15} />
                Send message
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
