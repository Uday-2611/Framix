import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Zap, Layout, ArrowRight, Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-center px-4">
          <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Framix
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden pt-20 md:pt-32 pb-20">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="container mx-auto px-4 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-8">
              ✨ The Future of Design
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-br from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent drop-shadow-sm">
              Create with <br className="hidden md:block" />
              <span className="text-primary">Framix</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              Where artificial intelligence meets artistic expression. Design, iterate, and inspire without limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/auth/sign-in">
                <Button size="lg" className="w-full sm:w-auto gap-2 text-lg h-14 px-10 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                  Sign In to Create <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything you need</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Powerful tools designed for the modern creator.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Palette className="h-10 w-10 text-primary" />}
                title="Smart Sketching"
                description="Turn rough doodles into polished artwork instantly with our context-aware AI engine."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Lightning Fast"
                description="Generate variations in milliseconds. Iterate through ideas at the speed of thought."
              />
              <FeatureCard
                icon={<Layout className="h-10 w-10 text-primary" />}
                title="Infinite Canvas"
                description="Work on a limitless workspace that expands with your imagination. No boundaries."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Loved by Designers</h2>
            <div className="flex justify-center">
              <Carousel className="w-full max-w-4xl" opts={{ align: "start", loop: true }}>
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <TestimonialCard
                      name="Alex Chen"
                      role="Product Designer"
                      quote="Framix has completely revolutionized my workflow. I can explore ideas 10x faster."
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <TestimonialCard
                      name="Sarah Jones"
                      role="Illustrator"
                      quote="The AI suggestions are surprisingly accurate. It feels like a true creative partner."
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <TestimonialCard
                      name="Mike Ross"
                      role="Art Director"
                      quote="Finally, a tool that understands design intent. The infinite canvas is a game changer."
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <TestimonialCard
                      name="Emily White"
                      role="UX Researcher"
                      quote="Rapid prototyping has never been easier. My team loves the collaborative features."
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is Framix free to use?</AccordionTrigger>
                <AccordionContent>
                  Yes! We offer a generous free tier that allows you to explore all the core features. We also have premium plans for power users who need more generation credits and advanced export options.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How does the AI generation work?</AccordionTrigger>
                <AccordionContent>
                  Framix uses state-of-the-art diffusion models trained specifically on high-quality design assets. It interprets your sketches and prompts to generate visually stunning variations in real-time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I export my designs?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. You can export your creations in high-resolution PNG, JPG, or SVG formats, ready for use in your projects or presentations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter text-muted-foreground">Framix</span>
            <span className="text-sm text-muted-foreground">© 2024. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="bg-background/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
      <CardHeader>
        <div className="mb-4 p-3 bg-primary/10 w-fit rounded-xl">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({ name, role, quote }: { name: string, role: string, quote: string }) {
  return (
    <Card className="h-full bg-background/50 backdrop-blur border-border/50">
      <CardContent className="pt-6 flex flex-col gap-4 h-full">
        <Quote className="h-8 w-8 text-primary/40" />
        <p className="text-lg italic text-muted-foreground flex-1">"{quote}"</p>
        <div className="flex items-center gap-3 mt-auto">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold">
            {name[0]}
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
