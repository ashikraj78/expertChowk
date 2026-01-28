# Expert Chowk

A modern marketplace platform connecting skilled tradespeople with clients who need their expertise. Built with React, Vite, and Capacitor for cross-platform mobile deployment.

## 🚀 Features

### User Onboarding Flow
- **Landing Page**: Premium animated landing page with feature highlights
- **Language Selection**: Multi-language support (English/Hindi)
- **Role Selection**: Choose between Professional or Client roles
- **OTP Verification**: Phone number verification with OTP
- **Skill Selection**: Multi-select interface for professional skills

### Professional Profile Setup
- **Basic Profile**: Name, experience level, location, and work radius
- **Professional Details**: Project types, team size, and equipment owned
- **Portfolio Gateway**: Showcase up to 3 projects with photos and descriptions
- **Profile Review**: Submit profile for verification

### Technical Features
- **State Management**: Zustand for global state management
- **Responsive Design**: Mobile-first approach with `max-w-[480px]` container
- **Dark Mode Support**: Light/dark theme compatibility (currently using light theme)
- **Smooth Animations**: Custom CSS animations for enhanced UX
- **Form Validation**: Input validation across all forms

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM v7
- **State Management**: Zustand
- **Styling**: Tailwind CSS with custom configuration
- **Icons**: Material Symbols (Google Fonts)
- **Mobile**: Capacitor for iOS and Android deployment

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Sync with Capacitor
npm run sync

# Open in Android Studio
npx cap open android

# Open in Xcode
npx cap open ios
```

## 🎨 Design System

### Colors
- **Primary**: `#13b6ec` (Cyan)
- **Background Light**: `#f8fafc`
- **Background Dark**: `#111e22`

### Typography
- **Font Family**: 'Outfit' (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Layout
- **Mobile Container**: `max-w-[480px]` centered with shadow
- **Border Radius**: Custom values (sm: 4px, DEFAULT: 8px, lg: 12px, xl: 16px, 2xl: 20px)

## 📱 Application Flow

1. **Landing Page** → Language Selection
2. **Language Selection** → Role Selection
3. **Role Selection** → OTP Verification
4. **OTP Verification** → Skill Selection (for Professionals)
5. **Skill Selection** → Profile Setup
6. **Profile Setup** → Professional Details
7. **Professional Details** → Portfolio Gateway
8. **Portfolio Gateway** → Add Portfolio Entry (up to 3 projects)
9. **Portfolio Gateway** → Profile Under Review (when 3 projects added)

## 🗂️ Project Structure

```
src/
├── pages/
│   ├── LanguageSelection.jsx
│   ├── RoleSelection.jsx
│   ├── OTPVerification.jsx
│   ├── SkillSelection.jsx
│   ├── ProfileSetup.jsx
│   ├── ProfessionalDetails.jsx
│   ├── PortfolioGateway.jsx
│   ├── AddPortfolioEntry.jsx
│   └── ProfileUnderReview.jsx
├── store/
│   └── useProfileStore.js
├── App.jsx
├── index.css
└── main.jsx
```

## 🔧 Configuration Files

- **tailwind.config.js**: Custom Tailwind configuration
- **capacitor.config.ts**: Capacitor configuration for mobile apps
- **vite.config.js**: Vite build configuration

## 🌟 Key Features Implementation

### Zustand Store
The application uses a centralized Zustand store (`useProfileStore`) to manage:
- Selected skills
- Basic profile information (name, experience, location, radius)
- Professional details (project types, team size, tools)
- Portfolio entries

### Mobile-First Design
All pages follow a consistent mobile-first layout:
- Centered `max-w-[480px]` container
- Internal scrolling with `overflow-y-auto`
- Fixed headers and footers where appropriate
- Smooth animations and transitions

### Form Validation
- Required field validation
- Phone number format validation
- OTP verification (4-digit)
- Portfolio entry validation (minimum 3 projects to go live)

## 📄 License

This project is private and proprietary.

## 👥 Author

Developed for Expert Chowk marketplace platform.
