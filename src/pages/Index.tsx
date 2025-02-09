
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Курс обучения</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Example course module */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">Урок 1</h2>
                <Badge variant="secondary">Доступно</Badge>
              </div>
              <p className="text-gray-600 mb-4">Введение в курс</p>
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
                Начать урок
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
