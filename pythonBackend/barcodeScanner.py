from pyzbar.pyzbar import decode
from PIL import Image

def scan_barcodes(image_path):

    image = Image.open(image_path)
    
    
    barcodes = decode(image)
    
    if barcodes:
        for barcode in barcodes:
            barcode_data = barcode.data.decode('utf-8')
            barcode_type = barcode.type
            
            #since ISBN barcodes start with 978 or 979
            if barcode_type == "EAN13" and (barcode_data.startswith("978") or barcode_data.startswith(979)):
                print (f"Found ISBN Barcode: {barcode_data}")
                print ("Barcode Type : ISBN-13") 
            else : 
                print(f"Found Barcode: {barcode_data}")
                print("Barcode Type : {barcode_type}")
    else:
        print("No barcodes found.")
        
if __name__ == "__main__":
    image_path = r"C:\Users\arryl\Desktop\thrift-scanner\pythonBackend\barcodeImages\aGameOfThrones.jpg"
    scan_barcodes(image_path)
