export default function AdfinityLandingPage() {
  const services = [
    {
      title: "Social Media Management",
      desc: "Strategy, content creation, and community management to build your brand presence.",
      icon: "↗",
    },
    {
      title: "SEO Optimization",
      desc: "Data-driven SEO strategies to improve rankings and organic traffic.",
      icon: "⌕",
    },
    {
      title: "Paid Ads (Meta, Google)",
      desc: "Performance-focused paid campaigns that maximize reach and conversions.",
      icon: "⌁",
    },
    {
      title: "Website Design & Development",
      desc: "Beautiful, fast, and conversion-optimized websites that drive results.",
      icon: "◫",
    },
    {
      title: "Branding & Creative Design",
      desc: "Compelling brand identity and creative assets that make you stand out.",
      icon: "✦",
    },
    {
      title: "Analytics & Strategy",
      desc: "Deep insights and strategic planning to guide your marketing decisions.",
      icon: "◔",
    },
  ];

  const reasons = [
    {
      title: "Data-Driven Decisions",
      desc: "Every strategy is backed by real data and analytics, not guesswork.",
      icon: "▤",
    },
    {
      title: "Creative + Performance Blend",
      desc: "Beautiful creatives that perform. We balance art and science perfectly.",
      icon: "✦",
    },
    {
      title: "Scalable Marketing Systems",
      desc: "Build sustainable systems that grow with your business, not one-off campaigns.",
      icon: "⚡",
    },
    {
      title: "ROI-Focused Execution",
      desc: "We’re obsessed with results. Every task is optimized to maximize return.",
      icon: "◎",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Research & Strategy",
      desc: "Deep dive into your business, audience, and competitors to build a winning strategy.",
    },
    {
      number: "02",
      title: "Planning & Positioning",
      desc: "Clear roadmaps, channel plans, and messaging aligned to your growth goals.",
    },
    {
      number: "03",
      title: "Execution & Launch",
      desc: "We design, build, publish, and manage campaigns with precision.",
    },
    {
      number: "04",
      title: "Optimization & Scale",
      desc: "We track results, refine what works, and scale performance over time.",
    },
  ];

  const work = [
    {
      tag: "Case Study",
      title: "Social Media Campaign",
      result: "+250% Engagement Growth",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
    },
    {
      tag: "Web Design",
      title: "E-commerce Website",
      result: "+180% Conversion Increase",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    },
    {
      tag: "Branding",
      title: "Brand Identity Design",
      result: "Complete Brand Transformation",
      image:
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=900&q=80",
    },
    {
      tag: "Ad Automation",
      title: "Google Ads Campaign",
      result: "+450% ROAS",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },
    {
      tag: "SEO",
      title: "SEO Strategy",
      result: "+320% Organic Traffic",
      image:
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80",
    },
    {
      tag: "Content Marketing",
      title: "Content Strategy",
      result: "300% Content Reach",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const stats = [
    { value: "200+", label: "Campaigns Managed" },
    { value: "50+", label: "Brands Generated" },
    { value: "300%", label: "Avg ROI" },
    { value: "5M+", label: "Reach Delivered" },
  ];

  const testimonials = [
    {
      text: "Adfinity Lab transformed our digital presence completely. Their team understands performance and creative execution better than most agencies.",
      name: "Sarah Johnson",
      role: "CEO, TechFlow Solutions",
      initials: "S",
    },
    {
      text: "Working with Adfinity felt like having an in-house growth team. They didn’t just run campaigns — they built a scalable marketing system that continues to deliver.",
      name: "Michael Chen",
      role: "Marketing Director, CloudPulse Inc.",
      initials: "M",
    },
    {
      text: "The ROI we saw from their strategic execution was exceptional. They truly understand how to blend creativity with performance marketing.",
      name: "Emily Rodriguez",
      role: "Founder, DataSync Co.",
      initials: "E",
    },
  ];

  const navItems = ["Home", "Services", "Work", "About", "Contact"];

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-900">
      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center">
           <img
           src="/logo.png"
           alt="Adfinity Lab"
           className="h-10 w-auto object-contain"
           />
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-[#194268]"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-xl bg-[#194268] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(25,66,104,0.25)] transition hover:-translate-y-0.5 hover:bg-[#16395a]"
          >
            Get Started
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,109,176,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(25,66,104,0.08),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-medium text-[#194268] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#2f6db0]" />
                Intelligent Marketing Solutions
              </div>

              <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 lg:text-7xl">
                Turn Your
                <br />
                Business Into a
                <br />
                <span className="text-[#2f6db0]">Brand</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Modern businesses need intelligent marketing. We deliver data-driven
                strategies that scale through social media, SEO, paid ads, and websites.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-xl bg-[#194268] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(25,66,104,0.28)] transition hover:-translate-y-0.5"
                >
                  Get Free Strategy
                </a>
                <a
                  href="#work"
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-[#194268] hover:text-[#194268]"
                >
                  View Our Work
                </a>
              </div>

              <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
                {stats.slice(0, 3).map((item) => (
                  <div key={item.label}>
                    <div className="text-3xl font-bold text-[#194268]">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
              <div className="absolute -right-6 bottom-0 h-56 w-56 rounded-full bg-[#194268]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <div className="mb-4 flex items-center justify-between px-2">
                  <div className="text-sm font-semibold text-slate-500">Dashboard Preview</div>
                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    Live Analytics
                  </div>
                </div>
                <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="mb-4 flex gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                      <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                      <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 rounded-full bg-slate-200" />
                      <div className="h-28 rounded-2xl bg-[linear-gradient(180deg,#eef4fb_0%,#d8e6f7_100%)] p-4">
                        <div className="flex h-full items-end gap-2">
                          {[35, 65, 45, 80, 58, 92, 70].map((h, i) => (
                            <div
                              key={i}
                              className="w-full rounded-t-md bg-[#2f6db0]"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-16 rounded-xl bg-white shadow-sm" />
                        <div className="h-16 rounded-xl bg-white shadow-sm" />
                        <div className="h-16 rounded-xl bg-white shadow-sm" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="h-32 rounded-2xl bg-white p-4 shadow-sm">
                      <div className="mb-4 h-3 w-24 rounded-full bg-slate-200" />
                      <div className="space-y-3">
                        <div className="h-2 rounded-full bg-slate-100" />
                        <div className="h-2 rounded-full bg-slate-100" />
                        <div className="h-2 w-4/5 rounded-full bg-slate-100" />
                      </div>
                    </div>
                    <div className="mt-4 h-36 rounded-2xl bg-[linear-gradient(135deg,#f0f6fd_0%,#d9e8f8_100%)] p-4">
                      <div className="mb-3 h-3 w-20 rounded-full bg-slate-200" />
                      <div className="flex h-[100px] items-end gap-3">
                        {[40, 56, 64, 88].map((h, i) => (
                          <div
                            key={i}
                            className="w-full rounded-t-md bg-[#2f6db0]"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-10 rounded-2xl border border-white bg-white px-4 py-3 shadow-lg">
                <div className="text-xs text-slate-500">Growth Rate</div>
                <div className="text-2xl font-bold text-emerald-500">+245%</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-8 pt-2 lg:px-8">
          <div className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Trusted by Growing Brands
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 text-center text-lg font-semibold text-slate-300 md:grid-cols-4 lg:grid-cols-5">
            {['TechFlow', 'DataSync', 'CloudPeak', 'NovaGrid', 'BrightHive'].map((brand) => (
              <div key={brand}>{brand}</div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Our Services</h2>
            <p className="mt-3 text-slate-500">
              Comprehensive digital marketing solutions to grow your brand.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#2f6db0_0%,#194268_100%)] text-xl font-bold text-white shadow-[0_10px_25px_rgba(25,66,104,0.25)]">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Why Adfinity Lab?</h2>
              <p className="mt-3 text-slate-500">
                We’re not just another agency. We’re your growth partner.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {reasons.map((reason) => (
                <div key={reason.title} className="text-center">
                  <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#2f6db0_0%,#194268_100%)] text-xl text-white shadow-[0_12px_28px_rgba(25,66,104,0.25)]">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Our Process</h2>
              <p className="mt-3 text-slate-500">
                A proven 4-step framework to transform your marketing.
              </p>
            </div>

            <div className="relative mt-16">
              <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-blue-200 lg:block" />
              <div className="grid gap-8 lg:grid-cols-4">
                {process.map((step, idx) => (
                  <div key={step.number} className="relative">
                    <div className="mb-5 flex items-center gap-4 lg:flex-col lg:items-start">
                      <div className="z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#194268] text-sm font-bold text-white shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                      <div className="text-sm font-semibold uppercase tracking-wide text-[#2f6db0]">
                        Step {idx + 1}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Our Work</h2>
            <p className="mt-3 text-slate-500">
              Real results for real businesses. See what we’ve built.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {work.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#194268] backdrop-blur">
                    {item.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-emerald-600">{item.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex rounded-xl bg-[#194268] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(25,66,104,0.28)] transition hover:-translate-y-0.5"
            >
              View All Projects
            </a>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#1f5a90_0%,#194268_100%)] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight">Numbers That Speak</h2>
              <p className="mt-3 text-blue-100">
                Real impact, measurable results, proven success.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur"
                >
                  <div className="text-4xl font-bold tracking-tight">{item.value}</div>
                  <div className="mt-3 text-sm text-blue-100">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">What Our Clients Say</h2>
            <p className="mt-3 text-slate-500">
              Don’t just take our word for it. Hear from the brands we’ve helped grow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2f6db0] text-white">
                  ❝
                </div>
                <div className="mb-4 text-yellow-400">★★★★★</div>
                <p className="text-sm leading-7 text-slate-600">{item.text}</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#194268] font-semibold text-white">
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-[linear-gradient(180deg,#1f5a90_0%,#194268_100%)] py-24 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-5xl font-bold tracking-tight">Ready to Scale Your Brand?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Let’s build something powerful together. Get a free strategy session and
              discover how we can transform your marketing.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:adfinitylab@example.com"
                className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#194268] shadow-lg transition hover:-translate-y-0.5"
              >
                Book Free Consultation →
              </a>
              <a
                href="#work"
                className="rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                View Case Studies
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-100">
              <span>• Free Strategy Call</span>
              <span>• No Commitment Required</span>
              <span>• Results Guaranteed</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#07182d] text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
          <div>
            <div className="text-xl font-semibold tracking-tight text-white">
              <img
                 src="/logo.png"
                 alt="Adfinity Lab"
                 className="h-10 w-auto object-contain"
                 />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              We turn businesses into powerful brands through intelligent digital marketing systems.
            </p>
            <div className="mt-6 flex gap-3">
              {['f', 'i', 'x', 'in'].map((item) => (
                <div
                  key={item}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>Social Media Management</li>
              <li>SEO Optimization</li>
              <li>Paid Advertising</li>
              <li>Web Design</li>
              <li>Analytics</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>About Us</li>
              <li>Our Work</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>adfinitylab@example.com</li>
              <li>+977 98123 45678</li>
              <li>New Baneshwor, Kathmandu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 lg:flex-row lg:px-8">
            <div>© 2026 Adfinity Lab. All rights reserved.</div>
            <div className="flex gap-5">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
