// Service Pricing Configuration
export const servicePricing = {
    'graphic-design': {
        name: 'Graphic Design',
        icon: 'bx bx-pencil',
        description: 'Professional graphic design services including YouTube thumbnails, Instagram posts, and advertisement designs. High-quality visuals that capture attention and drive engagement.',
        options: {
            'youtube-thumbnail': { name: 'YouTube Thumbnail', single: 15, package: 150, packageCount: 15 },
            'instagram-post': { name: 'Logo-Design', single: 50, package: 350, packageCount: 10 },
            'ads-design': { name: 'Ads Design', single: 15, package: 170, packageCount: 15 }
        }
    },
    'video-editing': {
        name: 'Video Editing',
        icon: 'bx bx-video',
        description: 'Expert video editing for both short-form and long-form content. Perfect for social media, YouTube, commercials, and corporate videos with professional quality.',
        options: {
            'short-form': { 
                name: 'Short Form Video', 
                single: 25, 
                package: 300, 
                packageCount: 15,
                description: 'Videos under 3 minutes (Reels, TikTok, Shorts)'
            },
            'long-form': { 
                name: 'Long Form Video', 
                single: 40, 
                package: 500, 
                packageCount: 15,
                description: 'Videos over 3 minutes (YouTube, Tutorials, Documentaries)'
            }
        }
    },
    'unlimited-service': {
        name: 'Unlimited Service',
        icon: 'bx bx-infinite',
        description: 'Unlimited graphic design and video editing subscription with flexible monthly and yearly plans.',
        options: {
            'unlimited': {
                name: 'Unlimited Design & Video',
                tiers: [
                    { 
                        name: 'Monthly Plan', 
                        price: 700, 
                        description: 'Billed Half, Half After Month.' 
                    },
                    { 
                        name: 'Yearly Plan', 
                        price: 6000, 
                        description: '20% off billed annually.' 
                    }
                ]
            }
        }
    },
    'tech-development': {
        name: 'Tech Development',
        icon: 'bx bx-code-alt',
        description: 'Comprehensive technology development services including websites, mobile apps, AI solutions, and security systems. Built with modern technologies and best practices.',
        options: {
            'web-development': {
                name: 'Web Development',
                tiers: [
                    { name: '6 Pages Website', price: 300, description: 'Up to 6 pages with basic functionality' },
                    { name: '6+ Pages Website', price: 450, description: '6+ pages with advanced features (up to $800)' }
                ]
            },
            'mobile-app': {
                name: 'Mobile App Development',
                tiers: [
                    { name: 'Simple App', price: 500, description: 'Basic functionality and UI' },
                    { name: 'Advanced App', price: 1000, description: 'Complex features and premium design' }
                ]
            },
            'ai-development': {
                name: 'AI Development',
                tiers: [
                    { name: 'Simple AI', price: 1000, description: 'Basic AI integration and functionality' },
                    { name: 'Advanced AI', price: 2000, description: 'Complex AI systems and machine learning' }
                ]
            },
            'security-development': {
                name: 'Security Development',
                tiers: [
                    { name: 'Basic Security', price: 500, description: 'Essential security measures and protocols' },
                    { name: 'Advanced Security', price: 3000, description: 'Comprehensive security system implementation' }
                ]
            }
        }
    }
};

export const toolsList = [
    { name: '@yoyohassane', logo: 'logos/1.avif' },
    { name: '@quasarcentralbts', logo: 'logos/2.avif' },
    { name: '@georgeoctavio', logo: 'logos/3.avif' },
    { name: '@mafolebaraka', logo: 'logos/4.avif' },
    { name: '@aerial_hd', logo: 'logos/12.avif' },
    { name: '@dayoffdiy', logo: 'logos/5.avif' },
    { name: '@mario.valencia23', logo: 'logos/6.avif' },
    { name: '@preston.chambers1', logo: 'logos/7.avif' },
    { name: '@mishaperov_', logo: 'logos/8.avif' },
    { name: '@elysyan', logo: 'logos/9.avif' },
    { name: '@natexmorrissey', logo: 'logos/10.avif' },
    { name: '@johnazizzz', logo: 'logos/11.avif' }
];

