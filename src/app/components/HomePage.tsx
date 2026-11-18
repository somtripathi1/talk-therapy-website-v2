import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/4824383bfed7c7a19b0a1d53931852f711758e13.png';
import alarmIcon from "../../assets/alarm.png";
import alarmClockIcon from "../../assets/circular-alarm-clock-tool.png";
import elearningIcon from "../../assets/elearning.png";
import heartIcon from "../../assets/heart.png";
import ideaIcon from "../../assets/idea.png";
import runningIcon from "../../assets/running.png";
import shuttleIcon from "../../assets/shuttle.png";
import starIcon from "../../assets/star.png";
import sunIcon from "../../assets/sun.png";
import targetIcon from "../../assets/target.png";
import userIcon from "../../assets/user.png";



export function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Decorative Elements */}
      <section className="relative min-h-[600px] lg:min-h-[700px]">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top Left Leaf */}
          <svg className="absolute -top-8 -left-8 w-32 h-32 lg:w-48 lg:h-48 text-white opacity-60" viewBox="0 0 200 200" fill="currentColor">
            <path d="M100,20 Q150,40 160,90 Q170,140 140,170 L120,150 Q145,125 138,85 Q131,45 100,35 Z" />
            <path d="M100,20 Q90,50 95,90 Q100,130 120,150 L105,165 Q80,135 78,90 Q76,45 100,20 Z" />
            <path d="M100,20 Q70,35 68,75 Q66,115 95,145 L110,130 Q88,108 90,75 Q92,42 100,20 Z" />
          </svg>

          {/* Bottom Right Leaf */}
          <svg className="absolute bottom-0 right-0 w-64 h-64 lg:w-96 lg:h-96 text-white opacity-50" viewBox="0 0 200 200" fill="currentColor">
            <path d="M100,180 Q150,160 160,110 Q170,60 140,30 L120,50 Q145,75 138,115 Q131,155 100,165 Z" />
            <path d="M100,180 Q90,150 95,110 Q100,70 120,50 L105,35 Q80,65 78,110 Q76,155 100,180 Z" />
          </svg>

          {/* Blue Circle Top Right */}
          <div className="absolute top-12 right-12 lg:top-24 lg:right-32 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-accent/40"></div>

          {/* Blue Circle Bottom Left */}
          <div className="absolute bottom-32 left-8 lg:bottom-48 lg:left-24 w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-accent/30"></div>

          {/* Pink Arc Bottom Right */}
          <svg className="absolute bottom-0 right-0 w-48 h-48 lg:w-64 lg:h-64 text-primary opacity-40" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="24">
            <path d="M 200,200 Q 200,100 150,50" />
          </svg>

          {/* Beige Wave Bottom */}
          <div className="absolute -bottom-4 left-0 right-0 h-32 bg-muted/60 rounded-t-[100%]"></div>
        </div>

        {/* Content Container */}
        <div className="relative container mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4">
                {/* Decorative Leaf Overlay on Image */}
                <svg className="absolute top-0 left-0 w-24 h-24 lg:w-32 lg:h-32 text-white z-10" viewBox="0 0 200 200" fill="currentColor">
                  <path d="M20,20 Q60,30 80,70 Q100,110 85,140 L70,130 Q82,105 68,75 Q54,45 20,35 Z" />
                  <path d="M20,20 Q25,50 30,80 Q35,110 70,130 L60,145 Q30,120 26,80 Q22,40 20,20 Z" />
                </svg>

                <div className="relative rounded-[2.5rem] overflow-hidden h-[400px] lg:h-[500px]">
                  <ImageWithFallback
                    src={heroImage}
                    alt="Couple in therapy session"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative Circles around Image */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-muted/80"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-accent/50"></div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 order-1 lg:order-2 z-10">
              <div className="inline-block">
                <h1 className="text-4xl lg:text-6xl font-semibold text-foreground leading-tight">
                  Creating a Relationship You Always Dreamt of Having
                </h1>
              </div>

              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Couples typically enter a cycle where they get disconnected, they fight, and no matter what the topic is, the conflict seems to go the same way and end up in the same place — where we feel unheard, misunderstood, or alone. Emotionally Focused Couple Therapy helps partners recognize these patterns, understand what happens when communication breaks down, and express their deeper emotions and needs in ways that allow them to deeply hear and respond to each other.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                  asChild
                >
                  <Link to="/contact">Book a Free Consultation</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground/20 hover:bg-foreground/5 rounded-full px-8"
                  asChild
                >
                  <Link to="/learn-therapy">Learn About Therapy</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional therapy services tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-secondary/50 rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-4">Individual Therapy</h3>
                <p className="text-muted-foreground mb-6">
                  In individual therapy, you will be met with curiosity, honesty, and compassion. Together, we will explore your inner emotional world and develop practical strategies for creating the life and relationships you want.
                </p>
                <Button variant="link" className="text-primary p-0" asChild>
                  <Link to="/services/individual">Learn More →</Link>
                </Button>
              </div>
            </div>

            <div className="group">
              <div className="bg-secondary/50 rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-4">Couples Therapy</h3>
                <p className="text-muted-foreground mb-6">
                  A supportive space to repair communication, rebuild trust, and strengthen emotional connection. Learn to move beyond recurring conflicts and create a more secure and fulfilling partnership.
                </p>
                <Button variant="link" className="text-primary p-0" asChild>
                  <Link to="/services/couples">Learn More →</Link>
                </Button>
              </div>
            </div>

            <div className="group">
              <div className="bg-secondary/50 rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-4">Couples Retreat & Workshops</h3>
                <p className="text-muted-foreground mb-6">
                  Experiences designed to help partners step away from everyday pressures and focus more intentionally on their relationship, inspired by Emotionally Focused Therapy.
                </p>
                <Button variant="link" className="text-primary p-0" asChild>
                  <Link to="/services/retreat">Learn More →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/30 via-background to-accent/10 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-primary/10"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 rounded-full bg-accent/10"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-4">Why Choose Talk Therapy?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience compassionate care that makes a real difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-circularCardBlue shadow-lg flex items-center justify-center mx-auto mb-6">
                <img src={heartIcon} alt="Heart" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-xl mb-3">Compassionate Care</h3>
              <p className="text-muted-foreground">
                A safe, non-judgmental space for your healing journey
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-circularCardRed shadow-lg flex items-center justify-center mx-auto mb-6">
                {/* <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15.5 12" />
                </svg> */}
                <img src={alarmClockIcon} alt="Clock" className="w-8 h-8 object-contain" />

              </div>
              <h3 className="text-xl mb-3">Flexible Scheduling</h3>
              <p className="text-muted-foreground">
                Evening and weekend appointments available
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-circularCardBlue shadow-lg flex items-center justify-center mx-auto mb-6">
                <img src={elearningIcon} alt="Elearning" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-xl mb-3">Online Access</h3>
              <p className="text-muted-foreground">
                Convenient therapy from the comfort of home
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-circularCardRed shadow-lg flex items-center justify-center mx-auto mb-6">
                <img src={targetIcon} alt="Target" className="w-8 h-8 object-contain" />

              </div>
              <h3 className="text-xl mb-3">Personalized Approach</h3>
              <p className="text-muted-foreground">
                Therapy tailored specifically to your unique needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Areas Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-accent/10"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 rounded-full bg-primary/10"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-4">Specialty Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert support across a wide range of therapeutic areas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  // <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  //   {/* Running figure */}
                  //   <circle cx="14.5" cy="4" r="1.5" />
                  //   <path d="M11 7.5l2 2 2-3.5" />
                  //   <path d="M7 10.5l4 1.5-1 4-3 3" />
                  //   <path d="M15 10l1.5 4-3.5 1" />
                  // </svg>
                  <img src={runningIcon} alt="Running" className="w-8 h-8 object-contain" />

                ),
                title: 'Sport Performance & Psychology',
                desc: 'Performance coaching for high-performance athletes.',
                bg: 'bg-circularCardBlue',
                iconColor: 'text-accent-foreground',
              },
              {

                icon: (
                  // <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  //   {/* Rocket */}
                  //   <path d="M12 2c0 0 4 2 4 9l-4 3-4-3c0-7 4-9 4-9z" />
                  //   <path d="M8 11l-3 4h14l-3-4" />
                  //   <path d="M10 17v3" />
                  //   <path d="M14 17v3" />
                  // </svg>
                  <img src={shuttleIcon} alt="Rocket" className="w-8 h-8 object-contain" />
                ),
                title: 'Self-Leadership & Peak Performance',
                desc: 'Take charge of your life and reach your maximum potential. Gain focus and direction.',
                bg: 'bg-circularCardRed',
                iconColor: 'text-primary-foreground',
              },
              {
                icon: (
                  <img src={heartIcon} alt="Heart" className="w-8 h-8 object-contain" />

                  // <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  //   {/* Heart */}
                  //   <path d="M12 21C12 21 3.5 15.5 3.5 9a5 5 0 0 1 8.5-3.535A5 5 0 0 1 20.5 9c0 6.5-8.5 12-8.5 12z" />
                  // </svg>
                ),
                title: 'Chronic Health Conditions',
                desc: 'Support for ongoing medical conditions, including medically unexplained symptoms.',
                bg: 'bg-circularCardBlue',
                iconColor: 'text-accent-foreground',
              },
              {
                icon: (
                  <img src={alarmIcon} alt="Alarm" className="w-8 h-8 object-contain" />

                  // <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  //   {/* Alert triangle */}
                  //   <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  //   <line x1="12" y1="9" x2="12" y2="13" />
                  //   <line x1="12" y1="17" x2="12.01" y2="17" />
                  // </svg>

                ),
                title: 'Chronic Pain Management',
                desc: 'Developing a pain management program for those suffering from chronic conditions.',
                bg: 'bg-circularCardRed',
                iconColor: 'text-foreground',
              },
              {
                icon: (
                  <img src={sunIcon} alt="Sun" className="w-8 h-8 object-contain" />
                  // <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  //   {/* Sun */}
                  //   <circle cx="12" cy="12" r="4" />
                  //   <line x1="12" y1="2" x2="12" y2="4" />
                  //   <line x1="12" y1="20" x2="12" y2="22" />
                  //   <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  //   <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  //   <line x1="2" y1="12" x2="4" y2="12" />
                  //   <line x1="20" y1="12" x2="22" y2="12" />
                  //   <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  //   <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  // </svg>

                ),
                title: 'Health & Well-being',
                desc: 'Psychology to achieve overall health, well-being, and increase your quality of life.',
                bg: 'bg-circularCardRed',
                iconColor: 'text-primary-foreground',
              },
              {
                icon: (
                  // <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  //   {/* Sparkle / recovery */}
                  //   <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
                  //   <path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75z" />
                  //   <path d="M5 3l.5 1.5L7 5l-1.5.5L5 7l-.5-1.5L3 5l1.5-.5z" />
                  // </svg>
                  <img src={starIcon} alt="Star" className="w-8 h-8 object-contain" />

                ),
                title: 'Injury and Surgery Recovery',
                desc: 'Including an innovative pre-surgery chronic pain prevention program.',
                bg: 'bg-circularCardBlue',
                iconColor: 'text-accent-foreground',
              },
              {
                icon: (
                  // <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  //   {/* Lightbulb */}
                  //   <path d="M9 21h6" />
                  //   <path d="M10 17h4" />
                  //   <path d="M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 5.5V17H9v-2.5C7.5 13.5 6 11.5 6 9a6 6 0 0 1 6-6z" />
                  // </svg>
                  <img src={ideaIcon} alt="Idea" className="w-8 h-8 object-contain" />

                ),
                title: 'Trauma Processing',
                desc: 'Learning how to process trauma, manage PTSD, and deal with specific fears/phobias.',
                bg: 'bg-circularCardRed',
                iconColor: 'text-foreground',
              },
              {
                icon: (
                  // <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  //   {/* People / group */}
                  //   <circle cx="9" cy="7" r="3" />
                  //   <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                  //   <circle cx="17" cy="8" r="2.5" />
                  //   <path d="M21 20c0-2.8-1.8-5.1-4.3-5.8" />
                  // </svg>
                  <img src={userIcon} alt="User" className="w-8 h-8 object-contain" />

                ),
                title: 'First Responders',
                desc: 'Counselling for trauma, critical incident support, stress management, and self-care.',
                bg: 'bg-circularCardBlue',
                iconColor: 'text-primary-foreground',
              },
            ].map((area, i) => (
              <div key={i} className="text-center group">
                <div className={`w-20 h-20 rounded-full ${area.bg} shadow-lg flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 text-foreground`}>
                  {area.icon}
                </div>
                <h3 className="text-lg font-medium mb-2 leading-snug">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-white">
                Ready to Begin?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Taking the first step can feel difficult, especially when things have been heavy for a while. A free consultation offers a chance to ask questions, share what's been happening, and see whether working together feels like the right fit.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-8"
                  asChild
                >
                  <Link to="/contact">Schedule Free Consultation</Link>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-8"
                  asChild
                >
                  <Link to="/about">Learn More About Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}