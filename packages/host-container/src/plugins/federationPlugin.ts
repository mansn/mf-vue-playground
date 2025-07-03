import { init, loadRemote as _loadRemote } from "@module-federation/runtime";

export const federationPlugin = {
  install: (_, remotes) => {
    const mfRemotes = remotes.map((remote) => ({
      name: remote.module,
      entry: remote.entry,
      type: "module",
    }));

    init({
      name: "host",
      remotes: mfRemotes,
    });
  },
};

export default federationPlugin;

export const useModuleFederation = () => {
  const loadRemote = async (module: any) => {
    const loadedModule = await _loadRemote(`${module}/entry`);
    return {
      name: module,
      mount: loadedModule.mount,
      unmount: loadedModule.unmount,
    };
  };
  return { loadRemote };
};
