import iotEnvironmentImage from '../../images/projects/iot environment.jpg';
import presentation from '../../files/IoT1/Presentation IOT.pptx';
import raspberryPiPhoto from '../../files/IoT1/Rapsberri Pi Photo.jpg';
import sensorsPhoto from '../../files/IoT1/Sensors Photo.jpg';

export const iotEnvironment = {
  title: 'Smart Weather Station',
  description: 'Raspberry Pi-based weather station for collecting and displaying local climate data.',
  extendedDescription: 'A weather monitoring system built using a Raspberry Pi 4 that collects and displays environmental data including temperature, humidity, and air quality.\n\n' +
  'System Features:\n\n' +
  '• Real-time temperature monitoring using DS18B20 sensor\r' +
  '• Humidity tracking with DHT11 sensor\r' +
  '• Air quality measurement via SDS011 sensor\r' +
  '• Data display on LCD1602 screen\r' +
  '• Automated temperature alerts through an active buzzer when exceeding 30°C\n\n' +
  'Interactive GUI Functions:\n\n' +
  '• Display temperature and humidity\r' +
  '• Show air quality metrics\r' +
  '• Temperature threshold monitoring\n\n' +
  'The project demonstrates integration of multiple sensors, data processing, and user interface design in IoT applications.',
 
  technologies: [
    'Raspberry Pi & sensors',
    'Python',
    'GPIO'
  ],
  githubLink: 'https://github.com/StudentChamplain/IoTEnvironment',
  image: iotEnvironmentImage,
  youtubeUrl: 'https://www.youtube.com/watch?v=gFJCFxc6_as',
  files: [
    presentation,
    raspberryPiPhoto,
    sensorsPhoto
  ]
};

export default iotEnvironment;
