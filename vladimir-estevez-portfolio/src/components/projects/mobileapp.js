import mobileAppImage from '../../images/projects/kotlin.png';
import finalReport from '../../files/mobileApp/Mobile App Final Project - System Design.pdf';


export const mobileapp = {
  title: 'Brewery Android Mobile App',
  description: 'A native Android application built with Kotlin and Jetpack Compose for managing a brewery\'s beer inventory and order system.',
  extendedDescription: 'On this project we developed a comprehensive Android application for an imaginary brewery using Kotlin and modern Android development practices. The app features:\n\n• A clean Material Design 3 UI implementation using Jetpack Compose\r• Multi-screen navigation with bottom bar navigation between Menu, Beer Selection, and Checkout screens\r• Integration with external APIs for beer inventory management\r• Local data persistence using Room database for cart and order management\r• Asynchronous image loading and caching\r• State management using ViewModel and StateFlow\r• Dependency injection pattern for better code organization\r• Form validation for checkout process including email verification\r• Interactive date picker for order scheduling\r• Dynamic cart management with quantity controls\r• Responsive layout supporting different screen sizes\r• Error handling and loading states with user feedback\r• Integration with device features like email, phone, and web browser\r• Implementation of MVVM architecture pattern',
  technologies: [
    'Kotlin',
    'Jetpack Compose',
    'Material Design 3',
    'Room Database',
    'Retrofit',
    'Coroutines',
    'ViewModel',
    'StateFlow',
    'Coil Image Loading',
    'Navigation Component'
  ],
  githubLink: 'https://github.com/vladimir-estevez/MobileAppFinal.git',
  image: mobileAppImage,
  youtubeUrl: 'https://www.youtube.com/watch?v=57tOAcrAxqc',
  files: [finalReport]
};

export default mobileapp;