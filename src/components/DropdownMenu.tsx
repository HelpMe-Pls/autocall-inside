//@ts-nocheck
import { useState } from 'react'
import { motion } from 'framer-motion'
import { IoIosArrowDown } from 'react-icons/io'
import { NavLink, useLocation } from 'react-router-dom'

const DropdownMenu = ({ data, isSidebarExpanded }) => {
	const { pathname } = useLocation()
	const [subMenuOpen, setSubMenuOpen] = useState(false)
	return (
		<>
			<li
				className={`link group relative ${
					pathname.includes(data.name) && 'text-blue-600'
				}`}
				onClick={() => setSubMenuOpen(!subMenuOpen)}
			>
				<data.icon size={23} className="min-w-max" />
				{!isSidebarExpanded ? (
					<div
						className={`invisible absolute left-full ml-6 flex -translate-x-5 flex-col gap-3 whitespace-nowrap
					rounded-md bg-blue-100 px-2 py-1 text-sm capitalize text-blue-600 opacity-0 transition-all group-hover:visible group-hover:-translate-x-2 group-hover:opacity-100`}
					>
						<p>{data.name}</p>
						<hr className="border-slate-300" />
						<div>
							{data.menus?.map((menu) => (
								<li key={menu}>
									<NavLink
										to={`/${data.name}/${menu}`}
										className="link capitalize hover:bg-sky-200"
									>
										{menu.split('-').join(' ')}
									</NavLink>
								</li>
							))}
						</div>
					</div>
				) : (
					<p className="flex-1 capitalize">{data.name}</p>
				)}
				<IoIosArrowDown
					className={` ${subMenuOpen && 'rotate-180'} duration-200 `}
				/>
			</li>
			<motion.ul
				animate={
					subMenuOpen && isSidebarExpanded
						? {
								height: 'fit-content',
						  }
						: {
								height: 0,
						  }
				}
				className="flex h-0 flex-col overflow-hidden pl-14 text-[0.8rem] font-normal"
			>
				{data.menus?.map((menu) => (
					<li key={menu}>
						<NavLink to={`/${data.name}/${menu}`} className="link capitalize">
							{menu.split('-').join(' ')}
						</NavLink>
					</li>
				))}
			</motion.ul>
		</>
	)
}

export default DropdownMenu
