const Footer = () => {
  return (
    <footer className="bg-dark text-white ">
        <div className="mx-auto">
            <p className="text-center text-sm">
                &copy; {new Date().getFullYear()} Corbit. All rights reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer