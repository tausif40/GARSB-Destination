import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function Visa() {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="w-full"
		>
			<CarouselContent>
				{Array.from({ length: 35 }).map((_, i) => (
					<CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
						<div className="">
							<Card>
								<CardContent className="p-0">
									<Image
										src={`/home/visa/${i + 1}.jpg`}
										alt={`Visa ${i + 1}`}
										width={300}
										height={200}
										className="w-full h-auto shadow-md object-contain"
									/>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
