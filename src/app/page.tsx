"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Film, Clapperboard, Users, Sparkles, Video, Crown, Star, Award, HelpCircle, Mail, Instagram, Linkedin, Youtube, Twitter, ThumbsUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="medium"
      background="gradientBars"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="CinemaWorks"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Create Cinematic Impact"
          description="Professional video production that brings your vision to life with cutting-edge technology and creative excellence"
          tag="Production Excellence"
          tagIcon={Film}
          videoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789231998-diduguo3.jpg"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            {
              text: "View Our Work",
              href: "portfolio"
            },
            {
              text: "Book a Consultation",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardOne
          title="Featured Productions"
          description="Showcasing our latest cinematic projects and creative achievements"
          tag="Portfolio"
          tagIcon={Clapperboard}
          textboxLayout="default"
          products={[
            {
              id: "1",
              name: "Brand Documentary Series",
              price: "Corporate Storytelling",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789232711-xjbk6wvu.jpg",
              imageAlt: "headphones, clapper, clapperboard, film, movie, video, cinema, equipment, production, studio, media, sound, video production, headphones, film, film, movie, movie, video, video, video, video, video, cinema, media"
            },
            {
              id: "2",
              name: "Commercial Production",
              price: "Advertising Excellence",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789233423-uvl13000.jpg",
              imageAlt: "recording, studio, music, equipment, audio, technology, broadcast, broadcasting, entertainment, sound, record, production, musical, instrument, speakers, computer, keyboard, media, recording, recording, recording, recording, recording, music, music, music, music, music, broadcast, broadcast, broadcast, broadcasting, broadcasting, broadcasting, broadcasting, broadcasting, sound, production, computer"
            },
            {
              id: "3",
              name: "Event Videography",
              price: "Live Production",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789234098-0wo2wx5x.jpg",
              imageAlt: "camera, film, cinema, photography equipment, filming equipment, tripod, video production, video production, video production, video production, video production, video production"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="Industry Leaders in Visual Storytelling"
          description={[
            "CinemaWorks specializes in transforming concepts into compelling visual narratives. With over a decade of experience, we've produced award-winning content for global brands. Our team combines technical expertise with artistic vision to deliver productions that captivate audiences and drive results."
          ]}
          metrics={[
            {
              label: "Projects Completed",
              value: "500+"
            },
            {
              label: "Award Recognition",
              value: "47"
            }
          ]}
          showBorder={false}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Creative professionals dedicated to excellence in video production"
          tag="Expert Crew"
          tagIcon={Users}
          textboxLayout="default"
          members={[
            {
              id: "1",
              name: "Marcus Reid",
              role: "Creative Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789235347-lz14ae73.jpg",
              imageAlt: "camera, photographer, photography, profession, professional, portrait, camera, camera, camera, camera, photographer, photographer, photographer, photographer, photographer"
            },
            {
              id: "2",
              name: "Sofia Chen",
              role: "Cinematographer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789236238-nvffkxo6.jpg",
              imageAlt: "camera, photographer, photography, profession, professional, portrait, camera, camera, camera, camera, photographer, photographer, photographer, photographer, photographer"
            },
            {
              id: "3",
              name: "James Thompson",
              role: "Video Editor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789236943-6miygsz8.jpg",
              imageAlt: "man, editor, color correction, colorist, professional colorist, work, remote work, mobile work, closeup, video, editor, editor, editor, editor, editor, remote work"
            },
            {
              id: "4",
              name: "Elena Rodriguez",
              role: "Producer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789237489-l1t1jxw8.jpg",
              imageAlt: "camera, photographer, photography, profession, professional, portrait, camera, camera, camera, camera, photographer, photographer, photographer, photographer, photographer"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Production Packages"
          description="Choose the service level that fits your production needs"
          tag="Services"
          tagIcon={Sparkles}
          textboxLayout="default"
          plans={[
            {
              id: "starter",
              badge: "Getting Started",
              badgeIcon: Video,
              price: "5K",
              subtitle: "Perfect for small projects and startups",
              features: [
                "Up to 4 hours of filming",
                "Basic color grading",
                "Standard editing package",
                "Delivery in 1080p"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "15K",
              subtitle: "Ideal for corporate and commercial content",
              features: [
                "Up to 12 hours of filming",
                "Professional color grading",
                "Advanced editing with effects",
                "4K delivery included",
                "Motion graphics package"
              ]
            },
            {
              id: "premium",
              badge: "Enterprise",
              badgeIcon: Crown,
              price: "35K",
              subtitle: "Full-service production for large campaigns",
              features: [
                "Unlimited filming days",
                "Cinema-grade color grading",
                "Premium post-production",
                "8K delivery available",
                "Motion graphics and animation",
                "Dedicated producer",
                "Unlimited revisions"
              ]
            }
          ]}
          animationType="blur-reveal"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Client Testimonials"
          description="Hear from brands and businesses we have partnered with"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "David Martinez",
              role: "CEO, TechVision Inc",
              testimonial: "CinemaWorks transformed our brand story into a compelling visual narrative. Their technical expertise and creative vision exceeded our expectations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789238089-peqh69p6.jpg",
              imageAlt: "suit, business man, banana, business, male, person, adult, professional, executive, portrait, confident, boss, businessman, business man, banana, banana, banana, business, business, business, business, business, businessman",
              icon: ThumbsUp
            },
            {
              id: "2",
              name: "Jessica Chen",
              role: "Marketing Director, Global Brands Co",
              testimonial: "Working with the team was seamless. They understood our vision and delivered production quality that elevated our entire marketing campaign.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789238758-dz2f9gsc.jpg",
              imageAlt: "startup, business, people, students, office, strategy, work, technology, company, corporate, communication, young, plan, marketing, computer, design, professional, planning, internet, project, laptop, presentation, web, display, monitor, business, business, business, office, office, office, office, office, work, work, work, technology, technology, marketing, marketing, marketing, computer, computer, computer, computer, laptop",
              icon: ThumbsUp
            },
            {
              id: "3",
              name: "Robert Sullivan",
              role: "Creative Lead, Design Studios",
              testimonial: "Exceptional attention to detail and professional execution. Their portfolio speaks volumes about their capability in high-end video production.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789239337-82vl5llk.jpg",
              imageAlt: "camera, photographer, photography, profession, professional, portrait, camera, camera, camera, camera, photographer, photographer, photographer, photographer, photographer",
              icon: ThumbsUp
            },
            {
              id: "4",
              name: "Amanda Foster",
              role: "Brand Manager, Innovation Labs",
              testimonial: "The cinematic quality of the final product was outstanding. CinemaWorks is our go-to production company for all our premium content needs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789240169-njgdoeo7.jpg",
              imageAlt: "company, boss, woman, office, work, worker, owner, ceo, business, professional, adult, person, manager, job, corporate, people, brown business, brown office, brown work, brown job, brown company, brown management, boss, boss, boss, boss, office, worker, worker, ceo, ceo, ceo, business, professional, manager, manager, manager, manager, manager, job, job, job",
              icon: ThumbsUp
            }
          ]}
          animationType="opacity"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted by Industry Leaders"
          description="We have produced content for world-class brands and organizations"
          tag="Partners"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789241670-d6dgjshm.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789242259-k0c7azcr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789242878-bp0ks8il.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789243535-dfc96mko.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789244261-924knrya.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about our video production services"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          mediaPosition="left"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764789240886-ksi3iprk.jpg"
          imageAlt="people, group, friends, concept, agreement, fist bump, lifestyle, team, teamwork, cooperation, cooperate, together, togetherness"
          faqs={[
            {
              id: "1",
              title: "What is your typical project timeline?",
              content: "Project timelines vary based on scope and complexity. A typical commercial production takes 4-8 weeks from pre-production to delivery. We provide detailed timelines during the consultation phase."
            },
            {
              id: "2",
              title: "Do you offer post-production services?",
              content: "Yes, we provide comprehensive post-production services including editing, color grading, motion graphics, sound design, and mixing. We handle everything from footage organization to final delivery."
            },
            {
              id: "3",
              title: "What formats do you deliver?",
              content: "We deliver in multiple formats including 1080p, 4K, and 8K depending on your package. We also provide versions optimized for different platforms including social media, broadcast, and streaming services."
            },
            {
              id: "4",
              title: "Can you work with tight deadlines?",
              content: "We can accommodate rush projects with expedited timelines. Contact us to discuss your deadline and we'll create a fast-track production schedule to meet your needs."
            },
            {
              id: "5",
              title: "Do you offer revision rounds?",
              content: "Yes, all packages include revision rounds. Our Professional package includes unlimited revisions, while Starter includes up to 3 revision rounds. Enterprise packages have unlimited revisions."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Ready to Create Something Remarkable"
          description="Let's discuss your video production vision. Subscribe to stay updated on our latest projects and production insights."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime from our mailing list."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="CinemaWorks"
          copyrightText="© CinemaWorks, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Work", href: "portfolio" },
                { label: "Team", href: "team" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Commercial Production", href: "services" },
                { label: "Documentary", href: "services" },
                { label: "Event Video", href: "services" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms & Conditions", href: "terms" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Youtube, href: "https://youtube.com", ariaLabel: "YouTube" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "X (Twitter)" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}