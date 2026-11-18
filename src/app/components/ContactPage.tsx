import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    alert('Thank you for your message! I\'ll be in touch soon.');
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 text-primary opacity-20" viewBox="0 0 200 200" fill="currentColor">
            <path d="M100,20 Q150,40 160,90 Q170,140 140,170 L120,150 Q145,125 138,85 Q131,45 100,35 Z" />
            <path d="M100,20 Q90,50 95,90 Q100,130 120,150 L105,165 Q80,135 78,90 Q76,45 100,20 Z" />
          </svg>
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-accent/20"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-secondary/50"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-semibold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            If you're considering therapy, you may have questions or feel unsure about where to start. Reaching out is simply a first step.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (optional)</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="individual">Individual Therapy</option>
                      <option value="couples">Couples Therapy</option>
                      <option value="retreat">Couples Retreat</option>
                      <option value="unsure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me a bit about what brings you here..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-full">
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    I typically respond within one business day. On weekends and holidays, my response time may be slower.
                  </p>
                </form>
              </div>

              {/* Online Booking Section */}
              <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl mb-4">Prefer to Book Online?</h2>
                <p className="text-muted-foreground mb-6">
                  You can schedule your appointment directly through my secure online booking system. Choose a time that works best for you.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                  asChild
                >
                  <a href="https://aws-portal.owlpractice.ca/pathofchange/booking" target="_blank" rel="noopener noreferrer">Book an Appointment</a>
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>

                <h2 className="text-2xl mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1">Phone</h3>
                      <p className="text-muted-foreground">+ 1 (587) 200-1219</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1">Email</h3>
                      <p className="text-muted-foreground">richard.mercier@talk-therapy.ca</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1">Location</h3>
                      <p className="text-muted-foreground">Online or in Person in Alberta</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1">Office Hours</h3>
                      <p className="text-muted-foreground">Tuesday–Thursday: 1 PM – 7 PM MST</p>
                      <p className="text-muted-foreground">Friday: 1 PM – 6 PM MST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-3xl p-8">
                <h3 className="text-xl mb-4">Free 20-Minute Consultation</h3>
                <p className="text-muted-foreground mb-6">
                  Taking the first step can feel difficult, especially when things have been heavy for a while. A free consultation offers a chance to ask questions, share what's been happening, and see whether working together feels like the right fit.
                </p>
                <Button size="lg" className="w-full rounded-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}