export const links: { label: string; url: string }[] = [
  { label: 'Cửa hàng', url: '/shop' },
  { label: 'Tài liệu', url: '/docs' },
];

export interface SocialLink {
  href: string;
  label: string;
  icon: 'facebook' | 'youtube' | 'github';
}

export const socialLinks: SocialLink[] = [
  {
    href: 'https://www.facebook.com/GenCanyon',
    label: 'Facebook',
    icon: 'facebook',
  },
  {
    href: 'https://www.youtube.com/@UIT_Knowledge',
    label: 'YouTube',
    icon: 'youtube',
  },
  {
    href: 'https://github.com/Canyon5733/UIT-Knowledge-Web',
    label: 'Github',
    icon: 'github',
  },
];

export const sections = [
  {
    title: 'Cửa hàng',
    links: [
      { label: 'Sản phẩm mới', href: '/shop' },
      { label: 'Khuyến mãi', href: '/shop?sort=sale' },
      { label: 'Giỏ hàng', href: '/cart' },
    ],
  },
  {
    title: 'Tài liệu',
    links: [
      { label: 'Bài giảng', href: '/docs' },
      { label: 'Hướng dẫn', href: '/docs/guides' },
      { label: 'Tham khảo', href: '/docs/reference' },
      { label: 'FAQ', href: '/docs/faq' },
    ],
  },
  {
    title: 'Về chúng tôi',
    links: [
      { label: 'Liên hệ', href: '/contact' },
      { label: 'Về UIT Knowledge', href: '/about' },
      { label: 'Chính sách', href: '/privacy' },
    ],
  },
];
