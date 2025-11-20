# 📧 Hướng dẫn thiết lập Email cho Contact Form

Form liên hệ đã được thiết lập sẵn với **FormSubmit.co** (miễn phí 100%).

## ✅ Đang hoạt động với:

**Email nhận:** `ngocthienn233@gmail.com`

## 🎯 Cách hoạt động:

1. Người dùng điền form trên website
2. Click "Gửi tin nhắn"
3. Email tự động gửi đến: `ngocthienn233@gmail.com`
4. Bạn nhận email trong hộp thư Gmail

## 🔧 Kích hoạt lần đầu:

### Bước 1: Test form
1. Mở website của bạn
2. Điền form liên hệ
3. Click "Gửi tin nhắn"

### Bước 2: Xác nhận email (CHỈ LẦN ĐẦU)
1. Kiểm tra hộp thư `ngocthienn233@gmail.com`
2. Tìm email từ FormSubmit.co
3. Click link xác nhận trong email
4. ✅ Xong! Form sẽ hoạt động mãi mãi

## 📨 Email bạn sẽ nhận:

```
From: FormSubmit.co
To: ngocthienn233@gmail.com

Subject: [Chủ đề từ form]

Name: [Tên người gửi]
Email: [Email người gửi]
Subject: [Chủ đề]
Message: [Nội dung tin nhắn]
```

## 🎨 Tính năng:

- ✅ **Miễn phí 100%** - Không giới hạn số lượng
- ✅ **Loading state** - Hiện "Đang gửi..." khi submit
- ✅ **Success notification** - Thông báo đẹp khi gửi thành công
- ✅ **Error handling** - Xử lý lỗi nếu có
- ✅ **Auto-reply** - FormSubmit tự động gửi email cảm ơn cho người gửi
- ✅ **Spam protection** - Có captcha tự động
- ✅ **Mobile friendly** - Hoạt động tốt trên mobile

## 🔄 Đổi email nhận (nếu cần):

Mở file `script.js`, tìm dòng:
```javascript
const response = await fetch('https://formsubmit.co/ajax/ngocthienn233@gmail.com', {
```

Đổi thành email khác:
```javascript
const response = await fetch('https://formsubmit.co/ajax/email-moi@gmail.com', {
```

## 🚀 Tính năng nâng cao (tùy chọn):

### 1. Custom Thank You Page
Thêm vào form HTML:
```html
<input type="hidden" name="_next" value="https://yourdomain.com/thanks.html">
```

### 2. Tắt Captcha (không khuyến nghị)
```html
<input type="hidden" name="_captcha" value="false">
```

### 3. Đổi subject mặc định
```html
<input type="hidden" name="_subject" value="Portfolio Contact Form">
```

### 4. CC thêm email khác
```html
<input type="hidden" name="_cc" value="email2@gmail.com">
```

## 🎯 Alternative: Dùng EmailJS (nếu muốn)

### Ưu điểm EmailJS:
- Tùy chỉnh template email nhiều hơn
- Dashboard để xem thống kê
- Gửi từ email domain riêng

### Nhược điểm:
- Phức tạp hơn để setup
- Giới hạn 200 emails/tháng (free plan)

### Setup EmailJS:

1. Đăng ký tại: https://www.emailjs.com/
2. Tạo email service
3. Tạo email template
4. Lấy Service ID, Template ID, Public Key
5. Thêm vào HTML:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

6. Sửa trong `script.js`:
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message
}, 'YOUR_PUBLIC_KEY')
.then(() => {
    // Success
})
.catch(() => {
    // Error
});
```

## 📝 Lưu ý:

- ✅ FormSubmit.co hoạt động ngay cả khi mở file HTML local
- ✅ Không cần server hay hosting
- ✅ Hoạt động với GitHub Pages, Netlify, Vercel
- ⚠️ Lần đầu tiên cần verify email
- ⚠️ Kiểm tra spam folder nếu không thấy email

## 🐛 Troubleshooting:

### Không nhận được email?
1. Kiểm tra spam folder
2. Verify email lần đầu (check hộp thư)
3. Đợi 1-2 phút (có thể delay)
4. Test lại với email khác

### Lỗi CORS?
- FormSubmit.co đã hỗ trợ AJAX, không có lỗi CORS

### Form không submit?
1. Mở Console (F12)
2. Check có lỗi gì không
3. Kiểm tra internet connection

## 💡 Tips:

- Trả lời email người gửi nhanh chóng (trong 24h)
- Setup Gmail filter để inbox sạch sẽ
- Thêm signature chuyên nghiệp khi reply
- Có thể forward email đến Slack/Discord

---

**Status:** ✅ Đang hoạt động  
**Service:** FormSubmit.co (Free)  
**Email:** ngocthienn233@gmail.com  
**Setup:** Chỉ cần verify lần đầu



