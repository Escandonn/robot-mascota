import { motion } from "motion/react";

type Piece = {
	src: string;
	alt: string;
	width: string;
	height: string;
	style: React.CSSProperties;
	delay: number;
};

const PIECES: Piece[] = [
	{
		src: "/rostro-base/ojo%20izq/ojo-izq.png",
		alt: "Ojo izquierdo",
		width: "13.54vw",
		height: "24.07vh",
		style: {
			position: "absolute",
			top: "20.37vh",
			left: "15.00vw",
			zIndex: 1,
		},
		delay: 0.3,
	},
	{
		src: "/rostro-base/ojo-drecho/ojo-derecho.png",
		alt: "Ojo derecho",
		width: "13.54vw",
		height: "24.07vh",
		style: {
			position: "absolute",
			top: "20.37vh",
			right: "15.00vw",
			zIndex: 1,
		},
		delay: 0,
	},
	{
		src: "/rostro-base/nariz/nariz.png",
		alt: "Nariz",
		width: "12.50vw",
		height: "22.22vh",
		style: {
			position: "absolute",
			top: "29.63vh",
			left: "43.75vw",
			zIndex: 2,
		},
		delay: 0.15,
	},
	{
		src: "/rostro-base/boca/boca.png",
		alt: "Boca",
		width: "27.50vw",
		height: "4.17vh",
		style: {
			position: "absolute",
			top: "52.78vh",
			left: "36.25vw",
			zIndex: 1,
		},
		delay: 0.45,
	},
];

export default function RostroBase() {
	return (
		<div className="relative h-screen w-screen overflow-hidden bg-white">
			{PIECES.map((p, i) => (
				<motion.img
					key={i}
					src={p.src}
					alt={p.alt}
					loading="eager"
					decoding="async"
					initial={{ opacity: 0, scale: 0.85 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.5,
						ease: "easeOut",
						delay: p.delay,
					}}
					style={{
						...p.style,
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