import '../Snackbar/Snackbar.scss'

export function Snackbar({message, visible}) {
    return (
        <div className={`snackbar ${visible ? "show" : ""}`}>
            {message}
        </div>
    )
}