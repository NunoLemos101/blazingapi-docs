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
    title: "Models",
    href: "models",
    items: [
      { title: "Model", href: "/model" },
      { title: "Fields", href: "/fields" },
      { title: "Saving Objects", href: "/saving-objects" },
      { title: "Updating Objects", href: "/updating-objects" },
      { title: "Deleting Objects", href: "/deleting-objects" },
      { title: "Lazy Retrieval of Related Objects", href: "/lazy-retrieval-of-related-objects" },
      { title: "Serialization", href: "/serialization" }
    ]
  },
  {
    title: "QuerySet",
    href: "queryset",
    items: [
      { title: "All", href: "/all" },
      { title: "Filter", href: "/filter" },
      { title: "Get", href: "/get" },
      { title: "Lazy Evaluation", href: "/lazy-evaluation" },
    ]
  },
  {
    title: "SQL Query",
    href: "sql-query",
    items: [
      { title: "SELECT ALL", href: "/select-all" },
      { title: "WHERE", href: "/where" },
      { title: "AND", href: "/and" },
      { title: "IN", href: "/in" },
      { title: "OR", href: "/or" },
      { title: "LIMIT", href: "/limit" },
      { title: "OFFSET", href: "/offset" },
    ]
  },
  {
    title: "Routing",
    href: "routing",
    items: [
      { title: "Basic Routing", href: "/basic-routing" },
      { title: "Route Parameters", href: "/route-parameters" }
    ]
  },
  {
    title: "Authentication",
    href: "authentication",
    items: [
      { title: "Disable Built-In Authentication", href: "/disable-built-in-authentication" }
    ]
  },
  {
    title: "Middleware",
    href: "middleware",
    items: [
      { title: "BaseMiddleware", href: "/base" },
      { title: "CorsMiddleware", href: "/cors" },
      { title: "XFrameOptionsMiddleware", href: "/x-frame-options" },
      { title: "BearerAuthenticationMiddleware", href: "/bearer-authentication" },
      { title: "Create Custom Middleware", href: "/create-middleware" },
    ],
  },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
