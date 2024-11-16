// footerData.ts

interface LinkItem {
    href: string;
    text: string;
}

interface FooterSection {
    title: string;
    links: LinkItem[];
}

export const visaServices: FooterSection = {
    title: 'Visa Services',
    links: [
        { href: '/visa-uk-visit', text: 'UK Visit Visa' },
        { href: '/visa-senior-specialist-worker', text: 'Senior or Specialist Worker Visa' },
        { href: '/visa-business', text: 'Business Visa' },
        { href: '/visa-student', text: 'Student Visa' },
        { href: '/visa-permanent-residence', text: 'Permanent Residence Visa' },
    ],
};

export const companyInfo: FooterSection = {
    title: 'Company',
    links: [
        { href: '/about', text: 'About Us' },
        { href: '/team', text: 'Meet the Team' },
        { href: '/careers', text: 'Careers' },
    ],
};

export const helpfulLinks: FooterSection = {
    title: 'Helpful Links',
    links: [
        { href: '/contact', text: 'Contact Us' },
        { href: '/faqs', text: 'FAQs' },
        { href: '/live-chat', text: 'Live Chat' },
    ],
};

export const legalLinks = [
    { href: '/terms-conditions', text: 'Terms & Conditions' },
    { href: '/privacy-policy', text: 'Privacy Policy' },
    { href: '/cookies', text: 'Cookies' },
];

// footerData.ts

export const studentVisaServices1: FooterSection = {
    title: 'Visa Services',
    links: [
        { href: '/student-visa', text: 'Student Visa' },
        { href: '/tourist-visa', text: 'Tourist Visa' },
        { href: '/visit-visa', text: 'Visit Visa' },
        { href: '/worker-visa', text: 'Worker Visa' },
        { href: '/permanent-visa', text: 'Permanent Visa' },
        { href: '/immigrant-visa', text: 'Immigrant Visa' },
    ],
};


export const studentVisaServices2: FooterSection = {
    title: 'Student Visa Services',
    links: [
        { href: '#', text: 'Unlock Study Opportunities in the USA!' },
        { href: '#', text: 'Guaranteed Admission with Low CGPA' },
        { href: '#', text: 'Scholarship Opportunities Up to 80%' },
        { href: '#', text: 'No Service Fee Before Visa Approval' },
    ],
};

