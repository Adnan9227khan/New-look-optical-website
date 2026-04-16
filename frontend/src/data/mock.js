// Mock data for Lakhpati Hospital website

export const hospitalInfo = {
  name: "Lakhpati Hospital",
  tagline: "Eye Care Center & Maternity Home",
  phone: "+917359201616",
  email: "info@lakhpatihospital.com",
  address: {
    full: "Al-Hamd Palace, Nanavat Main Road, Nanavat, Surat, Gujarat – 395003",
    street: "Al-Hamd Palace, Nanavat Main Road",
    area: "Nanavat",
    city: "Surat",
    state: "Gujarat",
    pincode: "395003"
  },
  hours: "10:30 AM – 9:00 PM",
  daysOpen: "Monday to Sunday",
  rating: 4.6,
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8744556565657!2d72.82763131492656!3d21.195890885917893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDExJzQ1LjIiTiA3MsKwNDknMzkuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
};

export const services = [
  {
    id: 1,
    title: "Eye Care Services",
    description: "Comprehensive eye examinations, vision testing, and treatment for various eye conditions. Expert diagnosis and care for your vision health.",
    icon: "Eye"
  },
  {
    id: 2,
    title: "Contact Lens Solutions",
    description: "Premium contact lenses fitting, consultation, and ongoing support. Wide range of brands and types to suit your lifestyle needs.",
    icon: "Glasses"
  },
  {
    id: 3,
    title: "Maternity Care",
    description: "Complete maternal healthcare services with experienced professionals. Safe and comfortable environment for mother and baby.",
    icon: "Baby"
  }
];

export const features = [
  {
    id: 1,
    title: "Experienced Professionals",
    description: "Skilled doctors and healthcare professionals with years of experience",
    icon: "UserCheck"
  },
  {
    id: 2,
    title: "Affordable Pricing",
    description: "Quality healthcare at prices that won't break your budget",
    icon: "IndianRupee"
  },
  {
    id: 3,
    title: "Trusted by Patients",
    description: "4.6-star rating and thousands of satisfied patients trust us",
    icon: "Heart"
  },
  {
    id: 4,
    title: "Modern Equipment",
    description: "Latest medical technology and state-of-the-art facilities",
    icon: "Settings"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Patel",
    initials: "RP",
    rating: 5,
    text: "Excellent eye care service! Doctor was very professional and the staff was friendly. Got my contact lenses fitted perfectly. Highly recommended!"
  },
  {
    id: 2,
    name: "Meera Shah",
    initials: "MS",
    rating: 5,
    text: "Amazing maternity care! The doctors and nurses were so supportive throughout my pregnancy. Clean facility and very affordable prices."
  },
  {
    id: 3,
    name: "Amit Kumar",
    initials: "AK",
    rating: 5,
    text: "Best eye hospital in Surat! Quick appointment, thorough check-up, and reasonable costs. Been coming here for 3 years now."
  },
  {
    id: 4,
    name: "Priya Desai",
    initials: "PD",
    rating: 5,
    text: "Wonderful experience with the eye examination. Very detailed check-up and clear explanation of my condition. Will definitely return!"
  },
  {
    id: 5,
    name: "Vikram Trivedi",
    initials: "VT",
    rating: 5,
    text: "Great service for contact lens fitting. Staff is knowledgeable and patient. The location is convenient and parking is available."
  }
];

export const faqs = [
  {
    id: 1,
    question: "What are your operating hours?",
    answer: "We are open from 10:30 AM to 9:00 PM, Monday through Sunday. We're here to serve you every day of the week!"
  },
  {
    id: 2,
    question: "Do I need an appointment for eye check-up?",
    answer: "While walk-ins are welcome, we recommend booking an appointment to avoid waiting time and ensure you get the best care from our specialists."
  },
  {
    id: 3,
    question: "What types of contact lenses do you provide?",
    answer: "We offer a wide range of contact lenses including daily, weekly, monthly disposables, colored lenses, and specialized lenses for astigmatism and presbyopia."
  },
  {
    id: 4,
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance plans. Please bring your insurance card and we'll help you understand your coverage and benefits."
  },
  {
    id: 5,
    question: "What maternity services do you provide?",
    answer: "We provide comprehensive maternity care including prenatal check-ups, delivery services, postnatal care, and newborn care with experienced medical professionals."
  }
];

export const serviceOptions = [
  { value: "", label: "Select Service" },
  { value: "eye-checkup", label: "Eye Check-up" },
  { value: "contact-lens", label: "Contact Lens Consultation" },
  { value: "maternity", label: "Maternity Care" },
  { value: "vision-testing", label: "Vision Testing" },
  { value: "general", label: "General Consultation" }
];
