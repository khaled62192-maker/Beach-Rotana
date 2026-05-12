export type MoodKey =
  | 'light-social'
  | 'proper-dinner'
  | 'drinks-atmosphere'
  | 'specific-craving'
  | 'surprise-me';

export type CravingKey =
  | 'burgers'
  | 'pasta'
  | 'sushi'
  | 'steak'
  | 'seafood'
  | 'pizza'
  | 'indian'
  | 'coffee-pastries'
  | 'cocktails'
  | 'shisha'
  | 'dessert'
  | 'lighter';

export interface Venue {
  id: string;
  nameEn: string;
  nameAr: string;
  cuisine: string;
  cuisineAr: string;
  hours: string;
  hoursAr: string;
  setting: string;
  settingAr: string;
  description: string;
  descriptionAr: string;
  keyFeature: string;
  keyFeatureAr: string;
  tags: string[];
  moodTags: MoodKey[];
  imageUrl: string;
}

export const VENUES: Venue[] = [
  {
    id: 'finz',
    nameEn: 'Finz',
    nameAr: 'فينز',
    cuisine: 'Seafood',
    cuisineAr: 'مأكولات بحرية',
    hours: 'Lunch & Dinner',
    hoursAr: 'الغداء والعشاء',
    setting: 'Overwater terrace · Waterfront',
    settingAr: 'تراس فوق الماء · الواجهة البحرية',
    description:
      'Perched over the Arabian Gulf on an overwater terrace, Finz is a Michelin-selected seafood destination celebrated for its pristine catch and panoramic sea views. The sound of the water sets the pace for a truly memorable evening.',
    descriptionAr:
      'يقع فينز فوق مياه الخليج العربي مباشرةً على تراسه المائي الفريد، وهو وجهة مختارة من دليل ميشلان للمأكولات البحرية الطازجة والإطلالات البحرية الخلابة. دع صوت الأمواج يرسم إيقاع أمسية لا تُنسى.',
    keyFeature: 'Michelin-selected · Overwater terrace · Fresh catch daily',
    keyFeatureAr: 'مختار من ميشلان · تراس مائي · صيد طازج يومياً',
    tags: ['seafood', 'fine-dining', 'outdoor', 'waterfront', 'michelin'],
    moodTags: ['proper-dinner', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
  },
  {
    id: 'pregos',
    nameEn: "Prego's",
    nameAr: 'بريغوز',
    cuisine: 'Italian',
    cuisineAr: 'مطبخ إيطالي',
    hours: 'Lunch & Dinner',
    hoursAr: 'الغداء والعشاء',
    setting: 'Indoor + sea-view terrace',
    settingAr: 'داخلي وتراس بإطلالة بحرية',
    description:
      "Prego's brings the heart of Italy to Abu Dhabi's waterfront — wood-fired pizzas, handmade pasta, and an alfresco terrace overlooking the sea. Casual enough for a long lunch, special enough for a celebration.",
    descriptionAr:
      'يجمع بريغوز بين أصالة المطبخ الإيطالي وسحر الواجهة البحرية الأبوظبية، من البيتزا المحروقة بالحطب إلى المعكرونة اليدوية على تراس مفتوح. مريح بما يكفي لغداء ممتد، ومميز بما يكفي للاحتفال.',
    keyFeature: 'Wood-fired pizza · Sea-view terrace · Italian classics',
    keyFeatureAr: 'بيتزا بالحطب · تراس بحري · كلاسيكيات إيطالية',
    tags: ['italian', 'pizza', 'pasta', 'outdoor', 'sea-view'],
    moodTags: ['light-social', 'proper-dinner', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
  },
  {
    id: 'trader-vics',
    nameEn: "Trader Vic's",
    nameAr: 'ترايدر فيكس',
    cuisine: 'French-Polynesian',
    cuisineAr: 'بولينيزي-فرنسي',
    hours: 'Dinner',
    hoursAr: 'العشاء',
    setting: 'Bar & restaurant · Indoor',
    settingAr: 'بار ومطعم · داخلي',
    description:
      "Trader Vic's is the original tiki bar experience — legendary Mai Tais, exotic cocktails, and live entertainment that turns dinner into a night out. The energy starts at sundown and never looks back.",
    descriptionAr:
      'ترايدر فيكس هو تجربة البار الاستوائي الأصيلة — ماي تاي الأسطوري وكوكتيلات غريبة وموسيقى حية تحوّل العشاء إلى سهرة. تبدأ الأجواء مع الغروب ولا تتوقف.',
    keyFeature: 'Mai Tai Bar · Live entertainment · Tiki atmosphere',
    keyFeatureAr: 'بار ماي تاي · ترفيه حي · أجواء تيكي',
    tags: ['cocktails', 'bar', 'live-entertainment', 'indoor', 'polynesian'],
    moodTags: ['drinks-atmosphere', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=80',
  },
  {
    id: 'rodeo-grill',
    nameEn: 'Rodeo Grill',
    nameAr: 'روديو غريل',
    cuisine: 'Steakhouse',
    cuisineAr: 'مطعم شرائح اللحم',
    hours: 'Lunch & Dinner',
    hoursAr: 'الغداء والعشاء',
    setting: 'Indoor · Fine dining',
    settingAr: 'داخلي · ضيافة راقية',
    description:
      'Rodeo Grill is where serious carnivores come for the finest charcoal-grilled cuts, an award-winning wine cellar, and a hushed fine-dining atmosphere. Every detail — from the cut to the glass — is chosen with precision.',
    descriptionAr:
      'روديو غريل هو الوجهة التي يقصدها عشاق اللحم الراقي، بمشويات فحمية من أرقى القطعات وقبو نبيذ حائز على جوائز وأجواء راقية هادئة. كل شيء محسوب بدقة — من القطعة إلى الكأس.',
    keyFeature: 'Charcoal grill · Award-winning wine cellar · Fine dining',
    keyFeatureAr: 'مشوي بالفحم · قبو نبيذ حائز جوائز · ضيافة راقية',
    tags: ['steak', 'fine-dining', 'indoor', 'wine', 'elevated'],
    moodTags: ['proper-dinner', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80',
  },
  {
    id: 'brauhaus',
    nameEn: 'Brauhaus',
    nameAr: 'براوهاوس',
    cuisine: 'German / Bavarian',
    cuisineAr: 'ألماني / بافاري',
    hours: 'Lunch & Dinner',
    hoursAr: 'الغداء والعشاء',
    setting: 'Indoor · Bavarian beer hall',
    settingAr: 'داخلي · قاعة بيرة بافارية',
    description:
      'Brauhaus brings authentic Bavarian warmth to Abu Dhabi — hearty sausages, soft pretzels, craft beers on tap, and the kind of communal atmosphere that turns strangers into friends. Come in for a pint; stay for the company.',
    descriptionAr:
      'يجلب براوهاوس دفء بافاريا الأصيل إلى أبوظبي — نقانق دسمة وبريتزل طازج وبيرة حرفية من الصنبور وأجواء جماعية تحوّل الغرباء إلى أصدقاء.',
    keyFeature: 'Bavarian beer hall · Craft beers on tap · Hearty classics',
    keyFeatureAr: 'قاعة بيرة بافارية · بيرة حرفية · كلاسيكيات دسمة',
    tags: ['german', 'burgers', 'beer', 'indoor', 'casual', 'social'],
    moodTags: ['light-social', 'drinks-atmosphere', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },
  {
    id: 'benihana',
    nameEn: 'Benihana',
    nameAr: 'بنيهانا',
    cuisine: 'Japanese Teppanyaki',
    cuisineAr: 'تيبانياكي ياباني',
    hours: 'Lunch & Dinner',
    hoursAr: 'الغداء والعشاء',
    setting: 'Indoor · Interactive teppanyaki',
    settingAr: 'داخلي · تيبانياكي تفاعلي',
    description:
      'Benihana is dinner as performance art — skilled teppanyaki chefs cook your meal right in front of you with theatrical flair. Pair the show with fresh sushi from the bar for the full experience.',
    descriptionAr:
      'بنيهانا هو العشاء كفن أدائي — طهاة تيبانياكي يطبخون وجبتك أمامك بمهارة ومسرحية آسرة. أضف إليها السوشي الطازج من البار لتكتمل التجربة.',
    keyFeature: 'Live teppanyaki show · Sushi bar · Interactive dining',
    keyFeatureAr: 'عرض تيبانياكي حي · بار سوشي · تجربة تفاعلية',
    tags: ['japanese', 'teppanyaki', 'sushi', 'indoor', 'interactive', 'fun'],
    moodTags: ['proper-dinner', 'light-social', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&q=80',
  },
  {
    id: 'indigo',
    nameEn: 'Indigo',
    nameAr: 'إنديغو',
    cuisine: 'Indian',
    cuisineAr: 'مطبخ هندي',
    hours: 'Lunch & Dinner',
    hoursAr: 'الغداء والعشاء',
    setting: 'Indoor · Show kitchen',
    settingAr: 'داخلي · مطبخ استعراضي',
    description:
      'Indigo celebrates the full spectrum of Indian cuisine, from slow-cooked curries to freshly baked naan from the tandoori show kitchen. Aromatic, vibrant, and rooted in culinary tradition.',
    descriptionAr:
      'يحتفي إنديغو بطيف المطبخ الهندي الكامل، من الكاري المطبوخ على نار هادئة إلى الخبز الطازج من تنور المطبخ الاستعراضي. عطري ونابض بالحياة وعميق الجذور في التراث الطهوي.',
    keyFeature: 'Tandoori show kitchen · Signature curries · Aromatic spices',
    keyFeatureAr: 'مطبخ تنور استعراضي · كاري مميزة · توابل عطرية',
    tags: ['indian', 'curry', 'tandoori', 'indoor', 'aromatic'],
    moodTags: ['proper-dinner', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&q=80',
  },
  {
    id: 'beach-garden',
    nameEn: 'Beach Garden',
    nameAr: 'بيتش غاردن',
    cuisine: 'Mediterranean',
    cuisineAr: 'متوسطي',
    hours: 'Dinner',
    hoursAr: 'العشاء',
    setting: 'Outdoor alfresco · Beachside',
    settingAr: 'حديقة خارجية · على الشاطئ',
    description:
      "Beach Garden offers Mediterranean dining under the stars — alfresco tables on the beach with Abu Dhabi's glittering skyline as your backdrop. Grilled fish, mezze, and a gentle sea breeze make for effortless evenings.",
    descriptionAr:
      'يقدم بيتش غاردن وجبات متوسطية تحت النجوم على طاولات مفتوحة على الشاطئ بأضواء أفق أبوظبي خلفية ساحرة. سمك مشوي ومزة ونسيم البحر العليل لأمسيات لا تكلّف جهداً.',
    keyFeature: 'Alfresco beachside · Abu Dhabi skyline views · Mediterranean grill',
    keyFeatureAr: 'على الشاطئ في الهواء الطلق · إطلالة على أفق أبوظبي · مشاوي متوسطية',
    tags: ['mediterranean', 'outdoor', 'beach', 'lighter', 'alfresco'],
    moodTags: ['light-social', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
  },
  {
    id: 'al-shorfa',
    nameEn: 'Al Shorfa Lounge',
    nameAr: 'لاونج الشرفة',
    cuisine: 'Shisha Lounge',
    cuisineAr: 'لاونج شيشة',
    hours: 'All day',
    hoursAr: 'طوال اليوم',
    setting: 'Outdoor lounge · Sea & skyline views',
    settingAr: 'لاونج خارجي · إطلالة بحرية وعلى الأفق',
    description:
      'Al Shorfa Lounge is the place to slow down — premium shisha, Arabic coffee, and a mezze spread enjoyed with panoramic views of the sea and the Abu Dhabi skyline. Day or night, the pace here is yours to set.',
    descriptionAr:
      'لاونج الشرفة هو المكان المثالي للتمهّل — شيشة فاخرة وقهوة عربية ومزة شهية مع إطلالة بانورامية على البحر وأفق أبوظبي. صباحاً أو مساءً، أنت من يضبط الإيقاع.',
    keyFeature: 'Premium shisha · Arabic coffee · Sea & skyline views',
    keyFeatureAr: 'شيشة فاخرة · قهوة عربية · إطلالة بحرية وعلى الأفق',
    tags: ['shisha', 'cocktails', 'arabic', 'outdoor', 'mezze', 'lounge'],
    moodTags: ['drinks-atmosphere', 'light-social', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200&q=80',
  },
  {
    id: 'essence',
    nameEn: 'Essence',
    nameAr: 'إيسنس',
    cuisine: 'International',
    cuisineAr: 'دولي',
    hours: 'All day',
    hoursAr: 'طوال اليوم',
    setting: 'Indoor + terrace · All-day dining',
    settingAr: 'داخلي وتراس · طعام طوال اليوم',
    description:
      "Essence is the hotel's signature all-day dining destination, where live cooking stations and an ever-changing international buffet cater to every palate. Whether you want a quiet breakfast or a lavish dinner spread, Essence delivers.",
    descriptionAr:
      'إيسنس هو وجهة الطعام الرئيسية في الفندق على مدار اليوم، حيث تتنوع محطات الطهي الحي والبوفيه الدولي المتغير باستمرار لإرضاء كل ذوق.',
    keyFeature: 'Live cooking stations · International buffet · All-day dining',
    keyFeatureAr: 'محطات طهي حي · بوفيه دولي · طعام طوال اليوم',
    tags: ['buffet', 'international', 'indoor', 'dessert', 'lighter', 'all-day'],
    moodTags: ['light-social', 'proper-dinner', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80',
  },
  {
    id: 'cafe-columbia',
    nameEn: 'Café Columbia',
    nameAr: 'كافيه كولومبيا',
    cuisine: 'Café & Patisserie',
    cuisineAr: 'كافيه وحلواني',
    hours: 'All day',
    hoursAr: 'طوال اليوم',
    setting: 'Indoor · Lobby café',
    settingAr: 'داخلي · كافيه اللوبي',
    description:
      "Café Columbia is the hotel's artisan café, serving freshly baked pastries, specialty coffees, and light bites in the tranquil setting of the lobby. Perfect for a quiet morning coffee or an indulgent afternoon pause.",
    descriptionAr:
      'كافيه كولومبيا هو الكافيه الحرفي في الفندق، يقدم معجنات طازجة ومشروبات قهوة متخصصة ووجبات خفيفة في أجواء اللوبي الهادئة. مثالي لقهوة صباحية هنيئة أو استراحة بعد الظهر.',
    keyFeature: 'Fresh pastries · Specialty coffee · Tranquil lobby setting',
    keyFeatureAr: 'معجنات طازجة · قهوة متخصصة · أجواء اللوبي الهادئة',
    tags: ['coffee', 'pastries', 'lighter', 'indoor', 'cafe', 'dessert', 'all-day'],
    moodTags: ['light-social', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80',
  },
  {
    id: 'bay-view',
    nameEn: 'Bay View',
    nameAr: 'باي فيو',
    cuisine: 'Beach Bar',
    cuisineAr: 'بار الشاطئ',
    hours: 'Lunch',
    hoursAr: 'الغداء',
    setting: 'Outdoor · Beach & pool',
    settingAr: 'خارجي · الشاطئ والمسبح',
    description:
      'Bay View is the laid-back beach bar where you sip refreshing drinks with the infinity pool just steps away and the sea stretching out before you. Light bites, cold drinks, and unbeatable views.',
    descriptionAr:
      'باي فيو هو بار الشاطئ الذي تتناول فيه مشروباتك المنعشة مع مسبح لا نهاية له على بُعد خطوات والبحر يمتد أمامك. وجبات خفيفة ومشروبات باردة وإطلالات لا تُضاهى.',
    keyFeature: 'Beach & pool setting · Light bites · Cold drinks & cocktails',
    keyFeatureAr: 'شاطئ ومسبح · وجبات خفيفة · مشروبات باردة وكوكتيلات',
    tags: ['bar', 'beach', 'outdoor', 'lighter', 'burgers', 'cocktails', 'lunch-only'],
    moodTags: ['light-social', 'drinks-atmosphere', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  },
];
