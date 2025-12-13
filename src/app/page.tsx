"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Zap, Layout, Quote, Globe, Shield } from "lucide-react";
import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "@remixicon/react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Product Designer @ Vercel",
    quote: "Framix has completely revolutionized my workflow. I can explore ideas 10x faster than before.",
    delay: 0,
    avatar: "/vercel.jpg"
  },
  {
    name: "Sarah Jones",
    role: "Illustrator @ Adobe",
    quote: "The AI suggestions are surprisingly accurate. It feels like a true creative partner that understands style.",
    delay: 0.1,
    avatar: "/adobe.png"
  },
  {
    name: "Mike Ross",
    role: "Art Director @ Stripe",
    quote: "Finally, a tool that understands design intent. The infinite canvas is a game changer for big projects.",
    delay: 0.2,
    avatar: "/stripe.jpeg"
  },
  {
    name: "Emma Davis",
    role: "UX Researcher @ Spotify",
    quote: "The speed at which I can iterate on different concepts is unmatched. It's a game changer.",
    delay: 0.3,
    avatar: "/spotify.jpg"
  },
  {
    name: "David Kim",
    role: "Frontend Dev @ Airbnb",
    quote: "From design to code, the transition is seamless. A must-have for modern teams.",
    delay: 0.4,
    avatar: "/airbnb.jpg"
  },
  {
    name: "Lisa Wang",
    role: "Product Manager @ Netflix",
    quote: "It helps our team visualize complex user flows in minutes. Highly recommended.",
    delay: 0.5,
    avatar: "/netflix.jpg"
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden selection:bg-primary/30">
      {/* Navbar */}
      <nav className="absolute top-0 w-full z-50  bg-transparent pt-6 pb-6">
        <div className="container mx-auto flex justify-start px-6 gap-3">
          <Image
            src="/framix logo.png"
            alt="Framix Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-3xl font-extrabold tracking-tighter text-white">
            Framix
          </span>
        </div>
      </nav>

      <main className="flex-1">
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-background to-background opacity-40"></div>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>

          <motion.div
            style={{ opacity, scale }}
            className="container mx-auto px-4 flex flex-col items-center text-center z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border bg-[#10233d] text-[#52a8ff] px-3 py-2 text-xs font-medium backdrop-blur-md mb-8 cursor-default"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#52a8ff] mr-2 animate-pulse"></span>
              v2.0 is now live
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 drop-shadow-2xl"
            >
              <span className="text-white uppercase">
                Design at the
              </span>
              <br />
              <span className="text-white uppercase">
                Speed of Thought
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            >
              Framix combines AI-powered generation with intuitive design tools.
              Create, iterate, and ship stunning visuals in seconds, not hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="/auth/sign-in">
                <Button size="lg" className="w-full sm:w-auto h-12 px-10 bg-white text-black hover:bg-white/90 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)] transition-all duration-300 text-lg flex items-center justify-center">
                  get started
                </Button>
              </Link>
            </motion.div>

            {/* Hero Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              className="mt-20 w-full max-w-5xl rounded-xl  bg-white/5 p-2 shadow-2xl backdrop-blur-sm"
            >
              <div className="aspect-[16/9] w-full rounded-lg bg-gradient-to-br from-neutral-900 to-black overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground/50 text-lg font-medium">Dashboard Preview Placeholder</span>
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Bento Grid */}
        <section id="features" className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Everything you need to build faster.
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Powerful tools designed for the modern creator. No more switching between apps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Large Feature */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 row-span-2 rounded-3xl bg-neutral-900/50 p-8 hover:bg-neutral-900/80 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl ">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">Smart Sketching</h3>
                  <p className="text-muted-foreground mb-8">Turn rough doodles into polished artwork instantly with our context-aware AI engine. It understands your intent.</p>
                  <div className="mt-auto aspect-[16/9] rounded-xl bg-neutral-800/50  overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">UI Demo Placeholder</div>
                  </div>
                </div>
              </motion.div>

              {/* Tall Feature */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="row-span-2 rounded-3xl bg-neutral-900/50 p-8 hover:bg-neutral-900/80 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl ">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">Real-time Generation</h3>
                  <p className="text-muted-foreground mb-8">See changes instantly as you type or draw.</p>
                  <div className="mt-auto h-64 rounded-xl bg-neutral-800/50 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">Speed Demo Placeholder</div>
                  </div>
                </div>
              </motion.div>

              {/* Small Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl bg-neutral-900/50 p-8 hover:bg-neutral-900/80 transition-colors group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl ">
                    <Layout className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Infinite Canvas</h3>
                  <p className="text-muted-foreground text-sm">Expand your workspace infinitely. No boundaries for your creativity.</p>
                </div>
              </motion.div>

              {/* Small Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-3xl bg-neutral-900/50 p-8 hover:bg-neutral-900/80 transition-colors group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl ">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Global CDN</h3>
                  <p className="text-muted-foreground text-sm">Assets served from the edge for lightning fast loading speeds.</p>
                </div>
              </motion.div>

              {/* Small Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-3xl bg-neutral-900/50 p-8 hover:bg-neutral-900/80 transition-colors group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl ">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Enterprise Security</h3>
                  <p className="text-muted-foreground text-sm">Bank-grade encryption and SOC2 compliance out of the box.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-32 bg-neutral-900/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">Loved by Designers</h2>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden antialiased">
              <div className="group flex overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)] flex-row w-full max-w-full [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "calc(-100% - var(--gap))" }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex shrink-0 flex-row justify-around [gap:var(--gap)]"
                >
                  {testimonials.map((testimonial, i) => (
                    <div key={i} className="w-[350px] max-w-full flex-none">
                      <TestimonialCard {...testimonial} />
                    </div>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "calc(-100% - var(--gap))" }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex shrink-0 flex-row justify-around [gap:var(--gap)]"
                >
                  {testimonials.map((testimonial, i) => (
                    <div key={`clone-${i}`} className="w-[350px] max-w-full flex-none">
                      <TestimonialCard {...testimonial} />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Ready to create the <br /> <span className="text-primary">impossible?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Join thousands of designers who are already building the future with Framix.
            </p>
            <Link href="/auth/sign-up">
              <Button size="lg" className="text-lg h-14 px-10 bg-white text-black hover:bg-white/90 shadow-lg shadow-white/10 transition-all">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className=" bg-black pt-20 pb-10 p-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-2">
              <div className="flex justify-start gap-1 py-2">
                <Image
                  src="/framix logo.png"
                  alt="Framix Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-3xl font-extrabold tracking-tighter text-white">
                  Framix
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-6 px-1">
                Empowering creators with AI-driven design tools. Build faster, better, and more creatively.
              </p>
              <div className="flex gap-4">
                {/* Social Icons */}
                <Link href="https://www.linkedin.com/in/udayagarwal2611/" target="_blank" rel="noopener noreferrer" className="h-8 w-8 flex items-center justify-center">
                  <RiLinkedinFill className="h-6 w-6 text-white transition-colors" />
                </Link>
                <Link href="https://github.com/Uday-2611" target="_blank" rel="noopener noreferrer" className="h-8 w-8 flex items-center justify-center">
                  <RiGithubFill className="h-6 w-6 text-white transition-colors" />
                </Link>
                <Link href="https://www.instagram.com/udayy2604/" target="_blank" rel="noopener noreferrer" className="h-8 w-8 flex items-center justify-center">
                  <RiInstagramFill className="h-6 w-6 text-white transition-colors" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Changelog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Docs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

          </div>

          <div className=" pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm text-muted-foreground">© 2025 Framix Inc.</span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              All systems operational
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TestimonialCard({ name, role, quote, delay, avatar }: { name: string, role: string, quote: string, delay: number, avatar: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="h-full"
    >
      <Card className="h-full bg-white/5  backdrop-blur-sm hover:bg-white/10 transition-colors">
        <CardContent className="pt-6 flex flex-col gap-6 h-full">
          <Quote className="h-8 w-8 text-white/20" />
          <p className="text-lg text-white/80 leading-relaxed flex-1">&quot;{quote}&quot;</p>
          <div className="flex items-center gap-4 mt-auto  pt-6">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={avatar}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-white">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

