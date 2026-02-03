import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
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
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Константин Иванов
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 animate-fade-in-delay-1">
          Художник • Преподаватель
        </p>
        <p className="text-lg text-white/80 mb-8 animate-fade-in-delay-2 max-w-2xl mx-auto">
          Создаю картины на заказ и обучаю живописи. Более 15 лет опыта работы с маслом, акрилом и смешанными техниками.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-delay-3">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Palette" className="mr-2" />
            Портфолио
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Calculator" className="mr-2" />
            Рассчитать стоимость
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-white" size={32} />
      </div>
    </section>
  );
}
