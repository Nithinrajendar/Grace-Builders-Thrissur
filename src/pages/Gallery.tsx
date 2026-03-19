import { useState, useRef, useEffect, useCallback } from "react";
import { Layout } from "@/components/layout/Layout";
import { galleryImages, galleryCategories, type GalleryImage } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [gridMaxHeight, setGridMaxHeight] = useState<number | undefined>(undefined);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const calculateMaxHeight = useCallback(() => {
    if (gridRef.current) {
      const firstItem = gridRef.current.querySelector<HTMLElement>(":scope > div");
      if (firstItem) {
        const itemHeight = firstItem.getBoundingClientRect().height;
        const gap = 20; // gap-5 = 1.25rem = 20px
        const height = 3 * itemHeight + 2 * gap;
        setGridMaxHeight(height);
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(calculateMaxHeight, 150);
    window.addEventListener("resize", calculateMaxHeight);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateMaxHeight);
    };
  }, [filtered, calculateMaxHeight]);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Our Gallery
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            A visual showcase of our craftsmanship, dedication, and excellence across every project we undertake.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground shadow-accent-glow"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/20"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Uniform Grid — strictly 3 rows visible, scroll for more */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-y-auto pr-2 scroll-smooth"
            style={{ maxHeight: gridMaxHeight ? `${gridMaxHeight}px` : "60vh", scrollbarWidth: "thin" }}
          >
            {filtered.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-elegant animate-scale-in"
                style={{ animationDelay: `${Math.min(index, 11) * 80}ms` }}
                onClick={() => setLightboxImage(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500 flex items-end">
                    <div className="p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-2">
                        {image.category}
                      </span>
                      <p className="text-primary-foreground text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length > 12 && (
            <p className="text-center text-muted-foreground mt-4 text-sm animate-pulse">
              ↓ Scroll down to see more images ↓
            </p>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12 text-lg">
              No images found in this category.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox with navigation */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors z-10"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 text-primary-foreground hover:text-accent transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              const idx = filtered.findIndex((i) => i.id === lightboxImage.id);
              if (idx > 0) setLightboxImage(filtered[idx - 1]);
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          {/* Next */}
          <button
            className="absolute right-4 md:right-8 text-primary-foreground hover:text-accent transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              const idx = filtered.findIndex((i) => i.id === lightboxImage.id);
              if (idx < filtered.length - 1) setLightboxImage(filtered[idx + 1]);
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
