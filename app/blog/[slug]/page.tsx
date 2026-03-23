import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import CTABanner from "@/components/CTABanner";

interface BlogPost {
  title: string;
  category: string;
  date: string;
  isoDate: string;
  description: string;
  content: ReactNode;
}

const posts: Record<string, BlogPost> = {
  "ai-receptionist-local-business": {
    title:
      "Why Every Local Service Business Needs an AI Receptionist in 2026",
    category: "AI Automation",
    date: "January 15, 2026",
    isoDate: "2026-01-15",
    description:
      "Missed calls cost local businesses thousands every month. Learn how AI receptionists answer every call, book appointments, and capture leads 24/7 — without extra staff.",
    content: (
      <>
        <p>
          Here is a number that should bother every business owner who depends on
          phone calls: <strong>over 60% of customers who can&apos;t reach a business on the
          first try will call a competitor instead.</strong>
        </p>
        <p>
          Not leave a voicemail. Not try again later. They call someone else. And
          for local service businesses — HVAC companies, plumbers, contractors,
          salons, restaurants — the phone is still where most revenue starts. A
          missed call is not an inconvenience. It is lost money.
        </p>
        <p>
          That is the problem AI receptionists solve. Not in a theoretical,
          futuristic way. Right now, today, for businesses exactly like yours.
        </p>

        <h2>What Is an AI Receptionist?</h2>
        <p>
          An AI receptionist is a voice AI agent connected to your business phone
          number. When a customer calls, it answers — with your business name, in
          a natural-sounding voice — and handles the conversation.
        </p>
        <p>It can:</p>
        <ul>
          <li>Answer common questions about pricing, hours, and service area</li>
          <li>Collect the caller&apos;s name, phone number, and job details</li>
          <li>Book appointments directly into your calendar</li>
          <li>Send an SMS confirmation to the caller</li>
          <li>Push the lead info into your CRM pipeline</li>
          <li>
            Escalate complex calls to your team with full context — it never
            just hangs up
          </li>
        </ul>
        <p>
          It works 24/7 — nights, weekends, holidays. No breaks, no sick days,
          no hold music.
        </p>

        <h2>The Real Cost of Missed Calls</h2>
        <p>
          Most business owners know they miss calls. Few have done the math on
          what it actually costs.
        </p>
        <p>
          Say you are a contractor and your average job is worth $2,500. If you
          miss just 5 calls per week and even 2 of those would have converted,
          that is $5,000 per week — <strong>$20,000 per month</strong> — walking
          out the door. Not because your work is bad. Because nobody picked up
          the phone.
        </p>
        <p>
          Voicemail does not fix this. Studies consistently show that most
          callers will not leave a voicemail for a service business. They want to
          talk to someone. If that someone is an AI that answers instantly and
          sounds professional, they are happy. If it is a beep and a recording,
          they are gone.
        </p>

        <h2>How It Works (Without Changing Your Phone Number)</h2>
        <p>
          One of the most common questions we get:{" "}
          <em>&quot;Do I have to change my phone number?&quot;</em> No. We set up a
          forwarding number. Your existing number stays exactly the same. Calls
          route through the AI, and you do not have to tell a single customer
          anything changed.
        </p>
        <p>Setup typically takes 1-2 weeks. That includes:</p>
        <ul>
          <li>Provisioning a local phone number through Twilio</li>
          <li>Training the voice AI on your business — services, pricing, FAQs, service area</li>
          <li>Configuring a natural-sounding voice through ElevenLabs</li>
          <li>Connecting calendar and CRM integration</li>
          <li>Testing and refining before going live</li>
        </ul>

        <h2>&quot;My Customers Won&apos;t Want to Talk to a Robot&quot;</h2>
        <p>
          This is the number one objection, and it is fair. Five years ago, it
          would have been a dealbreaker. Today, the voice technology is
          remarkably human. We use custom voices that match the tone and pacing
          your customers expect. Most callers genuinely do not realize they are
          talking to AI.
        </p>
        <p>
          And here is the thing: missing a call entirely is{" "}
          <strong>far worse</strong> than a professional AI answering. Given the
          choice between a helpful AI that books their appointment and complete
          silence, every customer picks the AI.
        </p>

        <h2>What an AI Receptionist Cannot Do</h2>
        <p>Honesty matters. An AI receptionist is not a replacement for every human interaction:</p>
        <ul>
          <li>It will not handle complex complaints or disputes</li>
          <li>It will not generate custom quotes that require site visits or detailed specs</li>
          <li>It is not an outbound calling tool (that is a separate service)</li>
        </ul>
        <p>
          What it will do is <strong>capture and escalate</strong> those situations. If a
          caller has a complex request, the AI collects their info, explains that
          the team will follow up, and sends you a notification. No lead falls
          through the cracks.
        </p>

        <h2>Which Businesses Benefit Most?</h2>
        <p>
          AI receptionists work best for businesses where the phone is a primary
          lead channel and where the owner or team is frequently unavailable to
          answer — because they are on a job site, with a client, or simply
          closed for the day.
        </p>
        <p>The verticals where we see the biggest impact:</p>
        <ul>
          <li><strong>HVAC and plumbing</strong> — emergency calls at 11pm that used to go to voicemail</li>
          <li><strong>Contractors and landscapers</strong> — on a job site all day with no front desk</li>
          <li><strong>Salons and barber shops</strong> — staff too busy with clients to pick up</li>
          <li><strong>Cleaning services</strong> — solo operators who literally cannot answer while working</li>
          <li><strong>Auto shops and electricians</strong> — hands dirty, phone ringing</li>
          <li><strong>Restaurants</strong> — rush hour calls about reservations and hours</li>
        </ul>

        <h2>The Math: Does It Pay for Itself?</h2>
        <p>
          This is the question that matters. An AI receptionist typically costs a
          fraction of a part-time receptionist. No benefits, no training, no
          turnover. It works every hour of every day.
        </p>
        <p>
          If your average job is worth even $500, and the AI captures just one
          extra lead per week that would have been a missed call — it has already
          paid for itself several times over. For most of our clients, the ROI is
          not a question after the first month.
        </p>

        <h2>Getting Started</h2>
        <p>
          If you are curious whether an AI receptionist makes sense for your
          business, we offer a{" "}
          <Link href="/contact">free audit</Link>. We will
          look at your current call volume, how many calls you are missing, and
          map out exactly what the AI would handle. No obligation, no pressure.
        </p>
        <p>
          The businesses that adopt this technology first are going to have a
          significant advantage. While your competitor&apos;s phone rings out at
          9pm, yours answers on the first ring.
        </p>
      </>
    ),
  },

  "local-seo-checklist": {
    title: "The 5-Step Local SEO Checklist That Actually Moves the Needle",
    category: "SEO",
    date: "February 3, 2026",
    isoDate: "2026-02-03",
    description:
      "Google Business Profile optimization is the fastest way to get more local calls. Here is the exact 5-step checklist we run for every new client.",
    content: (
      <>
        <p>
          Most local SEO advice is either too vague to act on or so technical
          that it requires a developer. This is neither. These are the five
          things we do for every single client in their first 30 days — and they
          consistently drive more calls, more map views, and higher rankings.
        </p>
        <p>
          No fluff. No &quot;it depends.&quot; Just the checklist.
        </p>

        <h2>Step 1: Claim and Fully Complete Your Google Business Profile</h2>
        <p>
          This sounds obvious, but we audit dozens of local business profiles
          every month and the majority are incomplete. Google treats profile
          completeness as a ranking signal. An incomplete profile is telling
          Google you are not serious.
        </p>
        <p><strong>The non-negotiables:</strong></p>
        <ul>
          <li>
            <strong>Business name</strong> — exactly as it appears on your
            storefront or legal documents. Do not stuff keywords here. Google
            penalizes it.
          </li>
          <li>
            <strong>Primary category</strong> — this is the single most
            important field. Pick the category that most precisely describes your
            main service. &quot;Plumber&quot; not &quot;Home Service.&quot;
          </li>
          <li>
            <strong>Secondary categories</strong> — add every relevant one.
            &quot;Water Heater Installation,&quot; &quot;Drain Cleaning,&quot;
            &quot;Emergency Plumber.&quot;
          </li>
          <li>
            <strong>Business description</strong> — 750 characters max. Lead
            with your primary service and location. Include your top 3-4
            services naturally.
          </li>
          <li>
            <strong>Service area</strong> — list every city, town, and
            neighborhood you serve. Be specific.
          </li>
          <li>
            <strong>Hours</strong> — accurate and updated. Include holiday hours.
            If you have an{" "}
            <Link href="/services">AI receptionist</Link> that
            answers 24/7, your availability just expanded.
          </li>
          <li>
            <strong>Phone number</strong> — must match the number on your
            website exactly (NAP consistency matters).
          </li>
          <li>
            <strong>Website URL</strong> — link to your homepage or a
            location-specific landing page.
          </li>
          <li>
            <strong>Attributes</strong> — fill in every applicable attribute
            (veteran-owned, women-led, appointment required, etc.).
          </li>
        </ul>

        <h2>Step 2: Photos — And Not Just Your Logo</h2>
        <p>
          Google&apos;s own data shows that businesses with photos get{" "}
          <strong>42% more requests for driving directions</strong> and{" "}
          <strong>35% more clicks to their website</strong> than those without.
        </p>
        <p>Here is what to upload:</p>
        <ul>
          <li>
            <strong>Exterior photos</strong> — so customers recognize your
            location from the street
          </li>
          <li>
            <strong>Interior photos</strong> — the workspace, the shop, the
            waiting area
          </li>
          <li>
            <strong>Team photos</strong> — real people, not stock images. This
            builds trust.
          </li>
          <li>
            <strong>Work photos</strong> — before/after shots, completed
            projects, your product in action
          </li>
          <li>
            <strong>Cover photo</strong> — your best image. This is what appears
            first.
          </li>
        </ul>
        <p>
          Upload at least 10 photos to start. Then add 2-3 new photos per
          month. Google favors profiles with fresh, recent content.
        </p>

        <h2>Step 3: Get (and Respond to) Google Reviews Consistently</h2>
        <p>
          Reviews are the second most important local ranking factor after your
          Google Business Profile itself. More reviews with higher ratings =
          higher rankings = more calls. It is that direct.
        </p>
        <p><strong>How to get more reviews:</strong></p>
        <ul>
          <li>
            Ask every customer after a completed job. The best time is when the
            positive experience is fresh — within 1-2 hours.
          </li>
          <li>
            Make it frictionless. Send a direct link to your Google review page
            via text (SMS has the highest open rate).
          </li>
          <li>
            Automate it. We set up{" "}
            <Link href="/services">
              automated review request sequences
            </Link>{" "}
            that trigger after every completed job. One text with a one-click
            link. Follow-up reminder in 48 hours if needed.
          </li>
        </ul>
        <p><strong>How to handle reviews:</strong></p>
        <ul>
          <li>
            Respond to <strong>every</strong> review — positive and negative.
            Google confirms that responding to reviews improves your local
            ranking.
          </li>
          <li>
            For positive reviews: thank them specifically and mention the service
            (this adds keyword context).
          </li>
          <li>
            For negative reviews: respond professionally, acknowledge the issue,
            and offer to resolve it offline. Never argue.
          </li>
        </ul>

        <h2>Step 4: NAP Consistency Across the Web</h2>
        <p>
          NAP stands for Name, Address, Phone number. Google cross-references
          your business information across hundreds of directories, social
          profiles, and citation sites. If your name is &quot;ABC Plumbing
          LLC&quot; on Google but &quot;ABC Plumbing&quot; on Yelp and &quot;A.B.C.
          Plumbing&quot; on the BBB, Google loses confidence in your data.
        </p>
        <p><strong>The fix:</strong></p>
        <ul>
          <li>
            Pick one exact version of your business name, address, and phone
            number
          </li>
          <li>
            Update it everywhere: Google Business Profile, website footer, Yelp,
            Facebook, BBB, Angi, HomeAdvisor, industry directories, your
            Chamber of Commerce listing
          </li>
          <li>
            Use the exact same format every time. If your address is &quot;123
            Main St Suite 4,&quot; do not write &quot;123 Main Street, Ste
            4&quot; somewhere else.
          </li>
        </ul>
        <p>
          This is tedious work, but it compounds. Consistent NAP signals tell
          Google your business is legitimate and well-established.
        </p>

        <h2>Step 5: Weekly Google Business Profile Posts</h2>
        <p>
          Most businesses do not know this feature exists. Google Business
          Profile has a &quot;Posts&quot; section where you can publish updates
          directly on your listing. These posts appear in your Knowledge Panel
          and in Maps results.
        </p>
        <p><strong>What to post:</strong></p>
        <ul>
          <li>Completed project photos with a short description</li>
          <li>Seasonal promotions or availability updates</li>
          <li>New services or capabilities</li>
          <li>Team updates or milestones</li>
          <li>Tips relevant to your industry</li>
        </ul>
        <p>
          Posts expire after 7 days, so post weekly. Each post should include a
          call-to-action button (Call Now, Book Online, Learn More) linking to
          your website or{" "}
          <Link href="/contact">booking page</Link>.
        </p>
        <p>
          The businesses that do this consistently see a measurable lift in
          impressions and calls within 60-90 days. It signals to Google that
          your profile is active and your business is engaged.
        </p>

        <h2>What Comes Next</h2>
        <p>
          This checklist handles the highest-impact local SEO work. There is
          more you can do — on-page SEO for your website, local content
          creation, structured data markup, link building from local
          organizations — but these five steps are where the ROI is highest for
          the effort.
        </p>
        <p>
          If you want us to run this checklist for your business and show you
          exactly where you stand,{" "}
          <Link href="/contact">book a free audit</Link>.
          We will pull up your Google Business Profile, check your review
          velocity, audit your NAP consistency, and give you a clear picture of
          what is costing you rankings.
        </p>
      </>
    ),
  },

  "ai-chatbot-lessons": {
    title:
      "What We Learned Building 20+ AI Chatbots for Small Businesses",
    category: "AI Automation",
    date: "March 1, 2026",
    isoDate: "2026-03-01",
    description:
      "After deploying AI chatbots for barber shops, restaurants, contractors, and more, here are the lessons that separate bots that book jobs from bots that get ignored.",
    content: (
      <>
        <p>
          We have built and deployed AI chatbots for over 20 small businesses
          now — barber shops, HVAC companies, cleaning services, restaurants,
          nail salons, and general contractors. Some of those chatbots book
          multiple appointments per week. Others barely get used.
        </p>
        <p>
          The difference is not the technology. It is how the chatbot is set up,
          what it says, and where it sits on the page. Here is everything we have
          learned.
        </p>

        <h2>Lesson 1: The First Message Determines Everything</h2>
        <p>
          The chatbot&apos;s opening message is the most important piece of copy on
          your website that you are probably not thinking about. If it says
          &quot;Hi! How can I help you?&quot; — generic, vague, ignorable — most
          visitors will close it.
        </p>
        <p>
          The openers that convert lead with{" "}
          <strong>specificity and a low-friction next step</strong>:
        </p>
        <ul>
          <li>
            <em>
              &quot;Need a haircut this week? I can check availability and
              book you in right now.&quot;
            </em>
          </li>
          <li>
            <em>
              &quot;Looking for a quote on [service]? Tell me what you need
              and I will get a price range for you.&quot;
            </em>
          </li>
          <li>
            <em>
              &quot;We have same-day appointments open. Want me to check what
              is available?&quot;
            </em>
          </li>
        </ul>
        <p>
          Notice what these have in common: they name the service, they imply
          availability, and they give the visitor a reason to type something.
          Generic greetings do not do any of that.
        </p>

        <h2>Lesson 2: Chatbots That Book Appointments Outperform Chatbots That Collect Info</h2>
        <p>
          Early on, we built chatbots that collected a visitor&apos;s name, phone
          number, and service request — then passed it to the business owner to
          follow up. Conversion was mediocre.
        </p>
        <p>
          When we switched to chatbots that <strong>book directly into the calendar</strong>,
          conversion rates jumped significantly. The
          reason: every handoff is a drop-off point. If the visitor has to wait
          for a callback, they have time to visit another website, get
          distracted, or forget.
        </p>
        <p>
          A chatbot that says &quot;I have Tuesday at 2pm and Thursday at
          10am open — which works?&quot; closes the loop right there. No waiting.
          No follow-up needed.
        </p>

        <h2>Lesson 3: Keep the Conversation Under 4 Exchanges</h2>
        <p>
          We tracked conversation lengths across all our chatbot deployments.
          The sweet spot is <strong>3-4 exchanges</strong> to get to a booking or
          lead capture. Anything longer and drop-off rates climb fast.
        </p>
        <p>A good flow looks like:</p>
        <ol>
          <li>Bot opens with a specific, relevant greeting</li>
          <li>Visitor states their need</li>
          <li>Bot confirms the service and offers appointment times (or asks for contact info)</li>
          <li>Visitor books or provides their number</li>
        </ol>
        <p>
          We see some businesses try to make their chatbot handle 15 different
          FAQ topics with branching logic trees. This overcomplicates things. The
          chatbot&apos;s job is to <strong>convert, not educate</strong>. Put your
          FAQ content on a dedicated page. Let the chatbot focus on booking.
        </p>

        <h2>Lesson 4: Placement and Timing Matter More Than You Think</h2>
        <p>
          A chatbot that pops up the instant someone lands on your homepage will
          get dismissed. A chatbot that appears after 5-10 seconds on a service
          page — when the visitor has shown intent — gets engagement.
        </p>
        <p>Our best-performing placements:</p>
        <ul>
          <li>
            <strong>Service pages</strong> — the visitor is already looking at
            what you offer. Highest intent.
          </li>
          <li>
            <strong>Pricing/FAQ pages</strong> — they have questions. The
            chatbot can answer and pivot to booking.
          </li>
          <li>
            <strong>Contact page</strong> — they came here to reach you. The
            chatbot is a faster path than filling out a form.
          </li>
        </ul>
        <p>
          We typically delay the initial popup by 5-8 seconds and trigger it
          only once per session. Nobody wants to fight with a chat bubble every
          time they navigate to a new page.
        </p>

        <h2>Lesson 5: Notifications Are Non-Negotiable</h2>
        <p>
          This one cost a client real money before we made it standard. If the
          chatbot captures a lead and the business owner does not see it for 6
          hours, the lead is cold. We now configure{" "}
          <strong>real-time notifications</strong> on every deployment — SMS to
          the owner&apos;s phone the moment a new conversation converts.
        </p>
        <p>
          Even better: pair the chatbot with an{" "}
          <Link href="/services">
            automated lead follow-up sequence
          </Link>{" "}
          so the lead gets an instant text confirmation regardless of whether the
          owner sees the notification.
        </p>

        <h2>Lesson 6: The Chatbot Is Not a Replacement for Your Website</h2>
        <p>
          A chatbot on a bad website is still a bad website. We have seen
          businesses install a chatbot on a slow, outdated, mobile-unfriendly
          site and wonder why it is not converting. The chatbot cannot fix a 5-second
          load time or a homepage with no clear call to action.
        </p>
        <p>
          The best results come when the chatbot is part of a complete system:{" "}
          a fast{" "}
          <Link href="/services">website built for conversion</Link>,{" "}
          strong <Link href="/blog/local-seo-checklist">local SEO</Link>{" "}
          driving traffic, and the chatbot capturing visitors who are ready to
          act.
        </p>

        <h2>Lesson 7: Measure Conversations, Not Just &quot;Chats Started&quot;</h2>
        <p>
          Most chatbot platforms show you how many conversations were opened.
          That metric is almost useless by itself. What matters:
        </p>
        <ul>
          <li>
            <strong>Conversations that resulted in a booking or lead capture</strong>{" "}
            — this is the number that counts
          </li>
          <li>
            <strong>Average conversation length</strong> — shorter is usually
            better (see Lesson 3)
          </li>
          <li>
            <strong>Drop-off point</strong> — where do visitors stop responding?
            That is where your flow needs work.
          </li>
          <li>
            <strong>Response time</strong> — if the bot is slow, visitors leave.
            Under 2 seconds per response is the target.
          </li>
        </ul>

        <h2>Lesson 8: Train It on Your Business, Not Generic Responses</h2>
        <p>
          A chatbot that says &quot;We offer a variety of services to meet your
          needs&quot; is immediately identifiable as a bot and immediately
          untrustworthy. A chatbot that says &quot;We handle residential and
          commercial HVAC — repairs, installations, and maintenance. Most repair
          calls are same-day.&quot; sounds like someone who works there.
        </p>
        <p>
          We spend time during setup loading the chatbot with real business
          details: specific services, pricing ranges, service area boundaries,
          hours, and common customer questions. The more specific, the more it
          converts.
        </p>

        <h2>The Bottom Line</h2>
        <p>
          AI chatbots work for small businesses — when they are set up correctly.
          The technology is mature enough that the difference between success and
          failure is not the platform. It is the strategy: what the bot says,
          when it appears, and how quickly it gets the visitor to a booking.
        </p>
        <p>
          If you want to see how a chatbot would work on your website, we build
          them as part of our{" "}
          <Link href="/services">AI automation services</Link>.
          Or{" "}
          <Link href="/contact">
            grab a free audit
          </Link>{" "}
          and we will walk through your site and show you exactly where a
          chatbot would have the most impact.
        </p>
      </>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) {
    return { title: "Blog Post | Grady Digital" };
  }
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.isoDate,
      authors: ["Grady Digital"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <main>
        <SectionWrapper>
          <h1 className="text-3xl font-medium text-white">Post not found</h1>
          <Link
            href="/blog"
            className="text-accent-light text-sm mt-4 inline-block"
          >
            &larr; Back to blog
          </Link>
        </SectionWrapper>
      </main>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      "@type": "Organization",
      name: "Grady Digital",
      url: "https://gradydigital.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Grady Digital",
      url: "https://gradydigital.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gradydigital.com/blog/${slug}`,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Post Hero */}
      <section className="pt-40 pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <span className="text-xs rounded-full bg-accent/10 text-accent-light px-2 py-0.5 border border-accent/20">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mt-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-white/40 text-sm mt-4">
            <time dateTime={post.isoDate}>{post.date}</time>
          </p>
        </div>
      </section>

      {/* Content */}
      <SectionWrapper>
        <article className="prose prose-invert prose-lg max-w-3xl mx-auto prose-headings:font-medium prose-headings:text-white prose-a:text-accent-light prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-li:text-white/60">
          {post.content}

          <hr className="border-white/10 my-12" />

          <div className="not-prose flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <Link
              href="/blog"
              className="text-accent-light text-sm hover:underline"
            >
              &larr; Back to all posts
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200"
            >
              Get Your Free Audit
            </Link>
          </div>
        </article>
      </SectionWrapper>

      <CTABanner />
    </main>
  );
}
