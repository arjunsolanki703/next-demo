import Image from 'next/image'
import LOGO from "../assets/images/Logo.png"
import { Menu } from '@headlessui/react'

export const SideBar = () => {
    return (
        <>

            {/* <h1 className="text-4xl  font-bold underline center text-sky-400 hover:text-sky-200">
      this is header
    </h1> */}
            <div className="flex w-44 flex-col">
                <div className="bg-white h-16 mb-5 p-5 rounded-xl">
                    <Image
                        src={LOGO}
                        alt='user profile picture'
                    />
                </div>
                <div className="bg-white rounded-xl" style={{ height: '85vh' }}>
                    <Menu>
                        <Menu.Button>More</Menu.Button>
                        <Menu.Items>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-blue-500'}`}
                                        href="/account-settings"
                                    >
                                        Account settings
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-blue-500'}`}
                                        href="/account-settings"
                                    >
                                        Documentation
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item disabled>
                                <span className="opacity-75">Invite a friend (coming soon!)</span>
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>
        </>
    )
}