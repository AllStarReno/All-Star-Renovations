import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import AIChat from './AIChat';
import { Star, CheckCircle2, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Section } from '../types';

type LocationService = {
  title: string;
  description: string;
  features: string[];
  linkAnchorText: string;
};

type LocationData = {
  id: string;
  name: string;
  state: string;
  desc: string;
  services: LocationService[];
  coordinates: { x: number; y: number };
  postalCode: string;
};

const locations: LocationData[] = [
  { 
    id: 'conway', 
    name: 'Conway', 
    state: 'AR',
    postalCode: '72032',
    desc: 'As Conway\'s premier hometown bathroom remodeling contractor, we provide expert shower replacements, tub-to-shower conversions, and walk-in tubs tailored to Faulkner County homeowners.',
    coordinates: { x: 35, y: 35 },
    services: [
      {
        title: 'Conway Bathroom Remodeling & Conversions',
        description: 'Transform your Conway home with our high-end acrylic and tile bathroom renovations. From master suites to efficient guest bath tub-to-shower conversions, we complete projects in 1-2 days.',
        features: ['Conway Tub-to-Shower Conversions', 'Custom Walk-In Showers', 'Aging-in-Place Bathrooms', 'Mold-Resistant Acrylic Wall Systems'],
        linkAnchorText: 'Explore Conway Shower Replacements'
      },
      {
        title: 'Walk-In Tubs & Hydrotherapy in Conway',
        description: 'Upgrade to a safe, therapeutic walk-in bathtub in Conway, AR. Features include low step-in threshold, hydro jets, quick drain technology, and heated seats.',
        features: ['Low Step-In Bathing', 'Hydrotherapy & Microbubble Jets', 'Slip-Resistant Flooring', 'ADA Grab Bars & Built-in Seating'],
        linkAnchorText: 'View Conway Walk-In Tubs'
      }
    ]
  },
  { 
    id: 'greenbrier', 
    name: 'Greenbrier', 
    state: 'AR',
    postalCode: '72058',
    desc: 'Top-rated renovation contractors serving Greenbrier, AR with high-quality, durable bathroom upgrades and accessible walk-in shower installations.',
    coordinates: { x: 35, y: 15 },
    services: [
      {
        title: 'Greenbrier Bathroom Remodeling & Upgrades',
        description: 'Elevate your Greenbrier home\'s comfort and market value with our fast, reliable bathroom remodeling services, completed in as little as 24 to 48 hours.',
        features: ['Greenbrier Shower Replacements', 'Accessible Walk-In Tubs', 'Mold-Resistant Non-Porous Surfaces', 'Full Bathroom Makeovers'],
        linkAnchorText: 'Explore Greenbrier Bathroom Remodeling'
      },
      {
        title: 'Tub-to-Shower Conversions in Greenbrier',
        description: 'Convert old, unused tubs into modern walk-in showers with custom wall surrounds, frameless glass doors, and luxury fixtures in Greenbrier.',
        features: ['Custom Wall Colors & Tile Patterns', 'Leak-Proof Barrier Technology', 'Lifetime Limited Warranty', 'Rapid 1-2 Day Setup'],
        linkAnchorText: 'Discover Greenbrier Tub Conversions'
      }
    ]
  },
  { 
    id: 'vilonia', 
    name: 'Vilonia', 
    state: 'AR',
    postalCode: '72173',
    desc: 'Custom bathroom remodeling and renovations in Vilonia, AR, bringing modern luxury, safety, and functionality to your doorstep.',
    coordinates: { x: 65, y: 35 },
    services: [
      {
        title: 'Vilonia Bathroom Transformations',
        description: 'Experience a spa-like retreat right in your Vilonia home. We specialize in high-end bathroom remodels that maximize space and style.',
        features: ['Spa-Like Shower Systems', 'Low-Maintenance Wall Surrounds', 'Custom Fixtures & Seating', 'Double Vanity Upgrades'],
        linkAnchorText: 'Explore Vilonia Bathroom Transformations'
      },
      {
        title: 'Aging-in-Place Bathrooms in Vilonia',
        description: 'Stay independent and safe in your Vilonia home with custom barrier-free showers, grab bars, and safety walk-in tubs.',
        features: ['Zero-Threshold Showers', 'ADA Compliant Seating', 'Slip-Resistant Surfaces', 'Quick Clean Mold Resistance'],
        linkAnchorText: 'View Vilonia Accessibility Solutions'
      }
    ]
  },
  { 
    id: 'maumelle', 
    name: 'Maumelle', 
    state: 'AR',
    postalCode: '72113',
    desc: 'Premium bathroom remodeling for Maumelle, AR homes, focusing on elegant designs, walk-in showers, and superior craftsmanship.',
    coordinates: { x: 45, y: 60 },
    services: [
      {
        title: 'Luxury Bathroom Remodeling in Maumelle',
        description: 'Upgrade your Maumelle residence with our luxury bathroom remodeling services, featuring premium non-porous fixtures and elegant tile-look finishes.',
        features: ['High-End Glass Shower Enclosures', 'Tub-to-Shower Conversions', 'Water-Efficient Fixtures', 'Custom Quartz & Acrylic Surrounds'],
        linkAnchorText: 'Explore Maumelle Luxury Bathrooms'
      },
      {
        title: 'Maumelle Walk-In Showers & Tubs',
        description: 'Replace aging bathtubs with sleek walk-in shower systems designed specifically for Maumelle homeowners seeking luxury and ease of maintenance.',
        features: ['Custom Color Palette Options', 'Hydrotherapy Tub Installs', 'Fast 1-2 Day Installation', 'Lifetime Warranty Protection'],
        linkAnchorText: 'View Maumelle Walk-In Showers'
      }
    ]
  },
  { 
    id: 'little-rock', 
    name: 'Little Rock', 
    state: 'AR',
    postalCode: '72201',
    desc: 'Professional bathroom remodeling services across Little Rock, AR, delivering exceptional quality for the metro area\'s finest homes.',
    coordinates: { x: 55, y: 85 },
    services: [
      {
        title: 'Little Rock Bathroom Remodeling',
        description: 'Serving the Little Rock metro area with top-tier bathroom renovations. We specialize in modernizing historic and contemporary homes alike.',
        features: ['Master Bathroom Suites', 'Space-Saving Shower Conversions', 'ADA Compliant Bathrooms', 'Premium Fixture Upgrades'],
        linkAnchorText: 'Explore Little Rock Bathroom Remodeling'
      },
      {
        title: 'Little Rock Tub-to-Shower Conversions',
        description: 'Replace outmoded bathtubs with spacious walk-in showers for your Little Rock property with minimum hassle and zero mess.',
        features: ['1-2 Day Fast Turnaround', 'High-Grade Acrylic Walls', 'Lifetime Limited Warranty', 'Easy-Clean Surfaces'],
        linkAnchorText: 'View Little Rock Tub Conversions'
      }
    ]
  },
  { 
    id: 'north-little-rock', 
    name: 'North Little Rock', 
    state: 'AR',
    postalCode: '72114',
    desc: 'Trusted home bathroom renovation experts in North Little Rock, AR, dedicated to bringing your dream spaces to life.',
    coordinates: { x: 60, y: 70 },
    services: [
      {
        title: 'North Little Rock Bathroom Makeovers',
        description: 'Revitalize your North Little Rock bathroom with our efficient, high-quality remodeling solutions designed for lasting beauty.',
        features: ['Quick 1-2 Day Installs', 'Tub-to-Shower Conversions', 'Mold-Resistant Showers', 'Updated Vanities'],
        linkAnchorText: 'Explore North Little Rock Remodeling'
      },
      {
        title: 'NLR Walk-In Tubs & Bath Safety',
        description: 'Provide safe bathing options for seniors and mobility-impaired loved ones in North Little Rock with hydrotherapy walk-in tubs.',
        features: ['Low Step-In Thresholds', 'Safety Handrails', 'Quick-Drain Technology', 'Soaking & Massage Jets'],
        linkAnchorText: 'View North Little Rock Walk-In Tubs'
      }
    ]
  },
  { 
    id: 'sherwood', 
    name: 'Sherwood', 
    state: 'AR',
    postalCode: '72120',
    desc: 'High-quality bathroom remodels in Sherwood, AR, combining beautiful aesthetics with practical safety functionality.',
    coordinates: { x: 65, y: 55 },
    services: [
      {
        title: 'Sherwood Bathroom Renovations',
        description: 'Create a relaxing, beautiful bathroom in your Sherwood home with our expert shower replacement and conversion services.',
        features: ['Custom Shower Designs', 'Safe Walk-In Tubs', 'Modern Bathroom Fixtures', 'Water-Efficient Aerators'],
        linkAnchorText: 'Explore Sherwood Bathroom Renovations'
      },
      {
        title: 'Sherwood Tub-to-Shower Conversions',
        description: 'Ditch the high tub wall and step comfortably into a luxury walk-in shower engineered for easy cleaning in Sherwood.',
        features: ['Low Maintenance Materials', 'Custom Shelving & Footrests', 'Professional Master Installers', 'Lifetime Warranty'],
        linkAnchorText: 'View Sherwood Tub Conversions'
      }
    ]
  },
];

const LocationPage: React.FC = () => {
  const { locationId } = useParams<{ locationId: string }>();
  const routerLocation = useLocation();
  const location = locations.find(l => l.id === locationId);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (location) {
      // Dynamic Title Tag SEO Requirement
      document.title = `Bathroom Remodeling in ${location.name}, ${location.state} | All-Star Renovations`;

      // Dynamic JSON-LD Schema Injection
      const schemaScriptId = 'location-jsonld-schema';
      let scriptTag = document.getElementById(schemaScriptId) as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = schemaScriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }

      const locationSchema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": `All-Star Renovations - ${location.name}`,
        "description": location.desc,
        "url": `https://allstarreno.com/location/${location.id}`,
        "telephone": "+15015043398",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "11 Arnett Ln",
          "addressLocality": location.name,
          "addressRegion": location.state,
          "postalCode": location.postalCode,
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "City",
          "name": location.name,
          "containedInPlace": {
            "@type": "State",
            "name": "Arkansas"
          }
        },
        "knowsAbout": [
          `Bathroom Remodeling in ${location.name} AR`,
          `Tub to Shower Conversion ${location.name} AR`,
          `Walk-In Tubs ${location.name} AR`,
          `Shower Replacement ${location.name} AR`
        ]
      };

      scriptTag.text = JSON.stringify(locationSchema);
    }

    if (routerLocation.hash === '#services') {
      const el = document.getElementById('services');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setHighlight(true);
          setTimeout(() => setHighlight(false), 2000);
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [locationId, routerLocation.hash, location]);

  if (!location) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-4 text-brand-primary">Location Not Found</h1>
            <p className="text-slate-600 mb-6">We serve all of Central Arkansas. Select an active service area below:</p>
            <Link to="/" className="btn-primary">
              Return to All-Star Renovations Homepage Hub
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#F9FAFB]">
      <Navbar />
      <main className="pt-24">
        {/* Location Hero */}
        <section 
          className="bg-slate-900 text-white py-24 px-6 md:px-12 relative overflow-hidden"
          aria-label={`Bathroom remodeling services in ${location.name}, Arkansas`}
        >
          <div className="absolute inset-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-secondary/20 text-brand-secondary px-4 py-2 rounded-full mb-6 border border-brand-secondary/30">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wider uppercase">Serving {location.name}, {location.state} & Surrounding Areas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Bathroom Remodeling in <span className="text-brand-secondary">{location.name}, {location.state}</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              {location.desc}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={`/#${Section.CONTACT}`} className="btn-secondary text-slate-900">
                Get Free {location.name} Estimate
              </a>
              <a href="tel:5015043398" className="btn-primary">
                Call (501) 504-3398
              </a>
            </div>
          </div>
        </section>

        {/* Local Services Section */}
        <section 
          id="services" 
          className={`py-20 px-6 md:px-12 max-w-7xl mx-auto transition-all duration-1000 rounded-3xl ${
            highlight ? 'bg-brand-secondary/10 shadow-2xl shadow-brand-secondary/20 ring-4 ring-brand-secondary/30 scale-[1.01]' : ''
          }`}
        >
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary mb-2 block">Localized Excellence</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Bathroom Remodeling Services in {location.name}, AR
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We specialize in custom walk-in showers, tub-to-shower conversions, and safety walk-in bathtubs for homeowners in {location.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {location.services.map((service, index) => (
              <div key={index} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-brand-primary">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                        <CheckCircle2 className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Internal link with semantic anchor text */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/#${Section.SERVICES}`}
                    className="text-brand-primary font-bold hover:text-brand-secondary transition-colors inline-flex items-center gap-2 text-sm"
                  >
                    <span>{service.linkAnchorText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hub Linkback Banner for SEO */}
        <section className="py-12 bg-brand-primary text-white px-6 md:px-12 border-y border-brand-primary/80">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif font-bold">Looking for Complete Bathroom Solutions?</h3>
              <p className="text-slate-200 text-sm mt-1">Explore our main service hub for custom wall surrounds, shower systems, and financing options.</p>
            </div>
            <Link
              to="/"
              className="btn-secondary shrink-0 text-slate-900"
            >
              All-Star Renovations Main Hub
            </Link>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-20 px-6 md:px-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Service Coverage Across Central Arkansas
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm">
                In addition to {location.name}, we provide 1-2 day bathroom remodels throughout Faulkner and Pulaski counties. Select a city below to view localized service specifications:
              </p>
            </div>

            {/* Semantic Internal Links List */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 text-center">
              {locations.map((loc) => (
                <Link
                  key={loc.id}
                  to={`/location/${loc.id}#services`}
                  className={`p-4 rounded-2xl border transition-all text-sm font-bold ${
                    loc.id === location.id
                      ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-brand-secondary hover:text-brand-primary'
                  }`}
                >
                  Bathroom Remodeling in {loc.name}, AR
                </Link>
              ))}
            </div>

            <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] sm:aspect-[16/9] bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              {locations.map((loc) => {
                const isActive = loc.id === location.id;
                return (
                  <Link
                    key={loc.id}
                    to={`/location/${loc.id}#services`}
                    onClick={(e) => {
                      if (loc.id === location.id) {
                        e.preventDefault();
                        const el = document.getElementById('services');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          setHighlight(false);
                          setTimeout(() => {
                            setHighlight(true);
                            setTimeout(() => setHighlight(false), 2000);
                          }, 50);
                        }
                      }
                    }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                  >
                    <div className="relative flex flex-col items-center">
                      <div className={`absolute bottom-full mb-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg whitespace-nowrap transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                        {loc.name}, AR
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                      </div>
                      
                      <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isActive ? 'bg-brand-secondary scale-125 z-10' : 'bg-brand-primary hover:bg-brand-secondary hover:scale-110'}`}>
                        <MapPin className="w-4 h-4 text-slate-900" />
                      </div>
                      
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-brand-secondary animate-ping opacity-75" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default LocationPage;
