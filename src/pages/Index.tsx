import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Assessment from './Assessment';

const Index: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const scrollToQuiz = () => {
    const el = document.getElementById('quiz');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setShowQuiz(true);
  };

  return (
    <div className="font-manrope antialiased text-white bg-gradient-to-b from-gray-900 via-gray-950 to-black min-h-screen flex flex-col">
      {/* Header / Navbar */}
      <header className="bg-black/60 backdrop-blur-lg shadow-lg border-b border-border">
        <div className="container mx-auto flex justify-between items-center py-6 px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/Empathway Logo.png" alt="Empathway logo" className="h-14 w-auto drop-shadow-lg" />
            <span className="text-2xl font-extrabold uppercase text-primary tracking-wide">Empathway</span>
          </a>
          <nav className="space-x-8 uppercase text-base text-muted-foreground font-semibold">
            <a href="/company" className="hover:text-primary transition">Company</a>
            <a href="/user" className="hover:text-primary transition">User</a>
            <a href="/expert" className="hover:text-primary transition">Expert</a>
          </nav>
          <div className="flex items-center space-x-6 text-base">
           
            <a href="/register">
              <Button className="bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition">
                Get Support
              </Button>
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
            <Button
              onClick={scrollToQuiz}
              className="bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-xl shadow-xl text-lg font-bold hover:scale-105 transition"
            >
              Take Our Free Quiz
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src="/download-removebg-preview.png"
              alt="mental health"
              className="w-full max-w-md rounded-2xl shadow-2xl"
            />
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

      {/* Quiz Section */}
      <section id="quiz" className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-8 text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-6 text-white">Take Our Free Quiz</h2>
          <p className="text-lg text-muted-foreground">Discover your mental health needs</p>
        </div>
        <div className="container mx-auto flex justify-center">
          {!showQuiz ? (
            <Button
              onClick={() => setShowQuiz(true)}
              className="bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-xl shadow-xl text-lg font-bold hover:scale-105 transition"
            >
              Start Quiz
            </Button>
          ) : (
            <Assessment />
          )}
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
            <a href="/terms" className="hover:text-primary transition">Terms</a><br />
            <a href="/privacy" className="hover:text-primary transition">Privacy</a><br />
            <a href="/careers" className="hover:text-primary transition">Careers</a><br />
            <a href="/blog" className="hover:text-primary transition">Blog</a><br />
            <a href="/contact" className="hover:text-primary transition">Contact</a><br />
            <a href="/help" className="hover:text-primary transition">Help</a>
          </div>
          <div className="flex space-x-6 items-center">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              {/* SVG icon */}
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              {/* SVG icon */}
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              {/* SVG icon */}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
