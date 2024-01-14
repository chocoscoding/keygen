import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Secret Key Generator',
    short_name: 'Secret Key Generator',
    description: 'Secret Key Generator',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#6366F1',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}