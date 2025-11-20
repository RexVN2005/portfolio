// ============================================
// Language Translations
// ============================================

const translations = {
    vi: {
        // Navigation
        'nav-home': 'Trang chủ',
        'nav-about': 'Giới thiệu',
        'nav-skills': 'Kỹ năng',
        'nav-projects': 'Dự án',
        'nav-contact': 'Liên hệ',
        
        // Hero Section
        'hero-greeting': 'Xin chào, tôi là',
        'hero-subtitle': 'Sinh viên IT năm 3',
        'hero-description': 'Đam mê lập trình và phát triển phần mềm. Chuyên về xây dựng ứng dụng web hiện đại với React, Node.js và các công nghệ mới nhất.',
        'hero-btn-projects': 'Xem dự án',
        'hero-btn-contact': 'Liên hệ',
        
        // Stats
        'stat-projects': 'Dự án hoàn thành',
        'stat-certificates': 'Chứng chỉ',
        'stat-hours': 'Giờ code',
        'stat-awards': 'Giải thưởng',
        
        // About
        'about-title': 'Giới thiệu về tôi',
        'about-subtitle': 'Tìm hiểu thêm về hành trình của tôi',
        'about-heading': 'Sinh viên IT đam mê công nghệ',
        'about-text-1': 'Tôi là sinh viên năm thứ 3 chuyên ngành Công nghệ Thông tin. Với niềm đam mê về lập trình và công nghệ, tôi đã tích lũy được kinh nghiệm qua nhiều dự án học tập và cá nhân.',
        'about-text-2': 'Tôi thích học hỏi những công nghệ mới và áp dụng chúng vào thực tế. Mục tiêu của tôi là trở thành một lập trình viên Full-stack chuyên nghiệp và đóng góp cho cộng đồng công nghệ.',
        'info-education': 'Học vấn',
        'info-education-detail': 'Năm 3 - Công nghệ Thông tin',
        'info-location': 'Địa điểm',
        'info-location-detail': 'Việt Nam',
        'info-status': 'Trạng thái',
        'info-status-detail': 'Sẵn sàng thực tập',
        'about-btn-cv': 'Tải CV',
        'about-btn-contact': 'Liên hệ ngay',
        
        // Timeline
        'timeline-title': 'Kinh nghiệm & Học vấn',
        'timeline-subtitle': 'Hành trình phát triển của tôi',
        
        // Skills
        'skills-title': 'Kỹ năng',
        'skills-subtitle': 'Các công nghệ và công cụ tôi sử dụng',
        
        // Projects
        'projects-title': 'Dự án của tôi',
        'projects-subtitle': 'Các dự án tôi đã thực hiện',
        
        // Contact
        'contact-title': 'Liên hệ với tôi',
        'contact-subtitle': 'Hãy kết nối và làm việc cùng nhau!',
        'contact-info-title': 'Thông tin liên hệ',
        'contact-info-text': 'Tôi luôn sẵn sàng kết nối với những người cùng đam mê công nghệ. Hãy liên hệ với tôi nếu bạn có cơ hội thực tập hoặc muốn hợp tác dự án!',
        
        // Form
        'form-name': 'Tên của bạn',
        'form-email': 'Email của bạn',
        'form-subject': 'Chủ đề',
        'form-message': 'Nội dung tin nhắn',
        'form-submit': 'Gửi tin nhắn',
        'form-sending': 'Đang gửi...',
        'form-success': 'Đã gửi thành công!',
        'form-error': 'Lỗi! Thử lại'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-greeting': 'Hello, I am',
        'hero-subtitle': '3rd Year IT Student',
        'hero-description': 'Passionate about programming and software development. Specialized in building modern web applications with React, Node.js and the latest technologies.',
        'hero-btn-projects': 'View Projects',
        'hero-btn-contact': 'Contact',
        
        // Stats
        'stat-projects': 'Projects Completed',
        'stat-certificates': 'Certificates',
        'stat-hours': 'Coding Hours',
        'stat-awards': 'Awards',
        
        // About
        'about-title': 'About Me',
        'about-subtitle': 'Learn more about my journey',
        'about-heading': 'Passionate IT Student',
        'about-text-1': 'I am a 3rd year student majoring in Information Technology. With a passion for programming and technology, I have gained experience through many academic and personal projects.',
        'about-text-2': 'I love learning new technologies and applying them in practice. My goal is to become a professional Full-stack developer and contribute to the tech community.',
        'info-education': 'Education',
        'info-education-detail': 'Year 3 - Information Technology',
        'info-location': 'Location',
        'info-location-detail': 'Vietnam',
        'info-status': 'Status',
        'info-status-detail': 'Open to Internship',
        'about-btn-cv': 'Download CV',
        'about-btn-contact': 'Contact Now',
        
        // Timeline
        'timeline-title': 'Experience & Education',
        'timeline-subtitle': 'My development journey',
        
        // Skills
        'skills-title': 'Skills',
        'skills-subtitle': 'Technologies and tools I use',
        
        // Projects
        'projects-title': 'My Projects',
        'projects-subtitle': 'Projects I have completed',
        
        // Contact
        'contact-title': 'Contact Me',
        'contact-subtitle': 'Let\'s connect and work together!',
        'contact-info-title': 'Contact Information',
        'contact-info-text': 'I am always ready to connect with people who share the same passion for technology. Contact me if you have internship opportunities or want to collaborate on projects!',
        
        // Form
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-subject': 'Subject',
        'form-message': 'Message Content',
        'form-submit': 'Send Message',
        'form-sending': 'Sending...',
        'form-success': 'Sent Successfully!',
        'form-error': 'Error! Try Again'
    }
};

// Language switcher functionality
let currentLang = localStorage.getItem('preferredLanguage') || 'vi';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update language button
    const langButton = document.getElementById('current-lang');
    if (langButton) {
        langButton.textContent = lang === 'vi' ? 'EN' : 'VI';
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    
    // Language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'vi' ? 'en' : 'vi';
            setLanguage(newLang);
            
            // Add animation
            langToggle.classList.add('lang-switch-animation');
            setTimeout(() => {
                langToggle.classList.remove('lang-switch-animation');
            }, 300);
        });
    }
});

