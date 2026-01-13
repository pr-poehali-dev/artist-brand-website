import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const artworks = [
  { id: 1, title: 'Абстрактная композиция', category: 'abstraction', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg', size: '80x120 см', year: '2025' },
  { id: 2, title: 'Городской пейзаж', category: 'landscape', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg', size: '90x120 см', year: '2024' },
  { id: 3, title: 'Портрет в синем', category: 'portrait', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg', size: '60x80 см', year: '2024' },
  { id: 4, title: 'Морской бриз', category: 'landscape', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg', size: '100x150 см', year: '2025' },
  { id: 5, title: 'Геометрия цвета', category: 'abstraction', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg', size: '70x100 см', year: '2024' },
  { id: 6, title: 'Женский образ', category: 'portrait', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg', size: '50x70 см', year: '2025' },
];

const courses = [
  { 
    id: 1, 
    title: 'Основы масляной живописи', 
    duration: '8 недель', 
    price: '25 000 ₽', 
    level: 'Начинающий',
    icon: 'Paintbrush',
    video: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg',
    topics: ['Работа с кистью и мастихином', 'Смешивание красок', 'Базовые техники нанесения', 'Работа со светом и тенью', 'Создание первой картины']
  },
  { 
    id: 2, 
    title: 'Портрет: техника и композиция', 
    duration: '10 недель', 
    price: '30 000 ₽', 
    level: 'Продвинутый',
    icon: 'User',
    video: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg',
    topics: ['Анатомия лица', 'Построение пропорций', 'Работа с тоном кожи', 'Передача эмоций и характера', 'Финальные штрихи и детали']
  },
  { 
    id: 3, 
    title: 'Абстракция и экспрессия', 
    duration: '6 недель', 
    price: '22 000 ₽', 
    level: 'Средний',
    icon: 'Palette',
    video: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg',
    topics: ['Теория цвета', 'Композиция и баланс', 'Экспериментальные техники', 'Поиск авторского стиля', 'Создание серии работ']
  },
  { 
    id: 4, 
    title: 'Цифровое искусство с AI', 
    duration: '4 недели', 
    price: '18 000 ₽', 
    level: 'Начинающий',
    icon: 'Sparkles',
    video: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg',
    topics: ['Введение в AI-инструменты', 'Промпт-инжиниринг', 'Работа с Midjourney и Stable Diffusion', 'Постобработка в Photoshop', 'Монетизация цифрового искусства']
  },
];

const testimonials = [
  { id: 1, name: 'Анна Соколова', text: 'Константин создал для меня потрясающий портрет мамы. Невероятная точность и эмоциональность!', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg', rating: 5 },
  { id: 2, name: 'Дмитрий Волков', text: 'Заказывал абстракцию для офиса. Работа превзошла все ожидания, коллеги в восторге!', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg', rating: 5 },
  { id: 3, name: 'Елена Петрова', text: 'Прошла курс по портретной живописи. Константин — прекрасный педагог, объясняет просто и понятно.', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg', rating: 5 },
  { id: 4, name: 'Михаил Орлов', text: 'Купил картину на годовщину свадьбы. Жена плакала от счастья. Спасибо за такой подарок!', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg', rating: 5 },
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [orderSize, setOrderSize] = useState('');
  const [orderMaterial, setOrderMaterial] = useState('');
  const [orderStyle, setOrderStyle] = useState('');
  const [orderDeadline, setOrderDeadline] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [expandedCourse, setExpandedCourse] = useState<string>('');

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  const calculatePrice = () => {
    if (!orderSize || !orderMaterial || !orderStyle || !orderDeadline) {
      setCalculatedPrice(0);
      return;
    }
    
    let basePrice = 15000;
    if (orderSize === 'medium') basePrice = 25000;
    if (orderSize === 'large') basePrice = 40000;
    if (orderMaterial === 'canvas') basePrice += 5000;
    if (orderMaterial === 'wood') basePrice += 8000;
    if (orderStyle === 'portrait') basePrice += 10000;
    if (orderStyle === 'realism') basePrice += 8000;
    if (orderStyle === 'abstraction') basePrice += 3000;
    if (orderDeadline === 'urgent') basePrice += 15000;
    if (orderDeadline === 'normal') basePrice += 5000;
    setCalculatedPrice(basePrice);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заказ отправлен! Скоро обсудим детали.');
  };

  return (
    <div className="min-h-screen bg-background">
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/a507beeb-ddfd-4382-ad2b-9bf5538192c6.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <div className="mb-8 animate-float">
            <img 
              src="https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/a653fca3-8a09-4b05-b5b3-fb0be3a70ad0.jpg"
              alt="KONSTANTIN Z Logo"
              className="w-32 h-32 mx-auto object-contain filter drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-primary tracking-tight">
            KONSTANTIN Z
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 font-decorative italic max-w-3xl mx-auto leading-relaxed">
            Художник картин будущего: искусство на стыке технологий и традиций
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Image" className="mr-2" />
              Портфолио
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="ShoppingCart" className="mr-2" />
              Инвестировать в искусство
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="GraduationCap" className="mr-2" />
              АРТ-СТАРТ
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('digital')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Sparkles" className="mr-2" />
              Цифровой Холст
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-primary" size={40} />
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-5xl font-bold mb-6 text-primary">О художнике</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Современный художник‑иллюстратор. Создаю цифровое и традиционное искусство: 
                от концепт‑арта до портретов. AI‑эксперименты, ручная доработка, авторские техники.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-xl font-decorative text-foreground/90 mb-6">
                "Искусство, которое вдохновляет. Я создаю искусство, которое вечно!"
              </blockquote>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="text-muted-foreground">Более 50 персональных выставок</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" className="text-primary" size={24} />
                  <span className="text-muted-foreground">200+ довольных клиентов</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Palette" className="text-primary" size={24} />
                  <span className="text-muted-foreground">Уникальный стиль на стыке технологий</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg"
                  alt="Студия художника"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-primary">Портфолио</h2>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button 
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="transition-all duration-300 hover:scale-105"
            >
              Все работы
            </Button>
            <Button 
              variant={selectedCategory === 'landscape' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('landscape')}
              className="transition-all duration-300 hover:scale-105"
            >
              Пейзажи
            </Button>
            <Button 
              variant={selectedCategory === 'portrait' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('portrait')}
              className="transition-all duration-300 hover:scale-105"
            >
              Портреты
            </Button>
            <Button 
              variant={selectedCategory === 'abstraction' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('abstraction')}
              className="transition-all duration-300 hover:scale-105"
            >
              Абстракции
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork, index) => (
              <Card 
                key={artwork.id} 
                className="group overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{artwork.title}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{artwork.size}</span>
                    <span>{artwork.year}</span>
                  </div>
                  <Button variant="link" className="mt-3 p-0 text-primary hover:text-primary/80">
                    Подробнее <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-24 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center text-primary">Инвестировать в искусство</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Закажите уникальную работу специально для вас</p>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-card shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Icon name="Calculator" className="text-primary" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Калькулятор стоимости</h3>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="size">Размер работы</Label>
                    <Select value={orderSize} onValueChange={(value) => { setOrderSize(value); calculatePrice(); }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите размер" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Малый (до 60x80 см)</SelectItem>
                        <SelectItem value="medium">Средний (80x120 см)</SelectItem>
                        <SelectItem value="large">Большой (100x150+ см)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="material">Материал</Label>
                    <Select value={orderMaterial} onValueChange={(value) => { setOrderMaterial(value); calculatePrice(); }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите материал" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paper">Бумага</SelectItem>
                        <SelectItem value="canvas">Холст (+5 000 ₽)</SelectItem>
                        <SelectItem value="wood">Дерево (+8 000 ₽)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="style">Стиль работы</Label>
                    <Select value={orderStyle} onValueChange={(value) => { setOrderStyle(value); calculatePrice(); }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите стиль" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="landscape">Пейзаж</SelectItem>
                        <SelectItem value="abstraction">Абстракция (+3 000 ₽)</SelectItem>
                        <SelectItem value="realism">Реализм (+8 000 ₽)</SelectItem>
                        <SelectItem value="portrait">Портрет (+10 000 ₽)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Сроки выполнения</Label>
                    <Select value={orderDeadline} onValueChange={(value) => { setOrderDeadline(value); calculatePrice(); }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите срок" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Стандарт (4-6 недель)</SelectItem>
                        <SelectItem value="normal">Ускоренно (2-3 недели, +5 000 ₽)</SelectItem>
                        <SelectItem value="urgent">Срочно (1 неделя, +15 000 ₽)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {calculatedPrice > 0 && (
                  <div className="p-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border-2 border-primary animate-scale-in">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Итоговая стоимость:</p>
                        <p className="text-4xl font-bold text-primary">{calculatedPrice.toLocaleString()} ₽</p>
                      </div>
                      <Icon name="TrendingUp" className="text-primary" size={48} />
                    </div>
                  </div>
                )}
                
                {!calculatedPrice && (
                  <div className="p-6 bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/30">
                    <div className="text-center">
                      <Icon name="Info" className="mx-auto text-muted-foreground mb-2" size={32} />
                      <p className="text-muted-foreground">Выберите параметры, чтобы узнать стоимость</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
            
            <Card className="p-8 bg-card shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Icon name="FileText" className="text-primary" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Оформить заказ</h3>
              </div>
              
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ivan@example.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Опишите вашу идею</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Расскажите, какую работу вы хотите заказать..."
                    className="min-h-32"
                    required
                  />
                </div>
                
                {calculatedPrice > 0 && (
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold mb-2 text-foreground">Параметры заказа:</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      {orderSize && <p>• Размер: {orderSize === 'small' ? 'Малый (до 60x80 см)' : orderSize === 'medium' ? 'Средний (80x120 см)' : 'Большой (100x150+ см)'}</p>}
                      {orderMaterial && <p>• Материал: {orderMaterial === 'paper' ? 'Бумага' : orderMaterial === 'canvas' ? 'Холст' : 'Дерево'}</p>}
                      {orderStyle && <p>• Стиль: {orderStyle === 'landscape' ? 'Пейзаж' : orderStyle === 'abstraction' ? 'Абстракция' : orderStyle === 'realism' ? 'Реализм' : 'Портрет'}</p>}
                      {orderDeadline && <p>• Срок: {orderDeadline === 'standard' ? 'Стандарт (4-6 недель)' : orderDeadline === 'normal' ? 'Ускоренно (2-3 недели)' : 'Срочно (1 неделя)'}</p>}
                      <p className="font-bold text-primary text-base mt-2">Итого: {calculatedPrice.toLocaleString()} ₽</p>
                    </div>
                  </div>
                )}
                
                <Button type="submit" size="lg" className="w-full text-lg" disabled={!calculatedPrice}>
                  <Icon name="Send" className="mr-2" />
                  Отправить заказ
                </Button>
                
                {!calculatedPrice && (
                  <p className="text-sm text-center text-muted-foreground">Рассчитайте стоимость в калькуляторе слева</p>
                )}
              </form>
            </Card>
            
            <div className="space-y-6">
              <Card className="p-6 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Shield" className="text-primary" size={24} />
                  <h3 className="text-2xl font-bold text-foreground">Почему мне доверяют?</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Гарантия качества</p>
                      <p className="text-sm text-muted-foreground">Бесплатные правки до полного утверждения</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Соблюдение сроков</p>
                      <p className="text-sm text-muted-foreground">Договор с прописанными датами</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Sparkles" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Уникальность</p>
                      <p className="text-sm text-muted-foreground">Каждая работа — авторская и неповторимая</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Award" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Опыт 15+ лет</p>
                      <p className="text-sm text-muted-foreground">200+ довольных клиентов</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary">
                <div className="text-center">
                  <Icon name="Gift" className="mx-auto text-primary mb-3" size={48} />
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Подарок при заказе</h3>
                  <p className="text-muted-foreground mb-4">Бесплатный эскиз + консультация по размещению</p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Icon name="Star" className="text-primary" size={16} />
                    <span className="text-foreground font-semibold">При заказе от 50 000 ₽</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-4xl font-bold mb-8 text-center text-foreground">Отзывы клиентов</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id} 
                  className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={16} />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <Card className="p-8 bg-card">
            <h3 className="text-3xl font-bold mb-6 text-center text-foreground">Примеры успешных заказов</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Портрет семьи', desc: '120x150 см, холст, масло', price: '65 000 ₽' },
                { title: 'Абстракция для офиса', desc: '200x100 см, холст', price: '45 000 ₽' },
                { title: 'Городской пейзаж', desc: '80x120 см, дерево', price: '38 000 ₽' },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg"
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2 text-foreground">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{project.desc}</p>
                    <p className="text-primary font-bold">{project.price}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="courses" className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center text-primary">АРТ-СТАРТ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Обучение искусству от практикующего художника</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card 
                key={course.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={course.video}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <Icon name="Play" className="text-white ml-1" size={32} />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary rounded-full">
                    <span className="text-white text-sm font-semibold">{course.level}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon name={course.icon as any} className="text-primary" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{course.title}</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={20} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="DollarSign" className="text-primary" size={20} />
                      <span className="text-xl font-bold text-primary">{course.price}</span>
                    </div>
                  </div>
                  
                  <Accordion type="single" collapsible className="mb-6">
                    <AccordionItem value="topics" className="border-none">
                      <AccordionTrigger className="text-foreground hover:text-primary">
                        <div className="flex items-center gap-2">
                          <Icon name="BookOpen" size={20} />
                          <span>Программа курса</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 mt-2">
                          {course.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <Icon name="CheckCircle" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                              <span className="text-sm">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" size="lg">
                        <Icon name="Calendar" className="mr-2" />
                        Записаться на курс
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Выберите дату начала курса</DialogTitle>
                      </DialogHeader>
                      <div className="py-4">
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2 text-foreground">{course.title}</h4>
                          <p className="text-sm text-muted-foreground">Продолжительность: {course.duration} • Стоимость: {course.price}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-foreground">Доступные даты старта:</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { date: '15 февраля', places: 3 },
                              { date: '1 марта', places: 5 },
                              { date: '15 марта', places: 2 },
                              { date: '1 апреля', places: 8 },
                            ].map((slot, i) => (
                              <Button 
                                key={i} 
                                variant="outline" 
                                className="justify-between h-auto py-3"
                                onClick={() => {
                                  toast.success(`Выбрана дата: ${slot.date}`);
                                }}
                              >
                                <span>{slot.date}</span>
                                <span className="text-xs text-muted-foreground">{slot.places} мест</span>
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <Input placeholder="Ваше имя" />
                          <Input placeholder="Email" type="email" />
                          <Input placeholder="Телефон" type="tel" />
                          <Button className="w-full" size="lg" onClick={() => {
                            toast.success('Заявка отправлена! Я свяжусь с вами в ближайшее время.');
                          }}>
                            <Icon name="Send" className="mr-2" />
                            Отправить заявку
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary">
            <div className="text-center">
              <div className="inline-block p-4 bg-primary/20 rounded-full mb-4">
                <Icon name="Video" className="text-primary" size={48} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Бесплатный вебинар</h3>
              <p className="text-xl mb-6 text-muted-foreground font-decorative italic">
                «5 секретов композиции в живописи»
              </p>
              <p className="text-muted-foreground mb-6">Узнайте, как создавать гармоничные композиции и привлекать внимание зрителя</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Video" className="mr-2" />
                Записаться бесплатно
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="digital" className="py-24 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Icon name="Sparkles" className="mx-auto text-primary animate-float" size={64} />
          </div>
          <h2 className="text-5xl font-bold mb-6 text-primary">Цифровой Холст</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Эксклюзивные NFT-коллекции и цифровое искусство. Инвестируйте в искусство будущего.
          </p>
          <Button size="lg" className="text-lg">
            <Icon name="Zap" className="mr-2" />
            Узнать больше
          </Button>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-primary">Связаться со мной</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-card shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Форма обратной связи</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Имя</Label>
                  <Input id="contact-name" placeholder="Ваше имя" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Ваше сообщение..."
                    className="min-h-32"
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
            
            <div className="space-y-8">
              <Card className="p-8 bg-card">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Быстрая связь</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start text-lg h-14 hover:bg-primary/10" asChild>
                    <a href="https://t.me/konstantinz" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageCircle" className="mr-3" size={24} />
                      Telegram: @konstantinz
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start text-lg h-14 hover:bg-primary/10" asChild>
                    <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer">
                      <Icon name="Phone" className="mr-3" size={24} />
                      WhatsApp: +7 (999) 123-45-67
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start text-lg h-14 hover:bg-primary/10" asChild>
                    <a href="mailto:art@konstantinz.com">
                      <Icon name="Mail" className="mr-3" size={24} />
                      art@konstantinz.com
                    </a>
                  </Button>
                </div>
              </Card>
              
              <Card className="p-8 bg-card">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Социальные сети</h3>
                <div className="flex gap-4">
                  <Button size="lg" variant="outline" className="flex-1" asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <Icon name="Instagram" size={24} />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <Icon name="Facebook" size={24} />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Icon name="Twitter" size={24} />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-foreground">KONSTANTIN Z</h4>
              <p className="text-muted-foreground text-sm">
                Современный художник-иллюстратор. Искусство на стыке технологий и традиций.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-foreground">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#order" className="text-muted-foreground hover:text-primary transition-colors">Заказать работу</a></li>
                <li><a href="#courses" className="text-muted-foreground hover:text-primary transition-colors">Мастер-классы</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-foreground">Принимаем к оплате</h4>
              <div className="flex gap-2 text-sm text-muted-foreground">
                <span>💳 Карты</span>
                <span>💰 PayPal</span>
                <span>⚡ СБП</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 KONSTANTIN Z. Все права защищены.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}