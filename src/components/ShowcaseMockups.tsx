import { 
  Heart, 
  Brain, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Eye, 
  Star, 
  Search, 
  Check, 
  Award,
  Sparkles,
  ShoppingBag,
  Truck,
  RotateCcw,
  Headphones,
  CheckCircle2
} from 'lucide-react';

/* =======================================================================
   1. OMEGAL DIETARY SUPPLEMENT MOCKUP (Exact replica of Screenshot Card 1)
   ======================================================================= */
export function OmegalMockup() {
  return (
    <div className="w-full bg-[#fdfcf9] text-zinc-800 text-[10.5px] select-none font-sans overflow-hidden leading-snug">
      {/* Top Header */}
      <div className="bg-white border-b border-zinc-200 px-3.5 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full border-2 border-amber-600 flex items-center justify-center font-bold text-[9px] text-amber-600">
            Ω
          </div>
          <div className="leading-none">
            <span className="font-extrabold tracking-wider text-xs text-zinc-900">OMEGAL</span>
            <span className="block text-[7.5px] text-zinc-400 uppercase tracking-wider font-semibold">Dietary Supplement</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-[9.5px] text-zinc-600 font-medium">
          <span className="text-amber-700 font-bold border-b border-amber-600 pb-0.5">Home</span>
          <span>Products</span>
          <span>Benefits</span>
          <span>About Us</span>
          <span>Contact</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-amber-600 hover:bg-amber-500 text-white text-[8.5px] font-bold px-2.5 py-1 rounded shadow-sm cursor-pointer">
            SHOP NOW
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#fbf8f2] via-[#f7f2ea] to-[#eee4d3] p-3.5 flex items-center justify-between border-b border-amber-900/10">
        <div className="max-w-[56%] space-y-1 z-10">
          <span className="inline-block text-[8px] font-bold text-amber-800 uppercase tracking-wider bg-amber-200/70 px-1.5 py-0.5 rounded">
            Omega 3 (80% Purified)
          </span>
          <h2 className="text-sm sm:text-base font-extrabold text-zinc-900 leading-tight">
            Omegal Man
          </h2>
          <p className="text-[8.5px] text-zinc-600 leading-tight">
            Omegal Man - The First Combination of Omega 3 (80% Purified) with CoQ10, Selenium &amp; Zinc Omega 3.
          </p>
          <div className="pt-1">
            <button className="bg-zinc-950 text-white text-[8px] font-bold px-2.5 py-1 rounded shadow hover:bg-zinc-800 transition-colors">
              SHOP NOW →
            </button>
          </div>
        </div>

        {/* Hero image mockup: Man with laptop & family */}
        <div className="w-[40%] h-24 rounded-lg overflow-hidden relative shadow-md border border-amber-900/15">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=400&q=80" 
            alt="Omegal Man Lifestyle" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-1 right-1 bg-black/85 text-amber-300 font-bold px-1.5 py-0.5 rounded text-[7.5px]">
            OMEGAL MAN
          </div>
        </div>
      </div>

      {/* Trust Badges Bar (Dark Strip) */}
      <div className="bg-zinc-900 text-zinc-200 px-2 py-1.5 grid grid-cols-4 gap-1 text-[7.5px] text-center font-medium">
        <div className="flex items-center justify-center gap-0.5">
          <span className="text-amber-400">✓</span> Easy Installment <br/> Without Interest
        </div>
        <div className="flex items-center justify-center gap-0.5">
          <span className="text-amber-400">★</span> Special Offers <br/> Up to 40% Off
        </div>
        <div className="flex items-center justify-center gap-0.5">
          <span className="text-amber-400">⚡</span> Exclusive Discounts <br/> On Bulk Orders
        </div>
        <div className="flex items-center justify-center gap-0.5">
          <span className="text-amber-400">🏷️</span> Prices Start From <br/> 22,500 EGP
        </div>
      </div>

      {/* Shop by Benefits */}
      <div className="p-3 bg-white border-b border-zinc-100">
        <div className="text-center font-extrabold text-[11px] text-zinc-900 mb-2">
          Shop by Benefits
        </div>
        <div className="grid grid-cols-6 gap-1 text-center">
          {[
            { icon: Heart, label: 'Heart Health' },
            { icon: Brain, label: 'Brain Function' },
            { icon: ShieldCheck, label: 'Immunity Boost' },
            { icon: Activity, label: 'Joint Support' },
            { icon: Zap, label: 'Energy & Vitality' },
            { icon: Eye, label: 'Eye Health' },
          ].map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="flex flex-col items-center p-1 rounded hover:bg-amber-50/80 transition-colors">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mb-0.5 shadow-sm">
                  <Icon className="w-3 h-3" />
                </div>
                <span className="text-[7.5px] font-semibold text-zinc-700 leading-tight">{b.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bestsellers Grid */}
      <div className="p-3 bg-[#faf7f2] border-b border-zinc-200">
        <div className="flex items-center justify-between mb-2">
          <span className="font-extrabold text-[11px] text-zinc-900">Bestsellers</span>
          <span className="text-[8px] text-amber-700 font-bold hover:underline cursor-pointer">View All Products →</span>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          {[
            { 
              name: 'Omegal Woman', 
              desc: 'Omega 3 (80% Purified) with CoQ10 | 30 Capsules', 
              price: 'EGP 990.00', 
              btn: 'Out Of Stock', 
              btnClass: 'bg-zinc-200 text-zinc-400' 
            },
            { 
              name: 'Omegal Man', 
              desc: 'Omega 3 (80% Purified) with CoQ10, Zinc & Selenium', 
              price: 'EGP 570.00', 
              btn: 'Add To Cart', 
              btnClass: 'bg-amber-600 text-white hover:bg-amber-700' 
            },
            { 
              name: 'Omegal Juniors', 
              desc: 'Omega 3 + Multivitamins (A, D3, E, C) for Growth', 
              price: 'EGP 360.00', 
              btn: 'Add To Cart', 
              btnClass: 'bg-amber-600 text-white hover:bg-amber-700' 
            },
            { 
              name: 'Omegal Ultra', 
              desc: 'Ultra Purified DHA (80%) for Focus & Memory', 
              price: 'EGP 240.00', 
              btn: 'Add To Cart', 
              btnClass: 'bg-amber-600 text-white hover:bg-amber-700' 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-1.5 rounded-lg border border-zinc-200/80 shadow-sm flex flex-col justify-between text-left">
              <div className="w-full h-11 bg-gradient-to-br from-amber-50 to-amber-100/60 rounded flex items-center justify-center font-bold text-amber-800 text-[8.5px] mb-1 border border-amber-900/10">
                📦 {item.name.split(' ')[1]}
              </div>
              <div className="font-bold text-[8px] text-zinc-900 truncate">{item.name}</div>
              <div className="text-[6.5px] text-zinc-500 line-clamp-2 leading-tight mt-0.5">{item.desc}</div>
              <div className="text-[7.5px] text-zinc-900 font-extrabold mt-1">{item.price}</div>
              <button className={`mt-1 py-0.5 text-[7px] font-bold rounded text-center transition-colors ${item.btnClass}`}>
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe & Save Section */}
      <div className="p-3 bg-gradient-to-r from-amber-50 to-[#fffdf9] border-b border-zinc-200 flex items-center justify-between">
        <div className="max-w-[58%] space-y-1">
          <span className="text-[7px] font-bold text-amber-800 uppercase tracking-wide bg-amber-200/50 px-1 py-0.2 rounded">
            Subscription Program
          </span>
          <h4 className="font-extrabold text-[10px] text-zinc-900 leading-tight">
            Subscribe &amp; Save: Get 10% Off On Your First Subscription
          </h4>
          <div className="flex items-center gap-2 text-[7px] text-zinc-600">
            <span>✓ Flexible Delivery</span>
            <span>✓ Cancel Anytime</span>
          </div>
          <button className="bg-amber-600 text-white text-[7.5px] font-bold px-2 py-0.5 rounded shadow-sm mt-0.5">
            Subscribe Now
          </button>
        </div>
        <div className="w-[36%] h-14 rounded-lg overflow-hidden shadow-sm border border-amber-200">
          <img 
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80" 
            alt="Omega Capsules" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 4 Trust Badges */}
      <div className="p-2.5 bg-white border-b border-zinc-200 grid grid-cols-4 gap-1 text-center">
        <div className="p-1 rounded bg-zinc-50">
          <div className="text-[8px] font-bold text-zinc-800">100% Original</div>
          <div className="text-[6.5px] text-zinc-500">Authentic Products</div>
        </div>
        <div className="p-1 rounded bg-zinc-50">
          <div className="text-[8px] font-bold text-zinc-800">Fast Delivery</div>
          <div className="text-[6.5px] text-zinc-500">Across Egypt</div>
        </div>
        <div className="p-1 rounded bg-zinc-50">
          <div className="text-[8px] font-bold text-zinc-800">Secure Payment</div>
          <div className="text-[6.5px] text-zinc-500">100% Safe &amp; Secure</div>
        </div>
        <div className="p-1 rounded bg-zinc-50">
          <div className="text-[8px] font-bold text-zinc-800">Expert Support</div>
          <div className="text-[6.5px] text-zinc-500">24/7 Customer Service</div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="bg-[#faf8f4] p-2.5 border-b border-zinc-200 text-center">
        <div className="font-extrabold text-[9.5px] text-zinc-900 mb-1">
          What Our Customers Say
        </div>
        <div className="flex justify-center gap-0.5 text-amber-500 mb-1">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-2 h-2 fill-current" />)}
        </div>
        <div className="grid grid-cols-3 gap-1 text-[7px] text-zinc-600 text-left">
          <div className="bg-white p-1 rounded border border-zinc-200">
            <p className="italic">&quot;I have been using Omegal Man for 2 months, more energetic every day!&quot;</p>
            <span className="block font-bold text-zinc-900 mt-0.5">— Ahmed M.</span>
          </div>
          <div className="bg-white p-1 rounded border border-zinc-200">
            <p className="italic">&quot;Omegal Woman is amazing! My hair and skin feel balanced and healthy.&quot;</p>
            <span className="block font-bold text-zinc-900 mt-0.5">— Sara M.</span>
          </div>
          <div className="bg-white p-1 rounded border border-zinc-200">
            <p className="italic">&quot;Great quality and fast delivery. Omegal is now part of my daily routine.&quot;</p>
            <span className="block font-bold text-zinc-900 mt-0.5">— Mohamed A.</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-zinc-950 text-zinc-400 p-2.5 text-[7px] flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-amber-500 font-extrabold text-[9px]">Ω</span>
          <span className="text-white font-bold">OMEGAL</span>
          <span className="text-zinc-500">© 2026 Dietary Supplement</span>
        </div>
        <div className="flex gap-2">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
}

/* =======================================================================
   2. ABEER STUDY IN MALAYSIA MOCKUP (Exact replica of Screenshot Card 2)
   ======================================================================= */
export function AbeerMockup() {
  return (
    <div className="w-full bg-[#0a192f] text-white text-[10.5px] select-none font-sans overflow-hidden leading-snug" dir="rtl">
      {/* Top Navbar */}
      <div className="bg-[#0e2444] px-3.5 py-2 border-b border-blue-900/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-amber-500 flex items-center justify-center font-extrabold text-[10px] text-zinc-950 shadow">
            A
          </div>
          <div>
            <span className="font-extrabold text-xs tracking-wide text-white">ABEER</span>
            <span className="block text-[7px] text-blue-300 font-medium">EDUCATION COUNSELLOR</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[8.5px] text-blue-200 font-medium">
          <span className="font-bold text-amber-400">الرئيسية</span>
          <span>الجامعات في ماليزيا</span>
          <span>تكلفة الدراسة</span>
          <span>من نحن</span>
          <span>التسجيل</span>
          <span>اتصل بنا</span>
        </div>

        <button className="bg-blue-600 hover:bg-blue-500 text-white text-[8px] font-bold px-2 py-0.5 rounded shadow">
          تسجيل الدخول
        </button>
      </div>

      {/* Hero Banner with Student in Red Jacket & Binder */}
      <div className="relative p-3.5 bg-gradient-to-l from-[#0f2d59] via-[#091b36] to-[#061224] flex items-center justify-between overflow-hidden border-b border-blue-900/40">
        {/* Right text content (RTL) */}
        <div className="max-w-[56%] space-y-1 z-10">
          <div className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-1.5 py-0.5 rounded-full text-[7.5px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            رحلتك التعليمية إلى ماليزيا تبدأ من هنا
          </div>

          <h2 className="text-sm sm:text-base font-extrabold text-white leading-tight">
            ابدأ رحلتك نحو الدراسة في <span className="text-amber-400">ماليزيا</span>
          </h2>
          <p className="text-[8.5px] text-blue-200 leading-tight">
            من مصر إلى ماليزيا بسهولة وأمان مع دعم كامل من الاستشارة حتى الاستقرار الجامعي.
          </p>

          {/* Badges / Metrics */}
          <div className="flex items-center gap-1.5 pt-0.5 text-[7px]">
            <span className="bg-blue-900/70 border border-blue-400/30 text-amber-300 font-bold px-1.5 py-0.5 rounded">
              🎓 50+ جامعة معتمدة
            </span>
            <span className="bg-blue-900/70 border border-blue-400/30 text-emerald-300 font-bold px-1.5 py-0.5 rounded">
              ⭐ 5000+ طالب مسجل
            </span>
          </div>

          {/* 3 Step Progress */}
          <div className="flex items-center gap-1 pt-0.5 text-[7px]">
            <span className="bg-amber-500 text-zinc-950 font-bold px-1.5 py-0.5 rounded">1. تسجيل الآن</span>
            <span className="bg-blue-900/60 text-blue-200 px-1 py-0.5 rounded">2. تجهيز المستندات</span>
            <span className="bg-blue-900/60 text-blue-200 px-1 py-0.5 rounded">3. القبول الجامعي</span>
          </div>

          <div className="flex gap-1.5 pt-1">
            <button className="bg-amber-500 hover:bg-amber-400 text-zinc-950 text-[8px] font-bold px-2.5 py-1 rounded shadow">
              سجل الآن ←
            </button>
            <button className="bg-blue-950/70 border border-blue-500/40 text-blue-200 text-[8px] font-semibold px-2 py-1 rounded">
              استفسر واتساب
            </button>
          </div>
        </div>

        {/* Left student image: Brunette girl with red jacket & blue binder */}
        <div className="w-[40%] h-28 rounded-xl overflow-hidden relative shadow-lg border border-blue-400/25">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
            alt="Student in Malaysia" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1 left-1 bg-amber-500/90 text-zinc-950 font-bold px-1 py-0.5 rounded text-[7px]">
            قبول معتمد
          </div>
        </div>
      </div>

      {/* University Search Filter Bar */}
      <div className="bg-[#122b52] p-2.5 border-b border-blue-900/50">
        <div className="text-[8.5px] font-bold text-amber-400 mb-1">
          ابحث عن جامعتك المثالية
        </div>
        <div className="grid grid-cols-4 gap-1">
          <div className="bg-[#0b1c36] text-[7.5px] p-1 rounded text-zinc-300 border border-blue-900 flex justify-between items-center">
            <span>المرحلة الدراسية</span>
            <span className="text-[6px]">▼</span>
          </div>
          <div className="bg-[#0b1c36] text-[7.5px] p-1 rounded text-zinc-300 border border-blue-900 flex justify-between items-center">
            <span>اختر الكلية</span>
            <span className="text-[6px]">▼</span>
          </div>
          <div className="bg-[#0b1c36] text-[7.5px] p-1 rounded text-zinc-300 border border-blue-900 flex justify-between items-center">
            <span>اختر التخصص</span>
            <span className="text-[6px]">▼</span>
          </div>
          <button className="bg-amber-500 text-zinc-950 font-bold text-[7.5px] rounded flex items-center justify-center gap-1 shadow">
            <Search className="w-2 h-2" />
            بحث
          </button>
        </div>
      </div>

      {/* 4 Feature Badges (White cards) */}
      <div className="p-2.5 grid grid-cols-4 gap-1 text-center bg-[#0d2140] border-b border-blue-900/50">
        {[
          { title: 'جامعات معتمدة', desc: 'جودة تعليم عالمية' },
          { title: 'إجراءات سهلة وسريعة', desc: 'دعم كامل خطوة بخطوة' },
          { title: 'تسهيلات السفر', desc: 'بأفضل الأسعار' },
          { title: 'استشارات مجانية', desc: 'من خبراء التعليم' }
        ].map((feat, i) => (
          <div key={i} className="p-1 rounded bg-white text-zinc-900 shadow-sm border border-blue-200">
            <div className="text-[7.5px] font-bold text-blue-950 truncate">{feat.title}</div>
            <div className="text-[6.5px] text-blue-600 truncate">{feat.desc}</div>
          </div>
        ))}
      </div>

      {/* Partner Universities Logos */}
      <div className="p-2.5 bg-[#09172e] border-b border-blue-900/40 text-center">
        <div className="text-[7.5px] text-blue-300 font-semibold mb-1.5">
          شركاؤنا من الجامعات المعتمدة في ماليزيا
        </div>
        <div className="flex items-center justify-center gap-2 text-[7.5px] text-zinc-200 font-bold">
          <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10">UNIVERSITI MALAYA</span>
          <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10">UPM</span>
          <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10">UTM</span>
          <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10">MONASH</span>
          <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10">TAYLOR&apos;S</span>
        </div>
        <div className="flex justify-center gap-1 mt-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
        </div>
      </div>

      {/* Footer Strip */}
      <div className="bg-[#050e1d] p-2 text-center text-[7px] text-blue-300/80 flex justify-between items-center">
        <span>© 2026 Abeer Education Counsellor</span>
        <span>كوالالمبور • القاهرة • دبي</span>
      </div>
    </div>
  );
}

/* =======================================================================
   3. SOKAR LUXURY NILE CRUISE MOCKUP (Exact replica of Screenshot Card 3)
   ======================================================================= */
export function SokarMockup() {
  return (
    <div className="w-full bg-[#120f0c] text-amber-100 text-[10.5px] select-none font-sans overflow-hidden leading-snug">
      {/* Top Gold & Dark Bar */}
      <div className="bg-[#1b1510] border-b border-amber-900/30 px-3.5 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full border border-amber-500/80 flex items-center justify-center text-[8.5px] text-amber-400 font-serif">
            𓋹
          </div>
          <div className="leading-none">
            <span className="font-serif tracking-widest text-xs text-amber-200 font-bold">SOKAR</span>
            <span className="block text-[6.5px] text-amber-500/80 uppercase font-mono">Nile Dahabiya Cruises</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2.5 text-[8.5px] text-zinc-400 font-serif">
          <span className="text-amber-400 font-semibold">Home</span>
          <span>Our Packages</span>
          <span>Day Tours</span>
          <span>About</span>
          <span>Contact</span>
          <span>Blog</span>
        </div>
        <button className="bg-amber-600/90 hover:bg-amber-500 text-zinc-950 font-bold text-[7.5px] px-2 py-0.5 rounded uppercase tracking-wider shadow">
          Book Cruise
        </button>
      </div>

      {/* Hero Section: River Nile & Dahabiya */}
      <div className="relative p-3.5 bg-gradient-to-b from-[#241a12] via-[#1b1510] to-[#120f0c] overflow-hidden flex items-center justify-between border-b border-amber-900/30">
        <div className="max-w-[56%] space-y-1 z-10">
          <span className="inline-block text-[7.5px] font-mono tracking-widest text-amber-400 uppercase bg-amber-950/60 border border-amber-700/30 px-1 py-0.2 rounded">
            AUTHENTIC EGYPT TOURS
          </span>
          <h2 className="text-sm sm:text-base font-serif font-bold text-amber-100 tracking-wide leading-tight">
            SAIL THE RIVER NILE
          </h2>
          <p className="text-[8.5px] text-zinc-400 leading-tight">
            Luxury dahabiya cruises from Aswan to Luxor - 7 nights of history, culture, and golden sunsets.
          </p>
          <div className="flex gap-1.5 pt-1">
            <button className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-[8px] px-2.5 py-1 rounded shadow">
              EXPLORE TOURS →
            </button>
            <button className="bg-black/50 border border-amber-600/40 text-amber-300 text-[8px] px-2 py-1 rounded">
              DAY TOURS
            </button>
          </div>
        </div>

        {/* Hero image Nile */}
        <div className="w-[40%] h-24 rounded-lg overflow-hidden relative shadow-lg border border-amber-700/30">
          <img 
            src="https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80" 
            alt="Nile River Dahabiya" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-1 left-1 text-[7px] font-serif text-amber-300">
            Aswan to Luxor
          </div>
        </div>
      </div>

      {/* Gold Ribbon / Trust Badges Bar */}
      <div className="bg-[#0b0a08] border-b border-amber-900/40 px-2 py-1.5 grid grid-cols-5 gap-0.5 text-[6.5px] text-center text-amber-300/90 font-mono uppercase">
        <div>Tailor Made Itineraries</div>
        <div>Best Price Guarantee</div>
        <div>Expert Local Guides</div>
        <div>Secure Online Booking</div>
        <div>Free Cancellation</div>
      </div>

      {/* Section: Choose Your Next Journey & Popular Egypt Tours */}
      <div className="p-3 bg-[#17130e] border-b border-amber-900/30">
        <div className="grid grid-cols-2 gap-2 mb-2">
          {/* Left Box: Choose Your Next Journey */}
          <div className="bg-[#1e1711] p-1.5 rounded-lg border border-amber-900/30">
            <span className="text-[7px] text-amber-500 uppercase font-mono font-bold">DESTINATIONS</span>
            <h4 className="font-serif text-[9px] font-bold text-amber-100 mb-1">CHOOSE YOUR NEXT JOURNEY</h4>
            <div className="grid grid-cols-2 gap-1 text-center">
              {['EGYPT', 'JORDAN', 'EMIRATES', 'TURKEY'].map((dest, i) => (
                <div key={i} className="bg-[#2a2017] py-1 rounded text-[7px] font-serif text-amber-200 border border-amber-800/20">
                  {dest}
                </div>
              ))}
            </div>
          </div>

          {/* Right Box: Popular Egypt Tours */}
          <div className="bg-[#1e1711] p-1.5 rounded-lg border border-amber-900/30 flex flex-col justify-between">
            <div>
              <span className="text-[7px] text-amber-500 uppercase font-mono font-bold">HANDPICKED</span>
              <h4 className="font-serif text-[9px] font-bold text-amber-100">Popular Egypt Tours</h4>
            </div>
            <div className="h-10 rounded overflow-hidden relative mt-1 border border-amber-900/30">
              <img 
                src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=300&q=80" 
                alt="Pyramids & Temples" 
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0.5 left-1 text-[6.5px] font-bold text-amber-300">Pharaohs &amp; Pyramids</span>
            </div>
          </div>
        </div>

        {/* Egypt Journeys with Ancient Soul & Stats */}
        <div className="mt-1 pt-2 border-t border-amber-900/30">
          <div className="flex items-center justify-between mb-1.5">
            <div>
              <span className="text-[7px] text-amber-500 uppercase font-mono">ABOUT SOKAR TRAVEL</span>
              <h3 className="font-serif text-xs font-bold text-amber-100">
                EGYPT JOURNEYS WITH ANCIENT SOUL
              </h3>
            </div>
            <span className="text-[7.5px] text-amber-400 font-bold">All Cruises →</span>
          </div>

          <div className="grid grid-cols-4 gap-1 text-center">
            <div className="bg-[#241a12] p-1 rounded border border-amber-900/40">
              <div className="text-amber-400 font-serif font-bold text-[11px]">15+</div>
              <div className="text-[6.5px] text-zinc-400 uppercase">Designed Routes</div>
            </div>
            <div className="bg-[#241a12] p-1 rounded border border-amber-900/40">
              <div className="text-amber-400 font-serif font-bold text-[11px]">4</div>
              <div className="text-[6.5px] text-zinc-400 uppercase">Regional Dest.</div>
            </div>
            <div className="bg-[#241a12] p-1 rounded border border-amber-900/40">
              <div className="text-amber-400 font-serif font-bold text-[11px]">24/7</div>
              <div className="text-[6.5px] text-zinc-400 uppercase">Trip Support</div>
            </div>
            <div className="bg-[#241a12] p-1 rounded border border-amber-900/40">
              <div className="text-amber-400 font-serif font-bold text-[11px]">100%</div>
              <div className="text-[6.5px] text-zinc-400 uppercase">Tailored Planning</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0b0a08] p-2 text-center text-[7px] text-amber-400/70 flex justify-between items-center">
        <span>© 2026 Sokar Nile Dahabiyas • Cairo - Luxor - Aswan</span>
        <span>Cairo Booking Office: +20 2 2456 7890</span>
      </div>
    </div>
  );
}

/* =======================================================================
   4. RIVO LUXURY JEWELLERY MOCKUP (Exact replica of Screenshot Card 4)
   ======================================================================= */
export function RivoMockup() {
  return (
    <div className="w-full bg-[#090b10] text-amber-100 text-[10.5px] select-none font-sans overflow-hidden leading-snug" dir="rtl">
      {/* Top Navbar */}
      <div className="bg-[#0e111a] border-b border-amber-500/20 px-3.5 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 flex items-center justify-center text-black font-extrabold text-[9px] shadow">
            R
          </div>
          <div>
            <span className="font-serif text-xs tracking-widest text-amber-200 font-bold">RIVO</span>
            <span className="block text-[6.5px] text-amber-400/80 font-mono">JEWELLERY</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2.5 text-[8.5px] text-zinc-300 font-serif">
          <span className="text-amber-400 font-bold">الرئيسية</span>
          <span>ذهب خالص</span>
          <span>مجوهرات الماس</span>
          <span>مناسبات</span>
          <span>أطقم هدايا</span>
        </div>

        <button className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-[7.5px] px-2 py-0.5 rounded shadow">
          تسوّق الآن
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative p-3.5 bg-gradient-to-r from-[#171b26] via-[#0d1017] to-[#08090d] flex items-center justify-between overflow-hidden border-b border-amber-500/20">
        <div className="max-w-[56%] space-y-1 z-10">
          <div className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded-full text-[7.5px] font-semibold">
            ✨ مجوهرات ريفو الملكية
          </div>
          <h2 className="text-sm sm:text-base font-serif font-extrabold text-white leading-tight">
            إبداعات ذهبية <span className="text-amber-400">فاخرة</span>
          </h2>
          <p className="text-[8.5px] text-zinc-400 leading-tight">
            مجموعة استثنائية من المصوغات الذهبية والماسية المصممة بأيدي كويتية ماهرة تجمع بين الأصالة والفخامة.
          </p>
          <div className="flex gap-1.5 pt-1">
            <button className="bg-gradient-to-r from-amber-500 to-amber-400 text-zinc-950 font-bold text-[8px] px-2.5 py-1 rounded shadow">
              استكشف العروض ←
            </button>
            <button className="bg-white/5 border border-amber-400/30 text-amber-200 text-[8px] px-2 py-1 rounded">
              تسوق الآن
            </button>
          </div>
        </div>

        {/* Hero image jewelry */}
        <div className="w-[40%] h-26 rounded-xl overflow-hidden relative shadow-xl border border-amber-500/30">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80" 
            alt="Gold & Diamond Jewelry" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-1 right-1 text-[7px] font-bold text-amber-400">
            عيار 18 &amp; 21
          </div>
        </div>
      </div>

      {/* Category Grid: تشكيلات ريفو الحصرية */}
      <div className="p-3 bg-[#111420] border-b border-amber-500/20">
        <div className="text-center text-[8.5px] font-bold text-amber-300 mb-2">
          مجموعة فريدة من المجوهرات المصممة — تشكيلات ريفو الحصرية
        </div>
        <div className="grid grid-cols-4 gap-1 text-center">
          {[
            { label: 'المصوغات الفضية', icon: '👑' },
            { label: 'أطقم هدايا', icon: '🎁' },
            { label: 'أقراط', icon: '✨' },
            { label: 'توزيعات الفضة', icon: '💎' }
          ].map((cat, i) => (
            <div key={i} className="p-1.5 rounded-lg bg-[#171b2b] border border-amber-500/20 hover:border-amber-400/40 transition-colors">
              <div className="text-sm">{cat.icon}</div>
              <div className="text-[7.5px] font-semibold text-zinc-300 mt-0.5">{cat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Product Feature (Earrings on velvet) */}
      <div className="p-2.5 bg-[#0d101a] border-b border-amber-500/20 flex items-center justify-between">
        <div className="max-w-[56%] space-y-0.5">
          <span className="text-[7px] text-amber-400 font-bold uppercase">إطلالة استثنائية</span>
          <h4 className="font-serif text-[9.5px] font-bold text-white">أطقم ريفو الحصرية</h4>
          <p className="text-[7.5px] text-zinc-400">
            تصاميم عصرية مفعمة بالبريق تميز حضورك في أرقى المناسبات والاحتفالات.
          </p>
          <div className="pt-0.5">
            <button className="bg-amber-500 text-zinc-950 font-bold text-[7px] px-2 py-0.5 rounded">
              اكتشفي المزيد
            </button>
          </div>
        </div>
        <div className="w-[38%] h-14 rounded-lg overflow-hidden border border-amber-500/30">
          <img 
            src="https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=300&q=80" 
            alt="Rivo Earrings" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Trust & Guarantees */}
      <div className="p-2 bg-[#06080d] flex items-center justify-between text-[7px] text-zinc-400">
        <div>✓ ضمان ذهب أصلي 100%</div>
        <div>✓ شهادات معتمدة عالمياً</div>
        <div>✓ شحن مجاني آمن ومؤمن</div>
      </div>
    </div>
  );
}

/* =======================================================================
   5. CODEXA AI & STARTUP PLATFORM MOCKUP (Left Card in screenshot)
   ======================================================================= */
export function CodexaMockup() {
  return (
    <div className="w-full bg-[#0a0e17] text-white text-[10.5px] select-none font-sans overflow-hidden leading-snug">
      {/* Top Navbar */}
      <div className="bg-[#101626] border-b border-indigo-500/20 px-3.5 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#5c60e6] flex items-center justify-center text-white font-bold text-[9px] shadow">
            ⚡
          </div>
          <div>
            <span className="font-bold text-xs tracking-wider text-white">CODEXA.MA</span>
            <span className="block text-[7px] text-indigo-400 font-mono">DeepSeek R1 Core</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[8px]">
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono border border-emerald-500/30">
            API: 99.98%
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className="p-3.5 bg-gradient-to-r from-[#141b30] via-[#0d1322] to-[#080c16] border-b border-indigo-500/20">
        <div className="inline-block px-1.5 py-0.5 rounded-full bg-[#5c60e6]/20 border border-[#5c60e6]/30 text-[#818cf8] text-[7.5px] font-mono mb-1">
          // AI PLATFORM ARCHITECTURE
        </div>
        <h2 className="text-sm font-bold text-white leading-tight">
          High Performance AI Engine &amp; DeepSeek R1
        </h2>
        <p className="text-[8.5px] text-zinc-400 mt-1 leading-tight">
          Real-time inference, RAG pipelines, resume screening automation, and distributed backend clusters.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-1.5 mt-2.5">
          <div className="p-1.5 rounded bg-black/40 border border-white/10 text-center">
            <div className="text-xs font-bold text-[#818cf8]">0.12s</div>
            <div className="text-[6.5px] text-zinc-400">Latency</div>
          </div>
          <div className="p-1.5 rounded bg-black/40 border border-white/10 text-center">
            <div className="text-xs font-bold text-emerald-400">10k+</div>
            <div className="text-[6.5px] text-zinc-400">Resumes/hr</div>
          </div>
          <div className="p-1.5 rounded bg-black/40 border border-white/10 text-center">
            <div className="text-xs font-bold text-amber-400">R1 AI</div>
            <div className="text-[6.5px] text-zinc-400">Optimized</div>
          </div>
        </div>
      </div>

      {/* Code / Terminal Box */}
      <div className="p-3 bg-[#06090f]">
        <div className="text-[7.5px] font-mono text-zinc-500 mb-1 flex items-center justify-between">
          <span>// CLUSTER STATUS</span>
          <span className="text-emerald-400">ONLINE</span>
        </div>
        <div className="p-2 rounded bg-black/60 border border-white/10 font-mono text-[7px] text-indigo-300 space-y-0.5">
          <div>&gt; deepseek-r1-engine --workers 8</div>
          <div>&gt; latency: 124ms | p99: 180ms</div>
          <div>&gt; vector store: 4.8M embeddings ready</div>
          <div className="text-emerald-400">&gt; all services healthy</div>
        </div>
      </div>
    </div>
  );
}
