import cytrex from "./images/cytrex.jpeg";
import hackathon from "./images/hackathon.jpeg";
import sports from "./images/sport.jpeg";

function Achievements() {
  const activities = [
    {
      title: "Cytrex Club Member",
      image: cytrex,
      description:
        "Active member of Cytrex Club, contributing to technical and cultural events, workshops and student activities.",
    },
    {
      title: "Hackathon Participant",
      image: hackathon,
      description:
        "Participated in multiple hackathons, collaborating with teams to build innovative solutions and improve problem-solving skills.",
    },
    {
      title: "Sports Participation",
      image: sports,
      description:
        "Participated in college sports activities, developing teamwork, discipline and leadership skills.",
    },
  ];

  return (
    <section id="achievements" className="max-w-5xl mx-auto p-8">
      <h2 className="text-4xl font-bold mb-6">
        Activities & Leadership
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {activities.map((item) => (
          <div
            key={item.title}
            className="bg-slate-800 p-5 rounded-xl hover:scale-105 transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 object-contain rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;