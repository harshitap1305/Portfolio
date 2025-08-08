import React from 'react'
import { BookOpen } from 'lucide-react'
const Education = ({darkMode,sectionClass,ACCENT,h2}) => {
  return (
  <>
  <section id="education" className="py-24 bg-gray-50 dark:bg-[#181a1b]/3">
  <div className={sectionClass}>
    <div className="text-center mb-16">
      <h2 className={`${h2} mb-4`} style={{ color: ACCENT }}>
        Education
      </h2>
    </div>

    <div className="relative mt-12 max-w-6xl mx-auto">
      {/* Enhanced vertical timeline line with gradient */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 rounded-full"
        style={{
          background: `linear-gradient(to bottom, ${ACCENT}, ${ACCENT}80)`,
          boxShadow: `0 0 10px ${ACCENT}35`,
        }}
      ></div>

      {/* ---------- ENTRY 1: B.Tech (Right side) ---------- */}
      <div className="relative mb-10 flex justify-end">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-6 w-6 h-6 rounded-full border-4 z-10 shadow-lg"
          style={{
            backgroundColor: ACCENT,
            borderColor: darkMode ? "#181a1b" : "#fff",
            boxShadow: `0 0 15px ${ACCENT}60`,
          }}
        ></div>

        {/* Enhanced content card */}
        <div
          className="w-full max-w-lg ml-8 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          style={{
            background: darkMode 
              ? "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)" 
              : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
            border: `2px solid ${ACCENT}30`,
            borderTop: `4px solid ${ACCENT}`,
          }}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <div className="flex gap-3 mb-1">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                ></div>
                <h3 className="text-xl font-bold text-black dark:text-white leading-tight" style={{ color: darkMode ? "#fff" : ACCENT }}>
                  B. Tech
                </h3>
              </div>
              <p className="text-lg font-semibold text-black dark:text-gray-200 mb-1 text-left" style={{ color: darkMode ? "#fff" : 'black' }}>
                Indian Institute of Technology, Bhilai
              </p>
              <p className="text-sm font-medium text-left" style={{ color: ACCENT }}>
                Computer Science and Engineering
              </p>
            </div>
            <div className="text-right">
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ 
                  backgroundColor: `${ACCENT}20`,
                  color: ACCENT,
                  border: `1px solid ${ACCENT}40`
                }}
              >
                2023 – Present
              </span>
            </div>
          </div>

          <div className="mb-2">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-lg"
              style={{ 
                backgroundColor: darkMode ? "#2d2d2d" : "#f0f0f0",
                border: `1px solid ${ACCENT}30`
              }}
            >
              <span className="text-sm font-semibold" style={{ color: ACCENT }}>
                CGPA:
              </span>
              <span className="text-lg font-bold text-black dark:text-white" style={{ color: darkMode ? "#fff" : 'black' }}>
                8.45 / 10.0
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-black dark:text-gray-200 mb-4 flex items-center gap-2">
              <span className="text-lg" style={{ color: darkMode ? "#fff" : 'black' }}><BookOpen/></span>
              <div style={{ color: darkMode ? "#fff" : 'black' }}>Key Coursework</div>
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {course:"Introduction to Programming"},
                {course: "Data Structures" },
                {course: "Software Tools and Technology" },
                {course:"Discrete Mathematics" },
                {course:"Degisn and Analysis of Algorithms" },
                {course:"Computer Organization and Architecture" },
                {course:"Theory of Computation"},
              ].map(({course }) => (
                <div
                  key={course}
                  className="flex items-center gap-3 px-2 py-1 rounded-lg text-sm font-small hover:scale-105 transition-transform duration-200"
                  style={{
                    background: darkMode 
                      ? "linear-gradient(135deg, #2d2d2d 0%, #383838 100%)" 
                      : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    color: darkMode ? "#fff" : "#000",
                    border: `1px solid ${ACCENT}20`,
                  }}
                >
                  <div className="flex-1">
                    <div className="font-medium">{course}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- ENTRY 2: Higher Secondary (Left side) ---------- */}
      <div className="relative mb-20 flex justify-start">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-6 w-6 h-6 rounded-full border-4 z-10 shadow-lg"
          style={{
            backgroundColor: ACCENT,
            borderColor: darkMode ? "#181a1b" : "#fff",
            boxShadow: `0 0 15px ${ACCENT}60`,
          }}
        ></div>

        <div
          className="w-full max-w-lg mr-8 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          style={{
            background: darkMode 
              ? "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)" 
              : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
            border: `2px solid ${ACCENT}30`,
            borderTop: `4px solid ${ACCENT}`,
          }}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                ></div>
                <h3 className="text-xl font-bold text-black dark:text-white leading-tight" style={{ color: darkMode ? "#fff" : ACCENT }}>
                  Higher Secondary Education
                </h3>
              </div>
              <p className="text-lg font-semibold text-black dark:text-gray-200 mb-1 text-left" style={{ color: darkMode ? "#fff" : 'black'}}>
                BCM Higher Secondary School, Dewas, MP
              </p>
              <p className="text-sm font-medium text-left" style={{ color: ACCENT }}>
                Science Stream (PCM)
              </p>
            </div>
            <div className="text-right">
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ 
                  backgroundColor: `${ACCENT}20`,
                  color: ACCENT,
                  border: `1px solid ${ACCENT}40`
                }}
              >
                2023
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-lg"
              style={{ 
                backgroundColor: darkMode ? "#2d2d2d" : "#f0f0f0",
                border: `1px solid ${ACCENT}30`
              }}
            >
              <span className="text-sm font-semibold" style={{ color: ACCENT }}>
                Percentage:
              </span>
              <span className="text-lg font-bold text-black dark:text-white" style={{ color: darkMode ? "#fff" : 'black'}}>
                92%
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-black dark:text-gray-200 mb-4 flex items-center gap-2">
              <span className="text-lg" style={{ color: darkMode ? "#fff" : 'black'}}><BookOpen/></span>
              <div className="text-lg font-semibold" style={{ color: darkMode ? "#fff" : 'black' }}>
                Key Subjects
              </div>
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {[
                {subject: "Physics" },
                {subject: "Chemistry" },
                {subject: "Mathematics" },
              ].map(({subject }) => (
                <div
                  key={subject}
                  className="flex flex-col items-center gap-2 px-2 py-1 rounded-lg text-sm font-medium text-center hover:scale-105 transition-transform duration-200"
                  style={{
                    background: darkMode 
                      ? "linear-gradient(135deg, #2d2d2d 0%, #383838 100%)" 
                      : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    color: darkMode ? "#fff" : "#000",
                    border: `1px solid ${ACCENT}20`,
                  }}
                >
                  <span className="font-medium">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </>
  )
}

export default Education
