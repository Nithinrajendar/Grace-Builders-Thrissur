import { Layout } from "@/components/layout/Layout";
import { Star, ChevronLeft, ChevronRight, Quote, Play, Pause } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Robert Anderson",
    role: "CEO, Anderson Real Estate",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "Ever Grace Construction exceeded all our expectations. Their attention to detail and commitment to quality made our $50M commercial development a tremendous success. The project was completed ahead of schedule and under budget.",
    project: "Azure Tower",
  },
  {
    id: 2,
    name: "Jennifer Williams",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "Building our dream home was a journey, and Ever Grace made it unforgettable. From the initial design consultation to the final walkthrough, their team was professional, communicative, and truly cared about bringing our vision to life.",
    project: "Custom Residence",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Director of Facilities, TechCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5,
    text: "When we needed a new headquarters that would reflect our innovative culture, Ever Grace delivered beyond our imagination. The LEED Platinum certification and cutting-edge design have made our building a landmark.",
    project: "Innovation Campus",
  },
  {
    id: 4,
    name: "Sarah Mitchell",
    role: "Property Developer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    rating: 5,
    text: "I've worked with many contractors over my 20-year career, but Ever Grace stands out for their professionalism and quality. They've become our go-to partner for all major developments.",
    project: "Harmony Residences",
  },
  {
    id: 5,
    name: "David Thompson",
    role: "City Planning Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    text: "The Metro Central Station project was complex, but Ever Grace handled every challenge with expertise. They delivered a world-class transit hub that serves our community beautifully.",
    project: "Metro Central Station",
  },
  {
    id: 6,
    name: "Emily Rodriguez",
    role: "Hospital Administrator",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    rating: 5,
    text: "Our new medical center required specialized construction expertise, and Ever Grace delivered flawlessly. The healing environment they created has positively impacted patient outcomes.",
    project: "Sunrise Medical Center",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    script.onload = () => {
      if (iframeRef.current && (window as any).Vimeo) {
        playerRef.current = new (window as any).Vimeo.Player(iframeRef.current);
        playerRef.current.on('play', () => setIsPlaying(true));
        playerRef.current.on('pause', () => setIsPlaying(false));
        playerRef.current.on('timeupdate', (data: any) => {
          setProgress(data.percent * 100);
        });
        playerRef.current.getDuration().then((d: number) => {
          setDuration(d);
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy().catch(() => {});
      }
    };
  }, []);

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause();
      } else {
        playerRef.current.play();
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!playerRef.current || duration === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = x / rect.width;
    setProgress(percent * 100);
    playerRef.current.setCurrentTime(percent * duration);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in">
              Testimonials
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              What Our Clients Say
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              Don't just take our word for it. Hear from the clients who have 
              trusted us with their most important projects.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Client Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              Watch what our clients have to say about working with Ever Grace Construction.
            </p>
          </div>
          <div 
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-elegant relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1180415697?controls=0&title=0&byline=0&portrait=0"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Client Testimonial Video"
              ></iframe>
              
              {/* Overlay for clicking */}
              <div 
                className="absolute inset-0 cursor-pointer flex items-center justify-center transition-all duration-300 rounded-lg overflow-hidden"
                style={{ backgroundColor: isHovered && isPlaying ? "rgba(0,0,0,0.2)" : !isPlaying ? "rgba(0,0,0,0.4)" : "transparent" }}
                onClick={togglePlay}
              >
                <div 
                  className={`w-20 h-20 bg-accent rounded-full flex items-center justify-center text-accent-foreground shadow-lg transform transition-all duration-300 ${
                    isPlaying && !isHovered ? "opacity-0 scale-90" : "opacity-100 scale-100 hover:scale-110"
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 pointer-events-none fill-current" />
                  ) : (
                    <Play className="w-8 h-8 ml-1 pointer-events-none fill-current" />
                  )}
                </div>

                {/* Scroller / Progress Bar */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 py-2 px-1 transition-opacity duration-300 z-10 ${isHovered || !isPlaying ? 'opacity-100' : 'opacity-0'}`}
                  onClick={handleSeek}
                >
                  <div className="h-1.5 md:h-2 bg-white/30 rounded-full overflow-visible relative hover:h-2 md:hover:h-2.5 transition-all duration-200">
                    <div 
                      className="absolute top-0 bottom-0 left-0 bg-accent rounded-full transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transform translate-x-1/2 shadow-sm transition-opacity duration-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {false && (
        <>
          {/* Featured Testimonial Carousel */}
          <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-lg">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-12">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center pt-4">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-display italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-accent text-sm font-medium">
                      {testimonials[currentIndex].project}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-accent w-6" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            More Client Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-2xl p-6 shadow-elegant hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text.substring(0, 150)}..."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        </>
      )}

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, hsl(220,90%,12%) 0%, hsl(220,80%,20%) 45%, hsl(28,40%,16%) 100%)"
        }} />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #ffffff, #ffffff 1px, transparent 1px, transparent 32px)`,
          }}
        />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background: "hsl(220,85%,40%)" }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15" style={{ background: "hsl(28,60%,40%)" }} />

        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have trusted us with their projects.
          </p>
          <Button variant="navy" size="xl" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
