export interface Testimonial {
  name: string;
  role: string;
  comment: string;
  image: string;
  link?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "CARLOS MENDIETA",
    role: "Director Creativo, Urban Cut",
    comment: "Confío mis herramientas más valiosas a Jorge Rodriguez. Su conocimiento de la ingeniería es incomparable en el país.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ugy0lj4JoSo6_x9VihrFwUvYXf7aMWFT-Zute6824KHu_kt8OxfpdTkZSRdln3efNMiR27b3VpBWYTd0VVU0iH2wpdnHpho9r4EJExs1Mpx4D-YWwfkVpn3AJ9aLogM52rRoXx20P3ZPNw33ygTibV46kvgJb44PTBUo0-QHXRcolC_xESn7bJA61lQ7_pVVU5yKhm9jlhwFU1utCMnI-C2uoVPZZX1dNu7A2V3GpWk7Uc4GHOMf7W8VjpANmYTT9w0-juanUdBpkw",
    link: "https://instagram.com/carlosmendieta"
  },
  {
    name: "ELENA RIVERA",
    role: "Owner, Studio Elite",
    comment: "La rapidez del servicio de mantenimiento preventivo nos permite mantener la operatividad del salón sin contratiempos.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uikYsnyoozMzJ79Oyeub7SPgUftOgUYCGIxgdhD8WRw4Olt_wYTSHbQZiQKdKgZO2ds-VNzRLO0wMzHjevztZaapwfTnMrfO3yxThdC5u1AUsKWfmpRAdaxssXMCqhTjxJbhxwxAi8pjWu3n4U_qrrMyvSil-p2bqZARfjnqAKavRf0sTcxaj1Grbfx73e9sQBR3klkr-UlUpvKPouKgmFPQ8bRl5D7nOCy6Tmumsi4VnAqwg_k83iIJxZz5p_L7BKRCwAXXFw_ffU"
    // No link here to test conditional button
  }
];
