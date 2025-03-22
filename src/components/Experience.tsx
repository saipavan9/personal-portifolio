import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card.tsx";
import bodo from "../assets/bodo.jpeg"
import ninjacart from "../assets/ninjacart.jpeg"
import wipro from "../assets/wipro.jpeg"
import freelancer from "../assets/freelancer.png"

export default function Experience() {

    const bodoIcons = [
        { name: "AWS", src: "https://skillicons.dev/icons?i=aws" },
        { name: "Azure", src: "https://skillicons.dev/icons?i=azure" },
        { name: "Kubernetes", src: "https://skillicons.dev/icons?i=kubernetes" },
        { name: "Terraform", src: "https://skillicons.dev/icons?i=terraform" },
        { name: "NestJS", src: "https://skillicons.dev/icons?i=nestjs" },
        { name: "TypeScript", src: "https://skillicons.dev/icons?i=typescript" },
        { name: "Python", src: "https://skillicons.dev/icons?i=python" },
        { name: "React", src: "https://skillicons.dev/icons?i=react" },
    ]

    const ninjacartIcons = [
        { name: "Java", src: "https://skillicons.dev/icons?i=java" },
        { name: "Spring Boot", src: "https://skillicons.dev/icons?i=spring" },
        { name: "AWS", src: "https://skillicons.dev/icons?i=aws" },
        { name: "Kubernetes", src: "https://skillicons.dev/icons?i=kubernetes" }
    ]


    const wiproIcons = [
        { name: "AWS", src: "https://skillicons.dev/icons?i=aws" },
        { name: "Kubernetes", src: "https://skillicons.dev/icons?i=kubernetes" },
        { name: "Python", src: "https://skillicons.dev/icons?i=python" },
        { name: "React", src: "https://skillicons.dev/icons?i=react" },
    ]

    const freelanceIcons = [
        { name: "AWS", src: "https://skillicons.dev/icons?i=aws" },
        { name: "Kubernetes", src: "https://skillicons.dev/icons?i=kubernetes" },
        { name: "Google Cloud", src: "https://skillicons.dev/icons?i=googlecloud" },
        { name: "Laravel", src: "https://skillicons.dev/icons?i=laravel" },
        { name: "WordPress", src: "https://skillicons.dev/icons?i=wordpress"},
    ]


    return(
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'oklch(0.278 0.033 256.848)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  oklch(0.278 0.033 256.848)' }}
                date="2022 - present"
                iconStyle={{ color: '#fff' }}
                icon={
                    <img src={bodo} alt="Icon" className="rounded-full object-cover mx-auto shadow-md"/>
                }
                intersectionObserverProps={{
                    triggerOnce: false,
                    rootMargin: '0px 0px -40px 0px',
                }}
            >
                <Card className={"bg-gray-800 border-0 p-0 shadow-none"}>
                    <h1 className={"text-4xl"}>Bodo.ai</h1>
                    <CardTitle className={"text-gray-400"}>Senior DevOps & Full Stack Engineer</CardTitle>
                    <CardContent>
                        <ul className="list-disc marker:text-white leading-6 list-outside space-y-4 text-gray-300">
                            <li>Developed backend APIs using <b>TypeScript</b> and the <b>NestJS</b> framework for core features of the platform</li>
                            <li>Developed and maintained <b>Terraform code</b> for both the platform features and infrastructure architecture</li>
                            <li>Built CI/CD pipelines with <b>GitHub Actions</b>, improving deployment efficiency by 30%.</li>
                            <li>Managed the <b>Kubernetes</b> infrastructure where the platform was deployed, ensuring high availability and scalability</li>
                            <li>Worked with Apple on deploying Bodo on <b>EKS clusters</b> with reducing the computation time by 10x</li>
                            <li>Solely led front-end development using <b>React</b> which included code refactoring for reducing technical debt,
                                developed features and ensured reliability.
                            </li>
                            <li>Reduced the startup time of EC2 instances from 10 minutes to 2 minutes by better optimization of shell scripting</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <div className="grid grid-cols-8 gap-2">
                            {bodoIcons.map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col rounded-1xl shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer"
                                >
                                    <img src={item.src} alt={item.name} className="w-16 h-16" />
                                    <div className="absolute bottom-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs py-1 px-3 rounded-lg">
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardFooter>
                </Card>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'oklch(0.278 0.033 256.848)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  oklch(0.278 0.033 256.848)' }}
                date="2021 - 2022"
                iconStyle={{ color: '#fff' }}
                icon={
                    <img src={ninjacart} alt="Icon" className="rounded-full object-cover mx-auto shadow-md"/>
                }
                intersectionObserverProps={{
                    triggerOnce: false,
                    rootMargin: '0px 0px -40px 0px',
                }}
            >
                <Card className={"bg-gray-800 border-0 p-0 shadow-none"}>
                    <h1 className={"text-4xl"}>Ninjacart</h1>
                    <CardTitle className={"text-gray-400"}>Software Development Engineer (SDE) - 1</CardTitle>
                    <CardContent>
                        <ul className="list-disc marker:text-white leading-6 list-outside space-y-4 text-gray-300">
                            <li>Contributed to the development of backend API applications using <b>Java Spring Boot</b> framework.</li>
                            <li>Built and maintained CI/CD pipelines to streamline the development and deployment processes which ensured efficient and
                                automated delivery of applications.
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <div className="grid grid-cols-8 gap-2">
                            {ninjacartIcons.map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col rounded-1xl shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer"
                                >
                                    <img src={item.src} alt={item.name} className="w-16 h-16" />
                                    <div className="absolute bottom-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs py-1 px-3 rounded-lg">
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardFooter>
                </Card>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'oklch(0.278 0.033 256.848)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  oklch(0.278 0.033 256.848)' }}
                date="2019 - 2021"
                iconStyle={{ color: '#fff' }}
                icon={
                    <img src={wipro} alt="Icon" className="rounded-full object-cover mx-auto shadow-md"/>
                }
                intersectionObserverProps={{
                    triggerOnce: false,
                    rootMargin: '0px 0px -40px 0px',
                }}
            >
                <Card className={"bg-gray-800 border-0 p-0 shadow-none"}>
                    <h1 className={"text-4xl"}>Wipro (Apple Client)</h1>
                    <CardTitle className={"text-gray-400"}>Software Engineer</CardTitle>
                    <CardContent>
                        <ul className="list-disc marker:text-white leading-6 list-outside space-y-4 text-gray-300">
                            <li>Contributed to a project leveraging graph database technology <b>ArangoDB</b> to generate demand planning for
                                components across multiple vendors for <b>Apple using Python and Dash</b></li>
                            <li>Improved demand planning accuracy by leveraging ArangoDB for real-time data insights.
                            </li>
                            <li>Developed the API using <b>Fast API</b> python which sends the information to the <b>React</b> application</li>
                            <li>Deployed CI/CD pipelines for seamless application deployment in <b>Kubernetes</b> clusters</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <div className="grid grid-cols-8 gap-2">
                            {wiproIcons.map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col rounded-1xl shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer"
                                >
                                    <img src={item.src} alt={item.name} className="w-16 h-16" />
                                    <div className="absolute bottom-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs py-1 px-3 rounded-lg">
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardFooter>
                </Card>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'oklch(0.278 0.033 256.848)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  oklch(0.278 0.033 256.848)' }}
                date="2020 - "
                iconStyle={{ color: '#fff' }}
                icon={
                    <img src={freelancer} alt="Icon" className="rounded-full object-cover mx-auto shadow-md bg-white p-1"/>
                }
                intersectionObserverProps={{
                    triggerOnce: false,
                    rootMargin: '0px 0px -40px 0px',
                }}
            >
                <Card className={"bg-gray-800 border-0 p-0 shadow-none"}>
                    <CardTitle className={"text-3xl"}>Freelance DevOps Engineer</CardTitle>
                    <CardContent>
                        <ul className="list-disc marker:text-white leading-6 list-outside space-y-4 text-gray-300">
                            <li> Migrated multiple applications <b>(3 WordPress sites and 7 Laravel projects)</b> to <b>Google Cloud</b>
                                and migrated SQL server to CloudSQL which improved the application reliability and scalability
                            </li>
                            <li>Reduced deployment time by 40% using <b>Jenkins</b> CI/CD pipelines
                            </li>
                            <li>Deployed 6 microservices on <b>AWS EKS</b> with automated CI/CD pipelines, ensuring seamless updates</li>
                            <li>Integrated 20 <b>Google Cloud Functions</b> with Google Cloud API Gateway for efficient request routing and security purposes</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <div className="grid grid-cols-8 gap-2">
                            {freelanceIcons.map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col rounded-1xl shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer"
                                >
                                    <img src={item.src} alt={item.name} className="w-16 h-16" />
                                    <div className="absolute bottom-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs py-1 px-3 rounded-lg">
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardFooter>
                </Card>

            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}
