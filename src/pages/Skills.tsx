import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Analytics & Tools',
      skills: ['Power BI', 'MS Excel', 'Canva', 'GTM Strategy', 'Project Management'],
    },
    {
      category: 'Digital Marketing',
      skills: ['SEO', 'SEM', 'Content Strategy', 'Market Analysis', 'Campaign Planning'],
    },
    {
      category: 'Business Strategy',
      skills: ['Market Positioning', 'Competitive Analysis', 'Product Development', 'Business Planning'],
    },
    {
      category: 'Core Competencies',
      skills: ['Business Strategy', 'Market Analysis', 'Merchandising', 'Cost Optimization', 'Leadership'],
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">Skills & Expertise</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-red-600 transition">
              <h3 className="text-2xl font-bold text-red-600 mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="bg-gradient-to-r from-red-600/20 to-red-600/10 border border-red-600/30 text-red-300 px-4 py-2 rounded-full font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Proficiency Levels</h2>
          <div className="space-y-6">
            {[
              { name: 'Business Strategy & Analysis', level: 95 },
              { name: 'Market Research & Analytics', level: 90 },
              { name: 'Digital Marketing & SEO', level: 85 },
              { name: 'Data Analysis & Visualization', level: 88 },
              { name: 'Project Management', level: 92 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-semibold">{skill.name}</span>
                  <span className="text-red-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-red-600 to-red-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
