import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export const githubURL = "https://github.com/CandleMinecraft";
export const discordURL = "https://discord.gg/invite/a8Sj3dUcB4";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Development Status Banner */}
      <div className="bg-primary/10 py-2 px-4 text-center text-sm">
        🚧 CandleMC is currently in early development. Join our community to stay updated! 🚧
      </div>

      {/* Navbar */}
      <nav className="border-b">
        <div className="container max-w-7xl mx-auto flex h-16 items-center px-4">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/logo128.png" alt="CandleMC Logo" width={32} height={32} className="rounded-sm" />
            <span className="font-bold text-xl">CandleMC</span>
          </Link>
          <MainNav />
          <div className="flex items-center ml-auto space-x-2">
            <ThemeSwitcher />
            <MobileNav />
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <Image src="/logo512.png" alt="CandleMC Logo" width={128} height={128} className="mb-8 rounded-xl" priority />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              CandleMC
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-[600px]">
              A next-generation Minecraft server software focused on performance and developer experience.
              Currently in early development.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href={githubURL}>
                  <svg viewBox="0 0 438.549 438.549" className="mr-2 h-5 w-5">
                    <path
                      fill="currentColor"
                      d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                    ></path>
                  </svg>
                  View on GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={discordURL}>
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
                    ></path>
                  </svg>
                  Join Discord
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Development Status */}
        <section className="container max-w-7xl mx-auto px-4 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Development Status</CardTitle>
                <CardDescription>Current progress and upcoming milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Alert>
                    <AlertDescription>
                      CandleMC is in active development. Core features are being implemented and tested.
                      Follow our GitHub repository for the latest updates.
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2">
                    <h4 className="font-medium">Current Focus:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Core server implementation</li>
                      <li>Network protocol handling</li>
                      <li>Basic world generation</li>
                      <li>Plugin API design</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Get Involved</CardTitle>
                <CardDescription>Ways to contribute to the project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We welcome contributions from developers of all skill levels. Here's how you can help:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Star and watch our GitHub repository</li>
                    <li>Join our Discord community</li>
                    <li>Report bugs and suggest features</li>
                    <li>Contribute code via pull requests</li>
                    <li>Help with documentation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="border-t py-8 mt-16">
        <div className="container max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            CandleMC is not affiliated with Mojang AB. Minecraft is a trademark of Mojang AB.
          </p>
          <p>© {new Date().getFullYear()} CandleMC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
