<p align="center">
  Find Mosque Easily!<p>
  </p>
<p align="center">
  <a href ="https://www.gnu.org/licenses/gpl-3.0"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License - GPLv3"></a>
  <img src="https://img.shields.io/badge/status-alpha-orange" alt="Status - Alpha"></a>
</p>

# MosquEase
A service to help find the nearest and most comfortable mosque for you.

## Table of Contents
- [How do I use it?](#howtouse)
- [Tech stack](#techstack)
- [License](#license)

## How do I use it?
<a name="howtouse"></a>
Currently, MosquEase is in alpha development and only supports one mosque location. Trial site will be announced soon. Follow these steps to run it locally.
Ensure you have [Node.js](https://nodejs.org/en) and npm installed on your system. If you already have it, here's how you can run the service by yourself.

Clone this repository by using this command:

    git clone https://github.com/Smart-Mosque-Monitoring-System/MosquEase-Web.git

Go to the repository location:

    cd MosquEase-Web

Install all the dependencies:

    npm install

Make sure you already have an Expo account, then build the project using EAS:

    npm run dev

After the process is done, you can run the service through your browser. Make sure you have the correct enviroment secrets (like API Key).

## Tech stack
<a name="techstack"></a>
- **React**: The core framework for building the frontend application.
- **Shadcn UI**: Main UI library.
- **Supabase**: Handles data storage and provides API service (BaaS).
- **Python**: Handles head count prediction using pre-trained YOLOv8 model, also acts as the API for the image procesing.
- **ESP32-CAM**: Handles image and data capture along with other ESP32's compatible sensors like OV2640 and BME280.

## License
<a name="license"></a>
This project is licensed under the [GNU General Public License version 3](https://www.gnu.org/licenses/gpl-3.0) (GPLv3).
