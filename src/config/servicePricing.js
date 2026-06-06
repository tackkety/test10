// Service Pricing Configuration
export const servicePricing = {
    'graphic-design': {
        
        options: {
            'youtube-thumbnail': { name: 'YouTube Thumbnail', single: 15, package: 150, packageCount: 15 },
            'instagram-post': { name: 'Logo-Design', single: 50, package: 350, packageCount: 10 },
            'ads-design': { name: 'Ads Design', single: 15, package: 170, packageCount: 15 }
        }
    },
    'video-editing': {
        
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
        
        options: {
            'unlimited': {
                name: 'Unlimited Design & Video',
                tiers: [
                    { 
                        name: 'Monthly Plan', 
                        price: 700, 
                        description: '' 
                    },
                    { 
                        name: 'Yearly Plan', 
                        price: 6000, 
                        description: '' 
                    }
                ]
            }
        }
    },
    'tech-development': {
        
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

