import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

export default function PriceCalculatorSection() {
  const [artWidth, setArtWidth] = useState('');
  const [artHeight, setArtHeight] = useState('');
  const [artTechnique, setArtTechnique] = useState('');
  const [artComplexity, setArtComplexity] = useState('');
  const [artDeadline, setArtDeadline] = useState('');
  const [artSkill, setArtSkill] = useState('');
  const [extraSketch, setExtraSketch] = useState(false);
  const [extraFrame, setExtraFrame] = useState(false);
  const [extraDelivery, setExtraDelivery] = useState(false);
  const [extraCertificate, setExtraCertificate] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateNewPrice = () => {
    const width = parseFloat(artWidth);
    const height = parseFloat(artHeight);
    
    if (!width || !height || !artTechnique || !artComplexity || !artDeadline || !artSkill) {
      toast.error('Заполните все обязательные поля');
      return;
    }

    const areaDM2 = (width * height) / 100;

    let baseRate = 500;
    if (width <= 20 && height <= 20) {
      baseRate = 500;
    } else if (width <= 50 && height <= 50) {
      baseRate = 1000;
    } else {
      baseRate = 1500;
    }

    const techniqueCoef = parseFloat(artTechnique);
    const complexityCoef = parseFloat(artComplexity);
    const deadlineCoef = parseFloat(artDeadline);
    const skillCoef = parseFloat(artSkill);

    let extras = 0;
    if (extraSketch) extras += 1500;
    if (extraFrame) extras += 3000;
    if (extraDelivery) extras += 1000;
    if (extraCertificate) extras += 1000;

    const total = Math.round((areaDM2 * baseRate) * techniqueCoef * complexityCoef * deadlineCoef * skillCoef + extras);

    setTotalPrice(total);
    toast.success('Стоимость рассчитана!');
  };

  return (
    <section id="calculator" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Калькулятор стоимости</h2>
          <p className="text-muted-foreground text-lg">Рассчитайте примерную стоимость вашей картины</p>
        </div>
        
        <Card className="p-8 max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="art-width">Ширина (см)</Label>
                <Input 
                  id="art-width"
                  type="number"
                  placeholder="Например: 50"
                  value={artWidth}
                  onChange={(e) => setArtWidth(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="art-height">Высота (см)</Label>
                <Input 
                  id="art-height"
                  type="number"
                  placeholder="Например: 70"
                  value={artHeight}
                  onChange={(e) => setArtHeight(e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="art-technique">Техника</Label>
                <Select value={artTechnique} onValueChange={setArtTechnique}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите технику" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1.0">Масло на холсте</SelectItem>
                    <SelectItem value="0.9">Акрил</SelectItem>
                    <SelectItem value="0.8">Акварель/гуашь</SelectItem>
                    <SelectItem value="0.7">Пастель/графит</SelectItem>
                    <SelectItem value="1.2">Смешанная техника</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="art-complexity">Сложность</Label>
                <Select value={artComplexity} onValueChange={setArtComplexity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите сложность" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1.0">Простой мотив</SelectItem>
                    <SelectItem value="1.3">Средняя сложность</SelectItem>
                    <SelectItem value="1.8">Высокая сложность</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="art-deadline">Срок исполнения</Label>
                <Select value={artDeadline} onValueChange={setArtDeadline}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите срок" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1.0">2-4 недели</SelectItem>
                    <SelectItem value="1.4">1 неделя</SelectItem>
                    <SelectItem value="1.8">3 дня</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="art-skill">Уровень художника</Label>
                <Select value={artSkill} onValueChange={setArtSkill}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите уровень" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0.8">Начинающий</SelectItem>
                    <SelectItem value="1.2">Опытный</SelectItem>
                    <SelectItem value="2.0">Профессионал</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-3">
              <Label>Дополнительные услуги</Label>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="extra-sketch" 
                    checked={extraSketch}
                    onCheckedChange={(checked) => setExtraSketch(checked as boolean)}
                  />
                  <label htmlFor="extra-sketch" className="text-sm cursor-pointer">
                    Эскиз
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="extra-frame" 
                    checked={extraFrame}
                    onCheckedChange={(checked) => setExtraFrame(checked as boolean)}
                  />
                  <label htmlFor="extra-frame" className="text-sm cursor-pointer">
                    Подбор рамы
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="extra-delivery" 
                    checked={extraDelivery}
                    onCheckedChange={(checked) => setExtraDelivery(checked as boolean)}
                  />
                  <label htmlFor="extra-delivery" className="text-sm cursor-pointer">
                    Доставка
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="extra-certificate" 
                    checked={extraCertificate}
                    onCheckedChange={(checked) => setExtraCertificate(checked as boolean)}
                  />
                  <label htmlFor="extra-certificate" className="text-sm cursor-pointer">
                    Сертификат авторства
                  </label>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={calculateNewPrice} 
              size="lg" 
              className="w-full text-lg"
            >
              <Icon name="Calculator" className="mr-2" />
              Рассчитать стоимость
            </Button>
            
            {totalPrice > 0 && (
              <div className="p-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border-2 border-primary animate-scale-in">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Итоговая стоимость:</p>
                    <p className="text-4xl font-bold text-primary">{totalPrice.toLocaleString()} ₽</p>
                  </div>
                  <Icon name="TrendingUp" className="text-primary" size={48} />
                </div>
              </div>
            )}
            
            {!totalPrice && (
              <div className="p-6 bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/30">
                <div className="text-center">
                  <Icon name="Info" className="mx-auto text-muted-foreground mb-2" size={32} />
                  <p className="text-muted-foreground">Выберите все параметры и нажмите "Рассчитать"</p>
                </div>
              </div>
            )}
          </div>
        </Card>
        
        <div className="flex justify-center my-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://wa.me/79000000000', '_blank')}
          >
            <Icon name="Phone" className="mr-2" />
            Заказать консультацию
          </Button>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto mt-12">
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
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
