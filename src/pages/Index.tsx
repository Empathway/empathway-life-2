import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="font-manrope antialiased text-white bg-gradient-to-b from-gray-900 via-gray-950 to-black min-h-screen flex flex-col">
      {/* Header / Navbar */}
      <header className="bg-black/60 backdrop-blur-lg shadow-lg border-b border-border">
        <div className="container mx-auto flex justify-between items-center py-6 px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Better Health logo" className="h-10 w-auto drop-shadow-lg" />
            <span className="text-2xl font-extrabold uppercase text-primary tracking-wide">Empathway</span>
          </a>
          <nav className="space-x-8 uppercase text-base text-muted-foreground font-semibold">
            <a href="/company" className="hover:text-primary transition">Company</a>
            <a href="/user" className="hover:text-primary transition">User</a>
            <a href="/expert" className="hover:text-primary transition">Expert</a>
          </nav>
          <div className="flex items-center space-x-6 text-base">
            <div className="text-right">
              <div>Call Us <span className="font-bold text-primary">+91 8095195245</span></div>
              <div>
                Email: <a href="mailto:empathway.life@gmail.com" className="underline text-blue-400 hover:text-blue-600">empathway.life@gmail.com</a>
              </div>
            </div>
            <a href="/register">
              <Button className="bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition">Get Support</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 px-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase mb-8 leading-tight text-white drop-shadow-lg">
              Prioritizing Your Mental Health
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Round-the-clock Support – Therapy, AI, and Crisis Assistance.
            </p>
            <a href="/register">
              <Button className="bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-xl shadow-xl text-lg font-bold hover:scale-105 transition">Get Help</Button>
            </a>
          </div>
          <div className="flex justify-center">
            <img src="/hero-image.avif" alt="Construction worker mental health" className="w-full max-w-md rounded-2xl shadow-2xl border-2 border-primary/40" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-8">
          {[
            { title: 'Multilingual Support', desc: 'AI & Human Assistance: get help in your preferred language.' },
            { title: 'Emergency Response', desc: 'Quickly connect with therapists during urgent situations.' },
          ].map((f, i) => (
            <Card key={i} className="p-8 text-center bg-black/40 border border-primary/30 rounded-xl shadow-lg backdrop-blur-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">{f.title}</h3>
              <p className="text-lg text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-8 text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-6 text-white">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">See the impact we've made</p>
        </div>
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12 px-8">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="p-8 bg-black/40 border border-primary/30 rounded-xl shadow-lg backdrop-blur-lg">
              <div className="flex items-center mb-6 gap-4">
                <img src={`/avatars/${i}.jpg`} alt="Avatar" className="h-14 w-14 rounded-full border-2 border-primary shadow-lg" />
                <div className="text-left">
                  <div className="font-bold text-white">Client {i + 1}</div>
                  <div className="text-base text-muted-foreground">Company Name</div>
                </div>
              </div>
              <p className="text-muted-foreground italic">Feedback message goes here...</p>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-8 mb-16 text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-white">Common Questions</h2>
          <p className="text-lg text-muted-foreground">FAQs about our tailored mental health services</p>
        </div>
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12 px-8">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="p-8 bg-black/40 border border-primary/30 rounded-xl shadow-lg backdrop-blur-lg">
              <h4 className="font-semibold mb-3 text-primary text-xl">Question {i + 1}</h4>
              <p className="text-muted-foreground text-lg">Answer goes here...</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-8 text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-6 text-white">Connect with Our Support Team</h2>
          <p className="text-lg text-muted-foreground mb-8">We're here to assist you.</p>
        </div>
        <div className="container mx-auto grid sm:grid-cols-3 gap-12 px-8 text-center">
          {["Email Support", "Phone Support", "Office Visit"].map((label, i) => (
            <Card key={i} className="p-8 bg-black/40 border border-primary/30 rounded-xl shadow-lg backdrop-blur-lg">
              <h5 className="font-semibold mb-3 text-primary text-xl">{label}</h5>
              <p className="text-muted-foreground text-lg">
                {label === 'Email Support' && <a href="mailto:empathway.life@gmail.com" className="underline text-blue-400 hover:text-blue-600">empathway.life@gmail.com</a>}
                {label === 'Phone Support' && '+91 8095195245 (Mon-Fri, 8am–5pm)'}
                {label === 'Office Visit' && 'Bangalore'}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border bg-black/60 mt-10">
        <div className="container mx-auto px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-muted-foreground">
          <div>
            <h4 className="font-extrabold mb-4 text-white text-xl">Start Your Journey</h4>
            <a href="/" className="text-primary text-lg hover:underline">Reach Out →</a>
          </div>
          <div>
            <div className="font-bold text-primary text-lg mb-2">+91 8095195245</div>
            <a href="mailto:empathway.life@gmail.com" className="text-blue-400 hover:text-blue-600 underline">empathway.life@gmail.com</a>
          </div>
          <div className="space-y-3 text-lg">
            <a href="/terms" className="hover:text-primary transition">Terms</a>
            <br />
            <a href="/privacy" className="hover:text-primary transition">Privacy</a>
            <br />
            <a href="/careers" className="hover:text-primary transition">Careers</a>
            <br />
            <a href="/blog" className="hover:text-primary transition">Blog</a>
            <br />
            <a href="/contact" className="hover:text-primary transition">Contact</a>
            <br />
            <a href="/help" className="hover:text-primary transition">Help</a>
          </div>
          <div className="flex space-x-6 items-center">
            {/* Example social icons */}
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.15 1.64 4.15c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.94 3.62a4.28 4.28 0 0 1-1.94-.54v.05c0 2.11 1.5 3.87 3.49 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.9 3.99 2.93A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z"/></svg>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20.5h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.25 11.25h-3v-5.5c0-1.32-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.91v5.59h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
