import { motion } from "framer-motion";
import {
  Smartphone,
  Laptop,
  GraduationCap,
  Headset,
  ArrowLeft,
  Download,
  ExternalLink,
} from "lucide-react";

export const UI = ({ currentScreen, onScreenChange, isAnimating }) => {
  return (
    <motion.main
      className="fixed inset-0 z-10 font-sans text-white"
      animate={isAnimating ? "" : currentScreen}
    >
      <section
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
          currentScreen === "Home" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 mb-4 rounded-lg flex flex-col items-center">
          <motion.img
            src="/aegis_logo.svg"
            alt="Aegis Logo"
            className="w-32 mb-4"
            initial={{ y: -80, opacity: 0 }}
            variants={{
              Home: {
                y: 0,
                opacity: 0.9,
                transition: { delay: 1, duration: 1.2 },
              },
            }}
          />
          <h1 className="text-7xl opacity-90 font-extrabold mb-2">AEGIS</h1>
          <h2 className="text-2xl opacity-80 mb-10">
            Apprenez à utiliser les réseaux
          </h2>
        </div>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ y: 80, opacity: 0 }}
          variants={{
            Home: {
              y: 0,
              opacity: 1,
              transition: { delay: 0.2, duration: 1.2 },
            },
          }}
        >
          {[
            { name: "Phone", icon: Smartphone, label: "Application mobile" },
            { name: "Laptop", icon: Laptop, label: "Extension web" },
            { name: "Formation", icon: GraduationCap, label: "Formation" },
            { name: "VR", icon: Headset, label: "Expérience VR" },
          ].map(({ name, icon: Icon, label }) => (
            <button
              key={name}
              onClick={() => onScreenChange(name)}
              className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg text-white font-medium flex items-center gap-2 hover:bg-opacity-20 transition-colors"
            >
              <Icon size={24} />
              {label}
            </button>
          ))}
        </motion.div>
      </section>

      {["Phone", "Laptop", "Formation", "VR"].map((screen) => (
        <motion.section
          key={screen}
          animate={isAnimating ? "" : currentScreen}
          className={`absolute inset-0 flex flex-col ${
            screen === "VR" ? "items-start" : "items-end"
          } justify-center p-10 transition-opacity duration-1000 ${
            currentScreen === screen && !isAnimating
              ? ""
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="max-w-2xl bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-lg">
            <motion.h1
              className="text-5xl opacity-90 font-bold mb-4"
              initial={{ y: 80, opacity: 0 }}
              variants={{
                [screen]: {
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.2, duration: 1.2 },
                },
              }}
            >
              {screen === "Phone" && "Application Mobile Aegis"}
              {screen === "Laptop" && "Extension Web Aegis"}
              {screen === "Formation" && "Formation Aegis"}
              {screen === "VR" && "Expérience VR Aegis"}
            </motion.h1>
            <motion.p
              className="mb-6"
              initial={{ y: 80, opacity: 0 }}
              variants={{
                [screen]: {
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.6, duration: 1.2 },
                },
              }}
            >
              {screen === "Phone" &&
                "Notre application mobile Aegis vous offre une protection complète sur vos appareils Android et iOS. Soyez protégé en toutes circonstances sur vos réseaux sociaux préférés."}
              {screen === "Laptop" &&
                "L'extension web Aegis vous offre une protection complète sur vos navigateurs Chrome, Firefox et Edge. Soyez protégé en toutes circonstances sur vos réseaux sociaux préférés."}
              {screen === "Formation" &&
                "La formation Aegis vous permet d'apprendre les risques des réseaux sociaux et comment les éviter. Cette formation interactive en groupe peut être dispensée par un professeur dans votre établissement scolaire ou bien par un formateur dans votre entreprise."}
              {screen === "VR" &&
                "L'expérience VR Aegis vous plonge dans un monde virtuel où vous devez trouver les fakes news. Cette expérience est à réaliser en binôme et est disponible sur les casques de réalité virtuelle Oculus Quest et HTC Vive."}
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ y: 80, opacity: 0 }}
              variants={{
                [screen]: {
                  y: 0,
                  opacity: 1,
                  transition: { delay: 1, duration: 1.2 },
                },
              }}
            >
              <button
                onClick={() => onScreenChange("Home")}
                className="bg-white bg-opacity-10 backdrop-blur-md p-3 rounded-lg text-white font-medium flex items-center gap-2 hover:bg-opacity-20 transition-colors"
              >
                <ArrowLeft size={20} />
                Retour au menu principal
              </button>
              {screen === "Phone" && (
                <a
                  href="https://example.com/download-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 bg-opacity-70 p-3 rounded-lg text-white font-medium flex items-center gap-2 hover:bg-opacity-80 transition-colors"
                >
                  <Download size={20} />
                  Télécharger l'application
                </a>
              )}
              {screen === "Laptop" && (
                <a
                  href="https://github.com/rydward/Extension_iA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 bg-opacity-70 p-3 rounded-lg text-white font-medium flex items-center gap-2 hover:bg-opacity-80 transition-colors"
                >
                  <Download size={20} />
                  Télécharger l'extension
                </a>
              )}
              {screen === "Formation" && (
                <a
                  href="https://aegis-formation.floodz.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 bg-opacity-70 p-3 rounded-lg text-white font-medium flex items-center gap-2 hover:bg-opacity-80 transition-colors"
                >
                  <ExternalLink size={20} />
                  Visiter la formation
                </a>
              )}
              {screen === "VR" && (
                <a
                  href="https://aegis-vr.floodz.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 bg-opacity-70 p-3 rounded-lg text-white font-medium flex items-center gap-2 hover:bg-opacity-80 transition-colors"
                >
                  <ExternalLink size={20} />
                  Visiter l'expérience VR
                </a>
              )}
            </motion.div>
          </div>
        </motion.section>
      ))}
    </motion.main>
  );
};
