
import { useParams } from "react-router-dom";

const Lesson = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Урок {id}</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="aspect-video mb-6">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Название урока</h2>
          <p className="text-gray-600 mb-6">
            Подробное описание урока будет находиться здесь. Вы можете добавить любой текст,
            который поможет ученикам лучше понять материал.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Lesson illustration"
              className="rounded-lg object-cover w-full h-48"
            />
            <img
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
              alt="Lesson illustration"
              className="rounded-lg object-cover w-full h-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
