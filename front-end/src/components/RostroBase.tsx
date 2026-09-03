import { motion } from "motion/react";

type Position = {
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
	zIndex?: number;
};

type PieceConfig = {
	src: string;
	alt: string;
	width: string;
	height: string;
	position: Position;
	delay?: number;
};

const PIECES: PieceConfig[] = [
	{
		src: "/rostro-base/ojo%20izq/ojo-izq.png",
		alt: "Ojo izquierdo",
		width: "136vw",
		height: "86vh",
		position: { top: "2vh", left: "-50vw", zIndex: 1 },
		delay: 0.3,
	},
{
		src: "/rostro-base/ojo-drecho/ojo-derecho.png",
		alt: "Ojo derecho",
		width: "136vw",
		height: "86vh",
		position: { top: "2vh", right: "-50vw", zIndex: 1 },
		delay: 0,
	},
	{
		src: "/rostro-base/nariz/nariz.png",
		alt: "Nariz",
		width: "12vw",
		height: "20vh",
		position: { top: "36vh", left: "44vw", zIndex: 2 },
		delay: 0.15,
	},
	{
		src: "/rostro-base/boca/boca.png",
		alt: "Boca",
		width: "25vw",
		height: "6vh",
		position: { top: "68vh", left: "37.5vw", zIndex: 1 },
		delay: 0.45,
	},
];

export default function RostroBase() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
				width: "100vw",
				height: "100vh",
				backgroundColor: "#ffffff",
				overflow: "hidden",
			}}
		>
			{PIECES.map((p, i) => (
				<motion.img
					key={i}
					src={p.src}
					alt={p.alt}
					loading="eager"
					decoding="async"
					initial={{ opacity: 0, scale: 0.85 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: p.delay }}
					style={{
						position: "absolute",
						top: p.position.top,
						left: p.position.left,
						right: p.position.right,
						bottom: p.position.bottom,
						width: p.width,
						height: p.height,
						zIndex: p.position.zIndex,
						objectFit: "contain",
						pointerEvents: "none",
					}}
				/>
			))}
		</div>
	);
}