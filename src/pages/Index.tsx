import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  { id: 1, title: 'Основы масляной живописи', duration: '8 недель', price: '25 000 ₽', level: 'Начинающий' },
  { id: 2, title: 'Портрет: техника и композиция', duration: '10 недель', price: '30 000 ₽', level: 'Продвинутый' },
  { id: 3, title: 'Абстракция и экспрессия', duration: '6 недель', price: '22 000 ₽', level: 'Средний' },
  { id: 4, title: 'Цифровое искусство с AI', duration: '4 недели', price: '18 000 ₽', level: 'Начинающий' },
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [orderSize, setOrderSize] = useState('');
  const [orderMaterial, setOrderMaterial] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  const calculatePrice = () => {
    let basePrice = 15000;
    if (orderSize === 'medium') basePrice = 25000;
    if (orderSize === 'large') basePrice = 40000;
    if (orderMaterial === 'canvas') basePrice += 5000;
    if (orderMaterial === 'wood') basePrice += 8000;
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center text-primary">Инвестировать в искусство</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Закажите уникальную работу специально для вас</p>
          
          <Card className="p-8 bg-card shadow-xl">
            <form onSubmit={handleOrderSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
              
              <div className="grid md:grid-cols-2 gap-6">
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
                      <SelectItem value="canvas">Холст</SelectItem>
                      <SelectItem value="wood">Дерево</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {calculatedPrice > 0 && (
                <div className="p-4 bg-primary/10 rounded-lg border-2 border-primary animate-scale-in">
                  <p className="text-center text-lg">
                    Ориентировочная стоимость: <span className="text-2xl font-bold text-primary">{calculatedPrice.toLocaleString()} ₽</span>
                  </p>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="description">Опишите вашу идею</Label>
                <Textarea 
                  id="description" 
                  placeholder="Расскажите, какую работу вы хотите заказать..."
                  className="min-h-32"
                  required
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full text-lg">
                <Icon name="Send" className="mr-2" />
                Отправить заказ
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <section id="courses" className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center text-primary">АРТ-СТАРТ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Обучение искусству от практикующего художника</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card 
                key={course.id} 
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Icon name="Palette" className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{course.title}</h3>
                    <div className="flex gap-2 mb-3">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Clock" size={20} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="DollarSign" size={20} />
                    <span className="text-xl font-bold text-primary">{course.price}</span>
                  </div>
                </div>
                
                <Button className="w-full" size="lg">
                  <Icon name="Calendar" className="mr-2" />
                  Записаться на курс
                </Button>
              </Card>
            ))}
          </div>
          
          <Card className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4 text-foreground">Бесплатный вебинар</h3>
              <p className="text-xl mb-6 text-muted-foreground font-decorative italic">
                «5 секретов композиции в живописи»
              </p>
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
