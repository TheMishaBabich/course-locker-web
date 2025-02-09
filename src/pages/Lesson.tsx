
import { useParams } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Lesson = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 hover:scale-[1.02] transition-transform">
          Урок {id}
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-shadow duration-300">
          <div className="aspect-video mb-6">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-2xl font-semibold mb-4 hover:text-primary transition-colors">
            Название урока
          </h2>
          <p className="text-gray-600 mb-6 animate-fade-in">
            Подробное описание урока будет находиться здесь. Вы можете добавить любой текст,
            который поможет ученикам лучше понять материал.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Dialog>
              <DialogTrigger>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    alt="Lesson illustration"
                    className="rounded-lg object-cover w-full h-48 cursor-zoom-in"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Lesson illustration"
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                    alt="Lesson illustration"
                    className="rounded-lg object-cover w-full h-48 cursor-zoom-in"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <img
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                  alt="Lesson illustration"
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
