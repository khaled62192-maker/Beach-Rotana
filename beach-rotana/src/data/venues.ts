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
    setting: 'Restaurant & lounge · Indoor',
    settingAr: 'مطعم ولاونج · داخلي',
    description:
      "Trader Vic's brings the spirit of French Polynesia to Abu Dhabi — exotic cuisine, live entertainment, and an immersive tiki atmosphere that transforms dinner into an evening to remember. The energy builds at sundown and carries the night.",
    descriptionAr:
      'ترايدر فيكس يجلب روح بولينيزيا الفرنسية إلى أبوظبي — مأكولات استوائية شهية وترفيه حي وأجواء تيكي آسرة تحوّل العشاء إلى أمسية لا تُنسى. تتصاعد الطاقة مع غروب الشمس طوال الليل.',
    keyFeature: 'Polynesian cuisine · Live entertainment · Tiki atmosphere',
    keyFeatureAr: 'مأكولات بولينيزية · ترفيه حي · أجواء تيكي',
    tags: ['polynesian', 'live-entertainment', 'indoor', 'social', 'exotic'],
    moodTags: ['drinks-atmosphere', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?w=1200&q=80',
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
      'Rodeo Grill is where serious carnivores come for the finest charcoal-grilled cuts in a hushed, refined atmosphere. Every detail — from the premium cut to the immaculate table — is chosen with precision and care.',
    descriptionAr:
      'روديو غريل هو الوجهة التي يقصدها عشاق اللحم الراقي، بمشويات فحمية من أرقى القطعات وأجواء راقية هادئة. كل شيء محسوب بدقة — من القطعة إلى أدق التفاصيل.',
    keyFeature: 'Charcoal grill · Fine dining atmosphere · Premium cuts',
    keyFeatureAr: 'مشوي بالفحم · أجواء راقية · أرقى القطعات',
    tags: ['steak', 'fine-dining', 'indoor', 'elevated'],
    moodTags: ['proper-dinner', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1546241072-48010ad2862c?w=1200&q=80',
  },
  {
    id: 'brauhaus',
    nameEn: 'Brauhaus',
    nameAr: 'براوهاوس',
    cuisine: 'German / Bavarian',
    cuisineAr: 'ألماني / بافاري',
    hours: 'Lunch & Dinner',
    hoursAr: 'الغداء والعشاء',
    setting: 'Indoor · Bavarian tavern',
    settingAr: 'داخلي · حانة بافارية',
    description:
      'Brauhaus brings authentic Bavarian warmth to Abu Dhabi — hearty sausages, soft pretzels, and a communal atmosphere that turns strangers into friends. The long tables, lively crowd, and classic German kitchen make every visit feel like a celebration.',
    descriptionAr:
      'يجلب براوهاوس دفء بافاريا الأصيل إلى أبوظبي — نقانق دسمة وبريتزل طازج وأجواء جماعية تحوّل الغرباء إلى أصدقاء. الطاولات الطويلة والحشد المرح والمطبخ الألماني الكلاسيكي يجعل كل زيارة احتفالاً.',
    keyFeature: 'Bavarian tavern · Hearty classics · Communal dining',
    keyFeatureAr: 'حانة بافارية · كلاسيكيات دسمة · تناول طعام جماعي',
    tags: ['german', 'burgers', 'indoor', 'casual', 'social'],
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
    tags: ['shisha', 'arabic', 'outdoor', 'mezze', 'lounge'],
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
    cuisine: 'Beach Lounge',
    cuisineAr: 'لاونج الشاطئ',
    hours: 'Lunch',
    hoursAr: 'الغداء',
    setting: 'Outdoor · Beach & pool',
    settingAr: 'خارجي · الشاطئ والمسبح',
    description:
      'Bay View is the laid-back beach lounge where you unwind with refreshing drinks and light bites, the infinity pool just steps away and the sea stretching out before you. The ideal spot for a relaxed midday escape.',
    descriptionAr:
      'باي فيو هو لاونج الشاطئ الذي تسترخي فيه مع مشروبات منعشة ووجبات خفيفة، ومسبح لا نهاية له على بُعد خطوات والبحر يمتد أمامك. المكان المثالي لاستراحة منتصف النهار.',
    keyFeature: 'Beach & pool setting · Light bites · Refreshing drinks & views',
    keyFeatureAr: 'شاطئ ومسبح · وجبات خفيفة · مشروبات منعشة وإطلالات',
    tags: ['lounge', 'beach', 'outdoor', 'lighter', 'burgers', 'refreshments', 'lunch-only'],
    moodTags: ['light-social', 'drinks-atmosphere', 'surprise-me'],
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  },
];
