import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

function Contact({ darkMode, ACCENT, h2, sectionClass }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs.sendForm(
       import.meta.env.VITE_EMAILJS_SERVICE_ID,
       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
       formRef.current,
       import.meta.env.VITE_EMAILJS_PUBLIC_KEY
     )
      .then(
        () => {
          setLoading(false);
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-24">
      <div className={sectionClass}>
        <h2 className={h2} style={{ color: ACCENT }}>
          Contact
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 text-lg">
            <p>
              Let’s connect! Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:harshitapatidar@gmail.com"
                className="flex items-center gap-2 hover:underline"
                style={{ color: ACCENT }}
              >
                <Mail size={20} /> harshitapatidar257@gmail.com
              </a>

               <a
                href="mailto:harshitap@iitbhilai.ac.in"
                className="flex items-center gap-2 hover:underline"
                style={{ color: ACCENT }}
              >
                <Mail size={20} /> harshitap@iitbhilai.ac.in
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={20} /> Durg, India
              </span>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/harshitap1305"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
                style={{ color: ACCENT }}
              >
                <Github size={20} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/harshita-patidar-86294729a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
                style={{ color: ACCENT }}
              >
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-4 p-6 rounded-xl shadow-lg"
            style={{ background: darkMode ? "#1f1f1f" : "#fff" }}
          >
            {["Name", "Email"].map((label) => (
              <div key={label}>
                <label className="block mb-1">{label}</label>
                <input
                  name={label.toLowerCase()}
                  type={label === "Email" ? "email" : "text"}
                  className="w-full px-4 py-2 rounded border focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  style={{
                    borderColor: ACCENT,
                    background: darkMode ? "#2d2d2d" : "#fff",
                  }}
                  placeholder={`Your ${label}`}
                  required
                />
              </div>
            ))}
             <input
             type="hidden"
             name="time"
            value={new Date().toLocaleString()} 
            />
                   
            <div>
              <label className="block mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full px-4 py-2 rounded border focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                style={{
                  borderColor: ACCENT,
                  background: darkMode ? "#2d2d2d" : "#fff",
                }}
                placeholder="Your message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded text-white font-semibold hover:opacity-90 transition"
              style={{ background: ACCENT }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                className="text-sm mt-2"
                style={{ color: status.startsWith("Message sent successfully!") ? "green" : "red" }}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
