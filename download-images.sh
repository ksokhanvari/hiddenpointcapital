#!/usr/bin/env bash
# Downloads the original images from the live Wix site into ./images/
# Run this once from the site folder:  bash download-images.sh
set -e
mkdir -p images

echo "Downloading images..."
curl -L -o images/logo.png                   "https://static.wixstatic.com/media/73492b_7112de2291f243db8d9aff0a70856cb8~mv2.png"
curl -L -o images/home-data-processing.jpeg   "https://static.wixstatic.com/media/11062b_9aeb82c30e9742bcadc79b3dc8eb9fdb~mv2.jpeg"
curl -L -o images/home-contact.jpg            "https://static.wixstatic.com/media/f8d91305cea3426f92308cd0fa0b18f0.jpg"
curl -L -o images/about.png                   "https://static.wixstatic.com/media/697bc8_e700849d8f3d41b29bfd9102524f3b30~mv2_d_1920_1283_s_2.png"
curl -L -o images/approach-market-analysis.jpg "https://static.wixstatic.com/media/34aef00a568e4c7db32033c39660ed8d.jpg"

echo "Done. Images saved to ./images/"
