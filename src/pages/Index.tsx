
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Instructor Introduction Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Instructor"
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Добро пожаловать!</h2>
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
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Уроки курса</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Example course module */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">Урок 1</h2>
                <Badge variant="secondary">Доступно</Badge>
              </div>
              <p className="text-gray-600 mb-4">Введение в курс</p>
              <Link 
                to="/lesson/1"
                className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-center"
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
