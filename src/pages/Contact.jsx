import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Clock, Upload, CheckCircle2, ArrowUpRight } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
import { IMG } from '../lib/images'
import { contactInfo, projectCategories } from '../lib/content'

const initialForm = {
  fullName: '',
  companyName: '',
  phone: '',
  email: '',
  category: '',
  location: '',
  description: '',
  document: '',
}

const fieldBase =
  'w-full border border-line bg-white px-4 py-3.5 text-[14.5px] text-ink outline-none transition-all duration-200 placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/15'

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </span>
      {children}
    </label>
  )
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => {
    const value = e.target.type === 'file' ? e.target.files?.[0]?.name || '' : e.target.value
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((err) => ({ ...err, [key]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name'
    if (!form.phone.trim()) next.phone = 'Please enter a phone number'
    if (!form.email.trim()) next.email = 'Please enter an email address'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address'
    if (!form.category) next.category = 'Please select a project category'
    if (!form.description.trim()) next.description = 'Please describe your project requirement'
    return next
  }

  const submit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      const first = document.querySelector('[data-invalid="true"]')
      first?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    // Placeholder: connect to an email/CRM endpoint when available.
    setSent(true)
  }

  const cards = [
    { icon: Phone, label: 'Phone', value: contactInfo.phone, href: contactInfo.phoneHref },
    { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat on WhatsApp', href: contactInfo.whatsapp },
    { icon: Clock, label: 'Working Hours', value: contactInfo.hours },
  ]

  return (
    <>
      <Seo
        title="Contact Us — Request a Quote"
        description="Discuss your fire protection, security, heavy engineering, piping or water infrastructure requirement with Yadav Sanitation. Send an enquiry with your project category and location."
        keywords="Fire Protection Contractor Contact, Heavy Engineering Contractor, Steel Fabrication Enquiry, Piping Contract, Water Treatment Enquiry, Request a Quote"
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s discuss
            <br />
            your <span className="text-primary">project.</span>
          </>
        }
        description="Share your requirement, project category and location — we will review the scope and get back to you."
        image={IMG.contact}
        crumbs={[{ label: 'Contact Us' }]}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="enquiry">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-8 bg-current opacity-60" />
                Project Enquiry
              </span>
              <h2 id="enquiry" className="section-title mt-5">
                Send your <span className="text-primary">requirements</span>
              </h2>
              <p className="lead mt-4">
                Fill in the form below and our team will review your enquiry. Fields marked with
                <span className="text-primary"> *</span> are required.
              </p>
            </Reveal>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-9 border border-primary/30 bg-lightblue p-8 sm:p-10"
                role="status"
              >
                <CheckCircle2 className="h-10 w-10 text-primary" strokeWidth={1.8} />
                <h3 className="mt-5 font-display text-[22px] font-bold text-ink">Enquiry recorded</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  Thank you, {form.fullName}. Your requirement has been noted. This form is currently
                  a front-end demo — connect it to your email or CRM endpoint to start receiving
                  submissions.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(initialForm)
                    setSent(false)
                  }}
                  className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-deep"
                >
                  Send Another Enquiry
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} noValidate className="mt-9 grid gap-5 sm:grid-cols-2">
                <div data-invalid={errors.fullName ? 'true' : undefined}>
                  <Field label="Full Name" required>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={update('fullName')}
                      placeholder="Your full name"
                      className={fieldBase}
                      aria-invalid={!!errors.fullName}
                    />
                  </Field>
                  {errors.fullName && <p className="mt-1.5 text-[12px] font-medium text-red-600">{errors.fullName}</p>}
                </div>

                <div>
                  <Field label="Company Name">
                    <input
                      type="text"
                      value={form.companyName}
                      onChange={update('companyName')}
                      placeholder="Company / organisation"
                      className={fieldBase}
                    />
                  </Field>
                </div>

                <div data-invalid={errors.phone ? 'true' : undefined}>
                  <Field label="Phone Number" required>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+91 00000 00000"
                      className={fieldBase}
                      aria-invalid={!!errors.phone}
                    />
                  </Field>
                  {errors.phone && <p className="mt-1.5 text-[12px] font-medium text-red-600">{errors.phone}</p>}
                </div>

                <div data-invalid={errors.email ? 'true' : undefined}>
                  <Field label="Email" required>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@company.com"
                      className={fieldBase}
                      aria-invalid={!!errors.email}
                    />
                  </Field>
                  {errors.email && <p className="mt-1.5 text-[12px] font-medium text-red-600">{errors.email}</p>}
                </div>

                <div data-invalid={errors.category ? 'true' : undefined}>
                  <Field label="Project Category" required>
                    <select
                      value={form.category}
                      onChange={update('category')}
                      className={`${fieldBase} appearance-none`}
                      aria-invalid={!!errors.category}
                    >
                      <option value="">Select a category</option>
                      {projectCategories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </Field>
                  {errors.category && <p className="mt-1.5 text-[12px] font-medium text-red-600">{errors.category}</p>}
                </div>

                <div>
                  <Field label="Project Location">
                    <input
                      type="text"
                      value={form.location}
                      onChange={update('location')}
                      placeholder="City / site location"
                      className={fieldBase}
                    />
                  </Field>
                </div>

                <div className="sm:col-span-2" data-invalid={errors.description ? 'true' : undefined}>
                  <Field label="Project Description" required>
                    <textarea
                      rows={5}
                      value={form.description}
                      onChange={update('description')}
                      placeholder="Describe the scope, site conditions and any technical requirements…"
                      className={`${fieldBase} resize-none`}
                      aria-invalid={!!errors.description}
                    />
                  </Field>
                  {errors.description && (
                    <p className="mt-1.5 text-[12px] font-medium text-red-600">{errors.description}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <Field label="Upload Documents (optional)">
                    <label
                      className={`${fieldBase} flex cursor-pointer items-center justify-between gap-4 hover:border-primary`}
                    >
                      <span className="flex items-center gap-3 text-muted">
                        <Upload className="h-[18px] w-[18px] text-primary" strokeWidth={2} />
                        {form.document || 'Attach BOQ, drawings or scope documents'}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">Browse</span>
                      <input type="file" className="hidden" onChange={update('document')} />
                    </label>
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2.5 bg-primary px-8 py-5 text-[12px] font-bold uppercase tracking-[0.18em] text-white shadow-premium transition-all duration-300 hover:bg-deep hover:shadow-lift sm:w-auto"
                  >
                    Send Enquiry
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
                  </button>
                  <p className="mt-4 text-[12.5px] text-muted">
                    By submitting, you agree to be contacted regarding your enquiry.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <aside className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="border border-line bg-surface p-7 sm:p-8">
                <h3 className="font-display text-[19px] font-bold text-ink">Reach us directly</h3>
                <ul className="mt-6 space-y-4">
                  {cards.map(({ icon: Icon, label, value, href }) => (
                    <li key={label}>
                      <span className="flex items-start gap-4 border-b border-line pb-4 last:border-0 last:pb-0">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-primary shadow-card">
                          <Icon className="h-5 w-5" strokeWidth={1.9} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[10.5px] font-bold uppercase tracking-[0.18em] text-muted">
                            {label}
                          </span>
                          {href ? (
                            <a
                              href={href}
                              target={href.startsWith('http') ? '_blank' : undefined}
                              rel="noreferrer"
                              className="mt-1 block break-words text-[15px] font-semibold text-ink transition-colors hover:text-primary"
                            >
                              {value}
                            </a>
                          ) : (
                            <span className="mt-1 block text-[15px] font-semibold text-ink">{value}</span>
                          )}
                        </span>
                      </span>
                    </li>
                  ))}
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-primary shadow-card">
                      <MapPin className="h-5 w-5" strokeWidth={1.9} />
                    </span>
                    <span>
                      <span className="block text-[10.5px] font-bold uppercase tracking-[0.18em] text-muted">
                        Address
                      </span>
                      <span className="mt-1 block text-[15px] font-semibold text-ink">{contactInfo.address}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Map placeholder */}
            <Reveal delay={0.18} className="mt-6">
              <div className="relative overflow-hidden border border-line">
                <div className="relative aspect-[4/3]">
                  <Img src={IMG.infrastructure} alt="Company location map placeholder" className="h-full w-full" />
                  <span className="absolute inset-0 bg-navy/55" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                    <MapPin className="h-9 w-9 text-white" strokeWidth={1.8} />
                    <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white">
                      Google Maps embed placeholder
                    </p>
                    <p className="max-w-xs text-[13px] text-white/70">
                      Replace this block with the Google Maps iframe once the office location is
                      confirmed.
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.mapQuery)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-ink"
                    >
                      Open in Google Maps
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  )
}
