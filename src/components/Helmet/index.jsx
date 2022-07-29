

export const Helmet = ({ title, children }) => {
    document.title = "Rent Car Service -" + title;

    return (
        <div className="w-100">
            {children}
        </div>
    );
}