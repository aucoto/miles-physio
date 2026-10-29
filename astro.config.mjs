import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isPages = process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isPages && owner ? `https://${owner}.github.io` : undefined,
  base: isPages && repository && repository.toLowerCase() !== `${owner?.toLowerCase()}.github.io` ? `/${repository}` : '/',
  trailingSlash: 'always',
});
