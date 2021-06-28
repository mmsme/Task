interface Step {
  title: string;
  content: string;
  icon: string;
}

export const Stepper_Menu: Step[] = [
  {
    title: 'الخطوه 1',
    content: 'تحديد العنوان',
    icon: 'fas fa-map-marker-alt',
  },
  {
    title: '2 الخطوه ',
    content: 'اختيار الباقة',
    icon: 'fas fa-clipboard-list',
  },
  {
    title: 'الخطوه 3',
    content: 'اختيار العامله',
    icon: 'far fa-id-card',
  },
  {
    title: 'الخطوه 4',
    content: 'التفاصيل',
    icon: 'fas fa-copy',
  },
  {
    title: 'الخطوه 5',
    content: 'عرض العقد',
    icon: 'fas fa-file-signature',
  },
  {
    title: 'الخطوه 6',
    content: 'المرفقات',
    icon: 'fas fa-file',
  },
  {
    title: 'الخطوه 7',
    content: 'الدفع',
    icon: 'far fa-credit-card',
  },
];
