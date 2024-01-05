export const Header = ({ title, subTitle }) => {
    return (
        <header className="border-b-2 bg-slate-50">
            <div className="flex justify-center items-center py-4 px-4 mx-auto max-w-screen-xl">
                <div className="text-center">
                    <h1 className="text-sm font-bold text-gray-900 sm:text-2xl" data-testid="title">{title}!</h1>
                    <p className="mt-1.5 text-sm text-gray-500 sm:font-semibold" data-testid="subTitle">{subTitle}! 🎉</p>
                </div>
            </div>
        </header>
    );
};
