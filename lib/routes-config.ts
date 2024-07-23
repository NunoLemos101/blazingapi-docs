// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      /*{ title: "Introduction", href: "/introduction" },*/
      { title: "Installation", href: "/installation" },
      { title: "Quick Start", href: "/quick-start" },
      { title: "Project Structure", href: "/project-structure" },
        /*
      { title: "Changelog", href: "/changelog" },
      { title: "FAQ", href: "/faq" },
         */
    ],
  },
  {
    title: "Middleware",
    href: "middleware",
    items: [
      { title: "BaseMiddleware", href: "/base" },
      { title: "CorsMiddleware", href: "/cors" },
      { title: "XFrameOptionsMiddleware", href: "/x-frame-options" },
      { title: "Create Custom Middleware", href: "/create-middleware" },
    ],
  }

];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
