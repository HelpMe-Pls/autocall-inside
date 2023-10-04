//@ts-nocheck

import { useState, useRef } from 'react'
import SubMenu from './DropdownMenu'
import { motion } from 'framer-motion'

// * React icons
import { IoIosArrowBack } from 'react-icons/io'
import { SlSettings } from 'react-icons/sl'
import { AiOutlineAppstore } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { TbReportAnalytics } from 'react-icons/tb'
import { RiBuilding3Line } from 'react-icons/ri'

const Sidebar = ({ activeTab }: { activeTab: string }) => {
	const [open, setOpen] = useState(true)
	const sidebarRef = useRef()

	const Nav_animation = {
		open: {
			width: '16rem',
			transition: {
				damping: 40,
			},
		},
		closed: {
			width: '4rem',
			transition: {
				damping: 40,
			},
		},
	}

	const subMenusList = [
		{
			name: 'build',
			icon: RiBuilding3Line,
			items: ['auth', 'app-settings', 'storage', 'hosting'],
		},
		{
			name: 'analytics',
			icon: TbReportAnalytics,
			items: ['realtime', 'events'],
		},
	]

	return (
		<div>
			<motion.div
				ref={sidebarRef}
				variants={Nav_animation}
				initial={{ x: 0 }}
				animate={open ? 'open' : 'closed'}
				className="text-gray relative min-h-screen max-w-xs bg-white shadow-sm"
			>
				<div className="mx-3 flex h-14 items-center gap-2.5 border-b border-slate-300 py-3 font-medium">
					<img
						src="https://img.icons8.com/color/512/firebase.png"
						width={45}
						alt="logo"
					/>
					{open && <span className="whitespace-pre text-xl">Fireball</span>}
				</div>
				<div className="flex flex-col">
					<ul className=" flex h-[calc(100vh-108px)] flex-col gap-1 px-2.5 pt-5 text-[0.9rem]  font-medium">
						<SingleNavItem
							path={'/dashboard'}
							text="All Apps"
							isSidebarExpanded={open}
							icon={<AiOutlineAppstore size={23} className="min-w-max" />}
						/>
						<SingleNavItem
							path={'/customers'}
							text="Customers"
							isSidebarExpanded={open}
							icon={<BsPerson size={23} className="min-w-max" />}
						/>

						<div className="border-slate-300 ">
							{subMenusList?.map((menu) => (
								<div key={menu.name} className="flex flex-col gap-1">
									<SubMenu data={menu} isSidebarExpanded={open} />
								</div>
							))}
						</div>

						<SingleNavItem
							path={'/other'}
							text="Other"
							isSidebarExpanded={open}
							icon={<SlSettings size={23} className="min-w-max" />}
						/>
					</ul>
					<div className="mx-2.5 border-b border-slate-300" />
				</div>
				<motion.div
					onClick={() => {
						setOpen(!open)
					}}
					animate={
						open
							? {
									x: 0,
									y: 0,
									rotate: 0,
							  }
							: {
									x: -10,
									y: 0,
									rotate: 180,
							  }
					}
					transition={{ duration: 0 }}
					className="absolute bottom-3 right-2 h-fit w-fit cursor-pointer"
				>
					<IoIosArrowBack size={25} />
				</motion.div>
			</motion.div>
		</div>
	)
}

const SingleNavItem = ({ path, icon, text, isSidebarExpanded }) => (
	<li>
		<a href={path} className="link group relative">
			{icon}
			<span className="whitespace-nowrap">{isSidebarExpanded && text}</span>
			{!isSidebarExpanded && (
				<span
					className={`invisible absolute left-full ml-6 -translate-x-5 whitespace-nowrap
          rounded-md bg-blue-100 px-2
          py-1 text-sm text-blue-600 opacity-10
          transition-all group-hover:visible group-hover:-translate-x-2 group-hover:opacity-100`}
				>
					{text}
				</span>
			)}
		</a>
	</li>
)

export default Sidebar
