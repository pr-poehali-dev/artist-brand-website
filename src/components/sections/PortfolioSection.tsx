import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const artworks = [
  { id: 1, title: 'Детство и арбуз', category: 'portrait', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/bucket/57850c3f-279f-41fe-b2d9-786edc39993c.jpg', size: '30x40 см', year: '2024' },
  { id: 2, title: 'Портрет мужчины', category: 'portrait', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/bucket/8e470f5f-0d29-4db4-b869-aa6de23d3be8.jpg', size: '50x70 см', year: '2024' },
  { id: 3, title: 'Сельская идиллия', category: 'landscape', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/bucket/2076d825-dab6-411c-9a31-dcbdadaae78e.jpg', size: '70x90 см', year: '2025' },
  { id: 4, title: 'Натюрморт с цветами', category: 'abstraction', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/bucket/c90beacd-2399-4fb6-bd0c-a79657f40f84.jpg', size: '60x80 см', year: '2025' },
  { id: 5, title: 'Розы на мольберте', category: 'abstraction', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/bucket/2e94feac-8508-4fce-901a-9b5ae9b27cf9.jpg', size: '50x60 см', year: '2024' },
];

const testimonials = [
  { id: 1, name: 'Анна Соколова', text: 'Константин создал для меня потрясающий портрет мамы. Невероятная точность и эмоциональность!', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg', rating: 5 },
  { id: 2, name: 'Дмитрий Волков', text: 'Заказывал абстракцию для офиса. Работа превзошла все ожидания, коллеги в восторге!', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg', rating: 5 },
  { id: 3, name: 'Елена Петрова', text: 'Прошла курс по портретной живописи. Константин — прекрасный педагог, объясняет просто и понятно.', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg', rating: 5 },
  { id: 4, name: 'Михаил Орлов', text: 'Купил картину на годовщину свадьбы. Жена плакала от счастья. Спасибо за такой подарок!', image: 'https://cdn.poehali.dev/projects/28643ce9-b3f7-4afe-bfc0-48579d49a90a/files/dcab409d-04d2-47a6-aa38-b4f05e183cdf.jpg', rating: 5 },
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  return (
    <>
      <section id="portfolio" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground text-lg">Избранные работы разных жанров и техник</p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Button 
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="transition-all duration-200"
            >
              Все работы
            </Button>
            <Button 
              variant={selectedCategory === 'portrait' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('portrait')}
              className="transition-all duration-200"
            >
              <Icon name="User" className="mr-2" size={16} />
              Портреты
            </Button>
            <Button 
              variant={selectedCategory === 'landscape' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('landscape')}
              className="transition-all duration-200"
            >
              <Icon name="Mountain" className="mr-2" size={16} />
              Пейзажи
            </Button>
            <Button 
              variant={selectedCategory === 'abstraction' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('abstraction')}
              className="transition-all duration-200"
            >
              <Icon name="Sparkles" className="mr-2" size={16} />
              Абстракция
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtworks.map((artwork) => (
              <Dialog key={artwork.id}>
                <DialogTrigger asChild>
                  <Card className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={artwork.image} 
                        alt={artwork.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{artwork.title}</h3>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{artwork.size}</span>
                        <span>{artwork.year}</span>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{artwork.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full rounded-lg"
                    />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Размер: </span>
                        <span className="font-semibold">{artwork.size}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Год: </span>
                        <span className="font-semibold">{artwork.year}</span>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground text-lg">Что говорят о моих работах</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{testimonial.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
