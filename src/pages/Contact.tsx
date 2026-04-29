import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
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
    details: ["Mon - Sat: 9:00 AM - 5:30 PM"],
  },
];

const projectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "House Renovation",
  "Building Renovation",
  "Interior Design & Fit-out",
  "Exterior Design & Landscaping",
  "Foundation & Structural Work",
  "Industrial Construction",
  "Temple / Religious Building",
  "Swimming Pool Construction",
  "Compound Wall & Fencing",
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
      <Helmet>
        <title>Contact Us | Get a Free Quote – Ever Grace Constructions Thrissur, Kerala</title>
        <meta name="description" content="Contact Ever Grace Constructions for your construction project in Thrissur, Kerala. Call +91 97477 38919, WhatsApp us, or fill out our form for a free consultation and quote." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-16 bg-primary">
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
      <section className="pt-12 md:pt-16 pb-20 md:pb-28 lg:pb-32 bg-background">
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

              <button
                onClick={openWhatsApp}
                className="group w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl hover:bg-[#20bd5a] transition-all duration-300 font-medium shadow-md shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
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
