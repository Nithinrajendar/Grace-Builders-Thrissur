import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Play, Pause } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Testimonials = () => {
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

  return (
    <Layout>
      <Helmet>
        <title>Client Testimonials | What Our Clients Say – Ever Grace Constructions Thrissur</title>
        <meta name="description" content="Hear from our satisfied clients about their experience with Ever Grace Constructions. Watch video testimonials and read reviews from homeowners across Thrissur, Kerala." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-16 bg-primary">
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
              trusted us with their most important projects across Thrissur and Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Client Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              Watch what our clients have to say about working with Ever Grace Constructions.
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

      {/* Happy Moments Section */}
      <section className="pt-12 md:pt-16 pb-20 md:pb-28 lg:pb-32 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Memories
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Happy Moments with Clients
            </h2>
            <p className="text-muted-foreground text-lg">
              The joy and satisfaction of handing over the keys to a newly finished dream home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/Images/Key01.jpg",
              "/Images/Key03.jpg",
              "/Images/Key04.jpg",
              "/Images/Key05.jpg",
              "/Images/Key06.jpg",
              "/Images/Key07.jpg"
            ].map((img, index) => (
              <div 
                key={index} 
                className="group relative rounded-2xl overflow-hidden shadow-elegant aspect-[4/5] animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={img} 
                  alt={`Happy client receiving their home - Moment ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Join hundreds of satisfied clients who have trusted us with their construction projects in Kerala.
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
