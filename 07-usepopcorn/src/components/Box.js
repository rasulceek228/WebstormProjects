import Button from "./Button";

export default function Box({children, onOpen , isOpen}) {
    return (
        <div className="box">
            <Button
                className="btn-toggle"
                onClick={onOpen}
            >
                {isOpen ? "–" : "+"}
            </Button>
            {children}
        </div>
    )
}