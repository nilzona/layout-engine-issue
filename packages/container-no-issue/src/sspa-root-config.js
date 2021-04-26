import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@sspa/navbar",
  app: () => System.import("@sspa/navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@sspa/view-react",
  app: () => System.import("@sspa/view-react"),
  activeWhen: (location) => {
    return !location.pathname.startsWith("/settings");
  },
});

registerApplication({
  name: "@sspa/view-svelte",
  app: () => System.import("@sspa/view-svelte"),
  activeWhen: ["/settings"],
});

start({
  urlRerouteOnly: true,
});
