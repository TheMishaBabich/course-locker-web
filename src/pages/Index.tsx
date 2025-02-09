
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Instructor Introduction Section - No container */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 flex-shrink-0 animate-fade-in">
            <Avatar className="w-64 h-64 hover:scale-105 transition-transform duration-300">
              <AvatarImage
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Instructor"
                className="object-cover"
              />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1 text-left animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors">
              Добро пожаловать!
            </h2>
            <p className="text-gray-600 mb-6">
              Привет! Меня зовут [Имя Преподавателя], и я рада приветствовать вас на моем курсе.
              Я профессиональный [специализация] с более чем [X] летним опытом работы в этой сфере.
            </p>
            <p className="text-gray-600">
              На этом курсе вы научитесь [основные навыки]. Мой подход к обучению основан на практике
              и реальных примерах, что поможет вам быстро освоить материал и начать применять
              полученные знания.
            </p>
          </div>
        </div>
      </div>

      {/* Course Modules Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in">Уроки курса</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Example course module */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02] transition-transform">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">Урок 1</h2>
                <Badge variant="secondary">Доступно</Badge>
              </div>
              <p className="text-gray-600 mb-4">Введение в курс</p>
              <Link 
                to="/lesson/1"
                className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-center transition-colors duration-300"
              >
                Начать урок
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
