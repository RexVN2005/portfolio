// ============================================
// Navigation & Mobile Menu
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// ============================================
// Theme Preference Helpers
// ============================================
const THEME_STORAGE_KEY = 'theme';

const getStoredTheme = () => {
    try {
        return localStorage.getItem(THEME_STORAGE_KEY);
    } catch (error) {
        console.warn('Local storage is unavailable, falling back to default theme.', error);
        return null;
    }
};

const setStoredTheme = (theme) => {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
        console.warn('Unable to persist theme preference.', error);
    }
};

const applyTheme = (theme) => {
    if (!theme) return;
    document.documentElement.setAttribute('data-theme', theme);
};

const prefersDarkScheme = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
const storedTheme = getStoredTheme();
const initialTheme = storedTheme || (prefersDarkScheme && prefersDarkScheme.matches ? 'dark' : 'light');
let userHasExplicitPreference = Boolean(storedTheme);

applyTheme(initialTheme);

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Reset hamburger animation
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Active Navigation Link
// ============================================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Smooth Scrolling (for browsers that don't support CSS scroll-behavior)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Stats Counter Animation
// ============================================
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

let statsAnimated = false;
window.addEventListener('scroll', () => {
    if (!statsAnimated) {
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            const statsPosition = statsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (statsPosition < screenPosition) {
                const statNumbers = document.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCounter(stat, target);
                });
                statsAnimated = true;
            }
        }
    }
});

// ============================================
// Skill Bars Animation
// ============================================
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (barPosition < screenPosition) {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
};

// Run once on load and on scroll
let skillsAnimated = false;
window.addEventListener('scroll', () => {
    if (!skillsAnimated) {
        const skillsSection = document.getElementById('skills');
        const skillsPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (skillsPosition < screenPosition) {
            animateSkillBars();
            skillsAnimated = true;
        }
    }
});

// ============================================
// Scroll Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.project-card, .skill-category, .contact-content');
animateElements.forEach(el => {
    observer.observe(el);
});

// Special animation for about section
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const aboutImage = entry.target.querySelector('.about-image');
            const aboutText = entry.target.querySelector('.about-text');
            const infoItems = entry.target.querySelectorAll('.info-item');
            
            if (aboutImage) {
                aboutImage.style.opacity = '0';
                aboutImage.style.transform = 'translateX(-50px)';
                setTimeout(() => {
                    aboutImage.style.transition = 'all 0.6s ease';
                    aboutImage.style.opacity = '1';
                    aboutImage.style.transform = 'translateX(0)';
                }, 100);
            }
            
            if (aboutText) {
                aboutText.style.opacity = '0';
                aboutText.style.transform = 'translateX(50px)';
                setTimeout(() => {
                    aboutText.style.transition = 'all 0.6s ease';
                    aboutText.style.opacity = '1';
                    aboutText.style.transform = 'translateX(0)';
                }, 200);
            }
            
            infoItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 400 + (index * 100));
            });
            
            aboutObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const aboutContent = document.querySelector('.about-content');
if (aboutContent) {
    aboutObserver.observe(aboutContent);
}

// ============================================
// Back to Top Button
// ============================================
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// Contact Form with FormSubmit.co (Free Email Service)
// ============================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span data-lang="form-sending">Đang gửi...</span>';
    submitBtn.disabled = true;
    
    // Get form values
    const formData = new FormData(contactForm);
    
    try {
        // Using FormSubmit.co - Free form backend
        const response = await fetch('https://formsubmit.co/ajax/ngocthienn233@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Success
            submitBtn.innerHTML = '<i class="fas fa-check"></i> <span data-lang="form-success">Đã gửi thành công!</span>';
            submitBtn.style.background = '#10b981';
            
            // Show success message
            showNotification('success', 'Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.', 'Gửi thành công!');
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        // Error
        console.error('Error:', error);
        submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> <span data-lang="form-error">Lỗi! Thử lại</span>';
        submitBtn.style.background = '#ef4444';
        
        showNotification('error', 'Có lỗi xảy ra. Vui lòng gửi email trực tiếp đến: ngocthienn233@gmail.com', 'Gửi thất bại!');
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 3000);
    }
});

// Show notification
const showNotification = (type, message, title) => {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <strong>${title}</strong>
            <p>${message}</p>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => notification.remove(), 5000);
};

// ============================================
// Typing Effect for Hero Title (Optional Enhancement)
// ============================================
// Disabled to prevent scroll issues
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const text = heroTitle.innerHTML;
//     heroTitle.innerHTML = '';
//     
//     let i = 0;
//     const typeWriter = () => {
//         if (i < text.length) {
//             heroTitle.innerHTML += text.charAt(i);
//             i++;
//             setTimeout(typeWriter, 50);
//         }
//     };
//     
//     // Start typing effect after a short delay
//     setTimeout(typeWriter, 500);
// }

// ============================================
// Dynamic Year in Footer
// ============================================
const updateYear = () => {
    const yearElements = document.querySelectorAll('.footer-content p');
    if (yearElements.length > 0) {
        const currentYear = new Date().getFullYear();
        yearElements[0].innerHTML = `&copy; ${currentYear} Portfolio. Thiết kế bởi Nguyễn Ngọc Thiện - Sinh viên IT.`;
    }
};

updateYear();

// ============================================
// Project Cards Hover Effect
// ============================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// Parallax Effect for Hero Section (Optional)
// ============================================
// Disabled to prevent scroll issues
// const heroSection = document.querySelector('.hero');
// 
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const parallaxSpeed = 0.5;
//     
//     if (heroSection && scrolled < window.innerHeight) {
//         heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
//     }
// });

// ============================================
// Tech Icons Animation
// ============================================
const techIcons = document.querySelectorAll('.tech-icon');

techIcons.forEach((icon, index) => {
    // Add staggered animation delay
    icon.style.animationDelay = `${index * 0.1}s`;
    
    // Random floating animation on hover
    icon.addEventListener('mouseenter', function() {
        this.style.animation = 'float 1s ease-in-out infinite';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
});

// ============================================
// Loading Animation (Optional)
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// Mouse Trail Effect (Optional - can be removed if too much)
// ============================================
const createMouseTrail = () => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.circle');
    
    if (circles.length === 0) return;
    
    circles.forEach((circle, index) => {
        circle.x = 0;
        circle.y = 0;
    });
    
    window.addEventListener('mousemove', (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });
    
    const animateCircles = () => {
        let x = coords.x;
        let y = coords.y;
        
        circles.forEach((circle, index) => {
            circle.style.left = x - 12 + 'px';
            circle.style.top = y - 12 + 'px';
            circle.style.scale = (circles.length - index) / circles.length;
            
            circle.x = x;
            circle.y = y;
            
            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });
        
        requestAnimationFrame(animateCircles);
    };
    
    animateCircles();
};

// Uncomment to enable mouse trail effect
// createMouseTrail();

// ============================================
// Typing Effect for Name
// ============================================
const typeName = () => {
    const nameElement = document.getElementById('typed-name');
    if (!nameElement) return;
    
    const fullName = 'Nguyễn Ngọc Thiện';
    let characterCount = 0;
    let isDeleting = false;

    nameElement.textContent = '';
    
    const cycleTyping = () => {
        if (!nameElement.isConnected) return;
        
        if (!isDeleting) {
            if (characterCount < fullName.length) {
                characterCount += 1;
                nameElement.textContent = fullName.slice(0, characterCount);
                
                if (characterCount % 3 === 0) {
                    createSparkle(nameElement);
                }
                
                setTimeout(cycleTyping, 120);
                return;
            }
            
            nameElement.classList.add('typing-complete');
            
            // Trigger final sparkle burst when finishing typing
            for (let i = 0; i < 5; i++) {
                setTimeout(() => createSparkle(nameElement), i * 120);
            }
            
            setTimeout(() => {
                isDeleting = true;
                nameElement.classList.remove('typing-complete');
                setTimeout(cycleTyping, 200);
            }, 1500);
        } else {
            if (characterCount > 0) {
                characterCount -= 1;
                nameElement.textContent = fullName.slice(0, characterCount);
                setTimeout(cycleTyping, 70);
                return;
            }
            
            nameElement.textContent = '';
            
            setTimeout(() => {
                isDeleting = false;
                setTimeout(cycleTyping, 500);
            }, 400);
        }
    };
    
    setTimeout(cycleTyping, 800);
};

// Sparkle effect
const createSparkle = (element) => {
    const sparkle = document.createElement('span');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = '1.5rem';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
    sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
};

// Initialize typing effect on page load
window.addEventListener('load', () => {
    typeName();
    handleImageLoad();
});

document.addEventListener('DOMContentLoaded', () => {
    createDarkModeToggle();
});

// ============================================
// Image Loading Handler
// ============================================
const handleImageLoad = () => {
    const heroAvatar = document.getElementById('hero-avatar');
    const aboutAvatar = document.getElementById('about-avatar');
    
    if (heroAvatar) {
        heroAvatar.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        heroAvatar.addEventListener('error', function() {
            this.style.display = 'none';
        });
    }
    
    if (aboutAvatar) {
        aboutAvatar.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        aboutAvatar.addEventListener('error', function() {
            this.style.display = 'none';
        });
    }
};

// ============================================
// Console Message (Easter Egg)
// ============================================
console.log('%c👋 Xin chào!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%c🚀 Bạn đang xem portfolio của sinh viên IT năm 3', 'font-size: 14px; color: #10b981;');
console.log('%c💼 Nếu bạn quan tâm đến việc hợp tác, hãy liên hệ với tôi!', 'font-size: 14px; color: #6b7280;');

// ============================================
// Performance Optimization - Lazy Loading Images
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================
// Dark Mode Toggle (Optional Feature)
// ============================================
const createDarkModeToggle = () => {
    const toggle = document.getElementById('dark-mode-toggle');
    if (!toggle) return;

    const icon = toggle.querySelector('i');

    const updateToggleVisual = (theme) => {
        if (icon) {
            icon.classList.remove('fa-moon', 'fa-sun');
            if (theme === 'dark') {
                icon.classList.add('fa-sun');
            } else {
                icon.classList.add('fa-moon');
            }
        }
        toggle.setAttribute('aria-label', theme === 'dark' ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối');
        toggle.setAttribute('aria-pressed', theme === 'dark');
    };

    const setTheme = (theme, { persist = true, animate = true } = {}) => {
        applyTheme(theme);
        updateToggleVisual(theme);

        if (persist) {
            setStoredTheme(theme);
            userHasExplicitPreference = true;
        }

        if (animate) {
            toggle.classList.remove('theme-toggle-active');
            void toggle.offsetWidth;
            toggle.classList.add('theme-toggle-active');
            setTimeout(() => toggle.classList.remove('theme-toggle-active'), 400);
        }
    };

    const currentTheme = document.documentElement.getAttribute('data-theme') || initialTheme || 'light';
    setTheme(currentTheme, { persist: false, animate: false });

    toggle.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
    });

    if (prefersDarkScheme) {
        const handleSystemThemeChange = (event) => {
            if (userHasExplicitPreference) return;
            const systemTheme = event.matches ? 'dark' : 'light';
            setTheme(systemTheme, { persist: false, animate: false });
        };

        if (typeof prefersDarkScheme.addEventListener === 'function') {
            prefersDarkScheme.addEventListener('change', handleSystemThemeChange);
        } else if (typeof prefersDarkScheme.addListener === 'function') {
            prefersDarkScheme.addListener(handleSystemThemeChange);
        }
    }
};

// ============================================
// Initialize
// ============================================
console.log('✅ Portfolio website loaded successfully!');

// ============================================
// Demo Not Available Handler
// ============================================
const handleDemoNotAvailable = () => {
    const demoButtons = document.querySelectorAll('.demo-unavailable');
    
    demoButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create beautiful notification
            const notification = document.createElement('div');
            notification.className = 'demo-notification';
            notification.innerHTML = `
                <div class="demo-notification-content">
                    <div class="demo-notification-icon">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <div class="demo-notification-text">
                        <h4>Tạm thời chưa có demo</h4>
                        <p>Dự án đang trong quá trình phát triển và sẽ sớm có demo. Bạn có thể xem mã nguồn trên GitHub!</p>
                    </div>
                    <button class="demo-notification-close" onclick="this.parentElement.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Trigger animation
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);
            
            // Auto remove after 5 seconds
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 5000);
        });
    });
};

// Initialize demo handler
window.addEventListener('load', () => {
    handleDemoNotAvailable();
});
