import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import AccordionSection from '../components/Accordion';
import * as FiIcons from 'react-icons/fi';

const { FiExternalLink, FiUsers, FiBookOpen, FiAward, FiTarget, FiFileText } = FiIcons;

function Research() {
  // Grants & Awards visibility control - set to true to show, false to hide
  const [showGrantsAwards] = useState(false); // Author can change this to control visibility

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
      <section className="mt-4 sm:mt-6 lg:mt-8">
        <h2 className="text-2xl font-light text-black mb-6 border-b border-gray-300 pb-2">
          Research
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-xl font-medium text-black mb-4">Research Summary</h2>
          <p className="text-lg text-black leading-relaxed mb-4">
            Dr. Choudhury's research spans AI/Machine Learning, Social Network Analysis, Human-Computer Interaction, and Social Cybersecurity. He aims to build human-centered systems for detecting impairment (e.g., intoxication, gait changes), understanding information diffusion, misinformation, and trust in online platforms.
          </p>
          <p className="text-lg text-black leading-relaxed mb-4">
            His work combines theoretical models (algorithms, network dynamics) with empirical evaluation and usability studies to create practical, impactful solutions.
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-black mb-3">Research Focus Areas</h3>
            <div className="space-y-3">
              {researchAreas.map((area, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-gray-600 font-medium">•</span>
                  <div>
                    <h4 className="font-medium text-black">{area.title}</h4>
                    <p className="text-black">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {/* Publications */}
        <AccordionSection title="Publications" icon={FiFileText}>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-black flex-1 pr-4">
                    {pub.title}
                  </h3>
                  <a 
                    href={pub.link} 
                    className="text-gray-600 hover:text-black transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-black mb-2">{pub.authors}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
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
            <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
              <p className="text-black">
                See full publication list on{' '}
                <a 
                  href="https://scholar.google.com/citations?user=bcTAO-wAAAAJ&hl=en&inst=16730761618876726293" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-black font-medium hover:text-gray-700 underline transition-colors"
                >
                  Google Scholar
                </a>
              </p>
            </div>
          </div>
        </AccordionSection>

        {/* Student Research */}
        <AccordionSection title="Student Research" icon={FiUsers}>
          <div className="mb-6 p-6 bg-gray-50 rounded-lg">
            <p className="text-black leading-relaxed">
              Dr. Choudhury has supervised multiple undergraduate capstone projects, many of which have directly contributed to peer-reviewed publications. Students have presented research at the National Conference on Undergraduate Research (NCUR) and contributed as co-authors on book chapters and journal articles.
            </p>
          </div>
          <div className="space-y-6">
            {studentProjects.map((project, index) => (
              <div key={index} className="p-6 border border-gray-300 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-black">{project.students}</h3>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-black whitespace-nowrap">
                    {project.type}
                  </span>
                </div>
                <p className="text-black mb-2 font-medium">{project.project}</p>
                <p className="text-gray-600 text-sm">{project.publication}</p>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* Grants & Awards - Conditionally Rendered */}
        {showGrantsAwards && (
          <AccordionSection title="Grants & Awards" icon={FiAward}>
            {/* Author Control Instructions (Hidden in production) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
                <h5 className="font-medium text-gray-800 mb-2">
                  Author Controls (Development Only):
                </h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Set <code>showGrantsAwards</code> to <code>false</code> to hide this entire section</li>
                  <li>• Set <code>showGrantsAwards</code> to <code>true</code> to show this section</li>
                </ul>
              </div>
            )}

            {/* Bullet Points Format */}
            <div className="space-y-4">
              {grantsAwards.map((grant, index) => (
                <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <span className="inline-block w-2 h-2 bg-gray-600 rounded-full"></span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="font-medium text-black">{grant.title}</h4>
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-black">
                        {grant.type}
                      </span>
                      <span className="text-sm text-gray-600">{grant.year}</span>
                      <span className="text-sm font-medium text-gray-800">{grant.amount}</span>
                    </div>
                    <p className="text-black text-sm">{grant.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>
        )}
      </div>
    </div>
  );
}

export default Research;