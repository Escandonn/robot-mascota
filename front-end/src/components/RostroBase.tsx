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

type RostroBaseProps = {
	emocion?: string;
};

const PIECES: PieceConfig[] = [
	{
		src: "/emociones/feliz/ojo-izquierdo/ojo-izquierdo.png",
		alt: "Ojo izquierdo",
		width: "136vw",
		height: "86vh",
		position: { top: "2vh", left: "-50vw", zIndex: 1 },
		delay: 0.3,
	},
	{
		src: "/emociones/feliz/ojo-derecho/ojo-derecho.png",
		alt: "Ojo derecho",
		width: "136vw",
		height: "86vh",
		position: { top: "2vh", right: "-50vw", zIndex: 1 },
		delay: 0,
	},
	{
		src: "/emociones/feliz/nariz/nariz.png",
		alt: "Nariz",
		width: "42vw",
		height: "68vh",
		position: { top: "9vh", left: "29vw", zIndex: 2 },
		delay: 0.15,
	},
	{
		src: "/emociones/feliz/boca/boca.png",
		alt: "Boca",
		width: "140vw",
		height: "50vh",
		position: { top: "60vh", left: "-20vw", zIndex: 1 },
		delay: 0.45,
	},
];

export default function RostroBase({ emocion = "feliz" }: RostroBaseProps) {
	const pieces = PIECES.map((p) => ({
		...p,
		src: p.src.replace("/emociones/feliz/", `/emociones/${emocion}/`),
	}));

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
				width: "100vw",
				height: "100vh",
				backgroundColor: "#000000",
				overflow: "hidden",
			}}
		>
			{pieces.map((p, i) => (
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