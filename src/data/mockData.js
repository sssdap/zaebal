/**
 * Mock Data for Illuminos Streaming Service
 * Contains sample movies, series, and user data
 */

// Mock Movies Data
export const moviesData = [
  {
    id: 1,
    title: "Звёздный Путь",
    titleEn: "Stellar Journey",
    type: "movie",
    genre: ["Фантастика", "Приключения"],
    year: 2024,
    rating: 8.7,
    duration: "2ч 28мин",
    description: "Эпическое путешествие через галактику в поисках новой надежды для человечества. Команда исследователей отправляется в неизведанные уголки космоса.",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    banner: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1920&h=800&fit=crop",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    director: "Александр Петров",
    cast: ["Иван Иванов", "Мария Смирнова", "Петр Сидоров"],
    featured: true,
    new: true
  },
  {
    id: 2,
    title: "Тени Прошлого",
    titleEn: "Shadows of the Past",
    type: "movie",
    genre: ["Триллер", "Драма"],
    year: 2024,
    rating: 8.2,
    duration: "2ч 15мин",
    description: "Детектив расследует серию загадочных преступлений, которые связаны с его собственным прошлым. Каждая улика приближает его к шокирующей правде.",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    banner: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=800&fit=crop",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    director: "Елена Волкова",
    cast: ["Дмитрий Козлов", "Анна Белова", "Сергей Морозов"],
    featured: false,
    new: true
  },
  {
    id: 3,
    title: "Смех Сквозь Слёзы",
    titleEn: "Laughter Through Tears",
    type: "movie",
    genre: ["Комедия", "Драма"],
    year: 2023,
    rating: 7.9,
    duration: "1ч 58мин",
    description: "Трогательная история о семье, которая находит радость даже в самых трудных жизненных ситуациях. Комедия, которая заставит вас и смеяться, и плакать.",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    banner: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=800&fit=crop",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    director: "Михаил Соколов",
    cast: ["Ольга Петрова", "Николай Васильев", "Екатерина Новикова"],
    featured: false,
    new: false
  },
  {
    id: 4,
    title: "Ночь Ужаса",
    titleEn: "Night of Terror",
    type: "movie",
    genre: ["Ужасы", "Триллер"],
    year: 2024,
    rating: 7.5,
    duration: "1ч 45мин",
    description: "Группа друзей оказывается в ловушке в заброшенном особняке, где их преследует нечто зловещее. Выживет ли кто-нибудь до рассвета?",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    banner: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&h=800&fit=crop",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    director: "Виктор Темный",
    cast: ["Алексей Громов", "Татьяна Лебедева", "Игорь Волков"],
    featured: false,
    new: true
  },
  {
    id: 5,
    title: "Романтика в Париже",
    titleEn: "Romance in Paris",
    type: "movie",
    genre: ["Романтика", "Драма"],
    year: 2023,
    rating: 8.0,
    duration: "2ч 5мин",
    description: "Случайная встреча в Париже меняет жизни двух людей навсегда. История любви, которая преодолевает все преграды.",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=500&h=750&fit=crop",
    banner: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1920&h=800&fit=crop",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    director: "София Романова",
    cast: ["Андрей Кузнецов", "Виктория Соловьева", "Максим Орлов"],
    featured: false,
    new: false
  },
  {
    id: 6,
    title: "Последний Рубеж",
    titleEn: "The Last Frontier",
    type: "movie",
    genre: ["Боевик", "Приключения"],
    year: 2024,
    rating: 8.4,
    duration: "2ч 20мин",
    description: "Элитный отряд спецназа отправляется на опасную миссию в джунгли, чтобы спасти заложников и предотвратить катастрофу.",
    poster: "https://images.unsplash.com/photo-1574267432644-f610a4ab60a4?w=500&h=750&fit=crop",
    banner: "https://images.unsplash.com/photo-1574267432644-f610a4ab60a4?w=1920&h=800&fit=crop",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    director: "Роман Стальной",
    cast: ["Владимир Крепкий", "Светлана Быстрая", "Артем Смелый"],
    featured: true,
    new: true
  }
];

// Mock Series Data
export const seriesData = [
  {
    id: 101,
    title: "Хроники Будущего",
    titleEn: "Chronicles of Tomorrow",
    type: "series",
    genre: ["Фантастика", "Драма"],
    year: 2024,
    rating: 9.1,
    seasons: 2,
    episodes: 20,
    description: "В мире, где технологии достигли невероятных высот, группа повстанцев борется за свободу человечества от контроля искусственного интеллекта.",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    banner: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=800&fit=crop",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    creator: "Алексей Футуров",
    cast: ["Павел Техно", "Наталья Кибер", "Денис Нейро"],
    featured: true,
    new: true
  },
  {
    id: 102,
    title: "Тайны Старого Города",
    titleEn: "Secrets of the Old Town",
    type: "series",
    genre: ["Детектив", "Триллер"],
    year: 2023,
    rating: 8.6,
    seasons: 3,
    episodes: 36,
    description: "Детектив расследует загадочные преступления в историческом центре города, где каждое здание хранит свои секреты.",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&h=750&fit=crop",
    banner: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&h=800&fit=crop",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    creator: "Ирина Мистик",
    cast: ["Константин Следов", "Юлия Загадка", "Борис Улика"],
    featured: false,
    new: false
  },
  {
    id: 103,
    title: "Семейные Узы",
    titleEn: "Family Bonds",
    type: "series",
    genre: ["Драма", "Комедия"],
    year: 2024,
    rating: 8.3,
    seasons: 1,
    episodes: 12,
    description: "Три поколения одной семьи живут под одной крышей, сталкиваясь с современными проблемами и сохраняя традиционные ценности.",
    poster: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&h=750&fit=crop",
    banner: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&h=800&fit=crop",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    creator: "Марина Семейная",
    cast: ["Георгий Отцов", "Людмила Матерь", "Кирилл Сынов"],
    featured: false,
    new: true
  },
  {
    id: 104,
    title: "Империя Теней",
    titleEn: "Empire of Shadows",
    type: "series",
    genre: ["Фэнтези", "Приключения"],
    year: 2023,
    rating: 9.0,
    seasons: 4,
    episodes: 48,
    description: "Эпическая сага о борьбе за власть в магическом королевстве, где древние пророчества начинают сбываться.",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=500&h=750&fit=crop",
    banner: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1920&h=800&fit=crop",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    creator: "Владислав Эпик",
    cast: ["Роман Король", "Елизавета Магия", "Станислав Воин"],
    featured: true,
    new: false
  },
  {
    id: 105,
    title: "Медицинский Центр",
    titleEn: "Medical Center",
    type: "series",
    genre: ["Драма", "Медицина"],
    year: 2024,
    rating: 8.5,
    seasons: 2,
    episodes: 24,
    description: "Будни врачей крупной городской больницы, где каждый день приходится принимать решения, от которых зависят человеческие жизни.",
    poster: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500&h=750&fit=crop",
    banner: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1920&h=800&fit=crop",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    creator: "Ольга Медик",
    cast: ["Евгений Доктор", "Анастасия Сестра", "Валерий Хирург"],
    featured: false,
    new: true
  },
  {
    id: 106,
    title: "Космическая Одиссея",
    titleEn: "Space Odyssey",
    type: "series",
    genre: ["Фантастика", "Приключения"],
    year: 2023,
    rating: 8.8,
    seasons: 3,
    episodes: 30,
    description: "Экипаж межзвездного корабля исследует далекие планеты и сталкивается с невероятными открытиями и опасностями.",
    poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=750&fit=crop",
    banner: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&h=800&fit=crop",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    creator: "Игорь Космос",
    cast: ["Михаил Капитан", "Дарья Навигатор", "Федор Инженер"],
    featured: false,
    new: false
  }
];

// All content combined
export const allContent = [...moviesData, ...seriesData];

// Genre list
export const genres = [
  "Все жанры",
  "Фантастика",
  "Драма",
  "Комедия",
  "Триллер",
  "Ужасы",
  "Романтика",
  "Боевик",
  "Приключения",
  "Детектив",
  "Фэнтези",
  "Медицина"
];

// Get featured content
export const getFeaturedContent = () => {
  return allContent.filter(item => item.featured);
};

// Get new releases
export const getNewReleases = () => {
  return allContent.filter(item => item.new);
};

// Get popular movies
export const getPopularMovies = () => {
  return moviesData.sort((a, b) => b.rating - a.rating).slice(0, 6);
};

// Get popular series
export const getPopularSeries = () => {
  return seriesData.sort((a, b) => b.rating - a.rating).slice(0, 6);
};

// Get content by genre
export const getContentByGenre = (genre) => {
  if (genre === "Все жанры") return allContent;
  return allContent.filter(item => item.genre.includes(genre));
};

// Get similar content
export const getSimilarContent = (currentItem) => {
  return allContent
    .filter(item => 
      item.id !== currentItem.id && 
      item.type === currentItem.type &&
      item.genre.some(g => currentItem.genre.includes(g))
    )
    .slice(0, 6);
};

// Search content
export const searchContent = (query) => {
  const lowerQuery = query.toLowerCase();
  return allContent.filter(item => 
    item.title.toLowerCase().includes(lowerQuery) ||
    item.titleEn.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery)
  );
};
