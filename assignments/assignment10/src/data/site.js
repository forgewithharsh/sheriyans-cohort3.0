// Static content that isn't part of the product catalog (which now comes
// from the Fake Store API — see src/hooks/useFakeStore.js).

export const team = [
  { initial: "A", name: "Aryan Shah", role: "Founder & CEO", color: "bg-brand text-ink-950" },
  { initial: "P", name: "Priya Mehta", role: "Head of Product", color: "bg-blue-500 text-white" },
  { initial: "R", name: "Rohan Verma", role: "Lead Engineer", color: "bg-purple-500 text-white" },
  { initial: "S", name: "Sneha Kapoor", role: "Design Director", color: "bg-rose-500 text-white" },
];

export const values = [
  {
    title: "Trust",
    desc: "Every product is verified for quality and authenticity before listing.",
    icon: "shield",
  },
  {
    title: "Speed",
    desc: "We obsess over delivery times so your orders arrive when promised.",
    icon: "truck",
  },
  {
    title: "Community",
    desc: "Built around real customer feedback, not just business metrics.",
    icon: "heart",
  },
  {
    title: "Quality",
    desc: "We curate the best — no filler, no junk, just great products.",
    icon: "star",
  },
];

export const aboutStats = [
  { value: "20K+", label: "Products" },
  { value: "50K+", label: "Happy Customers" },
  { value: "4.9", label: "Avg. Rating" },
  { value: "99%", label: "On-time Delivery" },
];
