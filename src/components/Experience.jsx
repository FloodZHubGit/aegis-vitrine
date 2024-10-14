import { Environment } from "@react-three/drei";
import { Classroom } from "./Classroom";

// import { PerspectiveCamera } from "@react-three/drei";

import { editable as e } from "@theatre/r3f";

export const Experience = ({ currentScreen }) => {
  return (
    <>
      <e.directionalLight
        theatreKey="SunLight"
        position={[3, 3, 3]}
        intensity={0.2}
        castShadow
        shadow-bias={-0.001}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <e.group theatreKey="SecurityRoom">
        <Classroom
          envMapIntensity={0.3}
          scale={1}
          currentScreen={currentScreen}
        />
      </e.group>
      <Environment preset="dawn" background blur={4} />
    </>
  );
};
