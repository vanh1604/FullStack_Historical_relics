# Hướng dẫn chạy code

## Môi trường

- composer ( https://getcomposer.org/download/)
- php (https://www.php.net)
- nodejs(https://nodejs.org/en)
- yarn(https://classic.yarnpkg.com/lang/en/docs/install/)
- git(https://git-scm.com/downloads)

## Các bước chạy code

### Kéo code về thông qua git clone

- Đơn giản là kéo về bằng lệnh clone

```
git clone https://github.com/Lokey2411/gis-final-project.git
```

### Cài đặt gói

#### back-end

```
cd back-end
composer install
```

#### front-end

```
cd front-end
yarn
```

### Cài đặt các biến môi trường

#### front-end

Tạo file tên .env có nội dung như thế này

```
REACT_APP_API_URL=http://localhost:8000/api
```

#### back-end

Tạo file .env, sau đó sao chép nội dung của file .env.example vào file .env

```
DB_HOST=localhost
DB_PORT=
DB_USER=postgres
DB_PASSWORD=
DB_DATABASE=
```

, sau đó sửa các thông tin về database postgreSQL sao cho phù hợp với máy cá nhân

### Chạy SQL

Import file back-end/data_di_tich.sql vào trong database của mình

### chạy code

#### 2 terminal

```
cd back-end
php -S localhost:8000
```

```
cd front-end
yarn start
```

#### 1 terminal

```
yarn
yarn start
```
