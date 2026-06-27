"use client";

import { Button } from "@/components/ui/button";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export function Hero() {
  const scrollToCategories = () => {
    const element = document.getElementById("categories");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5"></div>
      <div className="container relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Your Complete Hub of Online Tools
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          {SITE_NAME} offers {SITE_DESCRIPTION} for all your daily needs.
        </p>
        <Button size="lg" onClick={scrollToCategories} className="text-lg px-8">
          Explore Tools
        </Button>
      </div>
    </section>
  );
}
