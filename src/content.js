import heart from './assets/heart.svg';
import cat from './assets/cat.svg';
import letter from './assets/letter.svg';
import rose from './assets/rose.svg';
import spark from './assets/spark.svg';

export const languages = [
  { code: 'ru', label: 'Русский', dir: 'ltr' },
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'es', label: 'Español', dir: 'ltr' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'zh', label: '中文', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' }
];

export const ui = {
  next: {
    ru: 'Дальше',
    en: 'Next',
    es: 'Siguiente',
    fr: 'Suivant',
    zh: '下一页',
    ar: 'التالي'
  },
  prev: {
    ru: 'Назад',
    en: 'Back',
    es: 'Atrás',
    fr: 'Retour',
    zh: '返回',
    ar: 'السابق'
  },
  resetGame: {
    ru: 'Сыграть ещё',
    en: 'Play again',
    es: 'Jugar de nuevo',
    fr: 'Rejouer',
    zh: '再玩一次',
    ar: 'العب مرة أخرى'
  },
  heartsFound: {
    ru: 'Собрано сердечек',
    en: 'Hearts collected',
    es: 'Corazones encontrados',
    fr: 'Cœurs collectés',
    zh: '已收集爱心',
    ar: 'القلوب المجمعة'
  },
  editHint: {
    ru: 'Error 429. Too many feelings',
    en: 'Error 429. Too many feelings',
    es: 'Error 429. Too many feelings',
    fr: 'Error 429. Too many feelings',
    zh: 'Error 429. Too many feelings',
    ar: 'Error 429. Too many feelings'
  },
  ctaLabel: {
    ru: 'Перейти дальше',
    en: 'Continue',
    es: 'Continuar',
    fr: 'Continuer',
    zh: '继续',
    ar: 'متابعة'
  },
  ctaHint: {
    ru: '',
    en: '',
    es: '',
    fr: '',
    zh: '',
    ar: ''
  },
  catLetterText: {
    ru: 'Я люблю тебя',
    en: 'I love you',
    es: 'Te amo',
    fr: 'Je t’aime',
    zh: '我爱你',
    ar: 'أحبكِ'
  }
};

export const gamePhrases = {
  ru: [
    'Ты лучшая',
    'Я люблю тебя',
    'Ты самая самая...',
    'Ты милашка',
    'Жизнь с тобой краше',
    'Ты — моё счастье',
    'Ты лучше всех',
    'Ты мой уют',
    'Ты греешь'
  ],
  en: [
    'You are the best',
    'I love you',
    'You are the very best...',
    'You are a cutie',
    'Life with you is brighter',
    'You are my happiness',
    'You are better than everyone',
    'You are my comfort',
    'You warm me'
  ],
  es: [
    'Eres la mejor',
    'Te amo',
    'Eres la mejor de todas...',
    'Eres una dulzura',
    'La vida contigo es más hermosa',
    'Tú eres mi felicidad',
    'Eres mejor que todos',
    'Tú eres mi refugio',
    'Tú me das calor'
  ],
  fr: [
    'Tu es la meilleure',
    'Je t’aime',
    'Tu es la meilleure de toutes...',
    'Tu es trop mignonne',
    'La vie avec toi est plus belle',
    'Tu es mon bonheur',
    'Tu es la meilleure de tous',
    'Tu es mon refuge',
    'Tu me réchauffes'
  ],
  zh: [
    '你是最棒的',
    '我爱你',
    '你是最最好的…',
    '你很可爱',
    '有你在生活更美',
    '你是我的幸福',
    '你比所有人都好',
    '你是我的港湾',
    '你温暖着我'
  ],
  ar: [
    'أنتِ الأفضل',
    'أحبكِ',
    'أنتِ الأفضل على الإطلاق...',
    'أنتِ لطيفة جداً',
    'الحياة معكِ أجمل',
    'أنتِ سعادتي',
    'أنتِ الأفضل من الجميع',
    'أنتِ ملاذي',
    'أنتِ تدفئينني'
  ]
};

export const slides = [
  {
    id: 'intro',
    transition: 'fade',
    title: {
      ru: 'Кристина!',
      en: 'Kristina!',
      es: '¡Kristina!',
      fr: 'Kristina !',
      zh: '克里斯蒂娜！',
      ar: 'كريستينا!'
    },
    body: {
      ru: [
        'Это небольшой проект, чтобы сказать тебе, что я чувствую.',
        'Ты делаешь мир теплее, а меня — счастливее.',
        'Листай дальше — там ещё сюрпризы.'
      ],
      en: [
        'This is a small project to tell you how I feel.',
        'You make the world warmer and me happier.',
        'Scroll ahead — there are more surprises.'
      ],
      es: [
        'Este es un pequeño proyecto para decirte lo que siento.',
        'Haces el mundo más cálido y a mí más feliz.',
        'Sigue adelante — hay más sorpresas.'
      ],
      fr: [
        'C\'est un petit projet pour te dire ce que je ressens.',
        'Tu rends le monde plus chaleureux et moi plus heureux.',
        'Continue — il y a encore des surprises.'
      ],
      zh: [
        '这是一个小项目，想告诉你我的感受。',
        '你让世界更温暖，也让我更幸福。',
        '继续往下看——还有更多惊喜。'
      ],
      ar: [
        'هذا مشروع صغير لأخبرك بما أشعر.',
        'أنتِ تجعلين العالم أدفأ وتجعلينني أكثر سعادة.',
        'تابعي للأمام — هناك المزيد من المفاجآت.'
      ]
    },
    images: [
      { src: heart, alt: { ru: 'Сердце', en: 'Heart', es: 'Corazón', fr: 'Cœur', zh: '爱心', ar: 'قلب' }, className: 'float slow', style: { '--x': '10%', '--y': '15%', '--size': '180px', '--delay': '0s' } },
      { src: spark, alt: { ru: 'Искра', en: 'Spark', es: 'Brillo', fr: 'Étincelle', zh: '闪光', ar: 'شرارة' }, className: 'spin', style: { '--x': '75%', '--y': '20%', '--size': '140px', '--delay': '0.2s' } },
      { src: letter, alt: { ru: 'Письмо', en: 'Letter', es: 'Carta', fr: 'Lettre', zh: '信', ar: 'رسالة' }, className: 'float', style: { '--x': '68%', '--y': '62%', '--size': '200px', '--delay': '0.4s' } }
    ]
  },
  {
    id: 'inspiration',
    transition: 'slide-left',
    title: {
      ru: 'Мы с тобой уже 175 дней!',
      en: 'We have been together for 175 days!',
      es: '¡Ya llevamos 175 días!',
      fr: 'Cela fait déjà 175 jours !',
      zh: '我们已经在一起175天了！',
      ar: 'نحن معًا منذ 175 يومًا!'
    },
    body: {
      ru: [
        'С тобой даже обычные дни становятся приключением :3',
        'Я люблю твою улыбку, взгляд и доброту.',
        'Спасибо, что ты есть.'
      ],
      en: [
        'With you, even ordinary days become an adventure :3',
        'I love your smile, your gaze, and your kindness.',
        'Thank you for being in my life.'
      ],
      es: [
        'Contigo, incluso los días normales se convierten en una aventura :3',
        'Me encantan tu sonrisa, tu mirada y tu bondad.',
        'Gracias por estar en mi vida.'
      ],
      fr: [
        'Avec toi, même les jours ordinaires deviennent une aventure :3',
        'J\'aime ton sourire, ton regard et ta gentillesse.',
        'Merci d\'être dans ma vie.'
      ],
      zh: [
        '有你在，连普通的日子都变成冒险 :3',
        '我喜欢你的笑容、你的目光和你的善良。',
        '谢谢你在我的生活里。'
      ],
      ar: [
        'معكِ حتى الأيام العادية تصبح مغامرة :3',
        'أحب ابتسامتكِ ونظرتكِ ولطفكِ.',
        'شكراً لوجودكِ في حياتي.'
      ]
    },
    images: [
      { src: cat, alt: { ru: 'Котик', en: 'Cat', es: 'Gatito', fr: 'Chat', zh: '小猫', ar: 'قط' }, className: 'bounce', style: { '--x': '8%', '--y': '48%', '--size': '210px', '--delay': '0.1s' } },
      { src: heart, alt: { ru: 'Сердце', en: 'Heart', es: 'Corazón', fr: 'Cœur', zh: '爱心', ar: 'قلب' }, className: 'pulse', style: { '--x': '70%', '--y': '15%', '--size': '170px', '--delay': '0.3s' } }
    ]
  },
  {
    id: 'valentines',
    transition: 'slide-up',
    title: {
      ru: 'С Днём святого Валентина',
      en: 'Happy Valentine\'s Day',
      es: 'Feliz San Valentín',
      fr: 'Joyeuse Saint-Valentin',
      zh: '情人节快乐',
      ar: 'عيد حب سعيد'
    },
    body: {
      ru: [
        'Пусть этот день будет наполнен мармеладками и прочими вкусняшками.',
        'А рядом будем только мы вдвоём!'
      ],
      en: [
        'May this day be filled with gummy candies and other treats.',
        'And let it be just the two of us together!'
      ],
      es: [
        'Que este día esté lleno de golosinas de goma y otras delicias.',
        '¡Y que estemos solo nosotros dos!'
      ],
      fr: [
        'Que cette journée soit remplie de bonbons gélifiés et d\'autres gourmandises.',
        'Et que nous soyons tous les deux, rien que nous !'
      ],
      zh: [
        '愿这一天充满软糖和各种美味。',
        '而身边只有我们两个人！'
      ],
      ar: [
        'ليكن هذا اليوم مليئاً بحلوى الجيلي وغيرها من اللذائذ.',
        'وليكن بالقرب منا فقط نحن الاثنان!'
      ]
    },
    images: [
      { src: rose, alt: { ru: 'Роза', en: 'Rose', es: 'Rosa', fr: 'Rose', zh: '玫瑰', ar: 'وردة' }, className: 'float slow', style: { '--x': '12%', '--y': '18%', '--size': '200px', '--delay': '0.2s' } },
      { src: letter, alt: { ru: 'Письмо', en: 'Letter', es: 'Carta', fr: 'Lettre', zh: '信', ar: 'رسالة' }, className: 'drift', style: { '--x': '70%', '--y': '50%', '--size': '220px', '--delay': '0.4s' } }
    ]
  },
  {
    id: 'magic',
    transition: 'zoom',
    visual: 'cat-letter',
    title: {
      ru: 'Мы с тобой',
      en: 'You and me',
      es: 'Tú y yo',
      fr: 'Toi et moi',
      zh: '你和我',
      ar: 'أنتِ وأنا'
    },
    body: {
      ru: [
        'Вместе, значит мы добьёмся успеха.',
        'Шаг за шагом,',
        'без спешки,',
        'но рядом.'
      ],
      en: [
        'Together, it means we will succeed.',
        'Step by step,',
        'without rushing,',
        'but side by side.'
      ],
      es: [
        'Juntos significa que alcanzaremos el éxito.',
        'Paso a paso,',
        'sin prisa,',
        'pero a tu lado.'
      ],
      fr: [
        'Ensemble, cela signifie que nous réussirons.',
        'Pas à pas,',
        'sans se presser,',
        'mais tout près.'
      ],
      zh: [
        '在一起，就一定会成功。',
        '一步一步，',
        '不着急，',
        '却始终在你身边。'
      ],
      ar: [
        'معًا، هذا يعني أننا سننجح.',
        'خطوة بخطوة،',
        'بلا عجلة،',
        'لكن بجانبكِ.'
      ]
    },
    images: [
      { src: spark, alt: { ru: 'Искры', en: 'Sparks', es: 'Chispas', fr: 'Étincelles', zh: '火花', ar: 'شرر' }, className: 'spin slow', style: { '--x': '12%', '--y': '60%', '--size': '140px', '--delay': '0s' } },
      { src: cat, alt: { ru: 'Котик', en: 'Cat', es: 'Gato', fr: 'Chat', zh: '小猫', ar: 'قط' }, className: 'float', style: { '--x': '70%', '--y': '15%', '--size': '190px', '--delay': '0.3s' } },
      { src: heart, alt: { ru: 'Сердце', en: 'Heart', es: 'Corazón', fr: 'Cœur', zh: '爱心', ar: 'قلب' }, className: 'pulse', style: { '--x': '78%', '--y': '60%', '--size': '150px', '--delay': '0.5s' } }
    ]
  },
  {
    id: 'game',
    transition: 'flip',
    type: 'game',
    title: {
      ru: 'Мини-игра: Поймай сердечки',
      en: 'Mini-game: Catch the hearts',
      es: 'Mini-juego: Atrapa los corazones',
      fr: 'Mini-jeu : Attrape les cœurs',
      zh: '迷你游戏：抓住爱心',
      ar: 'لعبة صغيرة: التقط القلوب'
    },
    body: {
      ru: [
        'Нажимай на сердечки, чтобы собрать их все.',
        'Пусть они наполняют день радостью.'
      ],
      en: [
        'Tap the hearts to collect them all.',
        'May they fill your day with joy.'
      ],
      es: [
        'Pulsa los corazones para recogerlos.',
        'Que llenen tu día de alegría.'
      ],
      fr: [
        'Clique sur les cœurs pour les collecter.',
        'Qu\'ils remplissent ta journée de joie.'
      ],
      zh: [
        '点击爱心把它们都收集起来。',
        '愿它们让你的一天充满喜悦。'
      ],
      ar: [
        'انقري على القلوب لتجمعيها كلها.',
        'لتملأ يومكِ بالفرح.'
      ]
    },
    images: [
      { src: heart, alt: { ru: 'Сердце', en: 'Heart', es: 'Corazón', fr: 'Cœur', zh: '爱心', ar: 'قلب' }, className: 'float slow', style: { '--x': '10%', '--y': '15%', '--size': '140px', '--delay': '0.1s' } },
      { src: spark, alt: { ru: 'Искра', en: 'Spark', es: 'Brillo', fr: 'Étincelle', zh: '闪光', ar: 'شرارة' }, className: 'spin', style: { '--x': '75%', '--y': '20%', '--size': '120px', '--delay': '0.2s' } }
    ]
  },
  {
    id: 'final',
    transition: 'draw',
    type: 'final',
    title: {
      ru: 'Финал — сердечко для тебя',
      en: 'Final — a heart for you',
      es: 'Final — un corazón para ti',
      fr: 'Final — un cœur pour toi',
      zh: '终章——送你一颗心',
      ar: 'النهاية — قلب لكِ'
    },
    body: {
      ru: [
        'Спасибо, что ты в моей жизни, Кристи.',
        'С любовью и глубокими чувствами.'
      ],
      en: [
        'Thank you for being in my life, Kristi.',
        'With love and deep feelings.'
      ],
      es: [
        'Gracias por estar en mi vida, Kristi.',
        'Con amor y sentimientos profundos.'
      ],
      fr: [
        'Merci d\'être dans ma vie, Kristi.',
        'Avec amour et des sentiments profonds.'
      ],
      zh: [
        '谢谢你在我的生活里，克里斯蒂。',
        '带着爱与深深的感情。'
      ],
      ar: [
        'شكراً لوجودكِ في حياتي يا كريستي.',
        'مع الحب ومشاعر عميقة.'
      ]
    },
    images: [
      { src: rose, alt: { ru: 'Роза', en: 'Rose', es: 'Rosa', fr: 'Rose', zh: '玫瑰', ar: 'وردة' }, className: 'float', style: { '--x': '6%', '--y': '58%', '--size': '160px', '--delay': '0.2s' } }
    ],
    cta: {
      href: 'https://t.me/rovsyaNN',
      label: ui.ctaLabel,
      hint: ui.ctaHint
    }
  }
];
