from flask import Flask, request, jsonify
import cv2
from pyzbar.pyzbar import decode

app = Flask(__name__)

def scan_barcode():
    cap = cv2.VideoCapture(0)
    while True:
        ret, frame = cap.read()
        if not ret:
            break

        barcodes = decode(frame)
        for barcode in barcodes:
            barcode_data = barcode.data.decode("utf-8")
            cap.release()
            cv2.destroyAllWindows()
            return barcode_data

@app.route('/scan', methods=['GET'])
def scan():
    barcode_info = scan_barcode()
    return jsonify({"barcode": barcode_info})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


