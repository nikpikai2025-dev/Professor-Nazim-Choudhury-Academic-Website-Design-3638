import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import AccordionSection from '../components/Accordion';
import * as FiIcons from 'react-icons/fi';

const { FiBook, FiUsers, FiAward, FiTarget, FiLightbulb, FiHeart, FiEdit3 } = FiIcons;

function Teaching() {
  // Student testimonials visibility control - set to true to show, false to hide
  const [showTestimonials] = useState(false); // Author can change this to control visibility

  // Courses sorted by level and course number (Graduate first, then Undergraduate by number)
  const courses = [
    {
      title: "Software Security",
      description: "Advanced topics in software security, secure coding practices, and vulnerability assessment",
      level: "Graduate",
      note: "UW Extended Campus",
      sortOrder: 1
    },
    {
      title: "Capstone Essay in Computer Science",
      description: "Independent research and writing project synthesizing computer science knowledge and skills",
      level: "Undergraduate",
      sortOrder: 2
    },
    {
      title: "Operating System using Linux",
      description: "Operating system concepts and practical experience with Linux system administration and programming",
      level: "Undergraduate",
      sortOrder: 3
    },
    {
      title: "Theory of Algorithms",
      description: "Analysis and design of algorithms, computational complexity, and advanced algorithmic techniques",
      level: "Undergraduate",
      sortOrder: 4
    },
    {
      title: "Advanced Object-Oriented Design",
      description: "Advanced concepts in object-oriented programming and design patterns for large-scale software development",
      level: "Undergraduate",
      sortOrder: 5
    },
    {
      title: "Information Assurance & Security",
      description: "Principles of information security, cryptography, network security, and security policies and procedures",
      level: "Undergraduate",
      sortOrder: 6
    },
    {
      title: "Discrete Mathematics",
      description: "Mathematical foundations for computer science including logic, set theory, combinatorics, and graph theory",
      level: "Undergraduate",
      sortOrder: 7
    },
    {
      title: "Introduction to IT Operation",
      description: "Overview of information technology operations, system administration, and IT infrastructure management",
      level: "Undergraduate",
      sortOrder: 8
    },
    {
      title: "Introduction to Python",
      description: "Introduction to programming using Python, covering basic syntax, data structures, and problem-solving techniques",
      level: "Undergraduate",
      sortOrder: 9
    },
    {
      title: "Introduction to Computing & Internet",
      description: "Fundamental concepts of computing and internet technologies, including basic programming principles and digital literacy",
      level: "Undergraduate",
      sortOrder: 10
    }
  ];

  // Student testimonials and alumni success stories - Author can easily edit these
  const testimonials = [
    {
      name: "Sarah Johnson",
      graduationYear: "2023",
      currentPosition: "Software Developer at Microsoft",
      course: "Comp Sci 450 - Theory of Algorithms",
      testimonial: "Dr. Choudhury's approach to teaching algorithms completely transformed my understanding of computer science. His real-world examples and patient explanations helped me land my dream job at Microsoft. The problem-solving skills I learned in his class are invaluable in my daily work.",
      type: "Alumni Success"
    },
    {
      name: "Michael Chen",
      graduationYear: "2022",
      currentPosition: "Cybersecurity Analyst at Accenture",
      course: "Comp Sci 361 - Information Assurance & Security",
      testimonial: "The cybersecurity course with Dr. Choudhury was eye-opening. His industry experience and practical approach to teaching security concepts gave me the confidence to pursue a career in cybersecurity. I still refer to his course materials in my current role.",
      type: "Alumni Success"
    },
    {
      name: "Emily Rodriguez",
      graduationYear: "Current Student",
      currentPosition: "Undergraduate Research Assistant",
      course: "Comp Sci 490 - Capstone Project",
      testimonial: "Working on my capstone project under Dr. Choudhury's mentorship has been incredible. He challenges us to think critically while providing the support we need. His feedback is always constructive and helps us grow as both students and future professionals.",
      type: "Current Student"
    },
    {
      name: "David Thompson",
      graduationYear: "2021",
      currentPosition: "Lead Developer at Epic Systems",
      course: "Comp Sci 371 - Advanced Object-Oriented Design",
      testimonial: "Dr. Choudhury's teaching style is unique - he makes complex topics accessible and always relates them to industry practices. The design patterns and best practices I learned in his class are fundamental to my work as a lead developer. He truly cares about student success.",
      type: "Alumni Success"
    },
    {
      name: "Amanda Williams",
      graduationYear: "2023",
      currentPosition: "Graduate Student at UW-Madison",
      course: "Multiple Courses",
      testimonial: "Dr. Choudhury was instrumental in my decision to pursue graduate studies. His research mentorship and encouragement gave me the confidence to continue in academia. He's not just a professor - he's a mentor who genuinely invests in his students' futures.",
      type: "Alumni Success"
    }
  ];

  return (
    <div className="main-content px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 sm:py-10 lg:py-14">
      <section className="mt-4 sm:mt-6 lg:mt-8">
        <h2 className="text-2xl font-light text-black mb-6 border-b border-gray-300 pb-2">
          Teaching
        </h2>
      </section>

      {/* Teaching Philosophy - Now includes Teaching Approach as paragraph text */}
      <section className="mb-8">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-xl font-medium text-black mb-4">Teaching Philosophy</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-black leading-relaxed mb-4">
              Dr. Choudhury views teaching as a partnership where students are engaged, respected, and challenged to apply theory to practice. He promotes active learning, problem-based projects, and collaborative teamwork. His open-door approach, humor in class, and real-world case studies help students connect academic concepts with professional applications.
            </p>
            <p className="text-black leading-relaxed mb-4">
              His teaching approach emphasizes active learning through student engagement with problem-based projects and collaborative teamwork to enhance understanding and retention. He focuses on connecting theoretical concepts to real-world applications through case studies and professional scenarios, creating an accessible learning environment where students feel comfortable seeking help and engaging in discussions. By viewing education as a collaborative partnership, students are respected, engaged, and challenged to grow both academically and professionally.
            </p>
            <p className="text-black leading-relaxed">
              This partnership philosophy extends beyond the classroom, with mentorship opportunities and support for student research projects, ensuring that each student receives personalized guidance for their academic and career development.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {/* Courses Taught */}
        <AccordionSection title="Courses Taught (UW–Green Bay)" icon={FiBook} defaultOpen={true}>
          <div className="space-y-3">
            {courses.map((course, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-gray-600 font-medium mt-1">•</span>
                <div>
                  <span className="font-medium text-black">{course.title}</span>
                  <span className="text-black"> ({course.description})</span>
                  <span className="text-gray-600"> - {course.level}</span>
                  {course.note && (
                    <span className="text-gray-500 italic ml-2">({course.note})</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* Student Testimonials and Alumni Success - Conditionally Rendered */}
        {showTestimonials && (
          <AccordionSection title="Student Testimonials and Alumni Success" icon={FiHeart}>
            <div className="mb-6 p-6 bg-gray-50 rounded-lg">
              <p className="text-black leading-relaxed">
                Hear from current students and alumni about their experiences in Dr. Choudhury's courses and their professional journeys after graduation.
              </p>
            </div>

            {/* Author Control Instructions (Hidden in production) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
                <h5 className="font-medium text-gray-800 mb-2">
                  <SafeIcon icon={FiEdit3} className="w-4 h-4 inline mr-2" />
                  Author Controls (Development Only):
                </h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Set <code>showTestimonials</code> to <code>false</code> to hide this entire section</li>
                  <li>• Set <code>showTestimonials</code> to <code>true</code> to show this section</li>
                  <li>• Edit testimonials in the <code>testimonials</code> array</li>
                  <li>• Add new testimonials by adding objects to the array with: name, graduationYear, currentPosition, course, testimonial, type</li>
                  <li>• Types can be: "Alumni Success", "Current Student", or "Graduate Student"</li>
                </ul>
              </div>
            )}

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-black text-lg">{testimonial.name}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-gray-600">
                          Class of {testimonial.graduationYear}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-black">
                          {testimonial.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {testimonial.currentPosition}
                      </p>
                    </div>
                    <SafeIcon icon={FiHeart} className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </div>
                  <blockquote className="text-black leading-relaxed mb-3 italic border-l-4 border-gray-300 pl-4">
                    "{testimonial.testimonial}"
                  </blockquote>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Course:</span> {testimonial.course}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action for Current Students */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg text-center">
              <h4 className="font-medium text-black mb-2">Share Your Experience</h4>
              <p className="text-black mb-4">
                Are you a current student or alumnus? We'd love to hear about your experience and success story.
              </p>
              <a 
                href="mailto:choudhun@uwgb.edu?subject=Student Testimonial" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                <SafeIcon icon={FiHeart} className="w-4 h-4" />
                Share Your Story
              </a>
            </div>
          </AccordionSection>
        )}
      </div>
    </div>
  );
}

export default Teaching;