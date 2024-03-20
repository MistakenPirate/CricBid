import os
import json

def check_images_in_folder(json_file):
    # Load JSON data
    with open(json_file, 'r') as f:
        data = json.load(f)

    # Extract imageURLs from the JSON data
    image_urls = [player.get('imageURL', '') for player in data]

    # Get the filenames present in the folder
    folder_files = set(os.listdir('.'))  # Current working directory

    # Check for missing images
    missing_images = [image_url for image_url in image_urls if image_url not in folder_files]

    if missing_images:
        print("The following images are missing from the folder:")
        for image_url in missing_images:
            print("- {}".format(image_url))
    else:
        print("All images are present in the folder.")

# Example usage
json_file = '/home/sam/Desktop/Script/NewFolder/Player1.json'  # Path to your JSON file
check_images_in_folder(json_file)
