// Edit this file to change site-wide content. No CMS or PHP required.
export const site = {
  name: "The First Impression",
  url: "https://example.com", // TODO: set to your production domain
  description:
    "A digital marketing agency helping brands make a memorable first impression.",
  whatsapp: "910000000000", // TODO: country code + number, digits only
  email: "hello@example.com", // TODO
  nav: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "The Work", href: "#work" },
    { label: "FAQ", href: "#faq" },
  ],
  rotatingWords: ["memorable", "magnetic", "unmissable", "trusted"],
};

export const whatsappUrl = (msg = "Hi, I'd like to talk about a project.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
