import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDownload, FiFileText, FiEye, FiMail, FiPhone, FiMapPin } = FiIcons;

function Home() {
  // Bio section visibility control - set to true to show, false to hide
  const [showBioSection] = useState(true); // Author can change this to control visibility

  // Recent News visibility control - set to true to show, false to hide
  const [showNewsSection] = useState(false); // Author can change this to control visibility

  // Contact section visibility control - set to true to show, false to hide
  const [showContactSection] = useState(true); // Author can change this to control visibility

  // CV information - Author can update these details
  const cvInfo = {
    fileName: "nazim_choudhury_cv.pdf",
    fileUrl: "/assets/nazim_choudhury_cv.pdf", // Path to PDF in assets folder
    lastUpdated: "September 2024", // Update when CV is refreshed
    fileSize: "2.1 MB" // Optional: include file size
  };

  // Contact information - Same as Contact page
  const contactInfo = [
    { icon: FiMail, label: "Email", value: "choudhun@uwgb.edu", link: "mailto:choudhun@uwgb.edu" },
    { icon: FiPhone, label: "Phone", value: "920-465-2957", link: "tel:9204652957" },
    { icon: FiMapPin, label: "Address", value: "Stem Innovation Center\nUniversity of Wisconsin Green Bay\n2420 Nicolet Drive, Green Bay, WI 54311", link: null }
  ];

  // Social links - Same as Contact page
  const socialLinks = [
    { icon: null, label: "Google Scholar", url: "https://scholar.google.com/citations?user=bcTAO-wAAAAJ&hl=en&inst=16730761618876726293", customIcon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1758229060782-Google_Scholar_logo.png" },
    { icon: null, label: "LinkedIn", url: "https://www.linkedin.com/in/nazim-choudhury-5a673a3b/", customIcon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1758229174957-linkedin%20logo.png" },
    { icon: null, label: "ResearchGate", url: "https://www.researchgate.net/profile/Nazim-Choudhury", customIcon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1758229239640-research%20gate%20logo.png" }
  ];

  return (
    <div className="main-content px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 sm:py-10 lg:py-14">
      {/* About Section - Increased top margin to account for profile image extending below banner */}
      <section className="mb-16 mt-4 sm:mt-6 lg:mt-8">
        <h2 className="text-2xl font-light text-black mb-6 border-b border-gray-300 pb-2">
          About
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-black leading-relaxed mb-6">
            Dr. Choudhury is a computer scientist with over a decade of teaching and research experience in the United States, Australia, and Bangladesh. His work focuses on Social Network Analysis, Human-Computer Interaction, Machine Learning, Social Cybersecurity, and Algorithm Analysis.
          </p>
          <p className="text-black leading-relaxed mb-6">
            Before joining UW–Green Bay in 2021, he held academic and industry roles across three continents, including postdoctoral research at the University of South Florida and faculty positions in Australia and Bangladesh. He has also worked as a software developer and database engineer in the IT industry.
          </p>
          <p className="text-black leading-relaxed mb-6">
            He has published 30+ scholarly works, received multiple grants and awards, and actively mentors students in research and capstone projects.
          </p>
          <p className="text-black leading-relaxed mb-6">
            Dr. Choudhury believes in active learning, theory–practice integration, and student-centered classrooms. He emphasizes collaborative problem solving, practical applications of theory, and respect for diversity in education. His research philosophy centers on developing AI-driven, human-centered technologies that improve usability, trust, and security.
          </p>
        </div>
      </section>

      {/* Nazim's Bio Section - Conditionally Rendered */}
      {showBioSection && (
        <section className="mb-16">
          <h2 className="text-2xl font-light text-black mb-6 border-b border-gray-300 pb-2">
            Nazim's Bio
          </h2>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg shadow-sm">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-medium text-black mb-2">Curriculum Vitae</h3>
                <p className="text-black leading-relaxed mb-4">
                  Download Dr. Choudhury's complete academic curriculum vitae, including detailed information about his education, research experience, publications, grants, and professional activities.
                </p>
              </div>
              <SafeIcon icon={FiFileText} className="w-8 h-8 text-gray-600 flex-shrink-0 mt-1" />
            </div>

            {/* CV Download Section - Direct Link */}
            <div className="p-6 bg-white rounded-lg border border-gray-300 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiFileText} className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <a 
                    href={cvInfo.fileUrl} 
                    download={cvInfo.fileName}
                    className="inline-flex items-center gap-2 group"
                  >
                    <h4 className="font-medium text-black text-lg group-hover:text-gray-700 transition-colors underline-offset-4 group-hover:underline">
                      {cvInfo.fileName}
                    </h4>
                    <SafeIcon icon={FiDownload} className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" />
                  </a>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-black mt-1">
                    <span>Last updated: {cvInfo.lastUpdated}</span>
                    <span>•</span>
                    <span>Size: {cvInfo.fileSize}</span>
                    <span>•</span>
                    <span>Click to download</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Control Instructions (Hidden in production) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300">
                <h5 className="font-medium text-gray-800 mb-2">
                  <SafeIcon icon={FiEye} className="w-4 h-4 inline mr-2" />
                  Author Controls (Development Only):
                </h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Set <code>showBioSection</code> to <code>false</code> to hide this entire section</li>
                  <li>• Update <code>cvInfo.fileName</code> with your CV filename</li>
                  <li>• Update <code>cvInfo.fileUrl</code> with the correct path to your CV PDF</li>
                  <li>• Update <code>cvInfo.lastUpdated</code> when you refresh your CV</li>
                  <li>• Update <code>cvInfo.fileSize</code> with the current file size</li>
                  <li>• Place your CV PDF file in the /assets folder</li>
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Recent News - Conditionally Rendered */}
      {showNewsSection && (
        <section>
          <h2 className="text-2xl font-light text-black mb-6 border-b border-gray-300 pb-2">
            Recent News
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <span className="text-sm text-gray-500 font-medium min-w-24">Aug 2024</span>
              <p className="text-black">
                Awarded 2024 Summer Research Scholar Award ($7,000) for "Design, Development, and Evaluation of a Mobile Application for Detecting Intoxication Due to Alcohol and/or Cannabis Consumption"
              </p>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <span className="text-sm text-gray-500 font-medium min-w-24">2024</span>
              <p className="text-black">
                Co-PI on WiSys Spark Grant ($10,000) for "Artificial Intelligence (AI)-powered Pavement Distress Detection" project (WiSys Ref. No. T240052)
              </p>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <span className="text-sm text-gray-500 font-medium min-w-24">Feb 2024</span>
              <p className="text-black">
                Published "Community-aware evolution similarity for link prediction in dynamic social networks" in Mathematics journal (Vol. 12, No. 2)
              </p>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <span className="text-sm text-gray-500 font-medium min-w-24">2023</span>
              <p className="text-black">
                Serving as Chief Guest Editor for special issue "Applied Network Analysis and Data Science" in Mathematics journal (Impact Factor: 2.30, MDPI)
              </p>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <span className="text-sm text-gray-500 font-medium min-w-24">2023</span>
              <p className="text-black">
                Co-authored paper accepted at IEEE 14th Annual UEMCON: "Do API migrations revert commits-a preliminary investigation"
              </p>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <span className="text-sm text-gray-500 font-medium min-w-24">2023</span>
              <p className="text-black">
                Published two book chapters in Cybersecurity for Smart Cities: Practices and Challenges (Springer) - results of student capstone projects
              </p>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <span className="text-sm text-gray-500 font-medium min-w-24">Spring 2023</span>
              <p className="text-black">
                Student research presented at National Conference for Undergraduate Research (NCUR) at UW-Eau Claire
              </p>
            </div>
            <div className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <span className="text-sm text-gray-500 font-medium min-w-24">2023</span>
              <p className="text-black">
                Led Computer Science department to record participation in WiSys Innovation on-ramp pitch competition with multiple prize winners
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section - Conditionally Rendered */}
      {showContactSection && (
        <section className="mt-16">
          <h2 className="text-2xl font-light text-black mb-6 border-b border-gray-300 pb-2">
            Contact
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Information */}
              <div>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <SafeIcon icon={item.icon} className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-black mb-1">{item.label}</p>
                        {item.link ? (
                          <a href={item.link} className="text-black hover:text-gray-700 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-black whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <div className="flex gap-6">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md" 
                      title={social.label}
                    >
                      <img src={social.customIcon} alt={social.label} className="w-10 h-10 object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Author Control Instructions (Hidden in production) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300">
              <h5 className="font-medium text-gray-800 mb-2">
                <SafeIcon icon={FiEye} className="w-4 h-4 inline mr-2" />
                Author Controls (Development Only):
              </h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Set <code>showContactSection</code> to <code>false</code> to hide this entire section</li>
                <li>• Set <code>showContactSection</code> to <code>true</code> to show this section</li>
                <li>• Update contact information in the <code>contactInfo</code> array</li>
                <li>• Update social links in the <code>socialLinks</code> array</li>
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-300">
        <p className="text-center text-sm text-gray-500">
          Last updated September 2025.
        </p>
      </footer>

      {/* Author Control Instructions for News Section (Hidden in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg border border-gray-300">
          <h5 className="font-medium text-gray-800 mb-2">
            <SafeIcon icon={FiEye} className="w-4 h-4 inline mr-2" />
            Author Controls (Development Only):
          </h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Set <code>showNewsSection</code> to <code>false</code> to hide the Recent News section</li>
            <li>• Set <code>showNewsSection</code> to <code>true</code> to show the Recent News section</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;