/**
 * Copyright (c) 2019-present, Pixie Labs.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// Pulled baseUrl out of siteConfig object as it is referenced at multiple locations. 
const baseUrl = '/';

const siteConfig = {
  title: "Cavy",
  tagline: "Start end-to-end testing your React Native application across iOS and Android in 5 minutes",
  url: "https://cavy.app",
  cname: "cavy.app",
  baseUrl: baseUrl,
  // Used for publishing and more
  projectName: "cavy-app",
  organizationName: "pixielabs",

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "getting-started/installing", label: "Documentation" },
    { doc: "api/test-helpers", label: "API" },
    { href: "https://github.com/pixielabs/cavy", label: "GitHub" },
    { href: "https://www.pivotaltracker.com/n/projects/2447582", label: "Roadmap" },
    { doc: "faq", label: "FAQ" }
  ],

  // Collapse categories in the sidebar
  docsSideNavCollapsible: true,

  contributors: require("./config-constants/contributors"),
  articles: require("./config-constants/articles")(baseUrl),

  /* path to images for header/footer */
  headerIcon: "img/favicon.ico",
  footerIcon: "img/favicon.ico",
  favicon: "img/favicon.ico",

  /* Colors for website */
  colors: {
    primaryColor: "#171738",
    secondaryColor: "#4E598C"
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Pixie Labs`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    `${baseUrl}js/code-block-buttons.js`
  ],

  stylesheets: [`${baseUrl}css/code-block-buttons.css`],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/cavy.png",
  twitterImage: "img/cavy.png",

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  repoUrl: "https://github.com/pixielabs/cavy",

  // Use Prism for Syntax highlighting jsx. For all other languages,
  // Docusaurus will use Highlight.js.
  usePrism: ["jsx", "js", "java", "swift"],
  
  gaTrackingId: 'UA-42424366-31'
};

module.exports = siteConfig;
