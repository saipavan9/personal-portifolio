import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card.tsx";
import bodo from "../assets/bodo.jpeg";
import ninjacart from "../assets/ninjacart.jpeg";
import wipro from "../assets/wipro.jpeg";
import freelancer from "../assets/freelancer.png";
import heyamara from "../assets/heyamara.png";
import mercor from "../assets/mercor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  const heyAmaraIcons = [
    { name: "AWS", src: "https://skillicons.dev/icons?i=aws" },
    { name: "Kubernetes", src: "https://skillicons.dev/icons?i=kubernetes" },
    { name: "Terraform", src: "https://skillicons.dev/icons?i=terraform" },
    { name: "Docker", src: "https://skillicons.dev/icons?i=docker" },
    { name: "GitHub Actions", src: "https://skillicons.dev/icons?i=github" },
    { name: "Grafana", src: "https://skillicons.dev/icons?i=grafana" },
    { name: "Prometheus", src: "https://skillicons.dev/icons?i=prometheus" },
    { name: "Python", src: "https://skillicons.dev/icons?i=python" },
  ];

  const mercorIcons = [
    { name: "Python", src: "https://skillicons.dev/icons?i=python" },
    { name: "Docker", src: "https://skillicons.dev/icons?i=docker" },
    { name: "Bash", src: "https://skillicons.dev/icons?i=bash" },
    { name: "Linux", src: "https://skillicons.dev/icons?i=linux" },
  ];

  const bodoIcons = [
    { name: "AWS", src: "https://skillicons.dev/icons?i=aws" },
    { name: "Azure", src: "https://skillicons.dev/icons?i=azure" },
    { name: "Kubernetes", src: "https://skillicons.dev/icons?i=kubernetes" },
    { name: "Terraform", src: "https://skillicons.dev/icons?i=terraform" },
    { name: "NestJS", src: "https://skillicons.dev/icons?i=nestjs" },
    { name: "TypeScript", src: "https://skillicons.dev/icons?i=typescript" },
    { name: "Python", src: "https://skillicons.dev/icons?i=python" },
    { name: "React", src: "https://skillicons.dev/icons?i=react" },
  ];

  const ninjacartIcons = [
    { name: "Java", src: "https://skillicons.dev/icons?i=java" },
    { name: "Spring Boot", src: "https://skillicons.dev/icons?i=spring" },
    { name: "AWS", src: "https://skillicons.dev/icons?i=aws" },
    { name: "Kubernetes", src: "https://skillicons.dev/icons?i=kubernetes" },
  ];

  const wiproIcons = [
    { name: "AWS", src: "https://skillicons.dev/icons?i=aws" },
    { name: "Kubernetes", src: "https://skillicons.dev/icons?i=kubernetes" },
    { name: "Python", src: "https://skillicons.dev/icons?i=python" },
    { name: "React", src: "https://skillicons.dev/icons?i=react" },
  ];

  const freelanceIcons = [
    { name: "AWS", src: "https://skillicons.dev/icons?i=aws" },
    { name: "Kubernetes", src: "https://skillicons.dev/icons?i=kubernetes" },
    { name: "Google Cloud", src: "https://skillicons.dev/icons?i=googlecloud" },
    { name: "Laravel", src: "https://skillicons.dev/icons?i=laravel" },
    { name: "WordPress", src: "https://skillicons.dev/icons?i=wordpress" },
  ];

  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{
          background: "oklch(0.278 0.033 256.848)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  oklch(0.278 0.033 256.848)",
        }}
        date="Jul 2025 - present"
        iconStyle={{ color: "#fff" }}
        icon={
          <img
            src={heyamara}
            alt="Hey Amara"
            className="rounded-full object-cover mx-auto shadow-md"
          />
        }
        intersectionObserverProps={{
          triggerOnce: false,
          rootMargin: "0px 0px -40px 0px",
        }}
      >
        <Card className={"bg-gray-800 border-0 p-0 shadow-none"}>
          <h1 className={"text-4xl"}>Hey Amara</h1>
          <CardTitle className={"text-gray-400"}>
            Senior DevOps Engineer
            <div className="flex items-center gap-1 text-gray-400 mt-2">
              <FontAwesomeIcon icon={faLocationPin} />
              <span className={"ml-1"}>Remote (Karalee, Australia)</span>
            </div>
          </CardTitle>
          <CardContent>
            <ul className="list-disc marker:text-white leading-6 list-outside space-y-4 text-gray-300">
              <li>
                Architected the entire <b>AWS</b> platform from scratch with{" "}
                <b>Terraform</b> covering compute, databases, messaging, auth,
                and networking across dev and production, cutting provisioning
                time from days to under 2 hours.
              </li>
              <li>
                Migrated the whole platform from <b>ECS to EKS</b> and
                introduced <b>GitOps</b> with Helm, Helmfile, an automated
                deploy-bot, <b>KEDA</b> autoscaling, and <b>SOPS</b> secret
                management.
              </li>
              <li>
                Built CI/CD pipelines for every microservice using{" "}
                <b>GitHub Actions</b> with semantic-release and ephemeral
                preview environments with live DB seeding.
              </li>
              <li>
                Deployed full-stack observability (<b>Grafana, Loki, Alloy,
                Tempo, Prometheus</b>) to production, enabling end-to-end
                distributed tracing and alerting across all services.
              </li>
              <li>
                Built an internal <b>Python CLI</b> that securely tunnels
                engineers into RDS, Redis, and RabbitMQ via SSM, removing manual
                credential and bastion overhead.
              </li>
              <li>
                Cut compute costs by <b>40%</b> with Fargate Spot, workload
                right-sizing, and traffic-aligned autoscaling policies.
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <div className="grid grid-cols-8 gap-2">
              {heyAmaraIcons.map((item, index) => (
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
        contentStyle={{
          background: "oklch(0.278 0.033 256.848)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  oklch(0.278 0.033 256.848)",
        }}
        date="Apr 2025 - Jul 2025"
        iconStyle={{ color: "#fff" }}
        icon={
          <img
            src={mercor}
            alt="Mercor"
            className="rounded-full object-cover mx-auto shadow-md"
          />
        }
        intersectionObserverProps={{
          triggerOnce: false,
          rootMargin: "0px 0px -40px 0px",
        }}
      >
        <Card className={"bg-gray-800 border-0 p-0 shadow-none"}>
          <h1 className={"text-4xl"}>Mercor</h1>
          <CardTitle className={"text-gray-400"}>
            Senior Python Developer (Contract, x.AI / Grok)
            <div className="flex items-center gap-1 text-gray-400 mt-2">
              <FontAwesomeIcon icon={faLocationPin} />
              <span className={"ml-1"}>Remote (California, USA)</span>
            </div>
          </CardTitle>
          <CardContent>
            <ul className="list-disc marker:text-white leading-6 list-outside space-y-4 text-gray-300">
              <li>
                Improved AI model training reliability by standardizing{" "}
                <b>Python</b> environments across multiple ML repositories,
                eliminating environment-related failures in build and
                evaluation workflows.
              </li>
              <li>
                Cut manual environment setup time by ~60% with modular{" "}
                <b>Dockerfiles</b> and shell scripts that automated
                containerized application provisioning and deployment.
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <div className="grid grid-cols-8 gap-2">
              {mercorIcons.map((item, index) => (
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
        contentStyle={{
          background: "oklch(0.278 0.033 256.848)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  oklch(0.278 0.033 256.848)",
        }}
        date="2022 - 2025"
        iconStyle={{ color: "#fff" }}
        icon={
          <img
            src={bodo}
            alt="Icon"
            className="rounded-full object-cover mx-auto shadow-md"
          />
        }
        intersectionObserverProps={{
          triggerOnce: false,
          rootMargin: "0px 0px -40px 0px",
        }}
      >
        <Card className={"bg-gray-800 border-0 p-0 shadow-none"}>
          <h1 className={"text-4xl"}>Bodo.ai</h1>
          <CardTitle className={"text-gray-400"}>
            Senior DevOps & Full Stack Engineer
            <div className="flex items-center gap-1 text-gray-400 mt-2">
              <FontAwesomeIcon icon={faLocationPin} />
              <span className={"ml-1"}>Remote (Pittsburgh, USA)</span>
            </div>
          </CardTitle>
          <CardContent>
            <ul className="list-disc marker:text-white leading-6 list-outside space-y-4 text-gray-300">
              <li>Spearheaded multiple architecture revamps across backend APIs,
                CI/CD pipelines, and infrastructure to improve scalability, maintainability, and developer velocity.
              </li>
              <li>Owned end-to-end development of critical backend modules using <b>NestJS and TypeScript</b>,
                contributing to 40%+ of the codebase in key services.
              </li>
              <li>
                Led infrastructure optimization initiatives on <b>AWS EKS</b>, introducing dynamic scaling policies, spot instance usage to significantly reduce EC2 costs using Karpenter.
              Collaborated directly with enterprise clients like Apple to deploy and maintain applications in secure, high-compliance environments.
              </li>
              <li>
                Influenced key roadmap decisions on platform infrastructure and internal tooling, aligning with both engineering needs and business goals.
              </li>
              <li>
                Improved <b>CI/CD</b> reliability and performance by redesigning <b>GitHub Actions</b> workflows, cutting deployment times by 30%.
              </li>
              <li>
                Played a key role in preparing and securing <b>SOC2</b> compliance by leading infrastructure hardening, audit readiness, and environment segregation.
              </li>
              <li>
                Led the AWS Marketplace backend integration project, managing contract sign-ups, subscription processing, and working closely with AWS Marketplace teams.
              </li>
              <li>
                Solely led front-end development using <b>React</b> which
                included code refactoring for reducing technical debt, developed
                features and ensured reliability.
              </li>
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
        contentStyle={{
          background: "oklch(0.278 0.033 256.848)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  oklch(0.278 0.033 256.848)",
        }}
        date="2021 - 2022"
        iconStyle={{ color: "#fff" }}
        icon={
          <img
            src={ninjacart}
            alt="Icon"
            className="rounded-full object-cover mx-auto shadow-md"
          />
        }
        intersectionObserverProps={{
          triggerOnce: false,
          rootMargin: "0px 0px -40px 0px",
        }}
      >
        <Card className={"bg-gray-800 border-0 p-0 shadow-none"}>
          <h1 className={"text-4xl"}>Ninjacart</h1>
          <CardTitle className={"text-gray-400"}>
            Software Development Engineer (SDE) - 1
            <div className="flex items-center gap-1 text-gray-400 mt-2">
              <FontAwesomeIcon icon={faLocationPin} />
              <span className={"ml-1"}>Bengaluru, India</span>
            </div>
          </CardTitle>
          <CardContent>
            <ul className="list-disc marker:text-white leading-6 list-outside space-y-4 text-gray-300">
              <li>
                Contributed to the development of backend API applications using{" "}
                <b>Java Spring Boot</b> framework.
              </li>
              <li>
                Built and maintained CI/CD pipelines to streamline the
                development and deployment processes which ensured efficient and
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
        contentStyle={{
          background: "oklch(0.278 0.033 256.848)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  oklch(0.278 0.033 256.848)",
        }}
        date="2019 - 2021"
        iconStyle={{ color: "#fff" }}
        icon={
          <img
            src={wipro}
            alt="Icon"
            className="rounded-full object-cover mx-auto shadow-md"
          />
        }
        intersectionObserverProps={{
          triggerOnce: false,
          rootMargin: "0px 0px -40px 0px",
        }}
      >
        <Card className={"bg-gray-800 border-0 p-0 shadow-none"}>
          <h1 className={"text-4xl"}>Wipro (Apple Client)</h1>
          <CardTitle className={"text-gray-400"}>
            Software Engineer
            <div className="flex items-center gap-1 text-gray-400 mt-2">
              <FontAwesomeIcon icon={faLocationPin} />
              <span className={"ml-1"}>Hyderabad, India</span>
            </div>
          </CardTitle>
          <CardContent>
            <ul className="list-disc marker:text-white leading-6 list-outside space-y-4 text-gray-300">
              <li>
                Contributed to a project leveraging graph database technology{" "}
                <b>ArangoDB</b> to generate demand planning for components
                across multiple vendors for <b>Apple using Python and Dash</b>
              </li>
              <li>
                Improved demand planning accuracy by leveraging ArangoDB for
                real-time data insights.
              </li>
              <li>
                Developed the API using <b>Fast API</b> python which sends the
                information to the <b>React</b> application
              </li>
              <li>
                Deployed CI/CD pipelines for seamless application deployment in{" "}
                <b>Kubernetes</b> clusters
              </li>
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
        contentStyle={{
          background: "oklch(0.278 0.033 256.848)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  oklch(0.278 0.033 256.848)",
        }}
        date="2020 - "
        iconStyle={{ color: "#fff" }}
        icon={
          <img
            src={freelancer}
            alt="Icon"
            className="rounded-full object-cover mx-auto shadow-md bg-white p-1"
          />
        }
        intersectionObserverProps={{
          triggerOnce: false,
          rootMargin: "0px 0px -40px 0px",
        }}
      >
        <Card className={"bg-gray-800 border-0 p-0 shadow-none"}>
          <CardTitle className={"text-3xl"}>
            Freelance DevOps Engineer
            <div className="flex items-center gap-1 text-gray-400 mt-2 text-xl">
              <FontAwesomeIcon icon={faLocationPin} />
              <span className={"ml-1"}>Remote</span>
            </div>
          </CardTitle>
          <CardContent>
            <ul className="list-disc marker:text-white leading-6 list-outside space-y-4 text-gray-300">
              <li>
                {" "}
                Migrated multiple applications{" "}
                <b>(3 WordPress sites and 7 Laravel projects)</b> to{" "}
                <b>Google Cloud</b>
                and migrated SQL server to CloudSQL which improved the
                application reliability and scalability
              </li>
              <li>
                Reduced deployment time by 40% using <b>Jenkins</b> CI/CD
                pipelines
              </li>
              <li>
                Deployed 6 microservices on <b>AWS EKS</b> with automated CI/CD
                pipelines, ensuring seamless updates
              </li>
              <li>
                Integrated 20 <b>Google Cloud Functions</b> with Google Cloud
                API Gateway for efficient request routing and security purposes
              </li>
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
  );
}
