import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Couchbase IDE Plugins',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://cb-ideplugins.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Couchbase-Ecosystem', // Usually your GitHub org/user name.
  projectName: 'cb-ideplugins', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Couchbase-Ecosystem/cb-ideplugins',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Couchbase-Ecosystem/cb-ideplugins',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'hourly',
        },
      }, 
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false, 
      respectPrefersColorScheme: false,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'cb-ideplugins',
      logo: {
        alt: 'Couchbase Logo',
        src: 'img/couchbase.svg',
      },
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Couchbase-Ecosystem/cb-ideplugins',
          label: 'GitHub',
          position: 'right',
        },
      ],
      hideOnScroll: true,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: false,
      }
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/tags/couchbase/info/',
            },
            {
              label: 'Discord',
              href: 'https://bit.ly/3NbK5vg',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/couchbase',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/c/CouchbaseServer/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/Couchbase/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Couchbase-Ecosystem/cb-ideplugins',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Couchbase, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
