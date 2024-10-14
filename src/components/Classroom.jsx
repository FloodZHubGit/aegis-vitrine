/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Janis Zeps (https://sketchfab.com/Zeps3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/classroom-7f981d3e0b6445108d684abf3f2fd4ab
Title: Classroom
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Phone } from "./Phone";
import { Laptop } from "./Laptop";

export function Classroom(props) {
  const { nodes, materials } = useGLTF("/models/classroom.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.blackboard_details_0.geometry}
        material={materials.details}
        position={[0.541, 2.354, -7.918]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_tables_0.geometry}
        material={materials.tables}
        position={[3.658, -0.082, -2.95]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.walls_walls_0.geometry}
        material={materials.walls}
        position={[-0.005, 0, -0.039]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light_rays_effects_0.geometry}
        material={materials.effects}
        position={[-2.56, -1.921, -4.868]}
        rotation={[0, 0.002, 0.869]}
        scale={[1.26, 2.347, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.board1001_posters_0.geometry}
        material={materials.posters}
        position={[4.2, 2.106, -7.918]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <Phone
        scale={0.2}
        position={[-2.0, 0.9, -2.1]}
        rotation={[-1.6, 3.2, 0]}
      />
      <Laptop position={[3.5, 0.9, -2.3]} scale={0.2} />
    </group>
  );
}

useGLTF.preload("/models/classroom.glb");
