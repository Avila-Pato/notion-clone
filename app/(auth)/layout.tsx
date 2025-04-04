
const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div className="h-full bg-green-500 text-white">
            {children}
    </div>
  )
}

export default RootLayout