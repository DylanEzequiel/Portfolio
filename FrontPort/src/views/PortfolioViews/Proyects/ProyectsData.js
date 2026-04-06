import coreForce from '../../../assets/Proyects/coreForece/coreForce.jpg';
import iceCream from '../../../assets/Proyects/iceCream/IceCream.jpg';
import gestoria from '../../../assets/Proyects/GestoriaBravo/GestoriaBravo.jpg';
import blockchain from '../../../assets/Proyects/Blockchain/Blockchain.jpg';
import ecoCharge from '../../../assets/Proyects/ecoCharge/ecoCharge.jpg';
import wishlist from '../../../assets/Proyects/Wishlist/wishlist.jpg';
import purmamarca from '../../../assets/Proyects/Purmamarca/purmamarcaEccomerce.png';
import jmservice from '../../../assets/Proyects/JMservice/jmservice.png';
import Montpellier from '../../../assets/Proyects/Montpellier/Montpellier.png';
const projects = [
    // {
    //     title: 'Pomodoro App ',
    //     url: null,
    //     techs: ['React Native', 'Expo', 'Calendar API'],
    //     descriptionEsp:
    //         'Aplicación en desarrollo basada en la técnica Pomodoro. La idea es integrarla con el calendario del dispositivo para registrar exámenes, tareas y proyectos, combinando gestión del tiempo con planificación académica.',
    //     descriptionEng:
    //         'A Pomodoro-based app currently in development. The goal is to integrate it with the device calendar to track exams, tasks, and project deadlines, combining time management with planning.',
    //     github: 'https://github.com/DylanEzequiel/Mobile-pomodoro',
    // },
    {
        title: 'Montpellier Invitations',
        techs: ['React', 'TypeScript', 'TailwindCSS', 'NestJS', 'MySQL', 'Nodemailer'],
        url: Montpellier,
        descriptionEsp:
            'Plataforma para creación de invitaciones digitales dinámicas para bodas. Permite personalizar contenido, gestionar invitados y centralizar confirmaciones. Se desarrolló un backend con NestJS y MySQL para persistencia de datos y envío de notificaciones con Nodemailer, mejorando la organización del evento.',
        descriptionEng:
            'Platform for creating dynamic digital wedding invitations. Enables content customization, guest management, and RSVP tracking. A backend built with NestJS and MySQL handles data persistence, while Nodemailer is used for notifications, improving event organization.',
        vercel: 'https://technical-test-qoop-ai.vercel.app',
    },
    {
        title: 'Wishlist',
        techs: ['React', 'TypeScript', 'Transbank', 'Node.js', 'NestJS', 'MySQL', 'Nodemailer'],
        url: wishlist,
        descriptionEsp:
            'Aplicación para gestión de listas de regalo para bodas con integración de pagos mediante Transbank. Cuenta con backend en NestJS y base de datos MySQL para la gestión de usuarios, regalos y transacciones, además de notificaciones vía email con Nodemailer.',
        descriptionEng:
            'Wedding gift list application with Transbank payment integration. Includes a NestJS backend with MySQL for managing users, gifts, and transactions, along with email notifications using Nodemailer.',
        vercel: 'https://wish-list.cl',
    },
    {
        title: 'Purmamarca Store',
        techs: [
            'React',
            'TypeScript',
            'TailwindCSS',
            'WhatsApp API',
            'NestJS',
            'MySQL',
            'Nodemailer',
        ],
        url: purmamarca,
        descriptionEsp:
            'E-commerce enfocado en la venta de productos con finalización de compra vía WhatsApp. Se optimizó la accesibilidad del catálogo y la navegación, permitiendo pedidos rápidos. Backend en NestJS con MySQL para gestión de productos y consultas, junto con notificaciones por email. Esto contribuyó a un aumento en la cantidad de ventas.',
        descriptionEng:
            'E-commerce focused on product sales with checkout via WhatsApp. Catalog accessibility and navigation were optimized for faster ordering. Built with a NestJS backend and MySQL for product management, plus email notifications. This contributed to increased sales.',
        vercel: 'https://www.purmamarcastore.com.ar',
    },
    {
        title: 'JM Service',
        techs: ['React', 'TypeScript', 'TailwindCSS', 'NestJS', 'MySQL', 'Nodemailer'],
        url: jmservice,
        descriptionEsp:
            'Landing page corporativa para una startup de servicios eléctricos y albañilería. Se desarrolló una presentación clara de los servicios y formularios de contacto conectados a un backend en NestJS con MySQL, utilizando Nodemailer para consultas. Esto incrementó la captación de nuevos clientes.',
        descriptionEng:
            'Corporate landing page for an electrical and construction services startup. Features a clear service presentation and contact forms connected to a NestJS backend with MySQL, using Nodemailer for inquiries. This increased customer acquisition.',
        vercel: 'https://jmservice.com.ar',
    },
    {
        title: 'EcoCharge',
        url: ecoCharge,
        techs: ['React', 'Typescript', 'Tailwindcss', 'Framer Motion'],
        descriptionEsp:
            'Una plataforma para entusiastas del fitness, desarrollada con React y TypeScript. Utiliza PostgreSQL para la gestión de datos y TailwindCSS para el diseño. Implementa pagos con Mercado Pago y Stripe, facilitando la suscripción a planes de entrenamiento.',
        descriptionEng:
            'A platform for fitness enthusiasts, developed with React and TypeScript. It uses PostgreSQL for data management and TailwindCSS for styling. Payment integration with Mercado Pago and Stripe allows users to subscribe to workout plans easily.',
        github: 'https://github.com/DylanEzequiel/TechnicalTest_Qoop.Ai.git',
        vercel: 'https://technical-test-qoop-ai.vercel.app',
    },
    {
        title: 'Gestoria Bravo',
        url: gestoria,
        techs: ['React', 'Typescript', 'Tailwind css'],
        descriptionEsp:
            'Un sitio web corporativo para una gestoría, creado con React y TypeScript. Su diseño limpio con TailwindCSS transmite confianza y profesionalismo, ofreciendo información clara sobre los servicios legales y administrativos disponibles.',
        descriptionEng:
            'A corporate website for a management consultancy, created with React and TypeScript. Its clean design, built with TailwindCSS, conveys trust and professionalism, providing clear information about available legal and administrative services.',
        github: 'https://github.com/DylanEzequiel/GestoriasBravo',
        vercel: 'https://gestorias-bravo.vercel.app',
    },
    {
        title: 'Heladeria IceCream',
        url: iceCream,
        techs: ['React', 'Typescript', 'Postgress', 'Tailwindcss'],
        descriptionEsp:
            'Un e-commerce de helados diseñado con React y TypeScript. Cuenta con una base de datos en PostgreSQL y un diseño atractivo con TailwindCSS. Permite a los usuarios explorar sabores y realizar pedidos fácilmente.',
        descriptionEng:
            'An ice cream e-commerce website built with React and TypeScript. It features a PostgreSQL database and an attractive design with TailwindCSS. Users can explore flavors and place orders seamlessly.',
        github: 'https://github.com/leandromortarini2/IceCream',
        vercel: 'https://ice-cream-seven.vercel.app',
    },
    {
        title: 'CoreForce Fitness',
        url: coreForce,
        techs: ['React', 'Typescript', 'Postgress', 'Tailwindcss', 'Mercado Pago', 'Stripe'],
        descriptionEsp:
            'Una plataforma para entusiastas del fitness, desarrollada con React y TypeScript. Utiliza PostgreSQL para la gestión de datos y TailwindCSS para el diseño. Implementa pagos con Mercado Pago y Stripe.',
        descriptionEng:
            'A platform for fitness enthusiasts, developed with React and TypeScript. It uses PostgreSQL for data management and TailwindCSS for styling. Payment integration with Mercado Pago and Stripe.',
        github: 'https://github.com/DylanEzequiel/Front-CoreForce',
        vercel: 'https://front-core-force.vercel.app',
    },
    {
        title: 'Test SmartContracts & web3',
        url: blockchain,
        techs: ['React', 'Typescript', 'Metamask', 'Web3', 'Remix IDE', 'Tailwindcss'],
        descriptionEsp:
            'Un proyecto de prueba sobre contratos inteligentes en blockchain, desarrollado con React y TypeScript. Usa herramientas como Metamask y Remix IDE para la interacción con Web3.',
        descriptionEng:
            'A test project on smart contracts in blockchain, developed with React and TypeScript. It utilizes tools like Metamask and Remix IDE to interact with Web3.',
        github: 'https://github.com/DylanEzequiel/ExtrimianChallenge.git',
    },
];

export default projects;
