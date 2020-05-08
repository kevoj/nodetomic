const autoload = (path, params) => {
  try {
    switch (path) {
      case "routes":
        const routes = require.context("../routes", false, /^((?!!).)*.js$/);
        let routes_keys = routes.keys();
        //   console.log("files", routes_keys);
        return routes_keys.map(routes).map((x) => x.default);
      case "models":
        const models = require.context("../models", false, /^((?!!).)*.js$/);
        let models_keys = models.keys();
        //   console.log("files", models_keys);
        return models_keys.map(models);
      case "seeds":
        const seeds = require.context("../seeds", false, /^((?!!).)*.js$/);
        let seeds_keys = seeds.keys();
        //   console.log("files", seeds_keys);
        return seeds_keys.map(seeds).map((x) => x.default());
      case "sockets":
        const sockets = require.context("../sockets", false, /^((?!!).)*.js$/);
        let sockets_keys = sockets.keys();
        //   console.log("files", sockets_keys);
        return sockets_keys
          .map(sockets)
          .map((x) => x.default(params.socket, params.io));
      default:
        break;
    }
  } catch (error) {
    return [];
  }
};

export { autoload };
