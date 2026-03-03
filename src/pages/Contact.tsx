import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle, AlertCircle, LocateFixed, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["3rd Floor, Flamon Complex, Kuriachira", "Thrissur-6, Kerala, India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 97477 38919", "+91 96336 91891"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["egcbuild@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM"],
  },
];

const projectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "House Renovation",
  "Building Renovation",
  "Interior Design & Fit-out",
  "Exterior Design & Landscaping",
  "Roofing & Waterproofing",
  "Foundation & Structural Work",
  "Plumbing & Electrical Work",
  "Painting & Finishing",
  "Demolition & Site Clearing",
  "Road & Infrastructure",
  "Industrial Construction",
  "Temple / Religious Building",
  "Swimming Pool Construction",
  "Compound Wall & Fencing",
  "Other",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    subject: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formEl = e.target as HTMLFormElement;
    const data = new FormData(formEl);
    data.append("access_key", "06c93e34-3466-4ccf-8dfc-07f8c7cd218e");
    // Append projectType manually since radix-select doesn't natively set form data
    data.append("Project Type", formData.projectType);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await response.json();

      if (json.success) {
        toast.success("Message sent! We'll get back to you soon.");
        setResult({ type: "success", text: "Your message was sent successfully! We'll be in touch shortly." });
        formEl.reset();
        setFormData({ name: "", phone: "", projectType: "", subject: "", location: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
        setResult({ type: "error", text: json.message || "Submission failed. Please try again." });
      }
    } catch {
      toast.error("Network error. Please check your connection.");
      setResult({ type: "error", text: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const detectLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }

    setIsDetectingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Use reverse geocoding to get address from coordinates
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
          );
          const data = await response.json();
          if (data.display_name) {
            setFormData(prev => ({ ...prev, location: data.display_name }));
            toast.success("Location detected successfully!");
          } else {
            // Fallback to coordinates
            setFormData(prev => ({ ...prev, location: `${latitude}, ${longitude}` }));
            toast.success("Coordinates detected. You can update with a specific address.");
          }
        } catch {
          // Fallback to coordinates on API error
          setFormData(prev => ({ ...prev, location: `${latitude}, ${longitude}` }));
          toast.success("Coordinates detected. You can update with a specific address.");
        } finally {
          setIsDetectingLocation(false);
        }
      },
      (error) => {
        setIsDetectingLocation(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            toast.error("Location permission denied. Please enter your location manually.");
            break;
          case error.POSITION_UNAVAILABLE:
            toast.error("Location information unavailable. Please enter manually.");
            break;
          case error.TIMEOUT:
            toast.error("Location request timed out. Please try again or enter manually.");
            break;
          default:
            toast.error("Unable to detect location. Please enter manually.");
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919747738919?text=Hello, I'm interested in your construction services.", "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in">
              Get In Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Let's Build Something Great Together
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              Ready to start your project? Contact us today for a free consultation
              and detailed quote. Our team is here to answer all your questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        {item.details.map((detail) => (
                          <p key={detail} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={openWhatsApp}
                className="w-full flex items-center justify-center gap-3 bg-green-500 text-white py-4 rounded-xl hover:bg-green-600 transition-colors font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-elegant h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.7427449156992!2d76.2257553950068!3d10.502951830753144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7efd36c1593c5%3A0xf82a675b900f62f!2sFLAMON%20Complex!5e0!3m2!1sen!2sin!4v1772293659188!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location - FLAMON Complex, Kuriachira, Thrissur"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  {/* Row 2: Type of Project & Subject */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                        Type of Project *
                      </label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) =>
                          setFormData(prev => ({ ...prev, projectType: value }))
                        }
                        required
                      >
                        <SelectTrigger id="projectType" className="h-12">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. New House Construction"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  {/* Row 3: Place / Location */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                      Place / Location *
                    </label>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Enter your project location or detect automatically"
                          required
                          className="h-12"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        className="h-12 px-4 flex items-center gap-2 border-accent/30 hover:bg-accent/10 hover:text-accent whitespace-nowrap"
                        onClick={detectLocation}
                        disabled={isDetectingLocation}
                      >
                        {isDetectingLocation ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span className="hidden sm:inline">Detecting...</span>
                          </>
                        ) : (
                          <>
                            <LocateFixed className="w-4 h-4" />
                            <span className="hidden sm:inline">Detect Location</span>
                          </>
                        )}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1.5">
                      Click "Detect Location" to auto-fill, or type your address manually.
                    </p>
                  </div>

                  {/* Row 4: Message (optional) */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Additional Details <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your project requirements, budget, timeline..."
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  {/* GDPR Notice */}
                  <p className="text-xs text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-accent hover:underline">Privacy Policy</a>
                    {" "}and consent to being contacted about your inquiry.
                  </p>

                  {/* Inline result feedback */}
                  {result && (
                    <div className={`flex items-start gap-3 p-4 rounded-xl text-sm font-medium ${result.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                      }`}>
                      {result.type === "success"
                        ? <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        : <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                      <span>{result.text}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="gold"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
