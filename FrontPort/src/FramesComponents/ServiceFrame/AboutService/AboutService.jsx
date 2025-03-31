import React from "react";
import useStore from "../../../../zustandStore";

function AboutService() {
	const { pageColors } = useStore();
	return (
		<article>
			<main className="flex flex-row items-center m-auto py-10 max-w-[58rem]">
				<img
					className="h-72"
					src="https://cdni.iconscout.com/illustration/premium/thumb/coding-illustration-download-in-svg-png-gif-file-formats--html-logo-source-code-programming-interface-web-development-webapp-and-pack-design-illustrations-3783951.png?f=webp"
					alt=""
				></img>
				<div className="px-20">
					<h3 className="py-4 font-semibold text-3xl">
						We have +5 years on web
					</h3>
					<p className="flex flex-col gap-2">
						<span className="px-2 py-1 border-l-2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
							beatae inventore hic, labore amet illum ratione quisquam aut odit
							magni
						</span>
						<span className="px-2 py-1 border-l-2">
							velit illo temporibus. Sint sit expedita recusandae mollitia quam?
							Perspiciatis! Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Ullam facilis et dolor adipisci. Fuga velit dolore
							voluptates
						</span>
						<span className="px-2 py-1 border-l-2">
							modi rerum placeat non quae cumque, suscipit accusamus quod, at
							consequatur est consequuntur!
						</span>
					</p>
				</div>
			</main>
			<aside className="flex flex-row items-center m-auto py-10 max-w-[58rem]">
				<div className="px-20">
					<h3 className="py-4 font-semibold text-3xl">
						We have +5 years on web
					</h3>
					<p
						style={{ borderColor: pageColors.principal }}
						className="my-2 px-2 py-1 border-l-2"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit
						adipisci iste velit explicabo excepturi ipsum, laborum possimus
						cupiditate ea voluptatum autem tempore ut veritatis, rerum libero
						eum ab quos.
					</p>
					<p
						style={{
							borderColor: pageColors.terciario,
						}}
						className="bg-opacity-95 my-2 px-2 py-1 border-l-2"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
						odio odit fuga iusto autem eaque aperiam accusamus exercitationem
						repellendus eum perferendis necessitatibus, magni mollitia? Minus
						sequi voluptatem modi eius obcaecati.
					</p>
					<ul className="grid grid-cols-2 py-4 w-52">
						<li>
							<span
								style={{ color: pageColors.principal }}
								className="pr-2 font-bold"
							>
								#
							</span>
							data 1
						</li>
						<li>
							<span
								style={{ color: pageColors.principal }}
								className="pr-2 font-bold"
							>
								#
							</span>
							data 1
						</li>
						<li>
							<span
								style={{ color: pageColors.principal }}
								className="pr-2 font-bold"
							>
								#
							</span>
							data 1
						</li>
						<li>
							<span
								style={{ color: pageColors.principal }}
								className="pr-2 font-bold"
							>
								#
							</span>
							data 1
						</li>
					</ul>
				</div>
				<img
					className="h-72"
					src="https://cdn.creazilla.com/cliparts/1998567/coding-svg-clipart-xl.png"
					alt=""
				></img>
			</aside>
		</article>
	);
}

export default AboutService;
