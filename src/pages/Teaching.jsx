import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBook, FiUsers, FiAward } = FiIcons;

function Teaching() {
  const courses = [
    {
      code: "Comp Sci 201",
      title: "Introduction to Computing & Internet",
      semester: "Current",
      description: "Fundamental concepts of computing and internet technologies, including basic programming principles and digital literacy.",
      level: "Undergraduate"
    },
    {
      code: "Comp Sci 203",
      title: "Introduction to Python",
      semester: "Current",
      description: "Introduction to programming using Python, covering basic syntax, data structures, and problem-solving techniques.",
      level: "Undergraduate"
    },
    {
      code: "Comp Sci 231",
      title: "Introduction to IT Operation",
      semester: "Current",
      description: "Overview of information technology operations, system administration, and IT infrastructure management.",
      level: "Undergraduate"
    },
    {
      code: "Comp Sci 240",
      title: "Discrete Mathematics",
      semester: "Current",
      description: "Mathematical foundations for computer science including logic, set theory, combinatorics, and graph theory.",
      level: "Undergraduate"
    },
    {
      code: "Comp Sci 361",
      title: "Information Assurance & Security",
      semester: "Current",
      description: "Principles of information security, cryptography, network security, and security policies and procedures.",
      level: "Undergraduate"
    },
    {
      code: "Comp Sci 371",
      title: "Advanced Object-Oriented Design",
      semester: "Current",
      description: "Advanced concepts in object-oriented programming and design patterns for large-scale software development.",
      level: "Undergraduate"
    },
    {
      code: "Comp Sci 450",
      title: "Theory of Algorithms",
      semester: "Current",
      description: "Analysis and design of algorithms, computational complexity, and advanced algorithmic techniques.",
      level: "Undergraduate"
    },
    {
      code: "Comp Sci 452",
      title: "Operating System using Linux",
      semester: "Current",
      description: "Operating system concepts and practical experience with Linux system administration and programming.",
      level: "Undergraduate"
    },
    {
      code: "Comp Sci 490",
      title: "Capstone Essay in Computer Science",
      semester: "Current",
      description: "Independent research and writing project synthesizing computer science knowledge and skills.",
      level: "Undergraduate"
    },
    {
      code: "Comp Sci 491",
      title: "Internship",
      semester: "Current",
      description: "Supervised professional experience in computer science and software development industry.",
      level: "Undergraduate"
    },
    {
      code: "CYB 780",
      title: "Software Security",
      semester: "Current",
      description: "Advanced topics in software security, secure coding practices, and vulnerability assessment.",
      level: "Graduate",
      note: "UW Extended Campus"
    }
  ];

  const teachingPhilosophy = {
    title: "Teaching Philosophy",
    content: "Dr. Choudhury views teaching as a partnership where students are engaged, respected, and challenged to apply theory to practice. He promotes active learning, problem-based projects, and collaborative teamwork. His open-door approach, humor in class, and real-world case studies help students connect academic concepts with professional applications."
  };

  const achievements = [
    {
      title: "Student-Nominated Teaching Award",
      year: "2020",
      description: "Nominated for Student-Nominated Teaching Award, University of Wisconsin–Green Bay",
      type: "Award Nomination"
    },
    {
      title: "Positive Student Evaluations",
      year: "Ongoing",
      description: "Consistently positive student evaluations, with emphasis on clarity, engagement, and approachable mentoring style",
      type: "Student Feedback"
    },
    {
      title: "Curriculum Development Contributions",
      year: "2021–2023",
      description: "Curriculum development contributions, including creation of new courses in Python and Software Security (UWGB)",
      type: "Curriculum Development"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-light text-purple-900 mb-8">Teaching</h1>

      {/* Teaching Philosophy */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-purple-900 mb-6 border-b border-purple-200 pb-2">
          Teaching Philosophy
        </h2>
        <div className="bg-purple-50 p-8 rounded-lg">
          <p className="text-purple-700 leading-relaxed text-lg">
            {teachingPhilosophy.content}
          </p>
        </div>
      </section>

      {/* Courses Taught */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-purple-900 mb-6 border-b border-purple-200 pb-2 flex items-center gap-2">
          <SafeIcon icon={FiBook} className="w-5 h-5" />
          Courses Taught (UW–Green Bay)
        </h2>
        <div className="space-y-6">
          {courses.map((course, index) => (
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
      </section>

      {/* Teaching Approach */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-purple-900 mb-6 border-b border-purple-200 pb-2">
          Teaching Approach
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-medium text-purple-900 mb-3">Active Learning</h3>
            <p className="text-purple-700">
              Emphasis on student engagement through problem-based projects and collaborative teamwork to enhance understanding and retention.
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-medium text-purple-900 mb-3">Theory to Practice</h3>
            <p className="text-purple-700">
              Connecting theoretical concepts to real-world applications through case studies and professional scenarios.
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-medium text-purple-900 mb-3">Open-Door Approach</h3>
            <p className="text-purple-700">
              Creating an accessible learning environment where students feel comfortable seeking help and engaging in discussions.
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-medium text-purple-900 mb-3">Partnership Learning</h3>
            <p className="text-purple-700">
              Viewing education as a collaborative partnership where students are respected, engaged, and challenged to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Recognition */}
      <section>
        <h2 className="text-2xl font-light text-purple-900 mb-6 border-b border-purple-200 pb-2 flex items-center gap-2">
          <SafeIcon icon={FiAward} className="w-5 h-5" />
          Teaching Recognition
        </h2>
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
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
      </section>
    </div>
  );
}

export default Teaching;