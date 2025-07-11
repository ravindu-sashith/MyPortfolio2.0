// Mock data for Ravindu Hettiarachchi's Cybersecurity Portfolio

export const personalInfo = {
  name: "Ravindu Hettiarachchi",
  title: "Cybersecurity Professional",
  bio: "Passionate cybersecurity expert with extensive experience in threat analysis, vulnerability assessment, and security architecture. Dedicated to protecting digital assets and staying ahead of evolving cyber threats through continuous learning and hands-on implementation.",
  profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  location: "Sri Lanka",
  email: "ravindu.hettiarachchi@example.com",
  phone: "+94 77 123 4567"
};

export const skills = {
  cybersecurity: [
    "Penetration Testing",
    "Vulnerability Assessment",
    "Security Architecture",
    "Incident Response",
    "Risk Management",
    "Security Auditing",
    "Threat Analysis",
    "Digital Forensics"
  ],
  tools: [
    "Nmap",
    "Metasploit",
    "Wireshark",
    "Burp Suite",
    "Kali Linux",
    "Nessus",
    "OpenVAS",
    "Splunk",
    "SIEM Tools"
  ],
  languages: [
    "Python",
    "JavaScript",
    "Bash",
    "PowerShell",
    "SQL",
    "C++",
    "Java"
  ],
  other: [
    "Cloud Security (AWS, Azure)",
    "Docker & Kubernetes",
    "Network Security",
    "Web Application Security",
    "Mobile Security",
    "Compliance (ISO 27001, GDPR)"
  ]
};

export const certifications = [
  {
    id: 1,
    title: "Certified Ethical Hacker (CEH)",
    issuingBody: "EC-Council",
    date: "March 2024",
    certificateLink: "https://drive.google.com/file/d/1example-ceh-cert/view",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    title: "CompTIA Security+",
    issuingBody: "CompTIA",
    date: "January 2024",
    certificateLink: "https://drive.google.com/file/d/1example-security-plus/view",
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    title: "CISSP",
    issuingBody: "(ISC)² - Associate",
    date: "October 2023",
    certificateLink: "https://drive.google.com/file/d/1example-cissp-cert/view",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 4,
    title: "AWS Certified Security - Specialty",
    issuingBody: "Amazon Web Services",
    date: "August 2023",
    certificateLink: "https://drive.google.com/file/d/1example-aws-security/view",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

export const projects = [
  {
    id: 1,
    name: "Enterprise Security Assessment Platform",
    description: "Comprehensive security assessment tool that automates vulnerability scanning, threat modeling, and generates detailed reports for enterprise environments.",
    techStack: ["Python", "Django", "PostgreSQL", "Docker", "AWS"],
    githubLink: "https://github.com/ravindu/security-assessment-platform",
    liveDemo: "https://security-assessment-demo.com",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Network Traffic Analyzer",
    description: "Real-time network monitoring and analysis tool that detects anomalies, identifies potential threats, and provides actionable insights for network administrators.",
    techStack: ["Python", "Scapy", "Flask", "React", "MongoDB"],
    githubLink: "https://github.com/ravindu/network-traffic-analyzer",
    liveDemo: "https://network-analyzer-demo.com",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Incident Response Automation",
    description: "Automated incident response system that streamlines the process of threat detection, containment, and recovery with integrated SIEM capabilities.",
    techStack: ["Python", "Ansible", "Elasticsearch", "Kibana", "Linux"],
    githubLink: "https://github.com/ravindu/incident-response-automation",
    liveDemo: null,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Vulnerability Management Dashboard",
    description: "Centralized dashboard for tracking, prioritizing, and managing vulnerabilities across multiple systems with automated scanning and reporting features.",
    techStack: ["React", "Node.js", "Express", "MySQL", "Chart.js"],
    githubLink: "https://github.com/ravindu/vulnerability-dashboard",
    liveDemo: "https://vuln-dashboard-demo.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

export const experience = {
  work: [
    {
      id: 1,
      position: "Senior Cybersecurity Analyst",
      company: "SecureCore Technologies",
      duration: "2022 - Present",
      location: "Colombo, Sri Lanka",
      responsibilities: [
        "Lead penetration testing and vulnerability assessments for enterprise clients",
        "Develop and implement security policies and procedures",
        "Conduct security awareness training for staff and clients",
        "Manage incident response activities and forensic investigations"
      ]
    },
    {
      id: 2,
      position: "Information Security Specialist",
      company: "CyberGuard Solutions",
      duration: "2020 - 2022",
      location: "Kandy, Sri Lanka",
      responsibilities: [
        "Performed security audits and risk assessments",
        "Implemented SIEM solutions and security monitoring tools",
        "Collaborated with development teams on secure coding practices",
        "Maintained compliance with industry standards and regulations"
      ]
    },
    {
      id: 3,
      position: "Junior Security Analyst",
      company: "TechSecure Lanka",
      duration: "2018 - 2020",
      location: "Galle, Sri Lanka",
      responsibilities: [
        "Monitored security events and investigated potential threats",
        "Assisted in vulnerability management and patch deployment",
        "Supported security tool configuration and maintenance",
        "Participated in security incident response procedures"
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Moratuwa",
      duration: "2014 - 2018",
      location: "Moratuwa, Sri Lanka",
      grade: "First Class Honours"
    },
    {
      id: 2,
      degree: "Advanced Diploma in Cybersecurity",
      institution: "NSBM Green University",
      duration: "2018 - 2019",
      location: "Pitipana, Sri Lanka",
      grade: "Distinction"
    }
  ]
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/ravindu-hettiarachchi",
  github: "https://github.com/ravindu-hettiarachchi",
  email: "ravindu.hettiarachchi@example.com",
  resume: "https://drive.google.com/file/d/1example-resume/view"
};

export const contactForm = {
  fields: [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "subject", label: "Subject", type: "text", required: true },
    { name: "message", label: "Message", type: "textarea", required: true }
  ]
};