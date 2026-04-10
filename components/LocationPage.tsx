import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import AIChat from './AIChat';
import { Star, CheckCircle2, MapPin } from 'lucide-react';
import { Section } from '../types';

type LocationService = {
  title: string;
  description: string;
  features: string[];
};

type LocationData = {
  id: string;
  name: string;
  desc: string;
  services: LocationService[];
  coordinates: { x: number; y: number }; // Relative percentages for the map
};

const locations: LocationData[] = [
  { 
    id: 'conway', 
    name: 'Conway', 
    desc: 'As Conway\'s premier hometown remodeling contractor, we provide expert kitchen and bathroom renovations tailored to Faulkner County homeowners.',
    coordinates: { x: 35, y: 35 },
    services: [
      {
        title: 'Conway Bathroom Remodeling',
        description: 'Transform your Conway home with our premium bathroom renovations. From modern master baths to efficient guest bathroom updates, we handle it all.',
        features: ['Tub-to-Shower Conversions', 'Custom Walk-In Showers', 'Aging-in-Place Solutions', 'Luxury Vanities & Tile']
      },
      {
        title: 'Kitchen Renovations in Conway',
        description: 'Upgrade the heart of your home with our comprehensive kitchen remodeling services, designed specifically for your family\'s lifestyle.',
        features: ['Custom Cabinet Installation', 'Granite & Quartz Countertops', 'Kitchen Island Design', 'Modern Lighting Fixtures']
      }
    ]
  },
  { 
    id: 'greenbrier', 
    name: 'Greenbrier', 
    desc: 'Top-rated renovation contractors serving Greenbrier, AR with high-quality, reliable home improvement solutions.',
    coordinates: { x: 35, y: 15 },
    services: [
      {
        title: 'Greenbrier Bathroom Upgrades',
        description: 'Elevate your Greenbrier home\'s comfort and value with our fast, reliable bathroom remodeling services, often completed in just 1-2 days.',
        features: ['Shower Replacements', 'Accessible Walk-In Tubs', 'Mold-Resistant Materials', 'Complete Bathroom Makeovers']
      },
      {
        title: 'Custom Kitchens in Greenbrier',
        description: 'Create a stunning, functional kitchen space with our expert design and installation team serving the Greenbrier community.',
        features: ['Cabinet Refacing & Replacement', 'Durable Countertop Upgrades', 'Tile Backsplashes', 'Open Concept Kitchens']
      }
    ]
  },
  { 
    id: 'vilonia', 
    name: 'Vilonia', 
    desc: 'Custom home remodeling and renovations in Vilonia, AR, bringing modern luxury and functionality to your doorstep.',
    coordinates: { x: 65, y: 35 },
    services: [
      {
        title: 'Vilonia Bathroom Transformations',
        description: 'Experience a spa-like retreat right in your Vilonia home. We specialize in high-end bathroom remodels that maximize space and style.',
        features: ['Spa-Like Shower Systems', 'Freestanding Tubs', 'Custom Tile Work', 'Double Vanity Installations']
      },
      {
        title: 'Kitchen Remodeling for Vilonia',
        description: 'From minor updates to complete kitchen overhauls, our team delivers exceptional craftsmanship for Vilonia homeowners.',
        features: ['Smart Kitchen Layouts', 'Premium Cabinetry', 'Energy-Efficient Lighting', 'Custom Pantry Solutions']
      }
    ]
  },
  { 
    id: 'maumelle', 
    name: 'Maumelle', 
    desc: 'Premium kitchen and bath upgrades for Maumelle, AR homes, focusing on elegant designs and superior craftsmanship.',
    coordinates: { x: 45, y: 60 },
    services: [
      {
        title: 'Luxury Bathrooms in Maumelle',
        description: 'Upgrade your Maumelle residence with our luxury bathroom remodeling services, featuring premium fixtures and elegant finishes.',
        features: ['High-End Shower Enclosures', 'Luxury Soaking Tubs', 'Heated Flooring Options', 'Custom Glass Doors']
      },
      {
        title: 'Maumelle Kitchen Upgrades',
        description: 'Enhance your home\'s value and aesthetic with a state-of-the-art kitchen remodel tailored to your Maumelle property.',
        features: ['Chef-Inspired Kitchen Designs', 'Luxury Stone Countertops', 'Custom Range Hoods', 'Built-In Appliances']
      }
    ]
  },
  { 
    id: 'little-rock', 
    name: 'Little Rock', 
    desc: 'Professional remodeling services across Little Rock, AR, delivering exceptional quality for the metro area\'s finest homes.',
    coordinates: { x: 55, y: 85 },
    services: [
      {
        title: 'Little Rock Bathroom Remodeling',
        description: 'Serving the Little Rock metro area with top-tier bathroom renovations. We specialize in modernizing historic and contemporary homes alike.',
        features: ['Master Bathroom Suites', 'Space-Saving Shower Conversions', 'ADA Compliant Bathrooms', 'Premium Fixture Upgrades']
      },
      {
        title: 'Kitchen Renovations in Little Rock',
        description: 'Transform your Little Rock kitchen into a culinary masterpiece with our comprehensive design and build services.',
        features: ['Complete Kitchen Overhauls', 'Custom Cabinetry Design', 'High-End Countertops', 'Modern Tile Backsplashes']
      }
    ]
  },
  { 
    id: 'north-little-rock', 
    name: 'North Little Rock', 
    desc: 'Trusted home renovation experts in North Little Rock, AR, dedicated to bringing your dream spaces to life.',
    coordinates: { x: 60, y: 70 },
    services: [
      {
        title: 'NLR Bathroom Makeovers',
        description: 'Revitalize your North Little Rock bathroom with our efficient, high-quality remodeling solutions designed for lasting beauty.',
        features: ['Quick 1-2 Day Installs', 'Tub-to-Shower Conversions', 'Mold-Resistant Showers', 'Updated Vanities']
      },
      {
        title: 'North Little Rock Kitchens',
        description: 'Upgrade your cooking and dining experience with a custom kitchen remodel in North Little Rock.',
        features: ['Kitchen Island Additions', 'Cabinet Replacements', 'Quartz & Granite Surfaces', 'Updated Flooring']
      }
    ]
  },
  { 
    id: 'sherwood', 
    name: 'Sherwood', 
    desc: 'High-quality kitchen and bathroom remodels in Sherwood, AR, combining beautiful aesthetics with practical functionality.',
    coordinates: { x: 65, y: 55 },
    services: [
      {
        title: 'Sherwood Bathroom Renovations',
        description: 'Create a relaxing, beautiful bathroom in your Sherwood home with our expert remodeling and conversion services.',
        features: ['Custom Shower Designs', 'Safe Walk-In Tubs', 'Modern Bathroom Lighting', 'Water-Efficient Fixtures']
      },
      {
        title: 'Kitchen Remodeling in Sherwood',
        description: 'Bring your dream kitchen to life in Sherwood with our personalized design process and expert installation.',
        features: ['Custom Kitchen Layouts', 'Beautiful Stone Countertops', 'Tile & Hardwood Flooring', 'Custom Storage Solutions']
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
  }, [locationId, routerLocation.hash]);

  if (!location) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
            <Link to="/" className="text-brand-secondary hover:underline">Return Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#fcfcf9]">
      <Navbar />
      <main className="pt-24">
        {/* Location Hero */}
        <section 
          className="bg-slate-900 text-white py-20 px-6 md:px-12 relative overflow-hidden"
          aria-label={`Bathroom remodeling in ${location.name}, Arkansas`}
        >
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-secondary/20 text-brand-secondary px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wider uppercase">Serving {location.name}, AR</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Premier Remodeling in <span className="text-brand-secondary">{location.name}</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {location.desc} All-Star Renovations brings expert craftsmanship and high-quality materials to every project in your area.
            </p>
          </div>
        </section>

        {/* Services in Location */}
        <section 
          id="services" 
          className={`py-20 px-6 md:px-12 max-w-7xl mx-auto transition-all duration-1000 rounded-3xl ${
            highlight ? 'bg-brand-secondary/10 shadow-2xl shadow-brand-secondary/20 ring-4 ring-brand-secondary/30 scale-[1.01]' : ''
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Our Services in {location.name}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We specialize in transforming homes with our comprehensive remodeling services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {location.services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/#${Section.SERVICES}`} className="text-brand-secondary font-semibold hover:underline flex items-center gap-2">
                  Explore this service <Star className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-20 px-6 md:px-12 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Our Service Areas
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Explore the communities we serve across Central Arkansas. Click on a location to see specific services offered in that area.
              </p>
            </div>

            <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] sm:aspect-[16/9] bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              {/* Abstract Map Background */}
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              {/* Map Pins */}
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
                      {/* Tooltip */}
                      <div className={`absolute bottom-full mb-3 px-3 py-1.5 bg-slate-900 text-white text-sm font-bold rounded-lg whitespace-nowrap transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                        {loc.name}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                      </div>
                      
                      {/* Pin */}
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isActive ? 'bg-brand-secondary scale-125 z-10' : 'bg-brand-primary hover:bg-brand-secondary hover:scale-110'}`}>
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      
                      {/* Pulse effect for active location */}
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
