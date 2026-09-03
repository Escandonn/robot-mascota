import { motion } from "motion/react";

type Piece = {
	src: string;
	alt: string;
	width: number;
	height: number;
	x: number;
	y: number;
	delay?: number;
};

const PIECES: Piece[] = [
	{
		src: "/rostro-base/ojo-drecho/ojo-derecho.png",
		alt: "Ojo derecho",
		width: 140,
		height: 140,
		x: 120,
		y: 80,
		delay: 0,
	},
	{
		src: "/rostro-base/nariz/nariz.png",
		alt: "Nariz",
		width: 120,
		height: 120,
		x: 240,
		y: 180,
		delay: 0.15,
	},
	{
		src: "/rostro-base/ojo%20izq/ojo-izq.png",
		alt: "Ojo izquierdo",
		width: 140,
		height: 140,
		x: 360,
		y: 80,
		delay: 0.3,
	},
	{
		src: "/rostro-base/boca/boca.png",
		alt: "Boca",
		width: 220,
		height: 140,
		x: 190,
		y: 340,
		delay: 0.45,
	},
];

const FACE_W = 600;
const FACE_H = 540;

export default function RostroBase() {
	return (
		<div
			className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5"
			style={{ width: FACE_W, height: FACE_H }}
		>
			{PIECES.map((p, i) => (
				<motion.img
					key={i}
					src={p.src}
					alt={p.alt}
					width={p.width}
					height={p.height}
					loading="eager"
					decoding="async"
					initial={{ opacity: 0, scale: 0.85, x: p.x, y: p.y }}
					animate={{ opacity: 1, scale: 1, x: p.x, y: p.y }}
					transition={{
						duration: 0.5,
						ease: "easeOut",
						delay: p.delay ?? i * 0.1,
					}}
					style={{
						position: "absolute",
						left: 0,
						top: 0,
						width: p.width,
						height: p.height,
						objectFit: "contain",
						pointerEvents: "none",
					}}
				/>
			))}
		</div>
	);
}