# Lakhpati Hospital Website - Product Requirements Document

**Last Updated:** December 16, 2025  
**Project Type:** Healthcare Business Website  
**Tech Stack:** React, FastAPI, MongoDB

---

## Original Problem Statement

Create a modern, high-converting, professional website for "Lakhpati Hospital (Eye Care Center & Maternity Home)" in Surat with the following features:
- Hero section with trust signals
- About section highlighting care and expertise
- Services section for eye care, contact lenses, and maternity
- Why Choose Us section
- Patient testimonials
- Contact section with appointment booking form
- FAQ section
- SEO optimized with relevant keywords
- Mobile responsive design
- Conversion optimization elements (sticky header, WhatsApp button, urgency indicators)

---

## Architecture & Technology

### Frontend
- **Framework:** React 19.0.0
- **Styling:** Tailwind CSS with shadcn/ui components
- **Key Libraries:**
  - lucide-react (icons)
  - sonner (toast notifications)
  - @radix-ui components (accordion, cards, etc.)

### Backend (Ready for Implementation)
- **Framework:** FastAPI
- **Database:** MongoDB
- **Purpose:** Will handle appointment bookings, form submissions, WhatsApp/email notifications

---

## User Personas

1. **Potential Patients** - Looking for eye care or maternity services in Surat
2. **Current Patients** - Need to book appointments or get information
3. **Emergency Seekers** - Require immediate contact information and quick booking

---

## Core Requirements (Static)

### Business Information
- Name: Lakhpati Hospital
- Address: Al-Hamd Palace, Nanavat Main Road, Nanavat, Surat, Gujarat – 395003
- Phone: +91 73592 01616
- Hours: 10:30 AM – 9:00 PM (Monday to Sunday)
- Rating: 4.6 stars
- Specialties: Eye Care, Contact Lenses, Maternity Services

### Key Features
1. Sticky header with call-to-action
2. Hero section with trust badges
3. Services showcase
4. Social proof (testimonials)
5. Appointment booking form
6. FAQ accordion
7. Google Maps integration
8. WhatsApp floating button
9. SEO-optimized content
10. Mobile-responsive design

---

## What's Been Implemented ✅

### Phase 1: Frontend MVP (December 16, 2025)

#### Components Created:
1. **Header** (`/app/frontend/src/components/Header.jsx`)
   - Sticky navigation with scroll effect
   - Mobile responsive menu
   - Call Now button
   - Smooth scroll navigation

2. **Hero Section** (`/app/frontend/src/components/Hero.jsx`)
   - Main headline and subheading
   - Trust signals (rating, community, hours)
   - Dual CTAs (Book Appointment, Call Now)
   - Statistics display (15+ years, 10k+ patients, 24/7 care)

3. **About Section** (`/app/frontend/src/components/About.jsx`)
   - Hospital description and mission
   - Key points (Licensed, Patient-Centered, Excellence)
   - Visual stats display

4. **Services Section** (`/app/frontend/src/components/Services.jsx`)
   - Three service cards with icons
   - Eye Care Services
   - Contact Lens Solutions
   - Maternity Care
   - Hover animations

5. **Why Choose Us** (`/app/frontend/src/components/WhyChooseUs.jsx`)
   - Four feature highlights
   - Icon-based display
   - Benefits messaging

6. **Testimonials** (`/app/frontend/src/components/Testimonials.jsx`)
   - Five patient reviews with ratings
   - Avatar initials
   - Card-based layout

7. **Contact Section** (`/app/frontend/src/components/Contact.jsx`)
   - Contact information cards (phone, address, hours)
   - Google Maps embed
   - Appointment booking form
   - Form validation
   - Urgency indicator
   - Toast notification on submission (FRONTEND ONLY - saves to browser console)

8. **FAQ Section** (`/app/frontend/src/components/FAQ.jsx`)
   - Accordion component with 5 common questions
   - Smooth expand/collapse animation

9. **Footer** (`/app/frontend/src/components/Footer.jsx`)
   - Four-column layout
   - Quick links, services, contact info
   - Social media icons
   - SEO keywords in footer

10. **WhatsApp Button** (`/app/frontend/src/components/WhatsAppButton.jsx`)
    - Floating action button
    - Pulsing animation
    - Pre-filled message
    - Opens WhatsApp chat

#### Data Layer:
- **Mock Data** (`/app/frontend/src/data/mock.js`)
  - Hospital information
  - Services array
  - Features/benefits
  - Testimonials
  - FAQs
  - Service options for form

#### Design Implementation:
- Clean medical theme (blue, green, white palette)
- No prohibited gradients (avoided purple/blue, purple/pink)
- Lucide React icons (no emojis)
- Smooth transitions and hover effects
- Mobile-responsive (tested at 375px and 1920px)
- Shadcn UI components used throughout
- Proper focus states for accessibility

---

## Prioritized Backlog

### P0 - Backend Integration (Next Phase)
1. **Appointment Booking API**
   - POST `/api/appointments` - Store appointment requests
   - Schema: name, phone, service, date, timestamp
   - Email notification to hospital
   - SMS/WhatsApp confirmation to patient

2. **Contact Form API**
   - Store general inquiries
   - Email forwarding

3. **Database Models**
   - Appointments collection
   - Contact inquiries collection

### P1 - Enhanced Features
1. **WhatsApp/Email Notifications**
   - Integrate with Twilio for SMS
   - SendGrid/NodeMailer for emails
   - WhatsApp Business API integration

2. **Admin Dashboard**
   - View appointments
   - Manage inquiries
   - Update hospital information

3. **Analytics Integration**
   - Google Analytics
   - Conversion tracking
   - Form submission tracking

### P2 - Additional Enhancements
1. **Patient Portal**
   - Login/Registration
   - Appointment history
   - Medical records access

2. **Online Payment**
   - Razorpay/Stripe integration
   - Advance booking payments

3. **Gallery Section**
   - Facility photos
   - Team photos
   - Equipment showcase

4. **Blog/Health Tips**
   - SEO content
   - Health articles
   - Eye care tips

---

## API Contracts (For Backend Implementation)

### POST /api/appointments
**Request Body:**
```json
{
  "name": "string (required)",
  "phone": "string (required, 10 digits)",
  "service": "string (required, enum)",
  "date": "string (optional, ISO date)",
  "timestamp": "datetime (auto-generated)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Appointment request received",
  "appointmentId": "uuid"
}
```

### GET /api/appointments (Admin)
**Response:**
```json
{
  "appointments": [
    {
      "id": "uuid",
      "name": "string",
      "phone": "string",
      "service": "string",
      "date": "string",
      "createdAt": "datetime"
    }
  ]
}
```

---

## Next Action Items

1. **Immediate Next Steps:**
   - User can add real images to replace placeholder icons
   - Verify Google Maps coordinates
   - Update social media links when available

2. **Backend Development Phase:**
   - Create appointment booking API
   - Integrate WhatsApp Business API
   - Set up email notifications
   - Add form data validation

3. **Testing & Deployment:**
   - End-to-end testing with real data
   - Performance optimization
   - SEO audit
   - Mobile testing on real devices

---

## Mock Data Currently Used

All data is currently stored in `/app/frontend/src/data/mock.js`:
- Hospital information
- Services (3 items)
- Features (4 items)
- Testimonials (5 patient reviews)
- FAQs (5 questions)
- Service dropdown options (5 options)

**Note:** The appointment form currently logs to browser console. Backend integration needed to persist data.

---

## Design Guidelines Followed

✅ Clean medical theme (blue #2563eb, green #22c55e, white #ffffff)  
✅ No purple/blue or purple/pink gradients  
✅ Lucide React icons (no emoji characters)  
✅ Shadcn UI components used  
✅ Mobile responsive design  
✅ Smooth animations and transitions  
✅ Proper focus states for accessibility  
✅ SEO-optimized content  
✅ Conversion-focused CTAs  
✅ Trust signals prominently displayed
