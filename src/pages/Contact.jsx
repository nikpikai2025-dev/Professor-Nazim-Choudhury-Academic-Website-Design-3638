import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiMail,FiPhone,FiMapPin}=FiIcons;

function Contact() {
  const contactInfo=[
    {icon: FiMail,label: "Email",value: "choudhun@uwgb.edu",link: "mailto:choudhun@uwgb.edu"},
    {icon: FiPhone,label: "Phone",value: "920-465-2957",link: "tel:9204652957"},
    {icon: FiMapPin,label: "Address",value: "Stem Innovation Center\nUniversity of Wisconsin Green Bay\n2420 Nicolet Drive,Green Bay,WI 54311",link: null}
  ];

  const socialLinks=[
    {icon: null,label: "Google Scholar",url: "https://scholar.google.com/citations?user=bcTAO-wAAAAJ&hl=en&inst=16730761618876726293",customIcon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1758229060782-Google_Scholar_logo.png"},
    {icon: null,label: "LinkedIn",url: "https://www.linkedin.com/in/nazim-choudhury-5a673a3b/",customIcon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1758229174957-linkedin%20logo.png"},
    {icon: null,label: "ResearchGate",url: "https://www.researchgate.net/profile/Nazim-Choudhury",customIcon: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1758229239640-research%20gate%20logo.png"}
  ];

  return (
    <div className="main-content px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 sm:py-10 lg:py-14">
    <section className="mt-4 sm:mt-6 lg:mt-8">
      <h2 className="text-2xl font-light text-purple-900 mb-6 border-b border-purple-200 pb-2">
        Contact
      </h2>
      </section>
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-medium text-purple-900 mb-6">Get in Touch</h2>
          <p className="text-purple-700 mb-8 leading-relaxed">
            I welcome discussions about research collaborations,academic opportunities,and potential partnerships. Feel free to reach out if you're interested in my work or have questions about our research projects.
          </p>
          
          <div className="space-y-6">
            {contactInfo.map((item,index)=> (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={item.icon} className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-900 mb-1">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="text-purple-700 hover:text-purple-900 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-purple-700 whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-purple-900 mb-4">Connect Online</h3>
            <div className="flex gap-4">
              {socialLinks.map((social,index)=> (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 hover:text-purple-900 hover:bg-purple-200 transition-colors" title={social.label}>
                  <img src={social.customIcon} alt={social.label} className="w-5 h-5 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Research Interests & For Students */}
        <div>
          <h2 className="text-xl font-medium text-purple-900 mb-6">Research Collaboration</h2>
          <div className="space-y-6">
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="font-medium text-purple-900 mb-3">Current Research Interests</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• Social Network Analysis and Link Prediction</li>
                <li>• Human-Computer Interaction (HCI) and Usability</li>
                <li>• Social Cybersecurity</li>
                <li>• Mobile and AI-based Intoxication/Impairment Detection</li>
                <li>• Algorithm Analysis and Educational Technology</li>
              </ul>
            </div>
            
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="font-medium text-purple-900 mb-3">For Students</h3>
              <p className="text-purple-700">
                Prospective undergraduate and graduate students interested in applied machine learning in networks,AI applications in safety/health,cybersecurity,or HCI are especially encouraged to reach out. Please include your CV,research interests,and relevant background when contacting me.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-purple-200">
        <p className="text-center text-sm text-purple-500">
          Last updated September 2025.
        </p>
      </footer>
    </div>
  );
}

export default Contact;