import {useEffect} from 'react';
import { motion, useScroll, useSpring } from "motion/react"
import { Analytics } from '@vercel/analytics/react';
import { useInView } from 'react-intersection-observer';
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Card } from "@/components/ui/card.tsx";
import { MagicCard } from "@/components/magicui/magic-card";
import Experience from "@/components/Experience.tsx";
import { faPaperPlane, faAward, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const cards = document.getElementsByClassName('magic-card');
        const handleMouseMove = (e: MouseEvent) => {
            for (const card of cards) {
                const rect = (card as HTMLElement).getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
                (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
            }
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const [heroRef, heroInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [skillsRef, skillsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [experienceRef, experienceInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [contactRef, contactInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [awardsRef, awardsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const awards = [
        {
            icon: faTrophy,
            title: "Role Model Award",
            organization: "Wipro (Apple)",
            description: "Recognized for exhibiting exemplary behaviour at Apple Client"
        },
        {
            icon: faAward,
            title: "Google Scholarship",
            organization: "Udacity",
            description: "Received Google Scholarship for Udacity Nanodegree program for Mobile web Specialist"
        },
    ]

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
                style={{ scaleX }}
            />
            <motion.section
                ref={heroRef}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="min-h-screen flex items-center justify-center px-4 relative"
            >
                <div className="text-center max-w-5xl mx-auto">
                    <TypingAnimation className={"text-6xl font-bold mb-4 typing-demo mx-auto"}>Sai Pavan Nunna</TypingAnimation>
                    <p className="text-xl text-blue-400 mb-16">Senior DevOps Engineer & Full Stack Developer</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                title: "CKA",
                                img: "https://images.credly.com/size/680x680/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png"
                            },
                            {
                                title: "AWS",
                                img: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
                            },
                            {
                                title: "GCP",
                                img: "https://images.credly.com/size/680x680/images/71c579e0-51fd-4247-b493-d2fa8167157a/image.png"
                            }
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        ].map((cert, _) => (
                           <Card className={"py-0"}>
                               <MagicCard className={"bg-gray-800/50 rounded-xl"}>
                                   <img
                                       src={cert.img}
                                       alt={cert.title}
                                       className="w-60 h-60 mx-auto object-contain rounded-xl p-8"
                                   />
                               </MagicCard>
                           </Card>
                        ))}
                    </div>

                    <motion.button
                        onClick={scrollToContact}
                        className="relative px-8 py-3 bg-blue-600 text-white rounded-full font-semibold overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">Connect with me</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                </div>
            </motion.section>

            <motion.section
                ref={skillsRef}
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="py-20 px-4"
            >
                <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        {
                            title: "DevOps & Cloud",
                            icons: [
                                "https://skillicons.dev/icons?i=aws,gcp,azure,kubernetes",
                            ],
                            skills: [
                                "AWS",
                                "Google Cloud",
                                "Azure",
                                "Kubernetes (GKE, AKS, EKS)",
                                "Docker",
                                "Git",
                            ]
                        },
                        {
                            title: "Tools & Automation",
                            icons: [
                                "https://skillicons.dev/icons?i=terraform,jenkins,prometheus,bash"
                            ],
                            skills: [
                                "Terraform & Ansible",
                                "Helm",
                                "Spinnaker",
                                "Jenkins & GitHub Actions",
                                "Monitoring & Logging",
                                "Shell Scripting"
                            ]
                        },
                        {
                            title: "Languages & Runtimes",
                            icons: [
                                "https://skillicons.dev/icons?i=python,java,golang,javascript,typescript"
                            ],
                            skills: [
                                "Python",
                                "Java",
                                "GoLang",
                                "JavaScript",
                                "TypeScript"
                            ]
                        },
                        {
                            title: "Frameworks & Databases",
                            icons: [
                                "https://skillicons.dev/icons?i=react,spring,nestjs,postgres,redis  "
                            ],
                            skills: [
                                "Dash",
                                "Spring Boot",
                                "React",
                                "NestJS",
                                "PostgreSQL",
                                "MySQL",
                                "Redis"
                            ]
                        }
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    ].map((category, _) => (
                        <motion.div
                            key={category.title}
                            className="magic-card border-beam bg-gray-800/50 p-6 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="flex flex-wrap gap-4 mb-6">
                                {category.icons.map((icon, i) => (
                                    <img key={i} src={icon} alt="" className="h-12" />
                                ))}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                            <ul className="space-y-2 text-gray-400">
                                {category.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                ref={experienceRef}
                initial={{ opacity: 0, y: 20 }}
                animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="py-20 px-4"
            >
                <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
                <Experience />
            </motion.section>
            <motion.section
                ref={awardsRef}
                initial={{ opacity: 0, y: 20 }}
                animate={awardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="py-20 px-4"
            >
                <h2 className={"text-4xl font-bold text-center mb-12"}>Awards & Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {awards.map((award, index) => (
                        <motion.div
                            key={award.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={awardsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative group"
                        >
                            <div className="relative bg-gray-800 p-6 rounded-lg transform group-hover:translate-y-[-5px] transition-transform">
                                <div className="absolute -top-6 left-6">
                                    <div className="bg-blue-500 p-3 rounded-lg shadow-lg">
                                        <FontAwesomeIcon icon={award.icon} className="text-white"
                                                         size={"2xl"}
                                        />
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold mb-2 text-blue-400">{award.title}</h3>
                                    <p className="text-sm text-gray-400 mb-4">{award.organization}</p>
                                    <p className="text-gray-300">{award.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </motion.section>

            <motion.section
                id="contact"
                ref={contactRef}
                initial={{ opacity: 0, y: 20 }}
                animate={contactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="py-20 px-4 bg-gray-800/50"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
                    <p className="text-xl text-gray-400 mb-12">
                        I'm always open to discussing new projects, opportunities, and collaborations.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: faPaperPlane,
                                title: "Email",
                                text: "saipavan9999@yahoo.com",
                                href: "mailto:saipavan9999@yahoo.com"
                            },
                            {
                                icon: faLinkedin,
                                title: "LinkedIn",
                                text: "Connect with me",
                                href: "https://linkedin.com/in/sai-pavan-nunna"
                            },
                            {
                                icon: faGithubSquare,
                                title: "GitHub",
                                text: "Check out my work",
                                href: "https://github.com/saipavan9"
                            }
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        ].map((contact, _) => (
                            <motion.a
                                key={contact.title}
                                href={contact.href}
                                target={contact.href.startsWith('mailto') ? undefined : "_blank"}
                                rel={contact.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                                className="magic-card border-beam bg-gray-800/50 p-4 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FontAwesomeIcon icon={contact.icon} className="text-blue-400 mx-auto mb-2"
                                                 size={"2xl"}
                                />
                                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                                <p className="text-gray-400">{contact.text}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.section>
            <Analytics />
        </div>
    );
}

export default App;