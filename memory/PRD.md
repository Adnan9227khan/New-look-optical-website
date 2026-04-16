# Anas Optical Store Website - Product Requirements Document

**Last Updated:** December 16, 2025  
**Project Type:** Premium Optical Store Business Website  
**Tech Stack:** React, FastAPI, MongoDB

---

## Project History

### Phase 1: Lakhpati Hospital Website (Completed - Dec 16, 2025)
- Healthcare website with appointment booking

---

# ANAS OPTICAL STORE - WEBSITE SPECIFICATION

## Original Problem Statement

Create a premium, high-converting business website for "Anas Optical" - an optical store in Surat that sells:
- Eyeglasses (Men's, Women's, Kids)
- Contact Lenses
- Perfumes & Attar
- Eye testing services

**Key Requirements:**
- Modern, premium UI with blue + black color scheme
- High conversion optimization (calls, WhatsApp, walk-ins)
- Trust signals prominently displayed
- Product showcase with professional images
- Mobile-first responsive design
- SEO optimized for Surat optical searches

---

## Business Information

**Store Details:**
- Name: Anas Optical
- Tagline: "Clear Vision Starts Here – Trusted Optical Store in Surat"
- Address: Al-Hamd Palace, Nanavat Main Road, Near Lakhpati Hospital, Nanavat, Surat, Gujarat – 395003
- Phone: +91 73592 01616
- Hours: 10:30 AM – 9:00 PM (Monday to Sunday)
- Rating: 4.6 stars
- Specialties: Eyeglasses, Contact Lenses, Perfumes, Attar

---

## What's Been Implemented ✅

### Phase 1: Anas Optical Frontend (December 16, 2025)

#### Components Created:

1. **OpticalHeader** (`/app/frontend/src/components/OpticalHeader.jsx`)
   - Sticky navigation with dark theme (slate-900 to blue-900 gradient)
   - Scrolls to white background on scroll
   - Mobile responsive hamburger menu
   - Call Now CTA button

2. **OpticalHero** (`/app/frontend/src/components/OpticalHero.jsx`)
   - Large headline with urgency banner ("Visit Today – Special Offers Available!")
   - Trust signals: 4.6 rating, Near Lakhpati Hospital, Operating hours
   - Triple CTA: Call Now, Book Eye Test, Chat on WhatsApp
   - Statistics: 500+ Frame Styles, 1000+ Customers, 10+ Years, 24/7 WhatsApp
   - Background image overlay

3. **OpticalAbout** (`/app/frontend/src/components/OpticalAbout.jsx`)
   - Store description and trust-building content
   - Professional image from optical store
   - Key points: Authentic Products, Customer Satisfaction, Expert Guidance
   - Floating rating card overlay

4. **OpticalServices** (`/app/frontend/src/components/OpticalServices.jsx`)
   - 6 service cards with hover animations
   - Services: Eye Testing, Eyeglasses, Contact Lenses, Vision Consultation, **Perfumes & Attar**, Lens Replacement
   - Icon-based display with gradient backgrounds

5. **OpticalFeatures** (`/app/frontend/src/components/OpticalFeatures.jsx`)
   - Why Choose Us section
   - 4 features: High-Quality Lenses, Affordable Pricing, Expert Guidance, Convenient Location
   - Gradient background cards with hover effects

6. **OpticalProducts** (`/app/frontend/src/components/OpticalProducts.jsx`)
   - 6 product categories with **professional images from Unsplash/Pexels**
   - Categories: Men's Frames, Women's Frames, Kids Collection, Contact Lenses, Premium Perfumes, Traditional Attar
   - Image overlay with gradient
   - "Explore Collection" CTA on each card

7. **OpticalTestimonials** (`/app/frontend/src/components/OpticalTestimonials.jsx`)
   - 4 customer reviews with 5-star ratings
   - Gradient card backgrounds
   - Avatar initials

8. **OpticalCTA** (`/app/frontend/src/components/OpticalCTA.jsx`)
   - Bold conversion section with blue gradient background
   - Large phone number display
   - Dual CTAs: Call Now (white button), Book Appointment (black button)
   - Trust badge at bottom

9. **OpticalContact** (`/app/frontend/src/components/OpticalContact.jsx`)
   - Contact information cards with icons
   - Google Maps embed
   - Quick contact form (Name, Phone, Requirement)
   - Form validation and toast notification (FRONTEND ONLY)

10. **OpticalFAQ** (`/app/frontend/src/components/OpticalFAQ.jsx`)
    - 5 FAQs in accordion format
    - Smooth animations
    - Common questions about services

11. **OpticalFooter** (`/app/frontend/src/components/OpticalFooter.jsx`)
    - 4-column layout: About, Quick Links, Services, Contact
    - Social media icons (Facebook, Instagram, Twitter)
    - SEO keywords in footer text

12. **OpticalWhatsApp** (`/app/frontend/src/components/OpticalWhatsApp.jsx`)
    - Floating WhatsApp button (bottom-right)
    - Pulsing animation
    - Pre-filled message for optical store
    - Tooltip on hover

#### Data Layer:
- **Mock Data** (`/app/frontend/src/data/opticalMock.js`)
  - Store information
  - 6 services (including perfumes & attar)
  - 4 features
  - 6 product categories with **real professional images**
  - 4 testimonials
  - 5 FAQs
  - Requirement dropdown options

#### Design Implementation:
- **Premium color scheme:** Blue (#2563eb), Black/Slate (#0f172a, #1e293b), White (#ffffff)
- **Professional images integrated:**
  - Hero background: Optical store interior
  - About section: Customer in optical store
  - Men's frames: Stylish eyeglasses
  - Women's frames: Elegant eyewear
  - Kids frames: Colorful collection
  - Perfumes: Designer bottles (Chanel, Jimmy Choo)
  - Attar: Luxury fragrance collection
- **Gradient usage:** Blue-to-black gradients for premium feel
- **Mobile responsive:** Tested at 375px and 1920px
- **Smooth animations:** Hover effects, scale transforms, shadow transitions
- **Conversion optimization:**
  - Sticky header with Call button
  - Multiple CTAs throughout page
  - WhatsApp floating button
  - Urgency indicators
  - Large phone number displays

---

## Prioritized Backlog

### P0 - Backend Integration (Next Phase)
1. **Contact Form API**
   - POST `/api/optical/contact` - Store contact requests
   - Schema: name, phone, requirement, timestamp
   - WhatsApp notification to store owner
   - SMS confirmation to customer

2. **Product Inquiry System**
   - Track which product categories get most clicks
   - Store customer interest data

3. **Database Models**
   - Contact inquiries collection
   - Product interest tracking

### P1 - Enhanced Features
1. **WhatsApp Business Integration**
   - Automated responses
   - Product catalog on WhatsApp
   - Order inquiries via WhatsApp

2. **Virtual Try-On**
   - AR-based frame try-on
   - Camera integration for mobile

3. **Price List Management**
   - Admin panel to manage product prices
   - Display prices on frontend

### P2 - E-commerce Features
1. **Online Store**
   - Shopping cart
   - Online ordering
   - Payment gateway (Razorpay)
   - Delivery tracking

2. **Customer Portal**
   - Order history
   - Prescription uploads
   - Reorder contact lenses

3. **Inventory Management**
   - Stock tracking
   - Low stock alerts
   - Automated reorder

---

## API Contracts (For Backend Implementation)

### POST /api/optical/contact
**Request Body:**
```json
{
  "name": "string (required)",
  "phone": "string (required, 10 digits)",
  "requirement": "string (required, enum)",
  "timestamp": "datetime (auto-generated)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "We'll contact you shortly!",
  "contactId": "uuid"
}
```

### GET /api/optical/contacts (Admin)
**Response:**
```json
{
  "contacts": [
    {
      "id": "uuid",
      "name": "string",
      "phone": "string",
      "requirement": "string",
      "createdAt": "datetime"
    }
  ]
}
```

---

## Mock Data Currently Used

All data is stored in `/app/frontend/src/data/opticalMock.js`:

### Products with Real Images:
1. **Men's Frames** - https://images.unsplash.com/photo-1766998224439-9f048ed4d687
2. **Women's Frames** - https://images.unsplash.com/photo-1755519024779-ff6e5016db0b
3. **Kids Collection** - https://images.pexels.com/photos/13430474/pexels-photo-13430474.jpeg
4. **Contact Lenses** - https://images.pexels.com/photos/12700452/pexels-photo-12700452.jpeg
5. **Premium Perfumes** - https://images.pexels.com/photos/7703038/pexels-photo-7703038.jpeg
6. **Traditional Attar** - https://images.pexels.com/photos/35930230/pexels-photo-35930230.jpeg

### Services (6 items):
- Eye Testing, Eyeglasses, Contact Lenses, Vision Consultation, Perfumes & Attar, Lens Replacement

### Customer Reviews (4 testimonials):
- All 5-star ratings from local Surat customers

**Note:** Contact form currently logs to console. Backend integration needed for WhatsApp notifications.

---

## Design Guidelines Followed

✅ Premium blue + black + white color scheme  
✅ Professional product images integrated  
✅ Mobile-first responsive design  
✅ Conversion-focused CTAs throughout  
✅ Trust signals prominently displayed  
✅ Smooth animations and transitions  
✅ SEO-optimized content  
✅ WhatsApp integration ready  
✅ Urgency indicators for conversions  
✅ Clean, modern, premium UI  

---

## Next Action Items - Anas Optical

1. **Immediate:**
   - Verify all product images load correctly
   - Test WhatsApp button functionality
   - Update social media links

2. **Backend Phase:**
   - Build contact form API with WhatsApp notifications
   - Create admin panel to view inquiries
   - Add analytics tracking

3. **Marketing:**
   - Set up Google My Business
   - Enable WhatsApp Business features
   - Create social media presence

---

- Eye care and maternity services
- Frontend MVP completed

### Phase 2: Anas Optical Store Website (Current - Dec 16, 2025)
- Premium optical store website
- Located near Lakhpati Hospital
- Eyewear, contact lenses, perfumes & attar
- Frontend MVP completed

---

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
