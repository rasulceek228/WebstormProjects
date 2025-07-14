import {Link} from "react-router-dom";

export default function Button({children, disabled, to, type, onClick}) {
    const base = "inline-block text-sm bg-yellow-400 uppercase font-semibold tracking-wide rounded-full\n" +
        "text-stone-800 hover:bg-yellow-300 transition-colors duration-300\n" +
        "focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300\n" +
        "focus:ring-offset-2 disabled:cursor-not-allowed ";
    const styles = {

        primary: base + " py-3 px-4 md:px-6 md:py-4",
        small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
        round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
        secondary: "inline-block text-sm border-2 border-stone-300 uppercase font-semibold tracking-wide rounded-full\n" +
            "text-stone-400 hover:bg-stone-300 transition-colors duration-300 hover:text-stone-800\n" +
            "focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300\n" +
            "focus:ring-offset-2 focus:text-stone-800 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5",

    }
    if (to) return <Link className={styles[type]} to={to}>{children}</Link>

    if (onClick) return (
        <button
            disabled={disabled}
            className={styles[type]} onClick={onClick}>
            {children}
        </button>
    )

    return (
        <button
            disabled={disabled}
            className={styles[type]}>
            {children}
        </button>
    );
}