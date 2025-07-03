'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import {
  FaCode,
  FaPalette,
  FaPrint,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPlay,
  FaLaptopCode,
  FaPaintBrush,
  FaMobile,
  FaRocket,
  FaSearch,
  FaShoppingCart,
  FaChartLine,
  FaUsers,
  FaAward,
  FaClock,
  FaEye,
  FaHeart
} from 'react-icons/fa';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Home() {
  const heroRef = useRef(null);
  

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              Lucky<span className="text-blue-600">Dev</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#process" className="text-gray-600 hover:text-gray-900 transition-colors">Process</a>
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">Réalisations</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
                Démarrer un projet →
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="hero-title text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Votre application web
            <span className="block text-blue-600">Codé En Main</span>
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Chez LuckyDev, nous créons des applications web que vos clients vont aimer utiliser
          </p>

          <div className="hero-cta">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center space-x-2">
              <span>Démarrer un projet</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="fade-up">
              <div className="stat-number text-4xl font-bold text-gray-900 mb-2">25</div>
              <div className="text-gray-600">Projets réalisés</div>
            </div>
            <div className="fade-up">
              <div className="text-4xl font-bold text-gray-900 mb-2">50M+</div>
              <div className="text-gray-600">Impressions cumulées</div>
            </div>
            <div className="fade-up">
              <div className="stat-number text-4xl font-bold text-gray-900 mb-2">19</div>
              <div className="text-gray-600">Réponses collectées</div>
            </div>
            <div className="fade-up">
              <div className="text-4xl font-bold text-gray-900 mb-2">600+</div>
              <div className="text-gray-600">Entreprises clientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud Banner */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">ILS NOUS FONT CONFIANCE</p>
          </div>

          <div className="logo-cloud-container relative">
            {/* First row - moving right */}
            <div className="logo-row logo-row-1 flex items-center space-x-12 mb-8">
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Microsoft</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Google</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Apple</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Amazon</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Meta</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Netflix</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Spotify</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Adobe</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Microsoft</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Google</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Apple</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Amazon</span>
              </div>
            </div>

            {/* Second row - moving left */}
            <div className="logo-row logo-row-2 flex items-center space-x-12">
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Tesla</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Uber</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Airbnb</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Slack</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Zoom</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Figma</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Notion</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Stripe</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Tesla</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Uber</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Airbnb</span>
              </div>
              <div className="logo-item flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">Slack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fade-up text-5xl font-bold text-gray-900 mb-6">
              Transformez Vos Besoins en <span className="text-blue-600">Solutions</span> Digitales Puissantes
            </h2>
            <p className="fade-up text-xl text-gray-600 max-w-4xl mx-auto">
              De l'application interne qui booste votre productivité à l'interface client intuitive qui fidélise vos utilisateurs, nous créons des solutions web sur mesure qui transforment vos idées en solutions concrètes et efficaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {/* Design */}
            <div className="fade-up text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <FaPaintBrush className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Design</h3>
              <p className="text-gray-600 mb-6">
                Vos idées prennent vie avec une identité visuelle moderne et percutante
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Identité visuelle & logo</li>
                <li>• Maquettes UI/UX</li>
                <li>• Design systems</li>
                <li>• Prototypage interactif</li>
              </ul>
            </div>

            {/* Développement */}
            <div className="fade-up text-center">
              <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <FaCode className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Développement</h3>
              <p className="text-gray-600 mb-6">
                Votre vitrine digitale développée avec les meilleures technologies
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Sites web sur mesure</li>
                <li>• Applications web</li>
                <li>• E-commerce</li>
                <li>• APIs & intégrations</li>
              </ul>
            </div>

            {/* Référencement */}
            <div className="fade-up text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <FaSearch className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Référencement</h3>
              <p className="text-gray-600 mb-6">
                Positionnez-vous en première page des moteurs de recherche
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• SEO technique</li>
                <li>• Optimisation de contenu</li>
                <li>• Analytics & reporting</li>
                <li>• Stratégie de visibilité</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="fade-up text-5xl font-bold text-gray-900 mb-8">
                À propos de nous
              </h2>
              <p className="fade-up text-xl text-gray-600 mb-8">
                Chez LuckyDev, nous créons des applications web que vos clients vont aimer utiliser. Notre équipe passionnée transforme vos idées en solutions digitales performantes et durables.
              </p>
              <button className="fade-up bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center space-x-2">
                <span>À propos de nous</span>
                <FaArrowRight />
              </button>
            </div>
            <div className="fade-up">
              <div className="bg-gray-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FaUsers className="text-6xl mx-auto mb-4" />
                  <p>Photo d'équipe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="fade-up text-sm uppercase tracking-wide text-gray-500 mb-4">RÉALISATIONS</p>
            <h2 className="fade-up text-5xl font-bold text-gray-900 mb-6">
              Ce sont nos <span className="text-blue-600">réalisations</span> qui parlent le mieux de nous
            </h2>
            <button className="fade-up bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center space-x-2">
              <span>Toutes nos réalisations</span>
              <FaArrowRight />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Projet 1 */}
            <div className="fade-up">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-center text-blue-600">
                    <FaLaptopCode className="text-6xl mx-auto mb-4" />
                    <p>Aperçu du projet</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">RC</span>
                    </div>
                    <span className="text-sm text-gray-500">Royal Canin</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Royal Canin - Application de recommandation
                  </h3>
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">19M</div>
                      <div className="text-sm text-gray-500">Réponses collectées</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">600+</div>
                      <div className="text-sm text-gray-500">Entreprises clientes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="fade-up">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <FaMobile className="text-6xl mx-auto mb-4" />
                    <p>Aperçu du projet</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                    <span className="text-sm text-gray-500">Told</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Told - Plateforme de feedback utilisateur multi-canal
                  </h3>
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">19M</div>
                      <div className="text-sm text-gray-500">Réponses collectées</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">600+</div>
                      <div className="text-sm text-gray-500">Entreprises clientes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="fade-up text-5xl font-bold text-gray-900 mb-6">
            Vous avez un projet, une question ?
          </h2>
          <p className="fade-up text-xl text-gray-600 mb-12">
            Nous serions ravis d'en discuter.
          </p>

          <div className="fade-up flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
              Contactez-nous
            </button>
            <button className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-900 transition-colors">
              Prendre rendez-vous
            </button>
          </div>

          <div className="fade-up grid md:grid-cols-3 gap-8 mt-16 text-left">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">contact@luckydev.fr</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-600">+33 1 23 45 67 89</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Adresse</h3>
              <p className="text-gray-600">123 Avenue Innovation, Paris</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                Lucky<span className="text-blue-400">Dev</span>
              </div>
              <p className="text-gray-400 mb-4">
                Votre partenaire pour tous vos projets digitaux
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <FaInstagram className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <FaLinkedin className="text-white" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Développement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Référencement</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Agence</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Réalisations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Devis gratuit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LuckyDev. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
