import { Navigation } from "@/components/Navigation";
import { Section, SectionHeader } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { 
  ArrowRight, 
  Instagram, 
  TrendingUp, 
  Users, 
  Camera, 
  MessageSquare,
  CheckCircle2,
  Mail,
  Linkedin,
  Twitter
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

// Hero Section
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-mesh">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              👋 Elevate Your Brand Online
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6">
              I Grow Your <br />
              <span className="text-gradient">Social Media</span>,<br />
              So You Can Grow Your Business.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Strategic content creation, community management, and growth strategies tailored for modern brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink to="contact" smooth={true} duration={500} offset={-50}>
                <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 group cursor-pointer w-full sm:w-auto justify-center">
                  Book a Strategy Call
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </ScrollLink>
              <ScrollLink to="portfolio" smooth={true} duration={500} offset={-80}>
                <button className="px-8 py-4 rounded-full bg-background border-2 border-border text-foreground font-bold text-lg hover:border-primary/50 hover:bg-muted/50 transition-all cursor-pointer w-full sm:w-auto">
                  View Work
                </button>
              </ScrollLink>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-8 border-background rotate-3 hover:rotate-0 transition-transform duration-500">
               {/* woman working on laptop creative workspace */}
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60"
                 alt="Social Media Manager working"
                 className="w-full h-auto object-cover"
               />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <Section id="about" className="bg-muted/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-2 md:order-1"
        >
          {/* creative portrait smiling woman */}
          <img 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60"
            alt="Profile"
            className="rounded-3xl shadow-xl w-full max-w-md mx-auto"
          />
          <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-lg border border-border hidden md:block">
            <div className="text-4xl font-bold text-primary font-display">5+</div>
            <div className="text-sm font-medium text-muted-foreground">Years Experience</div>
          </div>
        </motion.div>
        
        <div className="order-1 md:order-2">
          <SectionHeader 
            title="Behind the Strategy" 
            subtitle="Hi, I'm Sarah! I help brands find their voice and build authentic connections online."
            centered={false}
          />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              With over 5 years in digital marketing, I've seen social media evolve from simple photo sharing to a complex ecosystem of community building and brand storytelling.
            </p>
            <p>
              My approach isn't just about posting pretty pictures. It's about data-driven strategies that convert followers into loyal customers. Whether you're a startup looking to make noise or an established brand needing a refresh, I'm here to guide you.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <TrendingUp size={20} />
                </div>
                <span className="font-semibold text-foreground">Growth Focused</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Users size={20} />
                </div>
                <span className="font-semibold text-foreground">Community First</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Services Section
function Services() {
  const services = [
    {
      icon: <Instagram className="w-8 h-8 text-primary" />,
      title: "Instagram Growth",
      desc: "Organic strategies to increase followers, engagement, and reach without bots."
    },
    {
      icon: <Camera className="w-8 h-8 text-secondary" />,
      title: "Content Creation",
      desc: "High-quality photography, reels, and graphics that stop the scroll and tell your story."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Strategy & Analytics",
      desc: "Monthly reporting and data analysis to refine what's working and optimize ROI."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Community Management",
      desc: "Active engagement with your audience to build loyalty and trust."
    }
  ];

  return (
    <Section id="services">
      <SectionHeader 
        title="My Services" 
        subtitle="Comprehensive social media solutions tailored to your unique goals."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
          >
            <div className="mb-4 p-3 bg-muted rounded-xl w-fit group-hover:bg-primary/5 transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// Portfolio Section
function Portfolio() {
  const items = [
    {
      category: "Fashion Brand",
      title: "Rebranding Campaign",
      stat: "+150% Reach",
      // fashion editorial shoot
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60"
    },
    {
      category: "Tech Startup",
      title: "Launch Strategy",
      stat: "10k Followers in 3mo",
      // modern office tech
      image: "https://images.unsplash.com/photo-1531297461136-82af322efb00?w=800&auto=format&fit=crop&q=60"
    },
    {
      category: "Coffee Shop",
      title: "Local Community Growth",
      stat: "2x Foot Traffic",
      // latte art coffee shop
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <Section id="portfolio" className="bg-muted/30">
      <SectionHeader 
        title="Featured Work" 
        subtitle="A selection of recent projects and the results we achieved together."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
          >
            <div className="aspect-[4/5] w-full">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-secondary font-medium text-sm mb-1">{item.category}</span>
              <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
              <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-semibold">
                {item.stat}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// Testimonials
function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader title="Client Love" />
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="bg-card border-none shadow-lg shadow-primary/5">
            <CardContent className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <TrendingUp key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "Sarah completely transformed our online presence. Our engagement has skyrocketed and the content she creates is always on point. Highly recommended!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <div>
                  <h4 className="font-bold font-display">Client Name</h4>
                  <p className="text-xs text-muted-foreground">CEO, Company {i}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// Pricing
function Pricing() {
  const plans = [
    { name: "Starter", price: "$900", desc: "Perfect for small businesses starting out.", features: ["3 Posts/Week", "Monthly Reporting", "Basic Engagement"] },
    { name: "Growth", price: "$1500", desc: "Accelerate your presence with video.", features: ["4 Posts/Week + 2 Reels", "Bi-Weekly Reporting", "Community Management", "Strategy Sessions"], popular: true },
    { name: "Premium", price: "$2500", desc: "Full service social media takeover.", features: ["Daily Content", "Weekly Reporting", "24/7 Monitoring", "Influencer Outreach", "Content Shoot"] }
  ];

  return (
    <Section id="pricing" className="bg-muted/30">
      <SectionHeader title="Simple Pricing" subtitle="Choose the package that fits your growth goals." />
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-8 rounded-3xl border ${plan.popular ? 'bg-card border-primary shadow-2xl shadow-primary/10 scale-105 z-10' : 'bg-background/50 border-border'}`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold font-display mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-4">{plan.price}<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
            <p className="text-muted-foreground mb-6 text-sm">{plan.desc}</p>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary/10 text-secondary hover:bg-secondary/20'}`}>
                Get Started
              </button>
            </ScrollLink>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// FAQ
function FAQ() {
  return (
    <Section id="faq">
      <SectionHeader title="Common Questions" centered />
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">Do I need to provide photos?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              It depends on your package! I can work with your existing assets, stock photography, or schedule a content shoot for custom visuals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">What platforms do you manage?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              I specialize in Instagram, TikTok, LinkedIn, and Pinterest. We can discuss which platforms make the most sense for your audience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">Is there a long-term contract?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              I typically work on a 3-month initial commitment to ensure we have enough time to see real results from our strategy.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}

// Contact
function Contact() {
  return (
    <Section id="contact" className="bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold font-display mb-6">Let's work together</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Ready to take your social media to the next level? Fill out the form and I'll get back to you within 24 hours.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-background shadow-md flex items-center justify-center text-primary">
                <Mail />
              </div>
              <div>
                <p className="font-semibold">Email Me</p>
                <a href="mailto:hello@socialgrow.com" className="text-muted-foreground hover:text-primary transition-colors">hello@socialgrow.com</a>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 text-center text-muted-foreground text-sm">
      <p>© {new Date().getFullYear()} SocialGrow. All rights reserved.</p>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="font-body text-foreground bg-background min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
