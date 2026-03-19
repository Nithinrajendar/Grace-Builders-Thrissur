import sys
from PIL import Image, ImageDraw

def make_circle_image(input_path, output_path, size):
    try:
        img = Image.open(input_path).convert("RGBA")
    except Exception as e:
        print(f"Error opening {input_path}: {e}")
        return

    # Crop to square
    width, height = img.size
    min_dim = min(width, height)
    left = (width - min_dim) / 2
    top = (height - min_dim) / 2
    right = (width + min_dim) / 2
    bottom = (height + min_dim) / 2
    img = img.crop((left, top, right, bottom))
    
    # Resize to target
    img = img.resize((size, size), Image.Resampling.LANCZOS)
    
    # Create circular mask
    mask = Image.new('L', (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size, size), fill=255)
    
    # Apply mask
    result = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    result.paste(img, (0, 0), mask)
    
    # Save
    result.save(output_path, "PNG")
    print(f"Saved {output_path}")

input_img = "public/EGC favicon.png"
make_circle_image(input_img, "public/favicon.png", 512)
make_circle_image(input_img, "public/favicon-32x32.png", 32)
make_circle_image(input_img, "public/apple-touch-icon.png", 180)

print("Done generating favicons.")
