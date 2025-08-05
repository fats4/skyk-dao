# SkyK DAO Hub - Website DAO Web3 untuk Airdrop Activity

![SkyK DAO Hub](https://img.shields.io/badge/SkyK-DAO%20Hub-blue?style=for-the-badge&logo=ethereum)

Website DAO Web3 modern yang dibuat untuk menampilkan dan mengelola aktivitas project airdrop. Dibangun dengan React.js dan Tailwind CSS dengan desain yang elegan dan responsive.

## ✨ Fitur Utama

### 🏠 Dashboard
- **Overview Stats**: Total rewards, active projects, completed tasks, dan community rank
- **Recent Projects**: Daftar project terbaru dengan progress tracking
- **Activity Summary**: Ringkasan aktivitas mingguan dan kategori teratas
- **Quick Actions**: Akses cepat untuk mencari project baru dan bergabung dengan komunitas

### 🎁 Airdrop Projects
- **Project Grid**: Tampilan card yang menarik untuk setiap project airdrop
- **Advanced Filters**: Filter berdasarkan kategori (DeFi, Layer 2, NFT, Gaming, dll) dan status
- **Search Functionality**: Pencarian project berdasarkan nama dan deskripsi
- **Project Details**: Informasi lengkap termasuk reward potential, participants, difficulty, dan tasks
- **Progress Tracking**: Monitor progress completion untuk setiap project

### 📊 Activity Feed
- **Real-time Timeline**: Timeline aktivitas terbaru dengan ikon dan warna yang berbeda
- **Activity Types**: Rewards, milestones, community updates, new projects, achievements
- **Performance Summary**: Ringkasan performa harian
- **Deadline Reminders**: Pengingat deadline project yang akan berakhir

### 🎨 Design Features
- **Glass Morphism UI**: Desain modern dengan efek glass dan backdrop blur
- **Gradient Colors**: Skema warna gradient yang menarik (primary blue & accent purple)
- **Responsive Design**: Optimized untuk desktop, tablet, dan mobile
- **Dark Theme**: Tema gelap dengan kontras yang nyaman untuk mata
- **Smooth Animations**: Transisi dan animasi yang halus

### 🔗 Web3 Features
- **Wallet Connection**: Simulasi koneksi wallet dengan status indicator
- **Mock Data**: Data sample yang realistis untuk demo
- **DAO Navigation**: Navigasi yang intuitif dengan sidebar yang collapsible

## 🚀 Teknologi yang Digunakan

- **React.js** - Frontend framework
- **Vite** - Build tool dan development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Animation library (ready to use)

## 📦 Instalasi & Setup

1. **Clone atau setup project**:
   ```bash
   cd skyk
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```

4. **Buka browser dan akses**:
   ```
   http://localhost:5173
   ```

## 🌟 Struktur Project

```
skyk/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header dengan wallet connect & search
│   │   ├── Sidebar.jsx         # Sidebar navigation dengan stats
│   │   ├── Dashboard.jsx       # Dashboard overview
│   │   ├── ProjectsPage.jsx    # Halaman daftar airdrop projects
│   │   └── ActivityFeed.jsx    # Timeline aktivitas
│   ├── App.jsx                 # Main app component dengan routing
│   ├── index.css              # Tailwind styles & custom CSS
│   └── main.jsx               # App entry point
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── package.json
```

## 🎯 Cara Penggunaan

### Navigation
- **Dashboard**: Overview dan ringkasan aktivitas
- **Airdrop Projects**: Jelajahi dan filter project airdrop
- **Activity Feed**: Lihat timeline aktivitas terbaru
- **Sidebar Stats**: Monitor performa dengan quick stats

### Features
- **Search**: Gunakan search bar di header untuk mencari project
- **Filters**: Filter project berdasarkan kategori dan status
- **Wallet**: Klik "Connect Wallet" untuk simulasi koneksi
- **Responsive**: Gunakan hamburger menu di mobile

### Mock Data
Website ini menggunakan data sample yang realistis termasuk:
- Project airdrop populer (LayerZero, Arbitrum, zkSync, StarkNet, dll)
- Timeline aktivitas dengan berbagai jenis event
- Stats dan metrics yang realistis

## 🎨 Customization

### Colors
Edit `tailwind.config.js` untuk mengubah skema warna:
```javascript
colors: {
  primary: { /* blue gradient */ },
  accent: { /* purple gradient */ }
}
```

### Components
Setiap komponen bersifat modular dan dapat dimodifikasi:
- **Header**: Wallet integration, search, notifications
- **Sidebar**: Navigation menu, quick stats
- **Dashboard**: Stats cards, recent projects, activity summary
- **ProjectsPage**: Project grid, filters, search
- **ActivityFeed**: Timeline, performance summary

## 🚀 Production Build

```bash
npm run build
```

Files akan dihasilkan di folder `dist/` dan siap untuk deployment.

## 📱 Responsive Design

Website ini fully responsive dengan breakpoints:
- **Mobile**: < 768px (Stack layout, hamburger menu)
- **Tablet**: 768px - 1024px (Adjusted grid, collapsible sidebar)  
- **Desktop**: > 1024px (Full layout dengan sidebar terbuka)

## 🔮 Future Enhancements

- **Real Web3 Integration**: Koneksi wallet sesungguhnya (MetaMask, WalletConnect)
- **Smart Contract Integration**: Interaksi dengan blockchain
- **Real-time Data**: API integration untuk data live airdrop
- **User Authentication**: Login system dan user profiles
- **Notification System**: Push notifications untuk deadlines
- **Advanced Analytics**: Charts dan metrics yang lebih detail

## 🤝 Contributing

Website ini siap untuk dikembangkan lebih lanjut. Struktur kode yang bersih dan modular memudahkan untuk menambah fitur baru.

---

**Dibuat dengan ❤️ untuk SkyK DAO Community**

Selamat menggunakan SkyK DAO Hub! 🚀
