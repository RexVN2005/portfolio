# 🎓 Portfolio Website - Sinh viên IT năm 3

Portfolio website hiện đại và chuyên nghiệp dành cho sinh viên Công nghệ Thông tin năm 3. Website được thiết kế với giao diện đẹp mắt, responsive và dễ tùy chỉnh.

## ✨ Tính năng

- 🎨 **Giao diện hiện đại**: Thiết kế đẹp mắt với gradient và animations
- 📱 **Responsive**: Hoạt động tốt trên mọi thiết bị (desktop, tablet, mobile)
- ⚡ **Performance**: Tối ưu hóa tốc độ tải trang
- 🎭 **Animations**: Hiệu ứng chuyển động mượt mà
- 📧 **Contact Form**: Form liên hệ tích hợp sẵn
- 🔝 **Back to Top**: Nút cuộn về đầu trang
- 🎯 **SEO Friendly**: Tối ưu cho công cụ tìm kiếm
- 🌐 **Multi-language ready**: Sẵn sàng hỗ trợ đa ngôn ngữ

## 📋 Các phần trong Website

1. **Trang chủ (Hero Section)**
   - Giới thiệu bản thân
   - Links mạng xã hội
   - Call-to-action buttons

2. **Giới thiệu (About)**
   - Thông tin cá nhân
   - Học vấn và kinh nghiệm
   - Download CV

3. **Kỹ năng (Skills)**
   - Frontend skills (HTML, CSS, JavaScript, React, Vue)
   - Backend skills (Node.js, Python, Java, Database)
   - Tools & Others (Git, Docker, Linux, Figma)
   - Tech stack icons

4. **Dự án (Projects)**
   - Showcase các dự án đã làm
   - Links đến GitHub và Live Demo
   - Tags công nghệ sử dụng

5. **Liên hệ (Contact)**
   - Thông tin liên hệ
   - Form gửi tin nhắn
   - Social media links

## 🚀 Cách sử dụng

### Cách 1: Mở trực tiếp (Đơn giản nhất)

1. Tải toàn bộ các file về máy
2. Mở file `index.html` bằng trình duyệt web
3. Website sẽ hoạt động ngay lập tức!

### Cách 2: Sử dụng Live Server (Khuyến nghị)

1. Cài đặt [Visual Studio Code](https://code.visualstudio.com/)
2. Cài extension "Live Server"
3. Click chuột phải vào `index.html` và chọn "Open with Live Server"
4. Website sẽ tự động mở trên `http://localhost:5500`

### Cách 3: Deploy lên Internet

#### Deploy lên GitHub Pages (Miễn phí)

1. Tạo repository mới trên GitHub
2. Upload các file lên repository
3. Vào Settings > Pages
4. Chọn branch "main" và folder "root"
5. Website của bạn sẽ có địa chỉ: `https://username.github.io/repository-name`

#### Deploy lên Netlify (Miễn phí)

1. Truy cập [Netlify](https://www.netlify.com/)
2. Kéo thả folder chứa các file vào Netlify
3. Website sẽ được deploy tự động
4. Bạn sẽ nhận được một URL duy nhất

#### Deploy lên Vercel (Miễn phí)

1. Truy cập [Vercel](https://vercel.com/)
2. Import project từ GitHub hoặc upload trực tiếp
3. Website sẽ được deploy tự động

## 🎨 Tùy chỉnh Website

### 1. Thay đổi thông tin cá nhân

Mở file `index.html` và tìm các phần cần chỉnh sửa:

```html
<!-- Thay đổi tên -->
<h1 class="hero-title">
    Xin chào, tôi là <span class="highlight">Tên của bạn</span>
</h1>

<!-- Thay đổi email -->
<a href="mailto:email@example.com">email@example.com</a>

<!-- Thay đổi số điện thoại -->
<a href="tel:+84123456789">+84 123 456 789</a>
```

### 2. Thay đổi màu sắc

Mở file `style.css` và chỉnh sửa phần `:root`:

```css
:root {
    --primary-color: #6366f1;  /* Màu chính */
    --secondary-color: #10b981;  /* Màu phụ */
    /* ... */
}
```

### 3. Thêm/Sửa dự án

Trong file `index.html`, tìm phần `<!-- Projects Section -->` và thêm/sửa:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-shopping-cart"></i>
    </div>
    <div class="project-content">
        <h3>Tên dự án của bạn</h3>
        <p>Mô tả ngắn về dự án...</p>
        <div class="project-tags">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
        </div>
        <div class="project-links">
            <a href="link-github" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="link-demo" class="project-link">
                <i class="fas fa-external-link-alt"></i> Demo
            </a>
        </div>
    </div>
</div>
```

### 4. Cập nhật kỹ năng

Tìm phần `<!-- Skills Section -->` và chỉnh sửa:

```html
<div class="skill-item">
    <div class="skill-info">
        <span>Tên kỹ năng</span>
        <span>90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
</div>
```

### 5. Thay đổi ảnh đại diện

Hiện tại website sử dụng icon placeholder. Để thay bằng ảnh thật:

1. Thêm ảnh của bạn vào folder (ví dụ: `avatar.jpg`)
2. Thay đổi trong `index.html`:

```html
<!-- Thay thế phần này -->
<div class="image-placeholder">
    <i class="fas fa-user-circle"></i>
</div>

<!-- Bằng -->
<div class="image-placeholder">
    <img src="avatar.jpg" alt="Your Name">
</div>
```

3. Thêm CSS để ảnh hiển thị đẹp:

```css
.image-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
```

### 6. Thêm CV để download

1. Thêm file CV (PDF) vào folder (ví dụ: `cv.pdf`)
2. Cập nhật link trong `index.html`:

```html
<a href="cv.pdf" class="btn btn-primary" download>Tải CV</a>
```

## 🔧 Công nghệ sử dụng

- **HTML5**: Cấu trúc website
- **CSS3**: Styling và animations
- **JavaScript (ES6+)**: Interactivity và dynamic features
- **Font Awesome 6**: Icons
- **Google Fonts**: Typography (optional)

## 📱 Social Media Integration

Cập nhật links mạng xã hội của bạn:

```html
<div class="social-links">
    <a href="https://github.com/your-username" target="_blank">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/your-profile" target="_blank">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="mailto:your-email@example.com">
        <i class="fas fa-envelope"></i>
    </a>
    <a href="https://facebook.com/your-profile" target="_blank">
        <i class="fab fa-facebook"></i>
    </a>
</div>
```

## 📧 Thiết lập Contact Form

### Cách 1: Sử dụng FormSpree (Miễn phí, Dễ dàng)

1. Truy cập [FormSpree](https://formspree.io/)
2. Đăng ký tài khoản miễn phí
3. Tạo form mới và nhận endpoint URL
4. Cập nhật trong `index.html`:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields... -->
</form>
```

### Cách 2: Sử dụng EmailJS (Miễn phí)

1. Truy cập [EmailJS](https://www.emailjs.com/)
2. Tạo tài khoản và thiết lập email service
3. Thêm script vào `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

4. Cập nhật trong `script.js` (đã có sẵn comment hướng dẫn)

### Cách 3: Backend riêng (Nâng cao)

Nếu bạn có backend server (Node.js, Python, PHP), bạn có thể tạo API endpoint để xử lý form.

## 🎯 SEO Tips

1. **Meta Tags**: Đã được thêm sẵn trong `<head>`
2. **Alt Text**: Thêm alt text cho tất cả hình ảnh
3. **Sitemap**: Tạo file `sitemap.xml` nếu deploy lên internet
4. **Google Analytics**: Thêm tracking code nếu cần
5. **Open Graph**: Thêm meta tags cho social media sharing

## 🐛 Troubleshooting

### Icons không hiển thị
- Kiểm tra kết nối internet (Font Awesome load từ CDN)
- Hoặc download Font Awesome về local

### Form không gửi được
- Kiểm tra console để xem error
- Thiết lập backend hoặc sử dụng FormSpree/EmailJS

### Website không responsive
- Kiểm tra viewport meta tag trong `<head>`
- Test trên nhiều thiết bị khác nhau

## 📚 Tài nguyên học thêm

- [HTML Tutorial](https://www.w3schools.com/html/)
- [CSS Tutorial](https://www.w3schools.com/css/)
- [JavaScript Tutorial](https://javascript.info/)
- [Responsive Design](https://web.dev/responsive-web-design-basics/)
- [Font Awesome Icons](https://fontawesome.com/icons)

## 🤝 Đóng góp

Nếu bạn tìm thấy bug hoặc muốn cải thiện website, hãy:
1. Fork repository
2. Tạo branch mới (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/improvement`)
5. Tạo Pull Request

## 📄 License

MIT License - Bạn có thể tự do sử dụng và chỉnh sửa cho mục đích cá nhân hoặc thương mại.

## 💡 Tips cho sinh viên IT

1. **Cập nhật thường xuyên**: Thêm dự án mới khi hoàn thành
2. **Professional**: Sử dụng ảnh chuyên nghiệp, không quá casual
3. **Showcasing**: Chọn 4-6 dự án tốt nhất thay vì liệt kê tất cả
4. **Links**: Đảm bảo tất cả links GitHub và demo đều hoạt động
5. **CV**: Giữ CV luôn được cập nhật
6. **Contact**: Trả lời email và tin nhắn nhanh chóng
7. **Social Proof**: Link đến LinkedIn, GitHub có hoạt động tích cực
8. **Blog** (Optional): Viết blog về những gì bạn học được

## 🎓 Sử dụng cho mục đích học tập

Website này hoàn hảo cho:
- Đồ án môn học Web Development
- Portfolio để xin thực tập
- Tìm hiểu về HTML/CSS/JavaScript
- Practice responsive design
- Học về UX/UI design

## 📞 Hỗ trợ

Nếu bạn cần hỗ trợ hoặc có câu hỏi:
- Tạo issue trên GitHub
- Email: [your-email@example.com]
- Facebook: [Your Facebook Page]

---

**Made with ❤️ by IT Student**

Chúc bạn thành công với portfolio của mình! 🚀

