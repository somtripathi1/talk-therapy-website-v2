import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Heart, Users, Award, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-semibold">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've lived in several countries, speak four languages, and have called Canada home for the past 17 years. My path into psychology is actually my second career — and that experience deeply shaped the way I practice today.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In my first career, I learned how to build strong, meaningful relationships by understanding how people communicate, what they need, and how they experience the world. Wanting to deepen that understanding, I returned to school and completed a Bachelor of Arts in Human Relations (Concordia University, 2010), where I focused on emotional awareness, interpersonal dynamics, and communication styles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                After graduating, I began specializing in co-parenting and couples work, facilitating workshops that helped partners communicate more effectively and parent as a team. Through that work, I realized I wanted more clinical tools to support individuals and couples at a deeper level. This led me to complete my Master of Arts in Counselling Psychology (McGill University, 2015).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Both during and after my Master's degree, I developed a strong focus on anxiety and depression — challenges I was seeing frequently within the university and broader community. My clinical approach is grounded in Emotion-Focused Therapy (Levels 1 & 2, 2016–2018; Externship, 2022) and Emotion-Focused Couples Therapy (EFCT, 2020), alongside mindfulness-based approaches. I am also trained in Emotion-Focused Mindfulness Therapy (EFMT, 2023) and hold certification in Mindfulness Meditation (2018–2019).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I offer Emotion-Focused Therapy for individuals and couples who want to better understand their emotions, reduce anxiety and depression, and build healthier, more secure relationships. I am especially passionate about helping couples strengthen their connection and create lasting change.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                Therapy is not about "fixing" you — it is about creating a space where you can understand yourself more clearly, process what you've been carrying, and move forward with greater ease and connection.
              </p>
            </div>
            <div className="relative lg:sticky lg:top-8">
              <div className="space-y-8">
                {/* First Image Holder */}
                <div className="relative">
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4">
                    <div className="relative rounded-[2.5rem] overflow-hidden h-80 lg:h-96">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwcGVhY2VmdWwlMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2NjQzMjExMnww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Peaceful environment"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Decorative Circles */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-accent/40"></div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-primary/30"></div>
                </div>

                {/* Second Image Holder */}
                <div className="relative">
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4">
                    <div className="relative rounded-[2.5rem] overflow-hidden h-80 lg:h-96">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1700168333952-3d44a3f427af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwb2ZmaWNlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDk5OTg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Therapy office"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Decorative Circles */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-accent/50"></div>
                  <div className="absolute -top-3 -left-3 w-14 h-14 rounded-full bg-primary/40"></div>
                </div>

                {/* Third Image Holder */}
                <div className="relative">
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4">
                    <div className="relative rounded-[2.5rem] overflow-hidden h-80 lg:h-96">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1758273241078-8eec353836be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Vuc2VsaW5nJTIwdGhlcmFweSUyMHNlc3Npb258ZW58MXx8fHwxNzcwOTk5OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Counseling session"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Decorative Circles */}
                  <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full bg-primary/35"></div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-accent/45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/30 via-background to-accent/10 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-primary/10"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 rounded-full bg-accent/10"></div>
        <svg className="absolute bottom-0 left-0 w-48 h-48 text-white opacity-40" viewBox="0 0 200 200" fill="currentColor">
          <path d="M20,180 Q60,170 80,130 Q100,90 85,60 L70,70 Q82,95 68,125 Q54,155 20,165 Z" />
        </svg>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-semibold mb-4">Specialty Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Areas I specialize in supporting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center space-y-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl">Anxiety & Depression</h3>
              <p className="text-muted-foreground">
                Stress and burnout, life transitions, self-esteem and identity
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center space-y-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl">Communication & Conflict</h3>
              <p className="text-muted-foreground">
                Communication difficulties and conflict resolution
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center space-y-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl">Emotional Connection</h3>
              <p className="text-muted-foreground">
                Emotional connection and sexual intimacy
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center space-y-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl">Attachment Injuries</h3>
              <p className="text-muted-foreground">
                Affairs and attachment injuries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-8 text-center">How We Will Work Together</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary/50 rounded-3xl p-8">
              <h3 className="text-xl mb-2">A Collaborative Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Meaningful change begins within a trusting therapeutic relationship. My approach is collaborative, compassionate, and non-judgmental. I will meet you where you are, help you feel understood, and create a space where difficult emotions and experiences can be explored safely and honestly.
              </p>
            </div>
            <div className="bg-secondary/50 rounded-3xl p-8">
              <h3 className="text-xl mb-2">Building on Your Strengths</h3>
              <p className="text-muted-foreground leading-relaxed">
                You already possess strengths, insights, and inner resources that can support meaningful change. Together, we will identify what matters most to you, understand what may be keeping you stuck, and clarify the life and relationships you want to create.
              </p>
            </div>
            <div className="bg-secondary/50 rounded-3xl p-8">
              <h3 className="text-xl mb-2">Emotionally Focused and Relational Care</h3>
              <p className="text-muted-foreground leading-relaxed">
                Through emotion-focused, relational, and mindfulness-based approaches, I will help you slow down, understand what is happening beneath familiar reactions, and make space for the emotions and needs that may be difficult to express.
              </p>
            </div>
            <div className="bg-secondary/50 rounded-3xl p-8">
              <h3 className="text-xl mb-2">Creating Change in the Present</h3>
              <p className="text-muted-foreground leading-relaxed">
                Although we may explore your past to understand how certain patterns developed, therapy will also focus on how those patterns are affecting your life today — helping you move through challenges with greater clarity and shape a future aligned with who you want to be.
              </p>
            </div>
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