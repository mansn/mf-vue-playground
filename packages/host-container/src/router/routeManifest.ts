export const routeManifest = [
  {
    route: {
      path: "/app-1",
      name: "App1",
      meta: { requiresAuth: false },
    },
    remote: {
      module: "app1",
      entry: "http://localhost:5011/remoteEntry.js",
    },
  },
];

export default routeManifest;
