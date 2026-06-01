import Link from "next/link";
import {
  Twitter,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { SITE_NAME } from "@/lib/constants";
import { categories } from "@/lib/data/categories";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <nav className="flex flex-col gap-2 text-sm">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary">
                About Us
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Careers
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Blog
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Cookie Policy
              </a>
            </nav>
          </div>
          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
