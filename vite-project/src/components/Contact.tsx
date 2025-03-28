import { FC, FormEvent } from 'react';
import { motion } from 'framer-motion';

const Contact: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    fetch('https://formspree.io/f/xovaznqd', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        form.reset();
      } else {
        alert('Error sending message. Please try again.');
      }
    }).catch(() => {
      alert('Error sending message. Please try again.');
    });
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/raymondklanderman/' },
    { name: 'X', url: 'https://x.com/rayklanderman' },
    { name: 'GitHub', url: 'https://github.com/rayklanderman' }
  ];

  return (
    <section id="contact" className="container">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      
      <motion.form
        onSubmit={handleSubmit}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <label>
          Your email:
          <motion.input
            type="email"
            name="email"
            required
            whileFocus={{ scale: 1.01 }}
          />
        </label>
        <label>
          Your message:
          <motion.textarea
            name="message"
            required
            whileFocus={{ scale: 1.01 }}
          />
        </label>
        <motion.button
          type="submit"
          className="btn glossy"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </motion.form>

      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        Connect with Me
      </motion.h3>
      
      <div className="social-buttons">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            className="btn glossy"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + (index * 0.1) }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.name}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
