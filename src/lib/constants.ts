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
      { label: 'FAQ', href: '/#faq' },
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

export const faqs = [
  {
    question: 'UIT Knowledge là gì?',
    answer:
      'UIT Knowledge là nơi cung cấp tài liệu học tập và các sản phẩm hỗ trợ dành cho sinh viên Trường Đại học Công nghệ Thông tin (UIT) - ĐHQG TP.HCM. tập trung vào các môn IT và Toán.',
  },
  {
    question: 'Tôi có thể mua sản phẩm gì tại đây?',
    answer:
      'Chúng tôi cung cấp các sản phẩm như áo thun UIT Knowledge, tài liệu in ấn, và các vật dụng học tập khác. Tất cả sản phẩm đều có thể xem và đặt hàng qua mục Cửa hàng trên website.',
  },
  {
    question: 'Tôi có thể donate để hỗ trợ dự án không?',
    answer:
      'Có! Chúng tôi rất hoan nghênh sự hỗ trợ từ cộng đồng. Bạn có thể donate qua các hình thức mua sản phẩm hoặc liên hệ trực tiếp để biết thêm chi tiết về các cách đóng góp khác.',
  },
  {
    question: 'Tài liệu học tập có miễn phí không?',
    answer:
      'Phần lớn tài liệu cơ bản được cung cấp miễn phí trên website. Một số tài liệu chuyên sâu hoặc đề thi có đáp án chi tiết có thể có phí để duy trì hoạt động của dự án.',
  },
];
