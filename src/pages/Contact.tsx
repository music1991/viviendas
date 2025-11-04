import React, { useEffect, useState } from "react";
import {
  Mail, Phone, ArrowUpRight,
  Calendar, DollarSign, Briefcase, Building2
} from "lucide-react";
import { useLanguage } from "../context/Language";
import { mailTo } from "../components/Mail";

type FormState = {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
  website?: string;
};

type ApiResp = { ok: boolean; id?: string | null; error?: string };

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
  website: "",
};

const API_URL = import.meta.env.VITE_CONTACT_API;

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onChange =
    (k: keyof FormState) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm((s) => ({ ...s, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitted(false);

    // honeypot
    if (form.website && form.website.trim().length > 0) return;

    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          projectType: form.projectType,
          budget: form.budget,
          timeline: form.timeline,
          message: form.message,
        }),
      });

      const json = (await res.json().catch(() => ({}))) as ApiResp;
      if (!res.ok || json?.ok === false) throw new Error(json?.error || t("contact.form.errors.generic"));

      setSubmitted(true);
      setForm(initialState);
    } catch (err: any) {
      setError(err?.message || t("contact.form.errors.network"));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <section className="py-36 md:py-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            {t("contact.hero.title")}
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl">
            {t("contact.hero.subtitle")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">{t("contact.hero.tags.frontend")}</span>
            <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">{t("contact.hero.tags.ui")}</span>
            <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">{t("contact.hero.tags.scalable")}</span>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-8 -mt-10 pb-20">
        <div className="grid md:grid-cols-5 gap-8">
          <aside className="md:col-span-2">
            <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold">{t("contact.left.title")}</h2>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex gap-2"><Briefcase className="w-5 h-5 text-blue-600" /> {t("contact.left.points.value")}</li>
                <li className="flex gap-2"><Building2 className="w-5 h-5 text-blue-600" /> {t("contact.left.points.comms")}</li>
              </ul>

              <div className="mt-6 h-px bg-gray-100" />

              <div className="mt-6 space-y-3">
                <a href={mailTo()} className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <Mail className="w-5 h-5" /> {t("contact.left.actions.email")} <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="tel:+5493815606434" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <Phone className="w-5 h-5" /> {t("contact.left.actions.phone")}
                </a>
              </div>
            </div>
          </aside>

          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100" noValidate>
              <h2 className="text-xl font-semibold">{t("contact.form.title")}</h2>
              <p className="text-gray-600 mt-1">{t("contact.form.subtitle")}</p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div>
                  <label className="text-sm text-gray-600">{t("contact.form.labels.name")} *</label>
                  <input
                    required
                    value={form.name}
                    onChange={onChange("name")}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t("contact.form.placeholders.name")}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">{t("contact.form.labels.email")} *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={onChange("email")}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t("contact.form.placeholders.email")}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-500" /> {t("contact.form.labels.company")}
                  </label>
                  <input
                    value={form.company}
                    onChange={onChange("company")}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t("contact.form.placeholders.company")}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-gray-500" /> {t("contact.form.labels.projectType")}
                  </label>
                  <select
                    value={form.projectType}
                    onChange={onChange("projectType")}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">{t("contact.form.selects.projectType.placeholder")}</option>
                    <option>{t("contact.form.selects.projectType.landing")}</option>
                    <option>{t("contact.form.selects.projectType.dashboard")}</option>
                    <option>{t("contact.form.selects.projectType.mobile")}</option>
                    <option>{t("contact.form.selects.projectType.optimize")}</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-600 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-500" /> {t("contact.form.labels.budget")}
                  </label>
                  <select
                    value={form.budget}
                    onChange={onChange("budget")}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">{t("contact.form.selects.budget.placeholder")}</option>
                    <option>{t("contact.form.selects.budget.b1")}</option>
                    <option>{t("contact.form.selects.budget.b2")}</option>
                    <option>{t("contact.form.selects.budget.b3")}</option>
                    <option>{t("contact.form.selects.budget.b4")}</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-600 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" /> {t("contact.form.labels.timeline")}
                  </label>
                  <select
                    value={form.timeline}
                    onChange={onChange("timeline")}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">{t("contact.form.selects.timeline.placeholder")}</option>
                    <option>{t("contact.form.selects.timeline.asap")}</option>
                    <option>{t("contact.form.selects.timeline.t1")}</option>
                    <option>{t("contact.form.selects.timeline.t2")}</option>
                    <option>{t("contact.form.selects.timeline.flex")}</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-gray-600">{t("contact.form.labels.message")} *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={onChange("message")}
                    rows={5}
                    className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t("contact.form.placeholders.message")}
                  />
                </div>

                <div className="hidden" aria-hidden="true">
                  <label>{t("contact.form.labels.website")}</label>
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={onChange("website")}
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-64 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 active:bg-blue-800 transition disabled:opacity-60"
                >
                  {loading ? t("contact.form.actions.sending") : t("contact.form.actions.send")}
                </button>
                {error && (
                  <span className="text-sm text-red-600">
                    {error}
                  </span>
                )}
              </div>

              {submitted && (
                <div className="mt-4 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                  {t("contact.form.feedback.success")}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
