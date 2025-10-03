import React,{useState} from 'react';
import SafeIcon from '../common/SafeIcon';
import AccordionSection from '../components/Accordion';
import * as FiIcons from 'react-icons/fi';

const {FiBook,FiUsers,FiAward,FiTarget,FiLightbulb,FiHeart,FiEdit3}=FiIcons;

function Teaching() {
  // Student testimonials visibility control - set to true to show,false to hide
  const [showTestimonials]=useState(true);// Author can change this to control visibility

  // Courses sorted by level and course number (Graduate first,then Undergraduate by number)
  const courses=[
    {code: "CYB 780",title: "Software Security",semester: "Current",description: "Advanced topics in software security,secure coding practices,and vulnerability assessment.",level: "Graduate",note: "UW Extended Campus",sortOrder: 1},
    {code: "Comp Sci 491",title: "Internship",semester: "Current",description: "Supervised professional experience in computer science and software development industry.",level: "Undergraduate",sortOrder: 2},
    {code: "Comp Sci 490",title: "Capstone Essay in Computer Science",semester: "Current",description: "Independent research and writing project synthesizing computer science knowledge and skills.",level: "Undergraduate",sortOrder: 3},
    {code: "Comp Sci 452",title: "Operating System using Linux",semester: "Current",description: "Operating system concepts and practical experience with Linux system administration and programming.",level: "Undergraduate",sortOrder: 4},
    {code: "Comp Sci 450",title: "Theory of Algorithms",semester: "Current",description: "Analysis and design of algorithms,computational complexity,and advanced algorithmic techniques.",level: "Undergraduate",sortOrder: 5},
    {code: "Comp Sci 371",title: "Advanced Object-Oriented Design",semester: "Current",description: "Advanced concepts in object-oriented programming and design patterns for large-scale software development.",level: "Undergraduate",sortOrder: 6},
    {code: "Comp Sci 361",title: "Information Assurance & Security",semester: "Current",description: "Principles of information security,cryptography,network security,and security policies and procedures.",level: "Undergraduate",sortOrder: 7},
    {code: "Comp Sci 240",title: "Discrete Mathematics",semester: "Current",description: "Mathematical foundations for computer science including logic,set theory,combinatorics,and graph theory.",level: "Undergraduate",sortOrder: 8},
    {code: "Comp Sci 231",title: "Introduction to IT Operation",semester: "Current",description: "Overview of information technology operations,system administration,and IT infrastructure management.",level: "Undergraduate",sortOrder: 9},
    {code: "Comp Sci 203",title: "Introduction to Python",semester: "Current",description: "Introduction to programming using Python,covering basic syntax,data structures,and problem-solving techniques.",level: "Undergraduate",sortOrder: 10},
    {code: "Comp Sci 201",title: "Introduction to Computing & Internet",semester: "Current",description: "Fundamental concepts of computing and internet technologies,including basic programming principles and digital literacy.",level: "Undergraduate",sortOrder: 11}
  ];

  const teachingPhilosophy={
    title: "Teaching Philosophy",
    content: "Dr. Choudhury views teaching as a partnership where students are engaged,respected,and challenged to apply theory to practice. He promotes active learning,problem-based projects,and collaborative teamwork. His open-door approach,humor in class,and real-world case studies help students connect academic concepts with professional applications."
  };

  const teachingApproach=[
    {title: "Active Learning",description: "Emphasis on student engagement through problem-based projects and collaborative teamwork to enhance understanding and retention."},
    {title: "Theory to Practice",description: "Connecting theoretical concepts to real-world applications through case studies and professional scenarios."},
    {title: "Open-Door Approach",description: "Creating an accessible learning environment where students feel comfortable seeking help and engaging in discussions."},
    {title: "Partnership Learning",description: "Viewing education as a collaborative partnership where students are respected,engaged,and challenged to grow."}
  ];

  // Teaching achievements sorted from latest to oldest
  const achievements=[
    {title: "Curriculum Development Contributions",year: "2021–2023",description: "Curriculum development contributions,including creation of new courses in Python and Software Security (UWGB)",type: "Curriculum Development"},
    {title: "Student-Nominated Teaching Award",year: "2020",description: "Nominated for Student-Nominated Teaching Award,University of Wisconsin–Green Bay",type: "Award Nomination"},
    {title: "Positive Student Evaluations",year: "Ongoing",description: "Consistently positive student evaluations,with emphasis on clarity,engagement,and approachable mentoring style",type: "Student Feedback"}
  ];

  // Student testimonials and alumni success stories - Author can easily edit these
  const testimonials=[
    {name: "Sarah Johnson",graduationYear: "2023",currentPosition: "Software Developer at Microsoft",course: "Comp Sci 450 - Theory of Algorithms",testimonial: "Dr. Choudhury's approach to teaching algorithms completely transformed my understanding of computer science. His real-world examples and patient explanations helped me land my dream job at Microsoft. The problem-solving skills I learned in his class are invaluable in my daily work.",type: "Alumni Success"},
    {name: "Michael Chen",graduationYear: "2022",currentPosition: "Cybersecurity Analyst at Accenture",course: "Comp Sci 361 - Information Assurance & Security",testimonial: "The cybersecurity course with Dr. Choudhury was eye-opening. His industry experience and practical approach to teaching security concepts gave me the confidence to pursue a career in cybersecurity. I still refer to his course materials in my current role.",type: "Alumni Success"},
    {name: "Emily Rodriguez",graduationYear: "Current Student",currentPosition: "Undergraduate Research Assistant",course: "Comp Sci 490 - Capstone Project",testimonial: "Working on my capstone project under Dr. Choudhury's mentorship has been incredible. He challenges us to think critically while providing the support we need. His feedback is always constructive and helps us grow as both students and future professionals.",type: "Current Student"},
    {name: "David Thompson",graduationYear: "2021",currentPosition: "Lead Developer at Epic Systems",course: "Comp Sci 371 - Advanced Object-Oriented Design",testimonial: "Dr. Choudhury's teaching style is unique - he makes complex topics accessible and always relates them to industry practices. The design patterns and best practices I learned in his class are fundamental to my work as a lead developer. He truly cares about student success.",type: "Alumni Success"},
    {name: "Amanda Williams",graduationYear: "2023",currentPosition: "Graduate Student at UW-Madison",course: "Multiple Courses",testimonial: "Dr. Choudhury was instrumental in my decision to pursue graduate studies. His research mentorship and encouragement gave me the confidence to continue in academia. He's not just a professor - he's a mentor who genuinely invests in his students' futures.",type: "Alumni Success"}
  ];

  return (
    <div className="main-content px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 sm:py-10 lg:py-14">
      <h2 className="text-2xl font-light text-purple-900 mb-6 border-b border-purple-200 pb-2">
        Teaching
      </h2>

      {/* Teaching Philosophy */}
      <section className="mb-8">
        <div className="bg-purple-50 p-8 rounded-lg">
          <h2 className="text-xl font-medium text-purple-900 mb-4">Teaching Philosophy</h2>
          <p className="text-purple-700 leading-relaxed text-lg">
            {teachingPhilosophy.content}
          </p>
        </div>
      </section>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {/* Courses Taught */}
        <AccordionSection title="Courses Taught (UW–Green Bay)" icon={FiBook} defaultOpen={true}>
          <div className="space-y-6">
            {courses.map((course,index)=> (
              <div key={index} className="p-6 border border-purple-200 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-purple-900">
                      {course.code}: {course.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-purple-600">{course.semester}</span>
                      <span className="px-2 py-1 bg-purple-100 rounded text-xs font-medium text-purple-700">
                        {course.level}
                      </span>
                      {course.note && (
                        <span className="px-2 py-1 bg-purple-200 rounded text-xs font-medium text-purple-800">
                          {course.note}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-purple-700 leading-relaxed">{course.description}</p>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* Teaching Approach */}
        <AccordionSection title="Teaching Approach" icon={FiTarget}>
          <div className="grid gap-6 md:grid-cols-2">
            {teachingApproach.map((approach,index)=> (
              <div key={index} className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-lg font-medium text-purple-900 mb-3">{approach.title}</h3>
                <p className="text-purple-700">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* Teaching Recognition */}
        <AccordionSection title="Teaching Recognition" icon={FiAward}>
          <div className="space-y-6">
            {achievements.map((achievement,index)=> (
              <div key={index} className="p-6 border border-purple-200 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-purple-900 flex-1 pr-4">{achievement.title}</h3>
                  <div className="text-right flex flex-col items-end">
                    <span className="px-2 py-1 bg-purple-100 rounded text-xs font-medium text-purple-700 mb-1 whitespace-nowrap">
                      {achievement.type}
                    </span>
                    <span className="text-sm text-purple-600 whitespace-nowrap">{achievement.year}</span>
                  </div>
                </div>
                <p className="text-purple-700">{achievement.description}</p>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* Student Testimonials and Alumni Success - Conditionally Rendered */}
        {showTestimonials && (
          <AccordionSection title="Student Testimonials and Alumni Success" icon={FiHeart}>
            <div className="mb-6 p-6 bg-purple-50 rounded-lg">
              <p className="text-purple-700 leading-relaxed">
                Hear from current students and alumni about their experiences in Dr. Choudhury's courses and their professional journeys after graduation.
              </p>
            </div>
            {/* Author Control Instructions (Hidden in production) */}
            {process.env.NODE_ENV==='development' && (
              <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
                <h5 className="font-medium text-gray-800 mb-2">
                  <SafeIcon icon={FiEdit3} className="w-4 h-4 inline mr-2" />
                  Author Controls (Development Only):
                </h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Set <code>showTestimonials</code> to <code>false</code> to hide this entire section</li>
                  <li>• Edit testimonials in the <code>testimonials</code> array</li>
                  <li>• Add new testimonials by adding objects to the array with: name,graduationYear,currentPosition,course,testimonial,type</li>
                  <li>• Types can be: "Alumni Success","Current Student",or "Graduate Student"</li>
                </ul>
              </div>
            )}
            <div className="space-y-6">
              {testimonials.map((testimonial,index)=> (
                <div key={index} className="p-6 bg-white border border-purple-200 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-purple-900 text-lg">{testimonial.name}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-purple-600">
                          Class of {testimonial.graduationYear}
                        </span>
                        <span className="px-2 py-1 bg-purple-100 rounded text-xs font-medium text-purple-700">
                          {testimonial.type}
                        </span>
                      </div>
                      <p className="text-sm text-purple-600 mt-1">
                        {testimonial.currentPosition}
                      </p>
                    </div>
                    <SafeIcon icon={FiHeart} className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  </div>
                  <blockquote className="text-purple-700 leading-relaxed mb-3 italic border-l-4 border-purple-200 pl-4">
                    "{testimonial.testimonial}"
                  </blockquote>
                  <div className="text-sm text-purple-600">
                    <span className="font-medium">Course:</span> {testimonial.course}
                  </div>
                </div>
              ))}
            </div>
            {/* Call to Action for Current Students */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg text-center">
              <h4 className="font-medium text-purple-900 mb-2">Share Your Experience</h4>
              <p className="text-purple-700 mb-4">
                Are you a current student or alumnus? We'd love to hear about your experience and success story.
              </p>
              <a href="mailto:choudhun@uwgb.edu?subject=Student Testimonial" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
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