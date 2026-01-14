import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    EN: {
        translation: {
            navbar: {
                home: "Home",
                about: "About Us",
                services: "Services",
                contact: "Contact Us"
            },
            about: {
                title: "About Us",
                subtitle: "Learn more about our company and our mission.",
                content: "Nova Service is a leading provider of professional cleaning and maintenance solutions. We are dedicated to delivering high-quality services to both residential and commercial clients."
            },
            home: {
                title: "PREMIER",
                titleHighlight: "CLEANING",
                titleEnd: "SOLUTION",
                reviewText: "BEST CLEANING SERVICES FOR YOUR BUSINESS AND HOUSE",
                rating: "4.5",
                cta: "GET OUR SERVICE",
                minimal: "MINIMAL",
                feature: "Feature",
                description: "Description of the feature",
                serviceType: "Service Type",
                selectDate: "Select Date",
                seeDetails: "See Details",
                serviceOptions: {
                    residential: "Residential Cleaning",
                    commercial: "Commercial Cleaning",
                    deep: "Deep Cleaning",
                    move: "Move In/Out"
                },
                work: {
                    title: "OUR",
                    titleHighlight: "WORK",
                    titleEnd: "THAT WE DO",
                    description: "discover the joy of a pristine space with SupremeShine Cleaning Services. Contact us Today to schedule your cleaning appointment and experience",
                    item01: "COMMERCIAL CLEANING",
                    item02: "REGULAR CLEANING",
                    item03: "KITCHEN CLEANING",
                    explore: "25+ SERVICES YOU CAN EXPLORE"
                }
            },
            footer: {
                premier: "PREMIER",
                cleaning: "CLEANING",
                copyright: "@NOVA SERVICE. ALL RIGHTS RESERVED",
                design: "DESIGN BY ",
                designer: "LEPTOTECH.COM"
            },
            services: {
                title: "Our Services",
                subtitle: "Curated Cleaning Services",
                expertise: "Our Expertise",
                hero: {
                    title: "Experience Our Premium Cleaning Services",
                    subtitle: "Discover the perfect cleaning solution for your home and business. tailored to your needs with excellence in every detail.",
                    cta: "Book Now",
                    learnMore: "Learn More",
                    trusted: "Trusted by 500+ Clients"
                },
                categories: {
                    all: "All",
                    residential: "Residential",
                    commercial: "Commercial",
                    specialized: "Specialized",
                    industrial: "Industrial",
                    outdoor: "Outdoor",
                    sanitation: "Sanitation",
                    manpower: "Manpower"
                },
                items: {
                    residential: {
                        title: "Residential Cleaning",
                        description: "Comprehensive cleaning solutions for homes of all sizes. From cozy apartments to expansive estates, we ensure every corner sparkles.",
                        features: ["House cleaning", "Apartment cleaning", "Deep cleaning", "Move-in / Move-out cleaning"]
                    },
                    commercial: {
                        title: "Commercial Cleaning",
                        description: "Maintain a professional image with our office and corporate cleaning services. We create healthy, productive workspaces.",
                        features: ["Office cleaning", "Corporate building cleaning", "Bank & showroom cleaning"]
                    },
                    specialized: {
                        title: "Specialized Cleaning",
                        description: "Expert care for your valuable assets. Our specialized techniques revive carpets, upholstery, and delicate surfaces.",
                        features: ["Window cleaning", "Carpet & upholstery cleaning", "Sofa & mattress cleaning", "Floor polishing"]
                    },
                    industrial: {
                        title: "Industrial Cleaning",
                        description: "Heavy-duty cleaning for factories and warehouses. We handle specific industrial requirements and safety standards.",
                        features: ["Factory cleaning", "Warehouse cleaning", "Machine & equipment cleaning"]
                    },
                    outdoor: {
                        title: "Outdoor & Maintenance",
                        description: "Enhance your curb appeal with our outdoor maintenance. We keep your exterior areas clean, safe, and welcoming.",
                        features: ["Pressure washing", "Garden / yard cleaning", "Snow removal / winter services"]
                    },
                    sanitation: {
                        title: "Sanitation & Hygiene",
                        description: "Protect health with our thorough sanitization services. We use certified methods to eliminate pathogens and pests.",
                        features: ["Disinfection & sanitization", "Pest control cleaning", "Post-COVID / bio-cleaning"]
                    },
                    manpower: {
                        title: "Man Power Supply",
                        description: "Reliable staffing solutions for your facility needs. We provide skilled and trained personnel for various roles.",
                        features: ["Skilled labor supply", "General cleaning staff", "Maintenance personnel"]
                    }
                },
                whyChoose: {
                    title: "Why Choose Us",
                    subtitle: "We deliver excellence in every swipe and scrub.",
                    heading: "Excellence in",
                    headingItalic: "Every Detail.",
                    discover: "Discover",
                    features: [
                        { title: "Eco-Friendly", desc: "We use sustainable products safe for your family and pets." },
                        { title: "Expert Staff", desc: "Our team is professionally trained and background checked." },
                        { title: "Satisfaction Guaranteed", desc: "If you're not happy, we'll make it right." }
                    ]
                },
                process: {
                    title: "Our Process",
                    subtitle: "Simple steps to a cleaner environment.",
                    steps: [
                        { title: "Book Online", desc: "Choose your service and preferred time." },
                        { title: "We Clean", desc: "Our experts arrive and make your space shine." },
                        { title: "You Relax", desc: "Enjoy your fresh, clean environment." }
                    ]
                },
                promise: {
                    title: "Our Promise",
                    heading: "Professional Standards You Can Trust.",
                    desc: "We balance our premium aesthetics with rigorous operational standards. Safety, reliability, and quality are the pillars of our service.",
                    stats: [
                        { value: "100%", label: "Insured" },
                        { value: "24/7", label: "Support" },
                        { value: "50+", label: "Experts" }
                    ],
                    features: [
                        { title: "Safety First", desc: "Rigorous background checks and ongoing safety training for all staff." },
                        { title: "Eco-Conscious", desc: "We exclusively use biodegradable and non-toxic cleaning agents." },
                        { title: "Quality Control", desc: "Regular site inspections and satisfaction follow-ups ensure consistency." },
                        { title: "Fully Insured", desc: "Comprehensive liability coverage for your complete peace of mind." }
                    ]
                },
                testimonials: {
                    title: "Client Success Stories",
                    subtitle: "Real feedback from our satisfied partners.",
                    items: [
                        { category: 'Residential', name: "Sarah M.", role: "Homeowner", text: "Absolutely stunning service. My house has never looked this clean! They paid attention to every little detail." },
                        { category: 'Residential', name: "David L.", role: "Tenant", text: "The move-out cleaning was perfect. Got my full deposit back thanks to their hard work." },
                        { category: 'Commercial', name: "James P.", role: "Office Manager", text: "Professional, reliable, and thorough. Highly recommended for corporate needs. Our office feels brand new." },
                        { category: 'Commercial', name: "TechStart Inc.", role: "Startup", text: "Great team. They clean our workspace every evening without disrupting our late-night shifts." },
                        { category: 'Specialized', name: "Emily R.", role: "Restaurant Owner", text: "They deep cleaned our kitchen to perfection. Passed inspection with flying colors." },
                        { category: 'Specialized', name: "Hotel Grand", role: "Manager", text: "Our carpets look impeccable. The upholstery cleaning brought our lobby furniture back to life." },
                        { category: 'Industrial', name: "Manufacturing Co.", role: "Plant Supervisor", text: "Strict adherence to safety protocols. They handle our heavy machinery cleaning with great expertise." },
                        { category: 'Outdoor', name: "Green Gardens HOA", role: "Board Member", text: "Our community walkways and driveways are spotless after their pressure washing service." },
                        { category: 'Sanitation', name: "City Clinic", role: "Administrator", text: "Critical sanitation services we rely on. Their disinfection standards are medical-grade." },
                        { category: 'Manpower', name: "Event Horizon", role: "Event Planner", text: "Provided excellent support staff for our annual conference. Professional and well-uniformed." }
                    ]
                },
                faq: {
                    title: "Frequently Asked Questions",
                    subtitle: "Find answers to your specific service questions.",
                    stillHaveQuestions: "Still have questions?",
                    contactSupport: "Contact our support team 24/7 for immediate assistance.",
                    noGeneric: "No generic FAQs for this specific category found.",
                    items: [
                        { category: 'All', q: "Are your cleaners insured?", a: "Yes, all our staff are fully insured and background-checked for your peace of mind." },
                        { category: 'All', q: "How do I book a service?", a: "You can book directly through our website or give us a call for a custom quote." },
                        { category: 'Residential', q: "Do I need to be home during the cleaning?", a: "No, as long as we have access to your home, you can enjoy your day while we clean." },
                        { category: 'Residential', q: "Do you bring your own supplies?", a: "Yes, we bring all necessary high-quality, eco-friendly cleaning supplies and equipment." },
                        { category: 'Commercial', q: "Can you clean after business hours?", a: "Absolutely. We offer flexible scheduling, including evenings and weekends, to minimize disruption." },
                        { category: 'Commercial', q: "Do you offer contract rates?", a: "Yes, we have customized contract plans for regular commercial cleaning needs." },
                        { category: 'Specialized', q: "How long does carpet drying take?", a: "Typically 4-6 hours, depending on humidity and airflow. We use high-speed fans to accelerate the process." },
                        { category: 'Industrial', q: "Do your staff have safety certifications?", a: "Yes, our industrial team is OSHA certified and trained in hazardous material handling." },
                        { category: 'Outdoor', q: "Is your pressure washing safe for old brick?", a: "We adjust pressure levels to ensure effective cleaning without damaging sensitive surfaces." },
                        { category: 'Manpower', q: "What distinguishes your staff?", a: "Our manpower is rigorously screened, trained in hospitality and safety, and uniformly presented." }
                    ]
                },
                ctaSection: {
                    title: "Ready to get started?",
                    subtitle: "Book your service today and experience the difference.",
                    button: "Book Now"
                }
            },
            contact: {
                title: "Contact Us",
                subtitle: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
                name: "Name",
                namePlaceholder: "Your Name",
                email: "Email",
                emailPlaceholder: "your@email.com",
                message: "Message",
                messagePlaceholder: "How can we help?",
                send: "Send Message"
            }
        }
    },
    DE: {
        translation: {
            navbar: {
                home: "Startseite",
                about: "Über uns",
                services: "Dienstleistungen",
                contact: "Kontakt"
            },
            about: {
                title: "Über uns",
                subtitle: "Erfahren Sie mehr über unser Unternehmen und unsere Mission.",
                content: "Nova Service ist ein führender Anbieter von professionellen Reinigungs- und Wartungslösungen. Wir widmen uns der Bereitstellung hochwertiger Dienstleistungen für Privat- und Geschäftskunden."
            },
            home: {
                title: "PREMIER",
                titleHighlight: "REINIGUNG",
                titleEnd: "LÖSUNG",
                reviewText: "BESTE REINIGUNGSDIENSTE FÜR IHR UNTERNEHMEN UND ZUHAUSE",
                rating: "4.5",
                cta: "SERVICE BUCHEN",
                minimal: "MINIMAL",
                feature: "Merkmal",
                description: "Beschreibung des Merkmals",
                serviceType: "Dienstleistungstyp",
                selectDate: "Datum wählen",
                seeDetails: "Details sehen",
                serviceOptions: {
                    residential: "Privatreinigung",
                    commercial: "Gewerbereinigung",
                    deep: "Tiefenreinigung",
                    move: "Einzug/Auszug"
                },
                work: {
                    title: "UNSERE",
                    titleHighlight: "ARBEIT",
                    titleEnd: "DIE WIR TUN",
                    description: "Entdecken Sie die Freude an einem makellosen Raum mit SupremeShine Cleaning Services. Kontaktieren Sie uns noch heute, um Ihren Reinigungstermin zu vereinbaren.",
                    item01: "GEWERBEREINIGUNG",
                    item02: "REGELMÄSSIGE REINIGUNG",
                    item03: "KÜCHENREINIGUNG",
                    explore: "25+ DIENSTLEISTUNGEN ENTDECKEN"
                }
            },
            footer: {
                premier: "PREMIER",
                cleaning: "REINIGUNG",
                copyright: "@NOVA SERVICE. ALLE RECHTE VORBEHALTEN",
                design: "DESIGN VON ",
                designer: "LEPTOTECH.COM"
            },
            services: {
                title: "Unsere Dienstleistungen",
                subtitle: "Kuratierte Reinigungsdienste",
                expertise: "Unsere Kompetenz",
                hero: {
                    title: "Erleben Sie unsere Premium-Reinigungsdienste",
                    subtitle: "Entdecken Sie die perfekte Reinigungslösung für Ihr Zuhause und Ihr Unternehmen. Maßgeschneidert auf Ihre Bedürfnisse mit Exzellenz in jedem Detail.",
                    cta: "Jetzt buchen",
                    learnMore: "Mehr erfahren",
                    trusted: "Vertraut von 500+ Kunden"
                },
                categories: {
                    all: "Alle",
                    residential: "Privat",
                    commercial: "Gewerblich",
                    specialized: "Spezialisiert",
                    industrial: "Industriell",
                    outdoor: "Außenbereich",
                    sanitation: "Sanitär",
                    manpower: "Personal"
                },
                items: {
                    residential: {
                        title: "Privatreinigung",
                        description: "Umfassende Reinigungslösungen für Haushalte aller Größen. Von gemütlichen Wohnungen bis zu weitläufigen Anwesen sorgen wir dafür, dass jede Ecke funkelt.",
                        features: ["Hausreinigung", "Wohnungsreinigung", "Grundreinigung", "Umzugsreinigung"]
                    },
                    commercial: {
                        title: "Gewerbliche Reinigung",
                        description: "Pflegen Sie ein professionelles Image mit unseren Büro- und Firmenreinigungsdiensten. Wir schaffen gesunde, produktive Arbeitsbereiche.",
                        features: ["Büroreinigung", "Firmengebäudereinigung", "Bank- & Ausstellungsraumreinigung"]
                    },
                    specialized: {
                        title: "Spezialreinigung",
                        description: "Expertenpflege für Ihre wertvollen Vermögenswerte. Unsere spezialisierten Techniken beleben Teppiche, Polstermöbel und empfindliche Oberflächen.",
                        features: ["Fensterreinigung", "Teppich- & Polsterreinigung", "Sofa- & Matratzenreinigung", "Bodenpolitur"]
                    },
                    industrial: {
                        title: "Industriereinigung",
                        description: "Schwerlastreinigung für Fabriken und Lagerhallen. Wir kümmern uns um spezifische industrielle Anforderungen und Sicherheitsstandards.",
                        features: ["Fabrikreinigung", "Lagerreinigung", "Maschinen- & Anlagenreinigung"]
                    },
                    outdoor: {
                        title: "Außenbereich & Wartung",
                        description: "Verbessern Sie Ihre Außenwirkung mit unserer Außenwartung. Wir halten Ihre Außenbereiche sauber, sicher und einladend.",
                        features: ["Hochdruckreinigung", "Garten- / Hofreinigung", "Schneeräumung / Winterdienste"]
                    },
                    sanitation: {
                        title: "Hygiene & Desinfektion",
                        description: "Schützen Sie die Gesundheit mit unseren gründlichen Desinfektionsdiensten. Wir verwenden zertifizierte Methoden.",
                        features: ["Desinfektion & Hygiene", "Schädlingsbekämpfung", "Post-COVID / Bioreinigung"]
                    },
                    manpower: {
                        title: "Personalbereitstellung",
                        description: "Zuverlässige Personallösungen für Ihre Gebäudeanforderungen. Wir stellen qualifiziertes und geschultes Personal bereit.",
                        features: ["Fachkräftebereitstellung", "Allgemeines Reinigungspersonal", "Wartungspersonal"]
                    }
                },
                whyChoose: {
                    title: "Warum uns wählen",
                    subtitle: "Wir liefern Exzellenz bei jedem Wischen und Schrubben.",
                    heading: "Exzellenz in",
                    headingItalic: "jedem Detail.",
                    discover: "Entdecken",
                    features: [
                        { title: "Umweltfreundlich", desc: "Wir verwenden nachhaltige Produkte, die sicher für Ihre Familie und Haustiere sind." },
                        { title: "Expertenpersonal", desc: "Unser Team ist professionell ausgebildet und hintergrundüberprüft." },
                        { title: "Zufriedenheit garantiert", desc: "Wenn Sie nicht zufrieden sind, machen wir es wieder gut." }
                    ]
                },
                process: {
                    title: "Unser Prozess",
                    subtitle: "Einfache Schritte zu einer saubereren Umgebung.",
                    steps: [
                        { title: "Online buchen", desc: "Wählen Sie Ihren Service und Ihre bevorzugte Zeit." },
                        { title: "Wir reinigen", desc: "Unsere Experten kommen und lassen Ihren Raum strahlen." },
                        { title: "Sie entspannen", desc: "Genießen Sie Ihre frische, saubere Umgebung." }
                    ]
                },
                promise: {
                    title: "Unser Versprechen",
                    heading: "Professionelle Standards, denen Sie vertrauen können.",
                    desc: "Wir gleichen unsere erstklassige Ästhetik mit strengen betrieblichen Standards aus. Sicherheit, Zuverlässigkeit und Qualität sind die Säulen unseres Service.",
                    stats: [
                        { value: "100%", label: "Versichert" },
                        { value: "24/7", label: "Support" },
                        { value: "50+", label: "Experten" }
                    ],
                    features: [
                        { title: "Sicherheit zuerst", desc: "Strenge Hintergrundprüfungen und laufende Sicherheitsschulungen." },
                        { title: "Umweltbewusst", desc: "Wir verwenden ausschließlich biologisch abbaubare Reinigungsmittel." },
                        { title: "Qualitätskontrolle", desc: "Regelmäßige Inspektionen und Zufriedenheitsnachverfolgung." },
                        { title: "Voll versichert", desc: "Umfassender Haftpflichtschutz für Ihre vollkommene Sicherheit." }
                    ]
                },
                testimonials: {
                    title: "Kundenerfolgsgeschichten",
                    subtitle: "Echtes Feedback von unseren zufriedenen Partnern.",
                    items: [
                        { category: 'Residential', name: "Sarah M.", role: "Hausbesitzerin", text: "Absolut atemberaubender Service. Mein Haus sah noch nie so sauber aus! Sie haben auf jedes kleine Detail geachtet." },
                        { category: 'Residential', name: "David L.", role: "Mieter", text: "Die Umzugsreinigung war perfekt. Habe meine volle Kaution zurückbekommen." },
                        { category: 'Commercial', name: "James P.", role: "Büroleiter", text: "Professionell, zuverlässig und gründlich. Sehr empfehlenswert für Unternehmensbedürfnisse." },
                        { category: 'Commercial', name: "TechStart Inc.", role: "Startup", text: "Tolles Team. Sie reinigen unseren Arbeitsbereich jeden Abend, ohne unsere Spätschichten zu stören." },
                        { category: 'Specialized', name: "Emily R.", role: "Restaurantbesitzerin", text: "Sie haben unsere Küche perfekt grundgereinigt. Inspektion mit Bravour bestanden." },
                        { category: 'Specialized', name: "Hotel Grand", role: "Manager", text: "Unsere Teppiche sehen tadellos aus. Die Polsterreinigung hat unsere Lobbymöbel zum Leben erweckt." },
                        { category: 'Industrial', name: "Manufacturing Co.", role: "Werksleiter", text: "Strikte Einhaltung von Sicherheitsprotokollen. Sie erledigen unsere Maschinenreinigung mit großer Fachkompetenz." },
                        { category: 'Outdoor', name: "Green Gardens HOA", role: "Vorstandsmitglied", text: "Unsere Gemeinschaftswege und Einfahrten sind nach ihrem Hochdruckreinigungsservice makellos." },
                        { category: 'Sanitation', name: "City Clinic", role: "Administrator", text: "Kritische Desinfektionsdienste, auf die wir uns verlassen. Ihre Standards sind medizinisch einwandfrei." },
                        { category: 'Manpower', name: "Event Horizon", role: "Eventplaner", text: "Stellten exzellentes Supportpersonal für unsere Jahreskonferenz bereit. Professionell und gut uniformiert." }
                    ]
                },
                faq: {
                    title: "Häufig gestellte Fragen",
                    subtitle: "Finden Sie Antworten auf Ihre spezifischen Fragen.",
                    stillHaveQuestions: "Haben Sie noch Fragen?",
                    contactSupport: "Kontaktieren Sie unser Support-Team rund um die Uhr für sofortige Hilfe.",
                    noGeneric: "Keine allgemeinen FAQs für diese spezifische Kategorie gefunden.",
                    items: [
                        { category: 'All', q: "Sind Ihre Reinigungskräfte versichert?", a: "Ja, alle unsere Mitarbeiter sind voll versichert und hintergrundüberprüft." },
                        { category: 'All', q: "Wie buche ich einen Service?", a: "Sie können direkt über unsere Website buchen oder uns für ein individuelles Angebot anrufen." },
                        { category: 'Residential', q: "Muss ich während der Reinigung zu Hause sein?", a: "Nein, solange wir Zugang haben, können Sie Ihren Tag genießen." },
                        { category: 'Residential', q: "Bringen Sie Ihre eigenen Mittel mit?", a: "Ja, wir bringen alle notwendigen hochwertigen, umweltfreundlichen Reinigungsmittel und Geräte mit." },
                        { category: 'Commercial', q: "Können Sie nach Geschäftsschluss reinigen?", a: "Absolut. Wir bieten flexible Planung, einschließlich Abenden und Wochenenden." },
                        { category: 'Commercial', q: "Bieten Sie Vertragstarife an?", a: "Ja, wir haben maßgeschneiderte Vertragspläne für regelmäßige gewerbliche Reinigungsbedarfe." },
                        { category: 'Specialized', q: "Wie lange dauert das Trocknen von Teppichen?", a: "Normalerweise 4-6 Stunden. Wir verwenden Hochgeschwindigkeitslüfter, um den Prozess zu beschleunigen." },
                        { category: 'Industrial', q: "Hat Ihr Personal Sicherheitszertifizierungen?", a: "Ja, unser Industrieteam ist zertifiziert und geschult im Umgang mit Gefahrstoffen." },
                        { category: 'Outdoor', q: "Ist die Hochdruckreinigung sicher für alte Ziegel?", a: "Wir passen den Druck an, um eine effektive Reinigung ohne Beschädigung empfindlicher Oberflächen zu gewährleisten." },
                        { category: 'Manpower', q: "Was zeichnet Ihr Personal aus?", a: "Unser Personal ist streng überprüft, in Gastfreundschaft und Sicherheit geschult und einheitlich präsentiert." }
                    ]
                },
                ctaSection: {
                    title: "Bereit anzufangen?",
                    subtitle: "Buchen Sie Ihren Service noch heute und erleben Sie den Unterschied.",
                    button: "Jetzt buchen"
                }
            },
            contact: {
                title: "Kontaktieren Sie uns",
                subtitle: "Wir freuen uns, von Ihnen zu hören. Senden Sie uns eine Nachricht und wir antworten so schnell wie möglich.",
                name: "Name",
                namePlaceholder: "Ihr Name",
                email: "E-Mail",
                emailPlaceholder: "ihre@email.com",
                message: "Nachricht",
                messagePlaceholder: "Wie können wir helfen?",
                send: "Nachricht senden"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'EN',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
