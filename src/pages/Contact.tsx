
import { useState, useRef } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Using EmailJS to send the form
    emailjs.sendForm(
      'service_8r6g19a', 
      'template_agmcdny', 
      form.current!, 
      'uTyP5_5RZIKNfMLkY'
    )
      .then((result) => {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you shortly.",
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        toast({
          title: "Error sending message",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7668161626",
      link: "tel:+917668161626"
    },
    {
      icon: Mail,
      label: "Email",
      value: "udayapril22@gmail.com",
      link: "mailto:udayapril22@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/uday-gupta-7b0887295",
      link: "https://linkedin.com/in/uday-gupta-7b0887295"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/UDaygupta12512",
      link: "https://github.com/UDaygupta12512"
    }
  ];

  return (
    <section id="contact" className="section-padding pt-28 md:pt-36">
      <div className="container">
        <SectionHeading 
          title="Contact Me"
          subtitle="Have a question or want to work together? Reach out to me!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="fade-in">
            <h3 className="text-xl font-bold mb-6 gradient-text">Send Me a Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-portfolio-blue hover:bg-portfolio-light-blue text-white py-3 rounded-lg transition-colors disabled:opacity-70 disabled:hover:bg-portfolio-blue"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="fade-in">
            <h3 className="text-xl font-bold mb-6 gradient-text">Contact Information</h3>
            <div className="glass-card p-6">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-portfolio-blue p-3 rounded-lg text-white">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">{info.label}</h4>
                      <a 
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-portfolio-blue transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/UDaygupta12512" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-muted p-2 rounded-lg hover:bg-portfolio-blue hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/uday-gupta-7b0887295" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-muted p-2 rounded-lg hover:bg-portfolio-blue hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:udayapril22@gmail.com"
                    className="bg-muted p-2 rounded-lg hover:bg-portfolio-blue hover:text-white transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
