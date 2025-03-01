
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const categories = ['Halloween', 'Superhéroes', 'Cosplay', 'Infantil', 'Adultos'];

const SearchSection = () => {
  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="relative animate-fade-in">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="search"
            placeholder="Buscar disfraces..."
            className="w-full pl-10 pr-4 h-12 rounded-full border-2 border-gray-200 focus:border-primary transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-center animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
