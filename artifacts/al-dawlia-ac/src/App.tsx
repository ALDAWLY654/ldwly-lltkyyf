import { useEffect, useState } from 'react';
import { Accessibility, ArrowLeft, ArrowUpLeft, Bath, Car, Check, ChevronLeft, ChevronRight, ClipboardCheck, Fan, HardHat, MapPin, Menu, Phone, ShieldCheck, Snowflake, Star, Store, Wrench, X, ZoomIn } from 'lucide-react';

const whatsappNumber = '01000043453';
const landline = '5056568';
const whatsapp = 'https://wa.me/201000043453?text=' + encodeURIComponent('مرحباً، أود الاستفسار عن خدمات الدولية للتكييف.');
const estimateLink = 'https://wa.me/201000043453?text=' + encodeURIComponent('مرحباً، أود طلب مقايسة لخدمة تكييف. سأرسل تفاصيل الموقع أو صورة المكان.');
const mapsLink = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('الدولية لأعمال التكييف والتجارة، شارع علم الروم، بجوار المعهد الديني، أمام مسجد قراء، مرسى مطروح، محافظة مطروح');
const photos = [
  { src: '/projects/FB_IMG_1791013934654_1791028367488.jpg', title: 'تجهيز وحدات لمبنى سكني', caption: 'وحدات خارجية تحمل هوية الدولية' },
  { src: '/projects/FB_IMG_1791013888388_1791028367552.jpg', title: 'تركيب وحدات خارجية', caption: 'ترتيب عملي للمساحات الخارجية' },
  { src: '/projects/FB_IMG_1791013851729_1791028367588.jpg', title: 'تنفيذ لمبنى حديث', caption: 'تركيب على واجهة مبنى' },
  { src: '/projects/FB_IMG_1791013835262_1791028367627.jpg', title: 'أعمال تركيب ميدانية', caption: 'تنفيذ على واجهة مبنى سكني' },
  { src: '/projects/FB_IMG_1791013785715_1791028367809.jpg', title: 'تركيب داخلي', caption: 'وحدة حائطية داخل منزل' },
  { src: '/projects/FB_IMG_1791013906797_1791028367518.jpg', title: 'وحدات خارجية', caption: 'تثبيت على حوامل مناسبة' },
  { src: '/projects/FB_IMG_1791013779352_1791028367899.jpg', title: 'تفاصيل التركيب', caption: 'وحدة خارجية ميديا' },
  { src: '/projects/FB_IMG_1791013805912_1791028367716.jpg', title: 'أعمال تكييف للمباني', caption: 'لقطة من تنفيذات متنوعة' },
  { src: '/projects/FB_IMG_1791013815453_1791028367670.jpg', title: 'تجهيز حوامل الوحدات', caption: 'تفاصيل تجهيز مواقع التركيب' },
  { src: '/projects/FB_IMG_1791013798594_1791028367764.jpg', title: 'تجارة أجهزة التكييف', caption: 'أجهزة وتجهيزات من المعرض' },
  { src: '/projects/FB_IMG_1791013782048_1791028367854.jpg', title: 'تركيب وحدة خارجية', caption: 'تثبيت الوحدة على حامل جداري' },
  { src: '/projects/FB_IMG_1791013774786_1791028367947.jpg', title: 'تركيب وحدة داخلية', caption: 'تكييف حائطي داخل المنزل' },
];
const navItems = [['الرئيسية', '#home'], ['من نحن', '#about'], ['خدماتنا', '#services'], ['آراء العملاء', '#reviews'], ['أعمالنا', '#work'], ['الموقع', '#location'], ['اتصل بنا', '#contact']];
const services = [
  { icon: HardHat, number: '01', title: 'التأسيس', copy: 'تجهيز مسارات وتمديدات التكييف بما يناسب المكان قبل مرحلة التشطيب والتركيب.' },
  { icon: Snowflake, number: '02', title: 'التركيب', copy: 'تركيب وحدات التكييف الداخلية والخارجية، مع عناية بموقع الوحدة والتوصيلات.' },
  { icon: Wrench, number: '03', title: 'الصيانة', copy: 'فحص وصيانة أجهزة التكييف للمساعدة في استعادة أداء التبريد ومعالجة الأعطال.' },
  { icon: Store, number: '04', title: 'البيع والتوريد', copy: 'وكيل معتمد لمنتجات العربي، وموزّع لأجهزة ميديا وكاريير.' },
];
const processSteps = [
  ['نسمع احتياجك', 'تواصل معنا وشاركنا نوع المكان والخدمة التي تبحث عنها.'],
  ['نحدد التفاصيل', 'نراجع معك طبيعة العمل والأجهزة والموقع قبل الاتفاق على التنفيذ.'],
  ['ننفذ العمل', 'تأسيس أو تركيب أو صيانة، وفق ما تم الاتفاق عليه وباهتمام بالتفاصيل.'],
  ['نتابع معك', 'نبقى على تواصل للإجابة عن استفساراتك المتعلقة بالخدمة المنفذة.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId) return;
    requestAnimationFrame(() => document.getElementById(decodeURIComponent(targetId))?.scrollIntoView());
  }, []);

  useEffect(() => {
    if (activePhoto === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActivePhoto(null);
      if (event.key === 'ArrowLeft') setActivePhoto((current) => current === null ? null : (current + 1) % photos.length);
      if (event.key === 'ArrowRight') setActivePhoto((current) => current === null ? null : (current + photos.length - 1) % photos.length);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.style.overflow = ''; };
  }, [activePhoto]);

  const inquiryLink = (topic: string) => `https://wa.me/201000043453?text=${encodeURIComponent(`مرحباً، أود الاستفسار عن ${topic} لدى الدولية للتكييف.`)}`;

  return (
    <div className="site-shell" dir="rtl">
      <div className="topbar">
        <div className="wrap" style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <span>الدولية لأعمال التكييف والتجارة</span>
          <span>في مجال التكييف منذ 2006</span>
        </div>
      </div>
      <header className="header">
        <div className="wrap header-inner">
          <a className="brand" href="#home" aria-label="الدولية للتكييف، الرئيسية">
            <span className="brand-mark"><Fan size={25} strokeWidth={1.8}/></span>
            <span className="brand-name">الدولية للتكييف<span className="brand-sub">AL-DAWLIYA · لأعمال التكييف والتجارة</span></span>
          </a>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="التنقل الرئيسي">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <div className="head-actions">
            <a className="phone-link" href={`tel:${whatsappNumber}`} aria-label={`اتصل على ${whatsappNumber}`}><Phone size={16}/>{whatsappNumber}</a>
            <a className="button button-blue" href={whatsapp} target="_blank" rel="noreferrer">اطلب خدمة <ArrowLeft size={16}/></a>
          </div>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-photo"><img src={photos[0].src} alt="وحدات تكييف خارجية تحمل علامة الدولية على مبنى" fetchPriority="high"/></div>
          <div className="wrap">
            <div className="hero-copy">
              <div className="hero-kicker reveal"><span/> الدولية لأعمال التكييف والتجارة · منذ 2006</div>
              <h1 className="display reveal delay-1">راحة المكان<br/>تبدأ من <em>التفاصيل.</em></h1>
              <p className="reveal delay-2">منذ 2006، نقدم خدمات بيع وتأسيس وتركيب وصيانة أجهزة التكييف في مرسى مطروح والساحل الشمالي.</p>
              <div className="hero-buttons">
                <a className="button button-blue" href={estimateLink} target="_blank" rel="noreferrer">اطلب مقايسة عبر واتساب <ArrowLeft size={17}/></a>
                <a className="button button-line" href="#services">اكتشف خدماتنا <ArrowUpLeft size={17}/></a>
              </div>
              <div className="hero-note"><span className="note-icon"><ShieldCheck size={19}/></span><span>مقاولات تكييف للمنازل والمنشآت<br/>ومقايسات حسب احتياج الموقع</span></div>
            </div>
          </div>
          <div className="hero-stamp"><strong>الدولية</strong><small>لأعمال التكييف والتجارة</small></div>
        </section>

        <section className="proof-strip" aria-label="معلومات عن الشركة">
          <div className="wrap proof-inner">
            <div className="proof-item"><span className="proof-value">2006</span><span className="proof-label">بداية العمل في مجال التكييف</span></div>
            <div className="proof-item proof-rating"><span className="proof-value" dir="ltr">4.9 / 5</span><span className="proof-label"><span className="proof-stars" aria-label="تقييم مرتفع من خمس نجوم">{Array.from({length:5}, (_, index) => <Star key={index} size={13} fill="currentColor"/>)}</span> أكثر من 40 مراجعة على خرائط Google</span></div>
            <div className="proof-item"><MapPin size={21}/><span className="proof-label">مرسى مطروح<br/>والساحل الشمالي</span></div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap intro-grid">
            <div className="intro-copy">
              <span className="eyebrow">من نحن</span>
              <h2 className="display">خبرة في التكييف<br/>منذ 2006.</h2>
              <p>الدولية لأعمال التكييف والتجارة مقاول تكييف هواء يقدم البيع والتأسيس والتركيب والصيانة. نخدم المنازل والمنشآت في مرسى مطروح والساحل الشمالي، ونبدأ كل عمل بفهم احتياج المكان وتفاصيله.</p>
              <ul className="check-list">
                <li><span className="check"><Check size={14}/></span>خبرة عملية في المجال منذ عام 2006</li>
                <li><span className="check"><Check size={14}/></span>مقايسات عبر الإنترنت وخدمة في الموقع</li>
                <li><span className="check"><Check size={14}/></span>تواصل مباشر لتحديد احتياجك قبل التنفيذ</li>
              </ul>
              <a className="button button-blue" href="#contact">تواصل مع الفريق <ArrowLeft size={16}/></a>
            </div>
            <div className="intro-photo">
              <img src="/projects/FB_IMG_1791013851729_1791028367588.jpg" alt="فريق الدولية يعمل على تركيب تكييف بمبنى سكني"/>
              <div className="photo-caption"><strong>من أرض الواقع</strong><span>أعمال تركيب لمبنى سكني</span></div>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="wrap">
            <div className="section-head">
              <div><span className="eyebrow">ما نقدمه</span><h2 className="display">كل ما يحتاجه<br/>التكييف في مكانك.</h2></div>
              <p>اختر الخدمة التي تحتاجها، وتواصل معنا لنفهم تفاصيلها ونساعدك في الخطوة المناسبة.</p>
            </div>
            <div className="service-grid">
              {services.map(({icon: Icon, number, title, copy}) => <article className="service-card" key={number}>
                <span className="service-num">{number} / 04</span>
                <span className="service-icon"><Icon size={22} strokeWidth={1.7}/></span>
                <h3>{title}</h3><p>{copy}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section className="band">
          <div className="wrap band-inner">
            <div><h2 className="display">تحتاج جهاز تكييف أو مستلزماته؟</h2><p>الدولية وكيل معتمد لمنتجات العربي <bdi dir="ltr">ELARABY</bdi>، وموزّع لأجهزة <bdi dir="ltr">Midea</bdi> و<bdi dir="ltr">Carrier</bdi>. تواصل لمعرفة الأجهزة المتاحة.</p></div>
            <a className="button button-light" href={inquiryLink('توريد أجهزة ومستلزمات التكييف')} target="_blank" rel="noreferrer">استفسر عن التوريد <ArrowLeft size={16}/></a>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="wrap process-layout">
            <div className="process-intro">
              <span className="eyebrow">خطوات العمل</span>
              <h2 className="display">من أول سؤال<br/>لآخر تفصيلة.</h2>
              <p>كل مكان له احتياجه. نبدأ بالاستماع، ونوضح المطلوب قبل التنفيذ حتى تكون الصورة واضحة من البداية.</p>
              <a className="button button-line" href={whatsapp} target="_blank" rel="noreferrer">ابدأ محادثة <ArrowLeft size={16}/></a>
            </div>
            <div className="process-list">
              {processSteps.map(([title, copy], index) => <article className="process-row" key={title}>
                <span className="number">0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><ClipboardCheck size={20}/>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section reviews" id="reviews">
          <div className="wrap">
            <div className="section-head">
              <div><span className="eyebrow">ثقة العملاء</span><h2 className="display">تجربة يقدّرها عملاؤنا.</h2></div>
              <p>بحسب بيانات التقييمات التي شاركتها الشركة، تقييمها 4.9 من 5 على خرائط Google من أكثر من 40 مراجعة.</p>
            </div>
            <div className="reviews-overview">
              <div className="reviews-score"><strong dir="ltr">4.9</strong><span>/ 5</span><div className="proof-stars" aria-label="4.9 من 5">{Array.from({length:5}, (_, index) => <Star key={index} size={17} fill="currentColor"/>)}</div><small>أكثر من 40 مراجعة على خرائط Google</small></div>
              <div className="review-grid">
                <article className="review-card"><h3>التزام وحسن تعامل</h3><p>تتكرر في آراء العملاء الإشادة بالالتزام بالمواعيد وحسن المعاملة.</p></article>
                <article className="review-card"><h3>اهتمام بجودة الخامات</h3><p>أشار أحد العملاء إلى استخدام خامات عالية الجودة، ومنها مواسير نحاس فئة 4.</p></article>
                <article className="review-card"><h3>علاقة طويلة مع العملاء</h3><p>ذكر عملاء تعاملهم مع الشركة لسنوات متعددة، من 4 إلى 10 سنوات، مع استمرار رضاهم.</p></article>
              </div>
            </div>
            <div className="team-mentions"><strong>من فريق الشركة الذين ذكرهم العملاء:</strong><span>المهندس صلاح، المهندس وائل، المهندس عبدالله، والأستاذ مهدي صديق.</span></div>
            <a className="reviews-link" href={mapsLink} target="_blank" rel="noreferrer">عرض موقع الشركة على خرائط Google <ArrowLeft size={15}/></a>
          </div>
        </section>

        <section className="section gallery-section" id="work">
          <div className="wrap">
            <div className="section-head">
              <div><span className="eyebrow">من أعمالنا</span><h2 className="display">صور من تنفيذاتنا.</h2></div>
              <p>نماذج حقيقية من أعمال تأسيس وتركيب أجهزة التكييف، للمنازل والمباني.</p>
            </div>
            <div className="gallery-grid">
              {photos.slice(0,5).map((photo, index) => <button className="gallery-item" type="button" key={photo.src} onClick={() => setActivePhoto(index)} aria-label={`عرض صورة: ${photo.title}`} data-testid={`gallery-photo-${index}`}>
                <img src={photo.src} alt={photo.title} loading="lazy"/><span className="gallery-label">{photo.title}<small>{photo.caption}</small></span><span className="gallery-open"><ZoomIn size={17}/></span>
              </button>)}
            </div>
            <div style={{textAlign:'center',marginTop:28}}>
              <button className="button button-line" type="button" onClick={() => setActivePhoto(5)}>شاهد المزيد من الصور <ArrowLeft size={16}/></button>
            </div>
          </div>
        </section>

        <section className="section brand-story">
          <div className="wrap story-grid">
            <div className="story-image"><img src="/projects/FB_IMG_1791013906797_1791028367518.jpg" alt="وحدات تكييف خارجية مثبتة بعناية على واجهة مبنى"/></div>
            <div className="story-copy">
              <span className="eyebrow">تركيب مدروس</span>
              <h2 className="display">التنفيذ الجيد<br/>يُرى في التفاصيل.</h2>
              <p>اختيار موقع الوحدة الخارجية، تثبيت الحوامل، وتنظيم التوصيلات — تفاصيل عملية تصنع فرقاً في شكل التركيب وسهولة الوصول إليه.</p>
              <p>في الدولية نهتم بأن يكون العمل مناسباً للمكان، سواء كان جهازاً واحداً في منزل أو أكثر من وحدة في مبنى.</p>
              <div className="story-quote">أرسل لنا صورة المكان أو تفاصيل احتياجك، وسنبدأ معك بمحادثة واضحة حول الخدمة المناسبة.</div>
            </div>
          </div>
        </section>

        <section className="section location" id="location">
          <div className="wrap location-grid">
            <div className="location-copy">
              <span className="eyebrow">مقر الشركة</span>
              <h2 className="display">نستقبلكم في<br/>مرسى مطروح.</h2>
              <p>شارع علم الروم، بجوار المعهد الديني، أمام مسجد قراء، قسم مرسى مطروح، محافظة مطروح.</p>
              <a className="button button-blue" href={mapsLink} target="_blank" rel="noreferrer">افتح الموقع على الخريطة <ArrowLeft size={16}/></a>
              <div className="coverage-note"><MapPin size={18}/><span>تتوفر خدمات الشركة في مرسى مطروح والساحل الشمالي.</span></div>
            </div>
            <div className="location-facilities">
              <span className="eyebrow">مرافق المقر</span>
              <article><Car size={20}/><div><h3>موقف سيارات مجاني</h3><p>موقف متاح لزوار المقر.</p></div></article>
              <article><Accessibility size={20}/><div><h3>أماكن جلوس مهيأة</h3><p>أماكن جلوس تسهّل الوصول لمستخدمي الكراسي المتحركة.</p></div></article>
              <article><Bath size={20}/><div><h3>دورة مياه</h3><p>متاحة داخل الموقع.</p></div></article>
              <div className="brand-note"><strong>وكيل معتمد لـ <bdi dir="ltr">ELARABY</bdi></strong><span>وموزّع لأجهزة <bdi dir="ltr">Midea</bdi> و<bdi dir="ltr">Carrier</bdi>.</span></div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">تواصل معنا</span>
              <h2>خلّينا نبدأ<br/>من احتياجك.</h2>
              <p>لطلب مقايسة أو الاستفسار عن البيع والتأسيس والتركيب والصيانة، أرسل تفاصيل الموقع أو صور المكان عبر واتساب، أو تواصل معنا مباشرة.</p>
              <div className="contact-options">
                <a className="button button-light" href={estimateLink} target="_blank" rel="noreferrer">اطلب مقايسة عبر واتساب <ArrowLeft size={16}/></a>
                <a className="button" style={{border:'1px solid #ffffff69',color:'white'}} href={`tel:${whatsappNumber}`}><Phone size={16}/> اتصل الآن</a>
              </div>
            </div>
            <div className="contact-detail">
              <small>موبايل وواتساب</small>
              <a href={`tel:${whatsappNumber}`} style={{fontSize:19}}><Phone size={18}/>{whatsappNumber}</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" style={{fontSize:15}}>ابدأ محادثة واتساب <ArrowLeft size={16}/></a>
              <hr/>
              <small>رقم إضافي</small>
              <a href={`tel:${landline}`} style={{fontSize:19}}><Phone size={18}/>{landline}</a>
              <hr/>
              <small>عنوان المقر</small>
              <a className="address-link" href={mapsLink} target="_blank" rel="noreferrer"><MapPin size={18}/>شارع علم الروم، بجوار المعهد الديني، أمام مسجد قراء، مرسى مطروح</a>
              <p>الدولية لأعمال التكييف والتجارة<br/>بيع · تأسيس · تركيب · صيانة</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrap footer-inner">
          <span className="footer-brand">الدولية للتكييف</span>
          <span>لأعمال التكييف والتجارة · منذ 2006</span>
          <a href={`tel:${whatsappNumber}`}>{whatsappNumber}</a>
          <a href={mapsLink} target="_blank" rel="noreferrer">مرسى مطروح · شارع علم الروم</a>
          <span>© الدولية للتكييف</span>
        </div>
      </footer>
      <div className="mobile-bar" aria-label="خيارات التواصل">
        <a className="button button-blue" href={whatsapp} target="_blank" rel="noreferrer">واتساب <ArrowLeft size={15}/></a>
        <a className="button button-line" href={`tel:${whatsappNumber}`}><Phone size={15}/> اتصال</a>
      </div>
      {activePhoto !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="معرض الصور" onClick={() => setActivePhoto(null)}>
        <button className="lightbox-close" type="button" aria-label="إغلاق الصورة" onClick={() => setActivePhoto(null)}><X size={23}/></button>
        <button className="lightbox-arrow prev" type="button" aria-label="الصورة التالية" onClick={(event) => {event.stopPropagation();setActivePhoto((activePhoto + 1) % photos.length);}}><ChevronRight size={24}/></button>
        <img src={photos[activePhoto].src} alt={photos[activePhoto].title} onClick={(event) => event.stopPropagation()}/>
        <span className="lightbox-caption">{photos[activePhoto].title} — {photos[activePhoto].caption}</span>
        <button className="lightbox-arrow next" type="button" aria-label="الصورة السابقة" onClick={(event) => {event.stopPropagation();setActivePhoto((activePhoto + photos.length - 1) % photos.length);}}><ChevronLeft size={24}/></button>
      </div>}
    </div>
  );
}

export default App;