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
      { title: "Lazy Loading of Related Objects", href: "/lazy-loading-of-related-objects" },
      { title: "Reverse Relations", href: "/reverse-relations" },
      { title: "Serialization", href: "/serialization" },
      { title: "Serialization Depth", href: "/serialization-depth" },
      { title: "Default Functions", href: "/default-functions" },
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
      { title: "Route Parameters", href: "/route-parameters" },
      { title: "Route Permissions", href: "/route-permissions" },
      { title: "Validate Request Body", href: "/validate-request-body" }
    ]
  },
  {
    title: "Authentication",
    href: "authentication",
    items: [
      { title: "Built-In User Model", href: "/built-in-user-model" },
      { title: "Register a user", href: "/register-a-user" },
      { title: "Login a user", href: "/login-a-user" },
      { title: "Get current user", href: "/get-current-user" },
      { title: "Built-In Authentication Middleware", href: "/built-in-authentication-middleware" },
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
  {
    title: "Validators",
    href: "validators",
    items: [
      { title: "EmailValidator", href: "/email-validator" },
      { title: "ChoiceValidator", href: "/choice-validator" },
      { title: "RegexValidator", href: "/regex-validator" },
      { title: "MaxValueValidator", href: "/max-value-validator" },
      { title: "MinValueValidator", href: "/min-value-validator" },
      { title: "PositiveNumberValidator", href: "/positive-number-validator" },
      { title: "NegativeNumberValidator", href: "/negative-number-validator" },
      { title: "Create Custom Validator", href: "/create-custom-validator" }
    ]
  },
  {
    title: "Permissions",
    href: "permissions",
    items: [
      { title: "IsAuthenticated" , href: "/is-authenticated" },
      { title: "HasHeader", href: "/has-header" },
      { title: "HasValidJSONSchema", href: "/has-valid-json-schema" },
      { title: "Create Custom Permission", href: "/create-custom-permission" }
    ]
  },
  {
    title: "Exceptions",
    href: "exceptions",
    items: [
      { title: "APIException", href: "/api-exception" },
      { title: "NotFoundException", href: "/not-found-exception" },
      { title: "BadRequestException", href: "/bad-request-exception" },
      { title: "InternalServerErrorException", href: "/internal-server-error-exception" },
      { title: "ServiceUnavailableException", href: "/service-unavailable-exception" },
      { title: "AuthenticationFailedException", href: "/authentication-failed-exception" },
      { title: "PermissionDeniedException", href: "/permission-denied-exception" },
      { title: "Create Custom Exception", href: "/create-custom-exception" },
    ]
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
