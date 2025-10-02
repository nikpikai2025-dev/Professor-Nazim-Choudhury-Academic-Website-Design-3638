import React from 'react';
import SafeIcon from '../common/SafeIcon';
import AccordionSection from '../components/Accordion';
import * as FiIcons from 'react-icons/fi';

const { FiExternalLink, FiUsers, FiBookOpen, FiAward, FiTarget, FiFileText } = FiIcons;

function Research() {
  // Publications sorted from latest to oldest (2024 → 2023)
  const publications = [
    {
      title: "Community-aware evolution similarity for link prediction in dynamic social networks",
      authors: "N. Choudhury",
      venue: "Mathematics",
      year: "2024",
      type: "Journal",
      link: "https://www.mdpi.com/2227-7390/12/2/285"
    },
    {
      title: "Evolutionary Features for Dynamic Link Prediction in Social Networks",
      authors: "N. Choudhury, Shahadat Uddin",
      venue: "Applied Sciences",
      year: "2023",
      type: "Journal",
      link: "https://www.mdpi.com/2076-3417/13/5/2913"
    },
    {
      title: "Evaluation of an interactive computer-enabled tabletop learning tool for children with special needs",
      authors: "N. Choudhury, Nazmul Hasan, Muhammad Nazrul Islam",
      venue: "Journal of Educational Computing Research",
      year: "2023",
      type: "Journal",
      link: "https://journals.sagepub.com/doi/abs/10.1177/07356331221105396"
    },
    {
      title: "Do API migrations revert commits? A preliminary investigation",
      authors: "N. Choudhury, Omar Meqdadi",
      venue: "IEEE UEMCON",
      year: "2023",
      type: "Conference",
      link: "https://ieeexplore.ieee.org/document/10424276"
    },
    {
      title: "Matrix multiplication with diagonals: Structured sparse matrices and beyond",
      authors: "N. Choudhury, Sardar Anisul Haque, Shahadat Hossain",
      venue: "HP3C",
      year: "2023",
      type: "Conference",
      link: "https://ieeexplore.ieee.org/document/10205335"
    },
    {
      title: "Cryptocurrency: Is it the Future of Payments?",
      authors: "N. Choudhury, Zachary Mineau, Dylan Hoffman, Jonathan Lor",
      venue: "Springer book chapter, Cybersecurity for Smart Cities",
      year: "2023",
      type: "Book Chapter",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-24946-4_12"
    },
    {
      title: "Ransomware: A Threat to Cyber Smart Cities",
      authors: "N. Choudhury, Cole Lamers, Eric Spoerl, Garrit Levey, Mohiuddin Ahmed",
      venue: "Springer book chapter, Cybersecurity for Smart Cities",
      year: "2023",
      type: "Book Chapter",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-24946-4_13"
    }
  ];

  const researchAreas = [
    {
      title: "Intoxication & Impairment Detection",
      description: "Developing mobile and wearable device solutions for detecting impairment, including intoxication detection and gait analysis using sensor-based vision systems."
    },
    {
      title: "Social Network Analysis",
      description: "Studying social network dynamics, link prediction, and temporal evolution of networks to understand information diffusion and network behavior patterns."
    },
    {
      title: "Human-Computer Interaction & Usability",
      description: "Creating inclusive, practical, and adaptive interfaces with focus on usability studies and accessibility for diverse user populations including special needs users."
    },
    {
      title: "Social Cybersecurity",
      description: "Research on misinformation detection, influence operations, online trust mechanisms, and detection of malicious behavior in digital platforms."
    }
  ];

  // Student projects sorted from latest to oldest
  const studentProjects = [
    {
      students: "Zachary Mineau, Dylan Hoffman, Jiali Lor",
      project: "Co-authors on the book chapter \"Cryptocurrency: Is it the Future of Payments?\"",
      publication: "Springer, 2023",
      type: "Book Chapter",
      year: "2023"
    },
    {
      students: "Cassandra Lamers, Eric Spoerl, Grace Levey",
      project: "Co-authors on the book chapter \"Ransomware: A Threat to Cyber Smart Cities\"",
      publication: "Springer, 2023",
      type: "Book Chapter",
      year: "2023"
    },
    {
      students: "NCUR 2022 & 2023 Teams",
      project: "Research presentations at National Conference on Undergraduate Research",
      publication: "Projects on deepfakes, cryptocurrency, and cybersecurity",
      type: "Conference Presentation",
      year: "2022-2023"
    },
    {
      students: "Capstone Project Teams",
      project: "AI-driven usability studies and interactive learning tools for children with special needs",
      publication: "Multiple peer-reviewed publications",
      type: "Research Project",
      year: "Ongoing"
    }
  ];

  const collaborations = [
    {
      collaborator: "Dr. Todd Hillhouse",
      institution: "UW–Green Bay, Psychology",
      topic: "Joint project on mobile application–based intoxication detection, combining AI with cognitive/behavioral data",
      location: "United States"
    },
    {
      collaborator: "Dr. Omar Meqdadi",
      institution: "UW–Green Bay, Computer Science",
      topic: "Research on software engineering and API migration, including IEEE UEMCON 2023 publication",
      location: "United States"
    },
    {
      collaborator: "Dr. Muhammad Nazrul Islam",
      institution: "MIST, Bangladesh",
      topic: "Long-standing collaboration on Human-Computer Interaction and social media UI design, with joint publications on educational technologies",
      location: "Bangladesh"
    },
    {
      collaborator: "Dr. Sarder Anisul Hoque",
      institution: "Liverpool John Moores University, Qatar campus",
      topic: "Work on high-performance computing and sparse matrix multiplication (e.g., HP3C 2023)",
      location: "Qatar"
    },
    {
      collaborator: "Dr. Shafayat Haque",
      institution: "Independent researcher, Bangladesh",
      topic: "Co-author on structured sparse matrix research",
      location: "Bangladesh"
    }
  ];

  // Grants & Awards sorted from latest to oldest (2024 → 2017)
  const grantsAwards = [
    {
      title: "UW–Green Bay Summer Research Scholar Award",
      amount: "$7,000",
      year: "2024",
      type: "Grant",
      description: "Summer research funding for faculty research projects"
    },
    {
      title: "WiSys Spark Research Grant",
      amount: "$10,000",
      year: "2023–2024",
      type: "Grant",
      description: "Research funding for innovative technology projects"
    },
    {
      title: "Curriculum Development & Cybersecurity Lab Setup",
      amount: "UWGB Funding",
      year: "2022–2023",
      type: "Grant",
      description: "Funding recipient for curriculum development and cybersecurity lab setup"
    },
    {
      title: "Best Paper Award Nominee",
      amount: "IEEE IEMCON",
      year: "2021",
      type: "Award",
      description: "Recognition for outstanding conference paper"
    },
    {
      title: "Graduate Research Scholarship (GRS), University of Sydney",
      amount: "Full PhD Support",
      year: "2017–2020",
      type: "Scholarship",
      description: "Supported full-time PhD research"
    },
    {
      title: "Postgraduate Research Support Scheme (PRSS), University of Sydney",
      amount: "Travel & Research Support",
      year: "2017, 2018",
      type: "Support",
      description: "Travel and research support funding"
    },
    {
      title: "Travel Grants",
      amount: "Multiple Awards",
      year: "Various Years",
      type: "Grant",
      description: "Awarded multiple times for presenting papers at international IEEE conferences"
    }
  ];

  return (
    <div className="main-content px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 sm:py-10 lg:py-14">
      {/* Research Overview */}
      <section className="mb-8">
        <h1 className="text-3xl font-light text-purple-900 mb-8">Research</h1>
        <div className="bg-purple-50 p-8 rounded-lg mb-8">
          <h2 className="text-xl font-medium text-purple-900 mb-4">Research Summary</h2>
          <p className="text-lg text-purple-700 leading-relaxed mb-4">
            Dr. Choudhury's research spans AI/Machine Learning, Social Network Analysis, Human-Computer Interaction, and Social Cybersecurity. He aims to build human-centered systems for detecting impairment (e.g., intoxication, gait changes), understanding information diffusion, misinformation, and trust in online platforms.
          </p>
          <p className="text-lg text-purple-700 leading-relaxed">
            His work combines theoretical models (algorithms, network dynamics) with empirical evaluation and usability studies to create practical, impactful solutions.
          </p>
        </div>
      </section>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {/* Research Areas */}
        <AccordionSection title="Research Areas" icon={FiTarget} defaultOpen={true}>
          <div className="grid gap-6 md:grid-cols-2">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="p-6 border border-purple-200 rounded-lg transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-100 hover:-translate-y-1 cursor-pointer group"
              >
                <h3 className="text-lg font-medium text-purple-900 mb-3 group-hover:text-purple-700 transition-colors duration-200">
                  {area.title}
                </h3>
                <p className="text-purple-700 leading-relaxed group-hover:text-purple-600 transition-colors duration-200">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* Publications */}
        <AccordionSection title="Publications" icon={FiFileText}>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="p-6 bg-purple-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-purple-900 flex-1 pr-4">
                    {pub.title}
                  </h3>
                  <a
                    href={pub.link}
                    className="text-purple-600 hover:text-purple-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-purple-700 mb-2">{pub.authors}</p>
                <div className="flex items-center gap-4 text-sm text-purple-600">
                  <span className="px-2 py-1 bg-white rounded text-xs font-medium">
                    {pub.type}
                  </span>
                  <span>{pub.venue}</span>
                  <span>•</span>
                  <span>{pub.year}</span>
                </div>
              </div>
            ))}

            {/* Google Scholar Link */}
            <div className="mt-6 p-4 bg-purple-100 rounded-lg text-center">
              <p className="text-purple-700">
                See full publication list on{' '}
                <a
                  href="https://scholar.google.com/citations?user=bcTAO-wAAAAJ&hl=en&inst=16730761618876726293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-900 font-medium hover:text-purple-700 underline transition-colors"
                >
                  Google Scholar
                </a>
              </p>
            </div>
          </div>
        </AccordionSection>

        {/* Student Research */}
        <AccordionSection title="Student Research" icon={FiUsers}>
          <div className="mb-6 p-6 bg-purple-50 rounded-lg">
            <p className="text-purple-700 leading-relaxed">
              Dr. Choudhury has supervised multiple undergraduate capstone projects, many of which have directly contributed to peer-reviewed publications. Students have presented research at the National Conference on Undergraduate Research (NCUR) and contributed as co-authors on book chapters and journal articles.
            </p>
          </div>
          <div className="space-y-6">
            {studentProjects.map((project, index) => (
              <div key={index} className="p-6 border border-purple-200 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-purple-900">{project.students}</h3>
                  <span className="px-2 py-1 bg-purple-100 rounded text-xs font-medium text-purple-700 whitespace-nowrap">
                    {project.type}
                  </span>
                </div>
                <p className="text-purple-700 mb-2 font-medium">{project.project}</p>
                <p className="text-purple-600 text-sm">{project.publication}</p>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* Collaborative Research */}
        <AccordionSection title="Collaborative Research" icon={FiBookOpen}>
          <div className="mb-6 p-6 bg-purple-50 rounded-lg">
            <p className="text-purple-700 leading-relaxed">
              Collaborations extend across the U.S., Bangladesh, and Qatar, with joint work leading to journal articles, conference papers, and book chapters. These international partnerships facilitate cross-cultural research perspectives and diverse methodological approaches.
            </p>
          </div>
          <div className="space-y-6">
            {collaborations.map((collab, index) => (
              <div key={index} className="p-6 border border-purple-200 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium text-purple-900">{collab.collaborator}</h3>
                    <p className="text-sm text-purple-600">{collab.institution}</p>
                  </div>
                  <span className="px-2 py-1 bg-purple-100 rounded text-xs font-medium text-purple-700 whitespace-nowrap">
                    {collab.location}
                  </span>
                </div>
                <p className="text-purple-700">{collab.topic}</p>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* Grants & Awards */}
        <AccordionSection title="Grants & Awards" icon={FiAward}>
          <div className="space-y-6">
            {grantsAwards.map((grant, index) => (
              <div key={index} className="p-6 border border-purple-200 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-purple-900 flex-1 pr-4">{grant.title}</h3>
                  <div className="text-right flex flex-col items-end">
                    <span className="px-2 py-1 bg-purple-100 rounded text-xs font-medium text-purple-700 mb-1 whitespace-nowrap">
                      {grant.type}
                    </span>
                    <span className="text-sm text-purple-600 whitespace-nowrap">{grant.year}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-purple-800">{grant.amount}</span>
                </div>
                <p className="text-purple-700 text-sm">{grant.description}</p>
              </div>
            ))}
          </div>
        </AccordionSection>
      </div>
    </div>
  );
}

export default Research;