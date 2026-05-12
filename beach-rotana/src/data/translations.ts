export type Lang = 'en' | 'ar';

export interface Translations {
  appName: string;
  tagline: string;
  poweredBy: string;

  toggleLang: string;

  moodQuestion: string;
  moods: {
    'light-social':      { label: string; sub: string };
    'proper-dinner':     { label: string; sub: string };
    'drinks-atmosphere': { label: string; sub: string };
    'specific-craving':  { label: string; sub: string };
    'surprise-me':       { label: string; sub: string };
  };

  followUpProperDinner: {
    question: string;
    optionA: string;
    optionB: string;
  };
  followUpLightSocial: {
    question: string;
    optionA: string;
    optionB: string;
  };

  cravingQuestion: string;
  cravings: Record<string, string>;

  recommendationsTitle: string;
  seeOtherOptions: string;
  changeMood: string;
  backToMood: string;

  hours: string;
  setting: string;
  sendReservation: string;
  callDirect: string;
  orTry: string;

  reservationTitle: string;
  reservationSubtitle: string;
  fieldName: string;
  fieldPhone: string;
  fieldGuests: string;
  fieldTime: string;
  fieldTimePlaceholder: string;
  fieldEmailOptional: string;
  submitButton: string;
  teamNote: string;
  teamName: string;
  teamPhone: string;
  teamEmail: string;
  guestSingular: string;
  guestPlural: string;

  confirmationTitle: string;
  confirmationBody: string;
  confirmationNote: string;
  startOver: string;

  back: string;
  errorRequired: string;
  emailInvalid: string;

  viewAllVenues: string;
  surpriseAgain: string;
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  en: {
    appName: 'TASTE',
    tagline: 'Taste Beach Rotana, your way.',
    poweredBy: 'Beach Rotana · Abu Dhabi',

    toggleLang: 'عربي',

    moodQuestion: "What are you in the mood for?",
    moods: {
      'light-social':      { label: 'Something light & social', sub: 'Casual vibes, good company' },
      'proper-dinner':     { label: 'A proper dinner',          sub: 'Sit down and take your time' },
      'drinks-atmosphere': { label: 'Drinks & atmosphere',      sub: 'The night is still young' },
      'specific-craving':  { label: "I'm craving something",   sub: 'Tell us exactly what' },
      'surprise-me':       { label: 'Surprise me',              sub: 'I trust your taste' },
    },

    followUpProperDinner: {
      question: 'Are you after something relaxed, or elevated?',
      optionA: 'Relaxed & convivial',
      optionB: 'Elevated & refined',
    },
    followUpLightSocial: {
      question: 'Would you prefer indoors or outdoors?',
      optionA: 'Indoors',
      optionB: 'Outdoors',
    },

    cravingQuestion: "What are you craving?",
    cravings: {
      burgers:           'Burgers',
      pasta:             'Pasta',
      sushi:             'Sushi',
      steak:             'Steak',
      seafood:           'Fresh seafood',
      pizza:             'Pizza',
      indian:            'Indian flavours',
      'coffee-pastries': 'Coffee & pastries',
      cocktails:         'Cocktails',
      shisha:            'Shisha',
      dessert:           'Dessert & sweet tea',
      lighter:           'Something lighter',
    },

    recommendationsTitle: 'We recommend',
    seeOtherOptions: 'See other options',
    changeMood: 'Change mood',
    backToMood: 'Back',
    orTry: 'Or try',

    hours: 'Hours',
    setting: 'Setting',
    sendReservation: 'Send Reservation Request',
    callDirect: 'Call directly',

    reservationTitle: 'Request a table',
    reservationSubtitle: 'at',
    fieldName: 'Your name',
    fieldPhone: 'Phone number',
    fieldGuests: 'Guests',
    fieldTime: 'Preferred time',
    fieldTimePlaceholder: 'e.g. 7:30 PM',
    fieldEmailOptional: 'Email address (optional)',
    submitButton: 'Send Reservation Request',
    teamNote:
      'Your request will be forwarded to the Beach Rotana reservations team.',
    teamName: 'Beach Rotana Reservations',
    teamPhone: '+971 2 697 9000',
    teamEmail: 'res.beach@rotana.com',
    guestSingular: 'guest',
    guestPlural: 'guests',

    confirmationTitle: 'Thank you',
    confirmationBody:
      'Your reservation request has been received. The Beach Rotana team will be in touch shortly to confirm your table.',
    confirmationNote: 'Questions? Call +971 2 697 9000',
    startOver: 'Back to the beginning',

    back: 'Back',
    errorRequired: 'This field is required',
    emailInvalid: 'Please enter a valid email address',

    viewAllVenues: 'View all dining venues',
    surpriseAgain: 'Try another surprise',
  },

  ar: {
    appName: 'تيست',
    tagline: 'تذوّق بيتش روتانا، بأسلوبك.',
    poweredBy: 'بيتش روتانا · أبوظبي',

    toggleLang: 'English',

    moodQuestion: 'ماذا تشتهي اليوم؟',
    moods: {
      'light-social':      { label: 'شيء خفيف واجتماعي',      sub: 'أجواء غير رسمية ورفقة طيبة' },
      'proper-dinner':     { label: 'عشاء لا يُنسى',           sub: 'اجلس وخذ وقتك' },
      'drinks-atmosphere': { label: 'مشروبات وأجواء مميزة',    sub: 'الليل ما زال في بدايته' },
      'specific-craving':  { label: 'أبحث عن شيء محدد',       sub: 'أخبرنا بالضبط ما تريد' },
      'surprise-me':       { label: 'فاجئني',                   sub: 'أثق بذوقكم' },
    },

    followUpProperDinner: {
      question: 'تفضّل جواً مريحاً أم راقياً؟',
      optionA: 'مريح وحميمي',
      optionB: 'راقٍ ومتميز',
    },
    followUpLightSocial: {
      question: 'تفضّل داخلياً أم في الهواء الطلق؟',
      optionA: 'داخلي',
      optionB: 'في الهواء الطلق',
    },

    cravingQuestion: 'ماذا تشتهي تحديداً؟',
    cravings: {
      burgers:           'برغر',
      pasta:             'باستا',
      sushi:             'سوشي',
      steak:             'ستيك',
      seafood:           'مأكولات بحرية طازجة',
      pizza:             'بيتزا',
      indian:            'نكهات هندية',
      'coffee-pastries': 'قهوة ومعجنات',
      cocktails:         'كوكتيلات',
      shisha:            'شيشة',
      dessert:           'حلويات وشاي',
      lighter:           'شيء خفيف',
    },

    recommendationsTitle: 'نرشح لك',
    seeOtherOptions: 'خيارات أخرى',
    changeMood: 'تغيير المزاج',
    backToMood: 'رجوع',
    orTry: 'أو جرب',

    hours: 'أوقات العمل',
    setting: 'الأجواء',
    sendReservation: 'إرسال طلب الحجز',
    callDirect: 'اتصل مباشرة',

    reservationTitle: 'احجز طاولتك',
    reservationSubtitle: 'في',
    fieldName: 'اسمك',
    fieldPhone: 'رقم الهاتف',
    fieldGuests: 'عدد الضيوف',
    fieldTime: 'الوقت المفضل',
    fieldTimePlaceholder: 'مثال: 7:30 مساءً',
    fieldEmailOptional: 'البريد الإلكتروني (اختياري)',
    submitButton: 'إرسال طلب الحجز',
    teamNote: 'سيتم إرسال طلبك إلى فريق حجوزات بيتش روتانا.',
    teamName: 'فريق حجوزات بيتش روتانا',
    teamPhone: '+971 2 697 9000',
    teamEmail: 'res.beach@rotana.com',
    guestSingular: 'ضيف',
    guestPlural: 'ضيوف',

    confirmationTitle: 'شكراً لك',
    confirmationBody:
      'تم استلام طلب حجزك. سيتواصل معك فريق بيتش روتانا قريباً لتأكيد طاولتك.',
    confirmationNote: 'للاستفسار، اتصل على +971 2 697 9000',
    startOver: 'العودة إلى البداية',

    back: 'رجوع',
    errorRequired: 'هذا الحقل مطلوب',
    emailInvalid: 'أدخل بريداً إلكترونياً صحيحاً',

    viewAllVenues: 'جميع مطاعمنا',
    surpriseAgain: 'مفاجأة أخرى',
  },
};
