import {
  CakeIcon,
  UserCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/20/solid';
import gokuImg from './goku.png';
import Image from 'next/image';

function Logo() {
  return (
    <div className="text-2xl font-bold text-pink-600">Kargoks かごこす</div>
  );
}

function Header() {
  return (
    <div className="h-24">
      <div className="container mx-auto h-full flex justify-between items-center">
        <Logo />
        <Menu />
      </div>
    </div>
  );
}

function Banner({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-8 text-white text-3xl font-bold h-36 bg-gradient-to-tr from-primary to-pink-500">
      {children}
    </div>
  );
}

function Title({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <h1 className="text-4xl font-bold">
      <span className="bg-purple-800 text-white px-2">{children}</span>
      {subtitle ? (
        <p className="text-xl font-bold text-primary mt-4 mb-8">{subtitle}</p>
      ) : null}
    </h1>
  );
}

function Menu() {
  return (
    <div className="space-x-16 flex">
      <a
        href="#"
        className="hover:text-purple-600 hover:-translate-y-1 transition-transform text-pink-500 font-bold"
      >
        One
      </a>
      <a
        href="#"
        className="hover:text-purple-600 hover:-translate-y-1 transition-transform text-pink-500 font-bold"
      >
        Two
      </a>
      <a
        href="#"
        className="hover:text-purple-600 hover:-translate-y-1 transition-transform text-pink-500 font-bold"
      >
        Three
      </a>
    </div>
  );
}
function SidebarItem({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element; //ypeof ChevronDownIcon;
}) {
  return (
    <li>
      <a
        href="#"
        className="text-lg text-pink-500 pb-4 block group hover:pl-4 transition-all hover:text-purple-600"
      >
        {Icon && (
          <Icon className="h-6 w-6 inline-block mr-4 group-hover:rotate-90 transition-transform" />
        )}
        {children}
      </a>
    </li>
  );
}
function Sidebar() {
  return (
    <ul className="rounded-2xl w-56 space-y-4">
      <SidebarItem icon={UserCircleIcon}>First item</SidebarItem>
      <SidebarItem icon={CakeIcon}>Second item</SidebarItem>
      <SidebarItem icon={PlusCircleIcon}>Third item</SidebarItem>
    </ul>
  );
}

export function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner>This is some KARGOX</Banner>
      <div className="flex flex-row space-x-8 mt-8 container mx-auto">
        <Sidebar />
        <div className="grow">
          <Title subtitle="Some subtitle text">Welcome to zombo.com</Title>
          <div className="rounded-xl border-gray-300 dark:border-gray-900 border p-4 w-64 shadow-xl space-y-4">
            <div className="flex space-x-4 items-center">
              <Image
                src={gokuImg}
                alt="avatar"
                className="rounded-full w-12 h-12"
              />
              <h1 className="text-2xl text-primary font-bold dark:text-pink-500">
                Son Goku
              </h1>
            </div>
            <p>
              This is some text a lot of text its ok ok ok this is some more
              text
            </p>
            <button className="w-full rounded-xl bg-gradient-to-tr from-purple-800 to-pink-500 font-bold align-center p-4 text-white uppercase hover:bg-gradient-to-tl">
              Click me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
