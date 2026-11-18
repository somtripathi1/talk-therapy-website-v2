export function LearnTherapyPage() {
  return (
    <div className="relative overflow-hidden">


      {/* ── Section 1: The Power of Emotional Connection ── */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
          <span className="text-xl font-semibold tracking-widest uppercase text-primary">
            Learn about Therapy


          </span>

          <h2 className="text-lg lg:text-sm font-bold mt-3 mb-8 leading-snug">
            The Power of Emotional Connection
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Across all meaningful relationships—romantic, familial, social, and professional—we share a fundamental need for emotional connection.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-5">
            Emotional connection is the experience of feeling safe, seen, understood, and responded to by another person. It creates a secure bond that supports our basic human needs for belonging, acceptance, comfort, and significance.
          </p>
        </div>
      </section>

      {/* ── Section 2: Healing the Past, the Future and the Present ── */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-secondary/30 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute top-20 right-16 w-44 h-44 rounded-full bg-primary/10" />
        <div className="absolute bottom-16 left-16 w-60 h-60 rounded-full bg-accent/10" />
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Healing the Past, the Future and the Present
          </span>
          <h2 className="text-3xl lg:text-5xl font-semibold mt-3 mb-12 leading-snug">
            Healing the Past, the Future and the Present
          </h2>

          {/* Sub-section: Attachment and emotional connection */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-5">Attachment and emotional connection</h3>
            <div className="space-y-5">
              <p className="text-lg text-muted-foreground leading-relaxed">
                From an Emotionally Focused Therapy perspective, attachment is less about placing you into fixed "styles" and more about understanding how you seek closeness, respond to emotional distance, and protect yourself when connection feels uncertain. These patterns often develop as understandable ways of managing vulnerability, rejection, conflict, or the fear of not being emotionally met.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We may explore your family of origin to better understand what you learned about emotions, relationships, and emotional safety. Early experiences can shape how comfortable you feel expressing needs, receiving support, trusting others, and creating emotional connection.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This exploration is not about blaming the past, but about making sense of the patterns that continue to shape your relationships today.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By bringing awareness and compassion to these patterns, therapy can help you communicate more openly, respond less defensively, and build relationships that feel safer, more secure, and emotionally connected.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-foreground/10 my-10" />

          {/* Sub-section: Anxiety and depression */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">Anxiety and depression</h3>
            <div className="space-y-5">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Anxiety, chronic stress, and depression can leave you feeling overwhelmed, disconnected, or unsure of how to move forward. Therapy can help you understand the emotional patterns, experiences, and underlying needs contributing to your distress.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Together, we will use practical coping strategies, somatic approaches, and psychological reframing to help you feel more grounded, regain a sense of direction, and create meaningful, lasting changes to develop healthier ways of responding to life's challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Working With Your Inner World ── */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Working With Your Inner World
          </span>
          <h2 className="text-3xl lg:text-5xl font-semibold mt-3 mb-8 leading-snug">
            Working With Your Inner World
          </h2>
          <div className="space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We all develop different parts of ourselves in response to our experiences and relationships. A vulnerable or younger part may carry fear, sadness, shame, or unmet needs, while protective parts may try to keep us safe through avoidance, control, withdrawal, anger, perfectionism or self-criticism.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through attachment-informed and experiential parts work, we will approach all parts with curiosity and compassion. The goal is not to eliminate them, but to understand what they are protecting and what they need. Over time, your grounded adult self can learn to respond to your emotions and needs with greater safety, confidence, and care.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
