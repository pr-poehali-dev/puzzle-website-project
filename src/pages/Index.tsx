import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 font-comic">
      {/* Header */}
      <header className="p-6 bg-black/90 backdrop-blur-sm border-b-4 border-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/img/40ba69f1-c936-4026-9317-f12656bc0452.jpg" 
              alt="Puzzle Hero" 
              className="w-12 h-12 rounded-full border-2 border-white grayscale"
            />
            <h1 className="text-3xl font-bold text-white">🧩 ПазлЛенд</h1>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-gray-600 text-white text-lg px-4 py-2">
              <Icon name="Star" size={16} className="mr-2" />
              Уровень 5
            </Badge>
            <Avatar className="border-2 border-white">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gray-700 text-white">ТЫ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <div className="inline-block animate-bounce-slow mb-6">
            <img 
              src="/img/40ba69f1-c936-4026-9317-f12656bc0452.jpg" 
              alt="Главный персонаж" 
              className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg grayscale"
            />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Добро пожаловать в мир головоломок! 🌟
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Решай головоломки, собирай награды и создавай своего уникального персонажа!
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white hover:bg-gray-200 text-black text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all">
              <Icon name="Play" size={24} className="mr-2" />
              Начать игру!
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black text-xl px-8 py-4 rounded-full"
              <Icon name="Trophy" size={24} className="mr-2" />
              Мои достижения
            </Button>
          </div>
        </section>

        {/* Progress Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-900/95 backdrop-blur-sm border-2 border-gray-600">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-black flex items-center justify-center gap-2">
                <Icon name="Zap" size={24} />
                Твой прогресс
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">Опыт</span>
                  <span className="text-sm font-medium text-gray-300">750 / 1000</span>
                </div>
                <Progress value={75} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">Решено головоломок</span>
                  <span className="text-sm font-medium text-gray-300">23</span>
                </div>
                <Progress value={60} className="h-3" />
              </div>
              <div className="text-center pt-4">
                <Badge className="bg-gray-700 text-white text-lg px-4 py-2">
                  🎯 До следующего уровня: 250 XP
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/95 backdrop-blur-sm border-2 border-gray-600">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-black flex items-center justify-center gap-2">
                <Icon name="Award" size={24} />
                Награды
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <img 
                  src="/img/b53db90e-6312-46a6-9aaa-b5c6418363f9.jpg" 
                  alt="Награды" 
                  className="w-24 h-24 mx-auto rounded-lg border-2 border-gray-600 grayscale"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <Badge className="bg-white text-black justify-center py-2">🏆 Новичок</Badge>
                <Badge className="bg-gray-300 text-black justify-center py-2">⭐ Мастер</Badge>
                <Badge className="bg-gray-400 text-black justify-center py-2">🎨 Творец</Badge>
                <Badge variant="outline" className="justify-center py-2 border-white text-white">💎 Эксперт</Badge>
                <Badge variant="outline" className="justify-center py-2 border-white text-white">🚀 Гений</Badge>
                <Badge variant="outline" className="justify-center py-2 border-white text-white">👑 Легенда</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/95 backdrop-blur-sm border-2 border-gray-600">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-black flex items-center justify-center gap-2">
                <Icon name="Users" size={24} />
                Мой персонаж
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <Avatar className="w-20 h-20 mx-auto border-4 border-gray-600">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gray-700 text-white text-2xl">🤖</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">Кубик-Умник</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full border-black">
                    <Icon name="Palette" size={16} className="mr-2" />
                    Изменить цвет
                  </Button>
                  <Button variant="outline" size="sm" className="w-full border-black">
                    <Icon name="Shirt" size={16} className="mr-2" />
                    Выбрать наряд
                  </Button>
                  <Button variant="outline" size="sm" className="w-full border-black">
                    <Icon name="Smile" size={16} className="mr-2" />
                    Настроить лицо
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Game Categories */}
        <section>
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            🎲 Категории головоломок
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white text-black hover:scale-105 transition-transform cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="Puzzle" size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Классика</h3>
                <p className="text-sm opacity-90">Традиционные пазлы</p>
                <Badge className="mt-3 bg-black text-white">12 уровней</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-300 text-black hover:scale-105 transition-transform cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="Brain" size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Логика</h3>
                <p className="text-sm opacity-90">Умные задачки</p>
                <Badge className="mt-3 bg-black text-white">8 уровней</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-400 text-black hover:scale-105 transition-transform cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="Clock" size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">На время</h3>
                <p className="text-sm opacity-90">Быстрые вызовы</p>
                <Badge className="mt-3 bg-black text-white">15 уровней</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-400 text-black hover:scale-105 transition-transform cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="Sparkles" size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Магия</h3>
                <p className="text-sm opacity-90">Волшебные загадки</p>
                <Badge className="mt-3 bg-white text-black">6 уровней</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-8 border-2 border-white">
          <h2 className="text-3xl font-bold text-center text-white mb-8">📊 Твоя статистика</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">23</div>
              <div className="text-sm text-gray-400">Решено головоломок</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-300 mb-2">5:42</div>
              <div className="text-sm text-gray-400">Лучшее время</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-200 mb-2">750</div>
              <div className="text-sm text-gray-400">Очки опыта</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">7</div>
              <div className="text-sm text-gray-400">Дней подряд</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-300">
        <p className="text-lg">🖤 Создавай, играй, развивайся вместе с ПазлЛенд!</p>
      </footer>
    </div>
  );
};

export default Index;