import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function RobotModel() {
	const { scene } = useGLTF("/robot.glb");
	const modelRef = useRef<THREE.Group>(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const currentRotation = useRef({ x: 0, y: 0 });
	const neckBone = useRef<THREE.Bone | null>(null);
	const headBone = useRef<THREE.Bone | null>(null);
	const leftArmBone = useRef<THREE.Bone | null>(null);
	const rightArmBone = useRef<THREE.Bone | null>(null);

	useEffect(() => {
		scene.traverse((child) => {
			if (child instanceof THREE.Bone) {
				if (child.name === "mixamorigNeck_05") {
					neckBone.current = child;
				}
				if (child.name === "mixamorigHead_06") {
					headBone.current = child;
				}
				if (child.name === "mixamorigLeftArm_09") {
					leftArmBone.current = child;
					child.rotation.x = 1;
					child.rotation.z = 0;
				}
				if (child.name === "mixamorigRightArm_033") {
					rightArmBone.current = child;
					child.rotation.x = 1;
					child.rotation.z = 0;
				}
			}
		});
	}, [scene]);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const x = (event.clientX / window.innerWidth) * 2 - 1;
			const y = (event.clientY / window.innerHeight) * 2 - 1;
			setMousePosition({ x, y });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	useFrame(() => {
		const targetRotationY = mousePosition.x * 0.4;
		const targetRotationX = mousePosition.y * 0.3;

		currentRotation.current.x +=
			(targetRotationX - currentRotation.current.x) * 0.05;
		currentRotation.current.y +=
			(targetRotationY - currentRotation.current.y) * 0.05;

		if (headBone.current) {
			headBone.current.rotation.y = currentRotation.current.y;
			headBone.current.rotation.x = currentRotation.current.x;
		}

		if (neckBone.current) {
			neckBone.current.rotation.y = currentRotation.current.y * 0.5;
			neckBone.current.rotation.x = currentRotation.current.x * 0.5;
		}
	});

	return (
		<group ref={modelRef}>
			<primitive
				object={scene}
				scale={6}
				position={[0, -10, 0]}
				rotation={[0, -0.6, 0]}
			/>
		</group>
	);
}
