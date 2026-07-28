import {
  ArrowUpRight,
  FileText,
  CalendarClock,
  AlertTriangle,
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
} from 'lucide-react';

const services = [
  {
    title: 'Konsultasi Pembatalan',
    description:
      'Pendampingan independen terkait proses pembatalan pada aplikasi.',
    icon: FileText,
    href: '#konsultasi-pembatalan',
  },
  {
    title: 'Bantuan Perubahan Tenor',
    description: 'Bantuan informasi terkait perubahan tenor pada akun Anda.',
    icon: CalendarClock,
    href: '#bantuan-perubahan-tenor',
  },
  {
    title: 'Laporan Kendala Sistem',
    description: 'Laporkan kendala teknis aplikasi untuk ditindaklanjuti.',
    icon: AlertTriangle,
    href: '#laporan-kendala-sistem',
  },
];

const footerLinks = [
  { label: 'Kebijakan Privasi', href: '#kebijakan-privasi' },
  { label: 'Syarat & Ketentuan', href: '#syarat-ketentuan' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
];

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      {/* Top bar */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-container px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="font-semibold text-gray-900 tracking-tight">
              tanya-adminkami<span className="text-brand-600">.online</span>
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-500">
            <Clock className="h-4 w-4 text-brand-600" />
            Aktif 24 Jam
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 via-white to-white" />
        <div
          className="absolute -top-24 left-1/2 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl"
          aria-hidden
        />
        <div className="mx-auto max-w-container px-6 pt-14 pb-12 sm:pt-20 sm:pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span
                className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm animate-fade-up"
              >
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                Layanan Konsultan Independen
              </span>
              <h1
                className="mt-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl animate-fade-up"
                style={{ animationDelay: '0.05s' }}
              >
                Pusat Layanan Konsultasi Independen
                <span className="block text-brand-600 mt-2">
                  tanya-adminkami.online
                </span>
              </h1>
              <p
                className="mx-auto mt-5 max-w-2xl text-base text-gray-600 sm:text-lg lg:mx-0 animate-fade-up"
                style={{ animationDelay: '0.1s' }}
              >
                Layanan Konsultan — Butuh pendampingan? Layanan kami aktif 24
                jam untuk Anda.
              </p>
            </div>
            <div
              className="relative animate-fade-up"
              style={{ animationDelay: '0.15s' }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-15px_rgba(37,99,235,0.25)]">
                <img
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Tim konsultan mendampingi pengguna terkait kendala aplikasi"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-3 sm:-left-5 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-lg">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-gray-400">Waktu Layanan</p>
                  <p className="text-sm font-semibold text-gray-900">24 Jam Non-stop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="mx-auto max-w-container px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <a
                key={service.title}
                href={service.href}
                className="group relative flex flex-col items-start rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_18px_40px_-12px_rgba(37,99,235,0.25)] animate-fade-up"
                style={{ animationDelay: `${0.15 + idx * 0.08}s` }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-colors group-hover:text-brand-700">
                  Mulai
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Info section */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-container px-6 py-14 text-center">
          <span className="inline-flex items-center justify-center gap-2 text-sm font-medium text-brand-600">
            <ShieldCheck className="h-4 w-4" />
            Informasi
          </span>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-medium leading-relaxed text-gray-700 sm:text-2xl">
            Informasi pendampingan independen terkait kendala aplikasi
          </p>
        </div>
      </section>

      {/* Location & contact */}
      <section className="mx-auto max-w-container px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
            <img
              src="https://images.pexels.com/photos/2160702/pexels-photo-2160702.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Jakarta, Indonesia"
              className="h-32 w-full object-cover"
              loading="lazy"
            />
            <div className="flex items-start gap-4 p-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wide text-gray-400">
                  Lokasi Kami
                </h3>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Phone className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-gray-400">
                Nomor Kontak
              </h3>
              <a
                href="tel:08133133041"
                className="mt-1 block text-lg font-semibold text-gray-900 transition-colors hover:text-brand-600"
              >
                08133133041
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-container px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <span className="font-semibold text-gray-900">
              tanya-adminkami<span className="text-brand-600">.online</span>
            </span>
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 border-t border-gray-100 pt-6 text-center">
            <p className="text-xs uppercase tracking-wide text-gray-400">
              tanya-adminkami.online — Informasi Pendampingan Independen
              Terkait Kendala Aplikasi
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
