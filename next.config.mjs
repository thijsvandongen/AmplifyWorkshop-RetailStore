/** @type {import('next').NextConfig} */
export default (phase, { defaultConfig }) => {
  if ( phase === 'phase-development-server') {
    return {
      distDir: ".next",
      transpilePackages: [
        '@cloudscape-design/components',
        '@cloudscape-design/component-toolkit'
      ],
      basePath: '/RetailStore',
    };
  } else {
    return {
      distDir: ".next",
      transpilePackages: [
        '@cloudscape-design/components',
        '@cloudscape-design/component-toolkit'
      ]
    };
  }
}