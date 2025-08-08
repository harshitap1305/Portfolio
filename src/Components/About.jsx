import React from 'react'

function About({darkMode, ACCENT, h2, sectionClass }) {
  return (
   <>
     <section id="about" className="py-24">
  <div className={sectionClass}>
    <h2 className={h2} style={{ color: ACCENT }}>
      About Me
    </h2>

    <div className="mt-8 max-w-4xl mx-auto">
      <div
        className="rounded-xl p-8 shadow-md text-lg leading-relaxed"
        style={{
          background: darkMode ? "#1f1f1f" : "#efebf0",
          border: `2px solid ${ACCENT}`,
        }}
      >
        <p className="mb-6 text-gray-900 dark:text-gray-300" >
          <span className="text-xl font-semibold" style={{ color: ACCENT }}>
            Building with intent. Growing with impact.
          </span>
        </p>
        <p style={{ color: darkMode ? "#d1d5db" : "#000000" }} >
          I'm a developer and problem-solver, blending engineering and empathy to
          create meaningful, scalable solutions. As a B.Tech CSE student at IIT Bhilai,
          I’ve led and contributed to projects that go beyond code - crafting platforms
          that educate, empower, and elevate user experiences. Whether it’s developing
          full-stack web apps, building real-time systems, or open-source contributions, I thrive at the intersection of creativity and technology.
        </p>
         <p style={{ color: darkMode ? "#d1d5db" : "#000000" }}>
          I’m constantly exploring new tools, frameworks, and ideas, working primarily across the MERN stack, and learning how to build systems that are fast, secure, and user-focused. I enjoy collaborating with diverse teams, mentoring peers, and transforming ideas into experiences that matter.
        </p>
        <p style={{ color: darkMode ? "#d1d5db" : "#000000" }}>
          Beyond academics and tech, I find joy in the simple and creative - diving into crafting, painting, bicycling, reading and singing. These are not just hobbies, but ways I reconnect, recharge, and keep my creativity flowing.
        </p>

        <p style={{ color: darkMode ? "#d1d5db" : "#000000" }}>
          I'm always learning, always building - and always looking for ways to grow while making a difference.
        </p>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default About
