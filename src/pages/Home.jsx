import React from 'react';

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Network Banner */}
      <div className="mb-16 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <img
            src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1758065045500-Essa.png"
            alt="Network Visualization"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
        <div className="flex-shrink-0">
          <img
            src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1758064216330-profile1.png"
            alt="Professor Nazim Choudhury"
            className="w-48 h-48 object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-light text-purple-900 mb-4">
            Dr. Nazim A. Choudhury
          </h1>
          <p className="text-xl text-purple-600 mb-6">
            Assistant Professor of Computer Science
          </p>
          <p className="text-lg text-purple-700 leading-relaxed mb-4">
            Richard J. Resch School of Engineering<br />
            University of Wisconsin–Green Bay
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-purple-600">
            <span>Social Network Analysis</span>
            <span>•</span>
            <span>Human-Computer Interaction</span>
            <span>•</span>
            <span>Machine Learning</span>
            <span>•</span>
            <span>Social Cybersecurity</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-purple-900 mb-6 border-b border-purple-200 pb-2">
          About
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-purple-700 leading-relaxed mb-6">
            Dr. Choudhury is a computer scientist with over a decade of teaching and research experience in the United States, Australia, and Bangladesh. His work focuses on Social Network Analysis, Human-Computer Interaction, Machine Learning, Social Cybersecurity, and Algorithm Analysis.
          </p>
          <p className="text-purple-700 leading-relaxed mb-6">
            Before joining UW–Green Bay in 2021, he held academic and industry roles across three continents, including postdoctoral research at the University of South Florida and faculty positions in Australia and Bangladesh. He has also worked as a software developer and database engineer in the IT industry.
          </p>
          <p className="text-purple-700 leading-relaxed">
            He has published 30+ scholarly works, received multiple grants and awards, and actively mentors students in research and capstone projects.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-purple-900 mb-6 border-b border-purple-200 pb-2">
          Philosophy of Teaching & Research
        </h2>
        <div className="bg-purple-50 p-8 rounded-lg">
          <p className="text-purple-700 leading-relaxed text-lg">
            Dr. Choudhury believes in active learning, theory–practice integration, and student-centered classrooms. He emphasizes collaborative problem solving, practical applications of theory, and respect for diversity in education. His research philosophy centers on developing AI-driven, human-centered technologies that improve usability, trust, and security.
          </p>
        </div>
      </section>

      {/* Recent News */}
      <section>
        <h2 className="text-2xl font-light text-purple-900 mb-6 border-b border-purple-200 pb-2">
          Recent News
        </h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="text-sm text-purple-500 font-medium min-w-24">Aug 2024</span>
            <p className="text-purple-700">Awarded 2024 Summer Research Scholar Award ($7,000) for "Design, Development, and Evaluation of a Mobile Application for Detecting Intoxication Due to Alcohol and/or Cannabis Consumption"</p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-purple-500 font-medium min-w-24">2024</span>
            <p className="text-purple-700">Co-PI on WiSys Spark Grant ($10,000) for "Artificial Intelligence (AI)-powered Pavement Distress Detection" project (WiSys Ref. No. T240052)</p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-purple-500 font-medium min-w-24">Feb 2024</span>
            <p className="text-purple-700">Published "Community-aware evolution similarity for link prediction in dynamic social networks" in Mathematics journal (Vol. 12, No. 2)</p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-purple-500 font-medium min-w-24">2023</span>
            <p className="text-purple-700">Serving as Chief Guest Editor for special issue "Applied Network Analysis and Data Science" in Mathematics journal (Impact Factor: 2.30, MDPI)</p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-purple-500 font-medium min-w-24">2023</span>
            <p className="text-purple-700">Co-authored paper accepted at IEEE 14th Annual UEMCON: "Do API migrations revert commits-a preliminary investigation"</p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-purple-500 font-medium min-w-24">2023</span>
            <p className="text-purple-700">Published two book chapters in Cybersecurity for Smart Cities: Practices and Challenges (Springer) - results of student capstone projects</p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-purple-500 font-medium min-w-24">Spring 2023</span>
            <p className="text-purple-700">Student research presented at National Conference for Undergraduate Research (NCUR) at UW-Eau Claire</p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-purple-500 font-medium min-w-24">2023</span>
            <p className="text-purple-700">Led Computer Science department to record participation in WiSys Innovation on-ramp pitch competition with multiple prize winners</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;