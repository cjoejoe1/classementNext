/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ['images.ctfassets.net']
  },
  async redirects() {
    return [
      {
        source: '/comparatif/',
        destination: '/kit/',
        permanent: true,
      },
      {
        source: '/comparatif/createur-de-site/',
        destination: '/kit/createur-de-site/',
        permanent: true,
      },
      {
        source: '/comparatif/hebergement-podcast/',
        destination: '/kit/hebergement-podcast/',
        permanent: true,
      },
      {
        source: '/comparatif/hebergement-wordpress/',
        destination: '/kit/hebergement-wordpress/',
        permanent: true,
      },
      {
        source: '/comparatif/logiciel-amazon/',
        destination: '/kit/logiciel-amazon/',
        permanent: true,
      },
      {
        source: '/comparatif/logiciel-comptabilite/',
        destination: '/kit/logiciel-comptabilite/',
        permanent: true,
      },
      {
        source: '/comparatif/logiciel-crm/',
        destination: '/kit/logiciel-crm/',
        permanent: true,
      },
      {
        source: '/comparatif/logiciel-seo/',
        destination: '/kit/logiciel-seo/',
        permanent: true,
      },
      {
        source: '/comparatif/micro-podcast/',
        destination: '/kit/micro-podcast/',
        permanent: true,
      },
      {
        source: '/comparatif/paiement-en-ligne/',
        destination: '/kit/paiement-en-ligne/',
        permanent: true,
      },
      {
        source: '/podcast/comparatif-micro-podcast/',
        destination: '/kit/micro-podcast/',
        permanent: true,
      },
      {
        source: '/podcast/comparatif-hebergement-podcast/',
        destination: '/kit/hebergement-podcast/',
        permanent: true,
      },
  
    ]
  }
}

module.exports = nextConfig
