from pyzbar.pyzbar import decode
from PIL import Image

def scan_barcodes(image_path):
    # Open the image
    image = Image.open(image_path)
    
    # Decode the barcodes in the image
    barcodes = decode(image)
    
    if barcodes:
        for barcode in barcodes:
            barcode_data = barcode.data.decode('utf-8')
            barcode_type = barcode.type
            print(f"Found Barcode: {barcode_data}")
            print(f"Barcode Type: {barcode_type}")
    else:
        print("No barcodes found.")
        
# Example usage
if __name__ == "__main__":
    image_path = "path_to_your_image.png"  # Replace with your image path
    scan_barcodes(image_path)
