import {Link} from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';

export default function Guest({children}) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800"/>
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                {/* Replace  NavLink components with appropriate routes for unauthenticated users */}
                                <NavLink href={route('home')} active={route().current('home')}>
                                    Home
                                </NavLink>
                                <NavLink href={route('about')} active={route().current('about')}>
                                    About
                                </NavLink>
                                {/*  more links as needed */}
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <NavLink href={route('login')} active={route().current('login')}>
                                Login
                            </NavLink>
                            <NavLink href={route('register')} active={route().current('register')}>
                                Register
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content Section */}

            <main>{children}</main>
        </div>
    );
}
