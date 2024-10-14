import { SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { UI } from "./UI";
import { Experience } from "./components/Experience";

import { getProject } from "@theatre/core";

import { SheetProvider } from "@theatre/r3f";

import { editable as e } from "@theatre/r3f";

import { PerspectiveCamera } from "@theatre/r3f";

import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";

import projectState from "./assets/SecurityRoom.theatre-project-state.json";

export const isProd = import.meta.env.MODE === "production";

if (!isProd) {
  studio.initialize();
  studio.extend(extension);
}

const project = getProject(
  "SecurityRoom",
  isProd
    ? {
        state: projectState,
      }
    : undefined
);
const mainSheet = project.sheet("Main");

const transitions = {
  Home: [0, 5],
  Phone: [6, 9],
  Laptop: [10, 13],
  Formation: [14, 17],
  VR: [18, 21],
};

function App() {
  const [currentScreen, setCurrentScreen] = useState("Intro");
  const [targetScreen, setTargetScreen] = useState("Home");

  const cameraTargetRef = useRef();
  const isSetup = useRef(false);

  useEffect(() => {
    project.ready.then(() => {
      if (currentScreen === targetScreen) {
        return;
      }
      if (isSetup.current && currentScreen === "Intro") {
        // Le mode strict en développement déclenchera le useEffect deux fois, donc nous devons vérifier si c'est déjà configuré
        return;
      }
      isSetup.current = true;
      const reverse = targetScreen === "Home" && currentScreen !== "Intro";
      const transition = transitions[reverse ? currentScreen : targetScreen];
      if (!transition) {
        return;
      }

      mainSheet.sequence
        .play({
          range: transition,
          direction: reverse ? "reverse" : "normal",
          rate: reverse ? 2 : 1,
        })
        .then(() => {
          setCurrentScreen(targetScreen);
        });
    });
  }, [targetScreen]);

  return (
    <>
      <UI
        currentScreen={currentScreen}
        onScreenChange={setTargetScreen}
        isAnimating={currentScreen !== targetScreen}
      />
      <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
        <SoftShadows />
        <SheetProvider sheet={mainSheet}>
          <e.mesh
            theatreKey="CameraTarget"
            visible="editor"
            ref={cameraTargetRef}
            position={[0.8898017935046711, 2.337841473083002, 0]}
          >
            <octahedronGeometry args={[0.1]} />
            <meshPhongMaterial color="yellow" />
          </e.mesh>

          <PerspectiveCamera
            theatreKey="MainCamera"
            position={[
              0.9562656528817843, 2.3975649324444026, 10.071705735603558,
            ]}
            fov={50}
            near={1}
            far={100}
            makeDefault
            lookAt={cameraTargetRef}
          />
          <Experience />
        </SheetProvider>
      </Canvas>
    </>
  );
}

export default App;
