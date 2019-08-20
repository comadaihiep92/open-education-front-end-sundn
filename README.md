# Git: Tạo tài khoản và cài đặt Chatwork
- Add: anh Phạm Văn Chiến (front-end-trainer)
- Học Markdown
- Học git
- git init : khởi tạo git
- git status: kiểm tra trạng thái
- git add: đưa file từ working directory lên staged area (INDEX)
- git commit -m 'message': đưa file từ staged area lên repository (HEAD)
- HEAD là nơi commit đang làm việc
- git checkout -b <branchname>: tạo và truy cập đến branch mới
- git checkout <branchname>: truy cập đến branch
- git remote add <repo>: đăng kí repo từ xa
- git clone <repository>: clone repository
- git push origin master: đẩy file lên repository
- git pull: kéo file về
# HTML/CSS
- Tìm hiểu BEM:
    https://viblo.asia/p/tim-hieu-ve-bem-trong-15-phut-924lJOk65PM
    - BEM: là quy ước đặt tên class cho HTML và CSS
    viết tắt của: Block, Element, Modifier
    - Syntax:

    .block {}  // block là phần to nhất của component

    .block__element {} // element là con bên trong của block

    .block--modifier {} // modifier phiên bản # của block. Hay những style thay đổi khác ban đầu
    - Vì sao dùng BEM: là giải pháp giúp đặt tên class dễ dàng
        giúp viết code đơn giản, dễ hiểu hơn, dễ sửa chữa.

- BEM kết hợp với SASS:
    https://viblo.asia/p/tim-hieu-ve-bem-css-hieu-qua-voi-sass-mixin-jvlKaqWkKVr
    - Dùng với SASS
    - Syntax:

        .block {
            ...
            &__element {}

            &--modifier {}
            
        }
        .block {}
        .block__element {}
        .block--modifier {}
    
- Tìm hiểu PUG:
    https://viblo.asia/p/gioi-thieu-ve-pug-template-engine-07LKXzDDlV4
    - PUG làm sạch cấu trúc HTML (Giống SASS cho CSS) -- (tiền xử lý)
    - PUG làm việc với thụt đầu dòng hoặc khoảng trắng
    vd:
        doctype html
        html(lange='en')
            head
                title Pug
            body
                h1 Pug Examples
                div.container
                    p Cool Pug example!
    - Sạch và dễ đọc hơn, không có thẻ đóng, quét tệp nhanh hơn.
    Cài đặt:
        npm install pug -g
        tạo file có đuôi .pug -- index.pug
    -> pug index.pug -> chạy file sẽ tạo index.html
    
    - Cài đặt pug với gulp: đóng gói Pug với hệ thông xây dựng Gulp
        npm install --save gulp-install -> tạo thư mục chính gốc thêm tệp package.jsson

- Tìm hiểu SASS:
    Cài đặt:
        npm install -g sass
