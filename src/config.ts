interface ViteEnv {
  VITE_APP_TITLE: string;
}
const viteEnv: ViteEnv = {
  VITE_APP_TITLE: import.meta.env.VITE_APP_TITLE as string,
};

export default viteEnv;
