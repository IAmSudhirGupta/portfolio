import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const PROJECTS = [
    {
        id: 1,
        title: "EasyCLM - Servicevelocity",
        client: "MobileForce Software Inc",
        teamSize : 6,
        functionalArea: "Field Service and Customer Service Management.",
        technologyUsed: "React JS, Bootstrap, ES6 javascript, Google Map API, jQuery, FullCalendar, React-Bootstrap, Rest API, Spring Boot, MySQL​.",
        description: "EasyCRM is the most powerful field service mobility presented in a simple to use dashboard providing your service team with the right information from all relevant data sources at the right time on your device",
        rolesAndResponsibility : "❏ Designed and Developed Scheduling System for Field Service Management and CLM. ❏ Used ​TSP Algorithm​ to implement ​Route Optimization​.",
        image: project1,
        link: "https://www.mobileforcesoftware.com/solutions/servicevelocity%E2%84%A2"
    },
    {
        id: 2,
        title: "Customer Feedback and Request Generation",
        client: "LitmusWorld/HDFC Bank",
        teamSize : 6,
        functionalArea: "Field Service and Customer Service Management.",
        technologyUsed: "Java, Oracle, Angular 5, BootStrap, HTML5/CSS, JavaScript, MongoDb, NodeJs, Python, REST APIs, Kafka, Redis etc.",
        description: "LitmusWorld Dashboard is an enterprise SaaS platform that delivers dramatic improvements in business processes by enabling customer interactions. It brings businesses closer to their customers to better understand their expectations and gather actionable insights by getting customer feedback and MAI(Measure, Act and Improve) principle.",
        rolesAndResponsibility : "❏ Setup the tokenization server​ (accessible via Intranet within HDFC network which encrypt the customer data, then send feed to litmus world dashboard for analytics) for HDFC bank. ❏ Writing the preprocessing Job, which process the large Volume of Data around 40 lac per day from different sources (EDW, CRM, IVR etc) and masking the data before sending it to the outside HDFC Network​.❏ On-Premise Deployment​ of Product Components and Customizations on AWS Cloud. ❏ Consuming the third party API and writing REST APIs as per requirement.❏ Worked with other teams for setup, deployment and Integration.",
        image: project2,
        link: "https://www.litmusworld.com/platform/?utm_source=Website&utm_medium=Menu_Btn&utm_campaign=Website_Menu&utm_content=Platform"
    },
    {
        id: 3,
        title: "VOPS - DIGITAL GPS BASED  OPTIMASATION ASSISTANT",
        client: "TransportHub",
        teamSize : 6,
        functionalArea: "Transport and Logistics.",
        technologyUsed: "Angular5, Bootstrap, ES6 javascript, Google Map API, Rest API, Spring Boot, MySQL​, MongoDb.",
        description: "VOPS that provides a great fleet tracking & management tool with a click. When your vehicles are on the road, it feels like they’re off the grid. It removes all those unknowns and put you in control through VOPS, a GPS fleet tracking , management & monitoring tool. With GPS tracker VOPS harness the power of TransportHub driver and fleet tracking app DriverHOOQ. It help you monitor the vehicles in your truck fleet, receive data from them, analyse it, and provide timely solutions for timely decisions on fuelling, maintenance, routing and even driver management",
        rolesAndResponsibility : "Requirement Analysis and Gathering, Development and Testing and releasing",
        image: project3,
        link: "https://transporthub.com/products/gps-fleet-tracking-system-management/"
    }
];

export default PROJECTS;