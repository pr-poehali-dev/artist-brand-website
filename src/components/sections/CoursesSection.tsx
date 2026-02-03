import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

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

export default function CoursesSection() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [expandedCourse, setExpandedCourse] = useState<string>('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заказ отправлен! Скоро обсудим детали.');
  };

  return (
    <>
      <section id="courses" className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Обучающие курсы</h2>
            <p className="text-muted-foreground text-lg">Научитесь создавать искусство под руководством профессионала</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-video overflow-hidden relative group">
                  <img 
                    src={course.video} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon name="Play" className="text-white" size={64} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name={course.icon as any} className="text-primary" size={24} />
                    <h3 className="text-2xl font-bold">{course.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                      {course.duration}
                    </span>
                  </div>
                  
                  <Accordion type="single" collapsible value={expandedCourse} onValueChange={setExpandedCourse}>
                    <AccordionItem value={`course-${course.id}`}>
                      <AccordionTrigger>
                        <span className="text-left">Программа курса</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {course.topics.map((topic, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={16} />
                              <span className="text-sm text-muted-foreground">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <Icon name="Calendar" className="mr-2" size={16} />
                          Записаться
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Запись на курс: {course.title}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleOrderSubmit} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Ваше имя</Label>
                            <Input id="name" placeholder="Иван Иванов" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="ivan@example.com" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Телефон</Label>
                            <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                          </div>
                          <div className="space-y-2">
                            <Label>Предпочитаемая дата начала</Label>
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              className="rounded-md border"
                            />
                          </div>
                          <Button type="submit" className="w-full">
                            <Icon name="Send" className="mr-2" size={16} />
                            Отправить заявку
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь со мной</h2>
            <p className="text-muted-foreground text-lg">Обсудим ваш проект или вопросы по обучению</p>
          </div>
          
          <Card className="p-8">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Имя</Label>
                  <Input id="contact-name" placeholder="Ваше имя" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-phone">Телефон</Label>
                <Input id="contact-phone" type="tel" placeholder="+7 (999) 123-45-67" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-message">Сообщение</Label>
                <Textarea 
                  id="contact-message" 
                  placeholder="Расскажите о вашем проекте или вопросе..." 
                  rows={5}
                  required 
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                <Icon name="Send" className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <Card className="p-6">
              <Icon name="Phone" className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-bold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </Card>
            <Card className="p-6">
              <Icon name="Mail" className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">artist@example.com</p>
            </Card>
            <Card className="p-6">
              <Icon name="MapPin" className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-bold mb-2">Адрес</h3>
              <p className="text-muted-foreground">Москва, Россия</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-muted border-t">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Константин Иванов. Все права защищены.</p>
        </div>
      </footer>
    </>
  );
}
