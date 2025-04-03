
interface MainLayoutProps {
  title: string
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4">
      <div className="hidden md:block md:col-span-2"></div>
      <div className="col-span-1 md:col-span-8 p-4">
        <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold">{title}</h1>
        <br />
        <div>{children}</div>
      </div>
      <div className="hidden md:block md:col-span-2"></div>
    </div>
  )
}

export default MainLayout
