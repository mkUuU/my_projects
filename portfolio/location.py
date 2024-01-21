import requests
import phonenumbers
from phonenumbers import geocoder

def get_location_by_country(country_name):
    api_key = "YOUR_API_KEY"
    base_url = "https://maps.googleapis.com/maps/api/geocode/json"
    params = {
        "address": country_name,
        "key": api_key
    }

    response = requests.get(base_url, params=params)
    data = response.json()

    if data["status"] == "OK":
        location = data["results"][0]["formatted_address"]
        return location
    else:
        return None

phone_number = phonenumbers.parse("Number with county code")
country_name = geocoder.description_for_number(phone_number, 'en')
location = get_location_by_country(country_name)

if location:
    print("Exact Location:")
    print(location)
else:
    print("Could not determine the exact location.")


















from barcode import EAN13
from barcode.writer import ImageWriter
from PIL import Image

def generate_barcode(number):
    my_code = EAN13(number, writer=ImageWriter())
    my_code.save(f"barcode_{number}.png")
    img = Image.open(f"barcode_{number}.png")
    img.show()

number = 1110987654321

while number > 0:
    generate_barcode(number)
    number -= 1